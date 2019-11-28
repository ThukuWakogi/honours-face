import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, throwError } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { map, catchError, first } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>
  public currentUser: Observable<any>

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>({})
    this.currentUser = this.currentUserSubject.asObservable()
  }

  public get currentUserValue() {return this.currentUserSubject.value}

  register(registrationData) {
    return this
      .http
      .post(`${environment.apiUrl}/users/`, registrationData)
      .pipe(
        map((data: any) => {
          console.log({data})
          localStorage.setItem('hnrs_token', data.token)
          this.currentUserSubject.next(data.user)
        }),
        catchError(err => {
          console.log(err)
          return throwError(err)
        })
      )
  }

  login(loginData) {
    return this
      .http
      .post<any>(`${environment.apiUrl}/auth/`, loginData)
      .pipe(
        map(data => {
          console.log({data})
          localStorage.setItem('hnrs_token', data.token)
          this.currentUserSubject.next(data.user)
        }),
        catchError(err => {
          console.log(err)
          return throwError(err)
        })
      )
  }

  getLoggedInUser() {
    return this
      .http
      .get(
        `${environment.apiUrl}/udft/`,
        { headers: { Authorization: `token ${localStorage.getItem('hnrs_token')}` } }
      )
      .pipe(first())
      .subscribe(
        (data: any) => {
          console.log({data})
          this.currentUserSubject.next(data.user)
        },
        error => {
          console.log({error})
          if (error.status === 401) this.currentUserSubject.next(null)
        }
      )

  }
}
