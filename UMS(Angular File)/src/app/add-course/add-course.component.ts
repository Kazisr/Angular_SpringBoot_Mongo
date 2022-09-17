import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../Course';
import { Student } from '../Student';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  course:Course= new Course();

  constructor(private http:HttpClient, private router: Router ) { }

  ngOnInit(): void {
  }

  addCourse(course: Object){
    console.log(course);
    
    this.http.post<any>('http://localhost:8080/findAllCourse', course).subscribe({
        next: data => {
          console.log(course);
          
        },
        error: error => {
            console.error('There was an error!', error);
        }
    })
    setTimeout('', 5000);
    this.router.navigate(['/course'])
    
  }

}

