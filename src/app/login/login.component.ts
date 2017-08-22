import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  login(email: string, password: string) {
      this.userService.login(email, password)
      .subscribe(
        () => {
            this.router.navigateByUrl('/home');
            alert('Login successfuly');
        },
        console.error
    );
  }

}
