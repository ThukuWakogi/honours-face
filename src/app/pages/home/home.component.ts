import { Component, OnInit } from '@angular/core'
import { ProjectService } from 'src/app/services/project/project.service'
import { first } from 'rxjs/operators'
import { environment } from 'src/environments/environment'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects: any
  private apiUrl = environment.apiUrl

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.loadAllProjects()
  }

  private loadAllProjects() {
    this
      .projectService
      .getProjects()
      .pipe(first())
      .subscribe(projects => {
        this.projects = projects
        console.log({projects})
      })
  }

  navigateToProject(id) {this.router.navigate(['project', id])}
}
