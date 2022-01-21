import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';

const routes: Routes = [
  {path : "studentList", component: StudentListComponent},
  {path:"register",component:StudentRegistrationComponent},
  {path: '' ,redirectTo: "studentList",pathMatch:"full"},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
