import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register-details',
  templateUrl: './register-details.component.html',
  styleUrls: ['./register-details.component.css']
})
export class RegisterDetailsComponent implements OnInit {

  registerForm!: FormGroup;

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstname: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      dob: new FormControl(null),
      country: new FormControl(null),
      city: new FormControl(null)
    }, this.passwordMatchValidator());
  }

  passwordMatchValidator(): (form: AbstractControl) => { [key: string]: any } | null {
    return (form: AbstractControl) => {
      const pass = form.get('password')?.value;
      const confirm = form.get('confirmPassword')?.value;
      return pass === confirm ? null : { mismatch: true };
    };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      alert('Registration Successful!');
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

}
