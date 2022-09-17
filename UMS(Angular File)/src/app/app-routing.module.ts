import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { addSyntheticTrailingComment } from 'typescript';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './Services/auth-gard.service';
import { StudentSearchIdComponent } from './student-search-id/student-search-id.component';
import { StudentSearchNameComponent } from './student-search-name/student-search-name.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: 'student', component: StudentComponent, canActivate:[AuthGaurdService]},
  { path: 'course', component: CourseComponent, canActivate:[AuthGaurdService]},
  { path: '', component: LoginComponent},
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
  { path: 'add-student', component: AddStudentComponent,canActivate:[AuthGaurdService] },  
  { path: 'search-student-id', component: StudentSearchIdComponent,canActivate:[AuthGaurdService] },
  { path: 'search-student-name', component:StudentSearchNameComponent,canActivate:[AuthGaurdService] },
  { path: 'course', component:CourseComponent,canActivate:[AuthGaurdService] },
  { path: 'add-course', component: AddCourseComponent,canActivate:[AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
