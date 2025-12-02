import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

   courseId: string | null = null;
  courseName: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.courseId = this.route.snapshot.paramMap.get('id');
    this.courseName = this.route.snapshot.paramMap.get('name');
  }

}
