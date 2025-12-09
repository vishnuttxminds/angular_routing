import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpApiService } from '../services/http-api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: any[] = [];
  response: any;
  registerForm!: FormGroup;

  constructor(private userService: HttpApiService) {}

  ngOnInit(): void {
    // this.callUserApi();

    this.registerForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
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

  createUserPost() {
    const userData = {
      name: 'Thoma',
      email: 'thoma@example.com',
    };

    this.userService.createUser(userData).subscribe(
      (response) => {
        console.log('User created successfully:', response);
      },
      (error) => {
        console.error('Error creating user:', error);
      }
    );
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const formData = this.registerForm.value;
    console.log('Error Register formData:', formData.name);

    this.userService.createUser(formData).subscribe(
      (response) => {
        console.log('User Register successfully:', JSON.stringify(formData));
      },
      (error) => {
        console.error('Error Register user:', error);
      }
    );
  }

  updateUser() {
    const formData = this.registerForm.value;
    const id = 1;

    const updateData = {
      name: formData.name,
      email: formData.email,
    };

    this.userService.updateUser(id, updateData).subscribe((res) => {
      this.response = res;
      alert('User Updated!');
    });
  }

  deleteUser() {
    const id = 1;

    this.userService.deleteUser(id).subscribe((res) => {
      this.response = res;
      alert('User Deleted!');
    });
  }
}
