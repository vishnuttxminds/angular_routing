import { inject, Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogged: Boolean = false;
  userService: UserService = inject(UserService);

  login(username: string, password: string) {
    let user = this.userService.userDetails.find(
      (data) => data.username === username && data.password === password
    );

    if (user === undefined) this.isLogged = false;
    else this.isLogged = true;

    return user;
  }

  logoutUser() {
    this.isLogged = false;
  }
}
