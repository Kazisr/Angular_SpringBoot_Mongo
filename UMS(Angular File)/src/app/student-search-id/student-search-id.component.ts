import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';

@Component({
  selector: 'app-student-search-id',
  templateUrl: './student-search-id.component.html',
  styleUrls: ['./student-search-id.component.css']
})
export class StudentSearchIdComponent implements OnInit {
  students:any;  
  student:Student = new Student();

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  findStudentByID(student: Student){

  let resourse = this.http.get('http://localhost:8080/findStudent/'+student.id);
    resourse.subscribe((data)=> this.students=data);
  }

    

}
