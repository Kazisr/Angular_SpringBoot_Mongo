import { HttpClient } from '@angular/common/http';
import { Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClientService, Student  } from '../Services/httpclient.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {


  private baseUrl = 'http://localhost:8080//delete';


  constructor(private http:HttpClient, private router:Router) { 

  }

 
  ngOnInit(): void {
    
    let resourse = this.http.get("http://localhost:8080/findAllStudent");
    resourse.subscribe((data)=> this.students=data);
  }

  routToAdd(){
    this.router.navigate(['/add-student'])
  }

  routToSearchByID(){
    this.router.navigate(['/search-student-id'])
  }

  routToSearchByName(){
    this.router.navigate(['/search-student-name'])
  }
  
handleSuccessfulResponse(response:any)
{
    this.students=response;
}

students:any;
std:any;
  getAllStudent(){
    let resourse = this.http.get("http://localhost:8080/findAllStudent");
    resourse.subscribe((data)=> this.students=data);
  }

  searchById(id:String){
    this.std = this.http.get("http://localhost:8080/findStudent/"+id);
    this.students = this.std;  
  }

deleteStudent(student: Student): void {
  this.http.post<any>('http://localhost:8080/delete', student.id).subscribe({
        next: data => {
          
          console.log(student);
          
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


addStudent(student: Object){
  console.log(student);
  
  this.http.post<any>('http://localhost:8080/findAllStudent', student).subscribe({
      next: data => {
        console.log(student);
        
      },
      error: error => {
          console.error('There was an error!', error);
      }
  })
  Swal.fire({  
    position: 'center',  
    icon: 'success',  
    title: 'Successfully Adedd New Student',  
    showConfirmButton: false,  
    timer: 1500  
  }) 
  window.location.reload();
  
}

setStudent(student:any){
  this.student = student;

}

student = {
  "id":0,
  "firstName":"",
  "lastName":"",
  "batch":"",
  "cgpa":"",
  "creditCompleted":"",
  "gender":"",
  "phnNumber":"",
  "emailAddress":"",
  "homeAddress":""

};

}
