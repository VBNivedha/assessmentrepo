import { Injectable } from '@angular/core';
import {Idata} from './Idata';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpc:HttpClient) { }

  public getPosts():Observable<Idata[]>
  {
    return this.httpc.get<Idata[]>
    ('https://jsonplaceholder.typicode.com/posts');
  }
}
