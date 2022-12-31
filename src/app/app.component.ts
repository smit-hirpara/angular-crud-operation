import { Component } from '@angular/core';
import { CrudoperationserService } from './crudoperationser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-crud-operation';
  printusers:any;
  usersobj = {
    id: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailaddress: '',
    emailpassword: '',
  }
  submitbtn = false;
  formsubmitmesage = false;
  formupdatemessage = false;
  formsubmitbtn = true;
  formupdatebtn = false;
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  refillform() {
    this.formsubmitmesage = false;
    this.formupdatemessage = false;
    this.formsubmitbtn = true;
  }
  ngOnInit() {
    this.getalluser();
  }
  constructor(private service:CrudoperationserService) {}
  adduser(loginform:any) {
    console.warn(loginform);
    this.service.createuser(loginform).subscribe((responce) => {
      this.getalluser();
      this.formsubmitmesage = true;
    })
  }
  getalluser() {
    this.service.getuser().subscribe((responce) => {
      this.printusers = responce;
    })
  }
  removeuser(user:any) {
    this.service.deleteuser(user).subscribe(() => {
      this.getalluser();
      alert("user delete successfully");
    })
  }
  eadituser(loginform:any) {
    this.submitbtn = true;
    this.usersobj = loginform;
    this.formsubmitmesage = false;
    this.formsubmitbtn = false;
    this.formupdatebtn = true;
  }
  updateuser()  {
    this.service.updateuser(this.usersobj).subscribe(() => {
      this.getalluser();
      alert("user update successfully");
      this.formsubmitmesage=false;
      this.formupdatemessage=true;
      this.formupdatebtn=false;
    })
  }
  }
