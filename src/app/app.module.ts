import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthServiceService } from './auth-service.service';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TokenInterceptorService } from './token-interceptor.service';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ViewStudentDetailsComponent } from './view-student-details/view-student-details.component';
import {HttpService} from './http.service';
import { EditStudentInfoComponent } from './edit-student-info/edit-student-info.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ExamsComponent } from './exams/exams.component';
import { ExamsUComponent } from './exams-u/exams-u.component';
import { ExamCComponent } from './exam-c/exam-c.component';
import { ExamResultsComponent } from './exam-results/exam-results.component';
import { ExamResultsUComponent } from './exam-results-u/exam-results-u.component';
import { ExamResultsCComponent } from './exam-results-c/exam-results-c.component';
import { ExamResultsEditComponent } from './exam-results-edit/exam-results-edit.component';
import { FinalResultsComponent } from './final-results/final-results.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForbiddenComponent,
    NotFoundComponent,
    AdminDashboardComponent,
    StudentDashboardComponent,
    HomeComponent,
    HeaderComponent,
    ViewStudentDetailsComponent,
    EditStudentInfoComponent,
    DynamicFormComponent,
    ExamsComponent,
    ExamsUComponent,
    ExamCComponent,
    ExamResultsComponent,
    ExamResultsUComponent,
    ExamResultsCComponent,
    ExamResultsEditComponent,
    FinalResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    
  ],
  providers: [AuthServiceService, HttpService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
