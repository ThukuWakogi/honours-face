import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project/project.service';
import { first } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  project: any
  private apiUrl = environment.apiUrl

  constructor(private route: ActivatedRoute, private projectService: ProjectService) {
    this.getProject()
  }

  ngOnInit() {
  }

  private getProject() {
    this
      .projectService
      .getProjectById(this.route.snapshot.paramMap.get('id'))
      .pipe(first())
      .subscribe(
        (requestedProject: any) => {
          this.project = requestedProject
          console.log({requestedProject})
        },
        (error: any) => {console.log({error})}
      )
  }
}
