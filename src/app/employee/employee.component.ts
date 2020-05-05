import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Iemployee } from '../iemployee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public response:any;

  constructor(public service:EmployeeService) { 

    this.service.getPost().toPromise()
    .then((result:any)=>{
      this.response=result.data;})
    
  }

  ngOnInit(): void {
    
  }

}
