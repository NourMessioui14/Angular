import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { user } from 'src/app/Models/us';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URl="http://localhost:3000/users"

  constructor(private http:HttpClient) { }
  
  getAllUsers(){
      return this.http.get(this.URl);
    }
  
    
  
  
    addUser(user: any): Observable<any> {
      return this.http.post(this.URl, user);
    }
    
    deleteUser (id: string): Observable<user> {
      let url=this.URl+'/'+id;
      return this.http.delete<user>(url);
      }

      

        getUser(id: string): Observable<user> {
          return this.http.get<user>(this.URl + '/' + id);
         }





  
}