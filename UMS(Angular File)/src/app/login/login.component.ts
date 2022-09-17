import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';
import { User } from '../login/user';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User = new User();

  username = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      Swal.fire({  
        position: 'center',  
        icon: 'success',  
        title: 'Successfully Logged In',  
        showConfirmButton: false,  
        timer: 1500  
      })  
      this.router.navigate(['/student'])
      

      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

}