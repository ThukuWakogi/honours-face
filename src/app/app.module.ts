import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { HttpClientModule } from '@angular/common/http'
import { MatListModule } from '@angular/material/list'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component'
import { RegisterComponent } from './pages/register/register.component'
import { NavbarComponent } from './components/navbar/navbar.component';
import { SiteformComponent } from './pages/siteform/siteform.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    SiteformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
