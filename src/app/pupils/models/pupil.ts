import { Class } from './../../models/class';
import { Person } from './../../models/person';


export class Pupil extends Person {
   class?: Class
   grades: Record<string, number>

   constructor(id: string, fullname: string, age: number, city: string, image: string, grades: Record<string, number>, _class?: Class,) {
      super(id, fullname, age, city, image)
      this.class = _class
      this.grades = grades
   }

   get gradesAvg(): number {
      let sum = 0

      Object.keys(this.grades).map(key => {
         sum += this.grades[key]
      })

      return +((sum / Object.keys(this.grades).length).toFixed(1))
   }
}
