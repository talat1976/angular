import { Person } from "src/app/models/person";

export class Employee extends Person {
   job: string
   hoursPerMonth: number
   hourSalary: number

   constructor(id: string, fullname: string, age: number, city: string, image: string,
      job: string, hoursPerMonth: number, hourSalary: number
   ) {
      super(id, fullname, age, city, image)
      this.job = job
      this.hoursPerMonth = hoursPerMonth
      this.hourSalary = hourSalary
   }

   get monthSalary() {
      return this.hourSalary * this.hoursPerMonth
   }
}
