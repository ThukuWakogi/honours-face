import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError, first } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectsSubject: BehaviorSubject<any>
  public projects: Observable<any>

  constructor(private http: HttpClient) {
    this.projectsSubject = new BehaviorSubject<any>(null)
    this.projects = this.projectsSubject.asObservable()
  }

  submitProject(projectData: any) {
    return this
      .http
      .post(
        `${environment.apiUrl}/projects/`,
        projectData,
        { headers: { Authorization: `token ${localStorage.getItem('hnrs_token')}` } }
      )
  }

  getProjects() {return this.http.get(`${environment.apiUrl}/projects/`)}

  public get projectsValue() {return this.projectsSubject.value}
}
