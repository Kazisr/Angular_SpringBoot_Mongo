import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../Course';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses:any;

  constructor(private http:HttpClient, private router:Router) { }
  ngOnInit(): void {
    let resourse = this.http.get("http://localhost:8080/findAllCourse");
    resourse.subscribe((data)=> this.courses=data);
  }

  routToAddCourse(){
    this.router.navigate(['/add-course'])
  }

  routToSearchBycourseCode(){
    this.router.navigate(['/search-course-code'])
  }

  routToSearchByName(){
    this.router.navigate(['/search-student-name'])
  }

  handleSuccessfulResponse(response:any)
{
    this.courses=response;
}

deleteCourse(course: Course): void {
  this.http.post<any>('http://localhost:8080/course/delete', course.courseCode).subscribe({
        next: data => {
          console.log(course);
          
        },
        error: error => {
            console.error('There was an error!', error);
        }
    })
    Swal.fire({  
      position: 'center',  
      icon: 'success',  
      title: 'Successfully Deleted',  
      showConfirmButton: false,  
      timer: 1500  
    }) 
  window.location.reload();
  
};

setCourse(course:any){
  this.course = course;

}

  getAllCourse(){
    let resourse = this.http.get("http://localhost:8080/findAllStudent");
    resourse.subscribe((data)=> this.courses=data);
  }


course = {
  "courseCode":0,
  "courseSection":"",
  "courseName":"",
  "assignedFaculty":"",
  
};

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
  Swal.fire({  
    position: 'center',  
    icon: 'success',  
    title: 'Successfully Updated',  
    showConfirmButton: false,  
    timer: 1500  
  }) 
  window.location.reload();
  
}

  }


