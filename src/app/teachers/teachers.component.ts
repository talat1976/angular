import { Teacher } from 'src/app/teachers/models/teacher';
import { TeachersService } from './teachers.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
   selector: 'app-teachers',
   templateUrl: './teachers.component.html',
   styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
   teachers: Teacher[] = []

   constructor(
      private teachersService : TeachersService,
      private router: Router
   ) { }

   ngOnInit(): void {
      this.getTeachers()
   }

   getTeachers(): void {
      this.teachersService.getTeachers().subscribe(teachers => this.teachers = teachers)
   }

   goToEdit(id: string): void {
      this.router.navigate(['/teachers/edit', id])
   }

}
