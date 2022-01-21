import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students !: Student[];

  constructor(private studentService : StudentService ) { }

  ngOnInit(): void {
    this.getStudentList();
  }
  public getStudentList(){
    this.studentService.getStudents().subscribe(data =>
      {this.students = data;}
    )
  }
}
