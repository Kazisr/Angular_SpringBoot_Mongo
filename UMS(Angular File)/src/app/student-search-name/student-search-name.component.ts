import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';

@Component({
  selector: 'app-student-search-name',
  templateUrl: './student-search-name.component.html',
  styleUrls: ['./student-search-name.component.css']
})
export class StudentSearchNameComponent implements OnInit {

  students:any;  
  student:Student = new Student();

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  findStudentByName(student: Student){
   
    let resourse = this.http.get('http://localhost:8080/findAllStudent/name/'+student.firstName);
      resourse.subscribe((data)=> this.students=data);
    }
}
