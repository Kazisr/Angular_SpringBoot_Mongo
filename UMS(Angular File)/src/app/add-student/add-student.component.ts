import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student:Student = new Student();

  constructor(private http:HttpClient, private router: Router ) { }

  ngOnInit(): void {
  }

  addStudent(student: Object){
    console.log(student);
    
    this.http.post<any>('http://localhost:8080/addStudent', student).subscribe({
        next: data => {
          console.log(student);
          
        },
        error: error => {
            console.error('There was an error!', error);
        }
    })
    setTimeout('', 5000);
    this.router.navigate(['/student'])
    
  }

}
