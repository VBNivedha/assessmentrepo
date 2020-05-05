import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  results='';
  constructor(private http :HttpClient){
  }
  ngOnInit() : void{
    //promise way
    this.http.get(`https://swapi.co/api/people/?search=ab`).toPromise()
    .then((data:any)=>{
      this.results=data.results;
      console.log(this.results);
    });

    //observable way
    this.http.get(`http://dummy.restapiexample.com/api/v1/employees`).subscribe(data=>{
      console.log(data);
    });

    //interface driven
    /*this.http.get<Userresponse>(`https://api.github.com/users/abdullah`).subscribe(data=>{
      console.log("user login:"+data.login);
      console.log("bio:"+data.bio);
  console.log("company:"+data.company);
  });

  //catching an error
  this.http.get<Userresponse>(`https://api.github.com/users/abdullah`).subscribe(data=>{
      console.log("user login:"+data.login);
      console.log("bio:"+data.bio);
      console.log("company:"+data.company);
  },
  err=>{
    console.log("error occured.")
  }
  );*/

  //http post
  const req=this.http.post('http://dummy.restapiexample.com/api/v1/employees',
  {
   "name":"test",
   "salary":"123",
   "age":"23"
  })
  .subscribe(
    res=>{
      console.log(res);
    },
    err=>{
      console.log("error occured");
    }
  );

  //http put
  this.http.put('http://dummy.restapiexample.com/api/v1/update/25',
  {
    "name":"test",
    "salary":"123",
    "age":"23"
   })
   .subscribe(
    res=>{
      console.log(res);
    },
    err=>{
      console.log("error occured");
    }
  );
  }

  //http delete
  const =this.http.delete(`http://dummy.restapiexample.com/api/v1/delete/719`)
    .subscribe(
      res => {
        console.log(res);
      },
      err =>{
        console.log("Error Occured.");
      }
    );
  
    }
