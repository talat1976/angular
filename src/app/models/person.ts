export class Person {
   id: string
   fullname: string
   age: number
   city: string
   image: string

   constructor(id: string, fullname: string, age: number, city: string, image: string) {
      this.id = id
      this.fullname = fullname
      this.age = age
      this.city = city
      this.image = image
   }
}
