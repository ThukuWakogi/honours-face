import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/services/project/project.service';
import { first } from 'rxjs/operators'
import { Router } from '@angular/router';

@Component({
  selector: 'app-siteform',
  templateUrl: './siteform.component.html',
  styleUrls: ['./siteform.component.scss']
})
export class SiteformComponent implements OnInit {
  sendingRequest = false
  formSiteFormGroup: FormGroup
  previewPhoto: any
  selectedFile: any

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.formSiteFormGroup = new FormGroup({
      title: new FormControl('', [Validators.required]),
      link: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      landing_page_title: new FormControl('', [Validators.required])
    })
  }


  onImageSelect(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.selectedFile = event.target.files[0]
      const reader = new FileReader()
      reader.onload = e => this.previewPhoto = reader.result
      reader.readAsDataURL(this.selectedFile)
    }
  }

  onSubmit(event: any) {
    this.sendingRequest = true
    console.log(this.formSiteFormGroup.value)
    const projectFormData = new FormData()
    projectFormData.append('title', this.formSiteFormGroup.value.title)
    projectFormData.append('link', this.formSiteFormGroup.value.link)
    projectFormData.append('landing_page_image', this.selectedFile)
    projectFormData.append('description', this.formSiteFormGroup.value.description)

    if (this.formSiteFormGroup.invalid) return

    this
      .projectService
      .submitProject(projectFormData)
      .pipe(first())
      .subscribe(
        (data: any) => {this.router.navigate([''])},
        (error: any) => {
          console.log({error})
          this.sendingRequest = false
        }
      )
  }
}
