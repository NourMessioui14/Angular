import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/Models/us';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 private URl="http://localhost:3000/users"

  constructor(private http:HttpClient) { }
  
  getAllUsers() :Observable<User[]>{
      return this.http.get<User[]>(this.URl);
    }
  
    
  
  
    addUser(user: any): Observable<any> {
      return this.http.post(this.URl, user);
    }
    
    deleteUser (id: string): Observable<User> {
      let url=this.URl+'/'+id;
      return this.http.delete<User>(url);
      }

      

        getUser(id: string): Observable<User> {
          return this.http.get<User>(this.URl + '/' + id);
         }


         updateUser(u:User){
          let id=u.id;
          return this.http.put(this.URl+'/'+id,u);

         }

         getUserById(id:number){
          return this.http.get<User>(this.URl+'/'+id);
         }




  
}