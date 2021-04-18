import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage : string
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  login(loginDetails){
    this.errorMessage = " ";
    if (loginDetails.uname == "madhu" && loginDetails.psw == "Madhu@123") {
      this.router.navigate(["/home"]);
    } else {
      this.errorMessage = "Enter user name as 'madhu' and password as 'Madhu@123'";
    }
    console.log(loginDetails)

  }

}
