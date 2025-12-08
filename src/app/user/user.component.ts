import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpApiService } from '../services/http-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: HttpApiService) {}

  ngOnInit(): void {
    this.callUserApi();
  }

  callUserApi() {
    console.log('User API called');

    this.userService.getUsers().subscribe(
      (data: any) => {
        this.users = data;
        console.log('User data received:', this.users);
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }
}
