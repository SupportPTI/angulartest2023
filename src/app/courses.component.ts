import {Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: ` Number of courses = {{courses.length}}
    <ul>
       <li *ngFor="let item of courses"> {{item}} </li>
    </ul>
    `
})
export class CoursesComponent {
    title = "list of courses";
    courses ;
    CourseNumber =0;
    constructor(service: CoursesService) { 
         this.courses= service.getCourses();
         this.CourseNumber= this.courses.length;
    }
}