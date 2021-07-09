import { Teacher } from './../models/teacher';
import { TeachersService } from './../teachers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {
   id: string|null = null
   teacher: Teacher = new Teacher("", "", 0, "", "", 0, 0, 0, [], [])

   constructor(
      private teachersService : TeachersService,
      private route: ActivatedRoute,
      private router: Router
   ) { }

   ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
         this.id = params.get("id")

         if(this.id) {
            this.getTeacherById(this.id)
         }
      })
   }

   getTeacherById(id: string): void {
      this.teachersService.getTeacherById(id).subscribe(teacher => this.teacher = teacher)
   }

   submit(): void {
      this.router.navigate(['/teachers'])
   }

}
