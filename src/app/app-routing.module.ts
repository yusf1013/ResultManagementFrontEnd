import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EditStudentInfoComponent } from './edit-student-info/edit-student-info.component';
import { ExamCComponent } from './exam-c/exam-c.component';
import { ExamResultsCComponent } from './exam-results-c/exam-results-c.component';
import { ExamResultsUComponent } from './exam-results-u/exam-results-u.component';
import { ExamResultsComponent } from './exam-results/exam-results.component';
import { ExamsUComponent } from './exams-u/exams-u.component';
import { ExamsComponent } from './exams/exams.component';
import { FinalResultsComponent } from './final-results/final-results.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { ViewStudentDetailsComponent } from './view-student-details/view-student-details.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin', component: AdminDashboardComponent},
  {path: 'student', component: StudentDashboardComponent},
  {path: 'exams', component: ExamsComponent},
  {path: 'exams-update', component: ExamsUComponent},
  {path: 'exams-create', component: ExamCComponent},
  {path: 'exam-results', component: ExamResultsComponent},
  {path: 'exam-results-update', component: ExamResultsUComponent},
  {path: 'exam-results-create', component: ExamResultsCComponent},
  {path: 'exam-results-final', component: FinalResultsComponent},
  {path: 'view-students', component: ViewStudentDetailsComponent},
  {path: 'edit-student', component: EditStudentInfoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '403', component: ForbiddenComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
