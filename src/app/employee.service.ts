import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Iemployee } from './iemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpc:HttpClient) { }

  public getPost():Observable<any[]>
  {
    return this.httpc.get<any[]>
    ('http://dummy.restapiexample.com/api/v1/employees');
  }
}
