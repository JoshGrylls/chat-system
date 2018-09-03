import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AuthUserService } from '../services/auth-user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username:string = '';
  password:string = '';

  constructor(private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
      private authservice: AuthUserService) { }

  ngOnInit() {
    }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.username);
    if(this.username == "super" && this.password == "123") {
      localStorage.setItem('username', this.username);
      this.router.navigateByUrl('/account');
    }
    if(this.username == "group" && this.password == "123") {
      localStorage.setItem('username', this.username);
      this.router.navigateByUrl('/account');
    }
    if(this.username == "user" && this.password == "123") {
      localStorage.setItem('username', this.username);
      this.router.navigateByUrl('/account');
    }

    /*this.authservice.login(this.username, this.password).subscribe(
      data=>{
        sessionStorage.setItem('username', data.username);
        this.router.navigateByUrl('/account');  },
        error=>{  alert('Username and password were incorrect');
                  console.log(error); }
      )*/}
  }
