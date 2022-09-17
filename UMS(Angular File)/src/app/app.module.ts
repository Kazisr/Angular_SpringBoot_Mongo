import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { CourseComponent } from './course/course.component';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentSearchIdComponent } from './student-search-id/student-search-id.component';
import { StudentSearchNameComponent } from './student-search-name/student-search-name.component' 
import {MatTableModule} from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { AddCourseComponent } from './add-course/add-course.component';
import { SimpleModalModule } from 'ngx-simple-modal';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    CourseComponent,
    HeaderComponent,
    LogoutComponent,
    AddStudentComponent,
    StudentSearchIdComponent,
    StudentSearchNameComponent,
    AddCourseComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    NgbModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
