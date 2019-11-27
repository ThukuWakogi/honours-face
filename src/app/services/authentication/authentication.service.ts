import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { map } from 'rxjs/operators'

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

  register(user) {
    return this
      .http
      .post(`${environment.apiUrl}/users/`, user)
      .pipe(map((data: any) => {
        console.log({data})
        localStorage.setItem('hnrs_token', data.token)
        this.currentUserSubject.next(data.user)
      }))
  }
}
