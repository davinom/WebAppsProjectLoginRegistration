import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model = { username: '', password: '' };
  passwordConf = { password: '' };
  errors: string[] = [];
  success = false;

  passwordConfAlert = {
    type: 'danger',
    msg: 'Passwords do not match!',
    timeout: 10000
  };
  alert = {
    type: 'danger',
    timeout: 2000
  };
  err = null;
  data = null;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  VarifyPassword() {
    return this.model.password == this.passwordConf.password;
  }

  getErrors(error) {
    if (error.Password != null) {
      this.errors.push(error.Password["0"]);
    }
    if (error.UserName != null) {
      this.errors.push(error.UserName["0"]);
    }
  }

  
  register() {
    if (this.VarifyPassword()) {
      this.authService.Register(this.model).subscribe(data => this.success = true, error => this.getErrors(error.error));
    }
 
  }
}
