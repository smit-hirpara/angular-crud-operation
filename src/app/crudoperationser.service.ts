import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudoperationserService {
  constructor(private http:HttpClient) { }

  jsonserverurl = "http://localhost:3000/user";
  createuser(users:any) {
    return this.http.post(this.jsonserverurl,users);
  }
  getuser() {
    return this.http.get(this.jsonserverurl);
  }
  updateuser(user:any) {
    return this.http.put(this.jsonserverurl + "/" + user.id,user);
  }
  deleteuser(user:any) {
    return this.http.delete(this.jsonserverurl + "/" + user.id);
  }

}
