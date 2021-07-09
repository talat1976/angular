import { Class } from "src/app/models/class";
import { Teacher } from "src/app/teachers/models/teacher";

export const TEACHERS: Teacher[] = [
   new Teacher(
      "47834523", "John Smith", 43, "Jerusalem", "assets/t_1.jpeg",  4, 120, 250,
      ["Science", "Physics"], [new Class("102", "A102", 140, "Floor 5 A105",  undefined)],
   ),
   new Teacher(
      "65434567", "Kevin Stone", 39, "Tel Aviv", "assets/t_2.jpeg",  3, 140, 300,
      ["English", "Spanish"], [new Class("102", "A102", 140, "Floor 5 A105",  undefined)],
   ),
   new Teacher(
      "84683225", "Emma Butler", 35, "Petah Tikva", "assets/t_3.jpeg",  2, 130, 270,
      ["Computer Science"], [new Class("102", "A102", 140, "Floor 5 A105",  undefined)],
   ),
   new Teacher(
      "91724588", "Charles Debenham", 44, "Herzliya", "assets/t_4.jpeg",  5, 110, 350,
      ["Math", "Science"], [new Class("102", "A102", 140, "Floor 5 A105",  undefined)],
   ),
   new Teacher(
      "26345678", "Elisabeth Halter", 51, "Tel Aviv", "assets/t_5.jpeg",  8, 160, 380,
      ["Chemistry"], [new Class("102", "A102", 140, "Floor 5 A105",  undefined)],
   ),
   new Teacher(
      "35633456", "James Kearney", 47, "Jerusalem", "assets/t_6.jpeg",  7, 125, 240,
      ["Art", "Design", "Music"], [new Class("102", "A102", 140, "Floor 5 A105",  undefined)],
   )
]
