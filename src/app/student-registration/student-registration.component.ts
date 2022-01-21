import { DatePipe, DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import axios from 'axios';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
  
  student: Student = new Student();

  constructor(private studentService : StudentService) { }

  ngOnInit(): void {}
  
  saveStudent(){
    
   
  }

  onSubmit(val:any){
    // val.preventDefault()
    // console.log('jksjk')
    console.log('print',val);
    // axios.post('http://localhost:8080/api/student', val)
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log('errrrr',error);
    // });
    // this.studentService.postStudent(val).subscribe(data => {
    //   console.log(data);
    //   },
    //   error =>console.log(error));
    this.studentService.postStudent(val).then((el:any)=>{
      console.log(el);
    });
    
    
    
  }
}

