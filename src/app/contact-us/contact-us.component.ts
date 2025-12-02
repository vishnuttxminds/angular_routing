import { Component, inject } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  router : Router = inject(Router)
  active : ActivatedRoute = inject(ActivatedRoute)

  // constructor(private router: Router) {}

  navihateToNext(){
    console.log("NExt click activated")
    // this.router.navigate(['about'], {relativeTo : this.active})
    // this.router.navigateByUrl('about')
    this.router.navigate(['courses/course', 2, 'Vishnu']);
  }

}
