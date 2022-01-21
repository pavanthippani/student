import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from  '@angular/common/http';
import { Student } from './student';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  public getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>("http://localhost:8080/api/students");
  }
  
  public postStudent(student:any):any{
    return  axios.post('http://localhost:8080/api/student', student);
    //return this.http.post("http://localhost:8080/api/student",student);
  }
}

