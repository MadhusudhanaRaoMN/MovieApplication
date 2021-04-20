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
    if (loginDetails.uname == "Rao" && loginDetails.psw == "Rao@M") {
      this.router.navigate(["/home"]);
    } else {
      this.errorMessage = "Enter Valid Credential!'";
    }
    console.log(loginDetails)

  }

}
