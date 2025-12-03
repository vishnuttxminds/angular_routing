import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userDetails: User[] = [new User(1, 'Thomaschako', 'thoma', 'xminds@123')];
}
