import { Teacher } from "src/app/teachers/models/teacher"

export class Class {
   id: string
   name: string
   studentCount: number
   address: string
   teacher?: Teacher

   constructor(id: string, name: string, studentCount: number, address: string, teacher?: Teacher) {
      this.id = id
      this.name = name
      this.studentCount = studentCount
      this.address = address
      this.teacher = teacher
   }
}
