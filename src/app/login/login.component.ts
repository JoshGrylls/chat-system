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
  username: 'SuperAdmin';
  password: '123';

  constructor(private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
      private authservice: AuthUserService) { }

  ngOnInit() {
    }

  onSubmit() {
    this.authservice.login(this.username, this.password).subscribe(
      data=>{
        sessionStorage.setItem('currentUser', data.username);
        this.router.navigateByUrl('/chat');  },
        error=>{  alert('Username and password were incorrect');  }
      )}
  }
