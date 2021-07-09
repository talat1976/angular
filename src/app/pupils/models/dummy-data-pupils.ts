import { Class } from 'src/app/models/class';
import { TEACHERS } from 'src/app/teachers/models/dummy-data-teachers';
import { Pupil } from './pupil';

export const PUPILS: Pupil[] = [
   new Pupil(
      "43215423", "Dave Brooks", 30, "Tel Aviv", "assets/p_1.png",
      { Math: 90, Physics: 95, Chemistry: 80, Art: 85 },
      new Class("102", "C206", 140, "Floor 5 C206", TEACHERS[0])
   ),
   new Pupil(
      "345634645", "Henry Barry", 29, "Jerusalem", "assets/p_2.jpeg",
      { Math: 85, Physics: 95, Chemistry: 75, Art: 94 },
      new Class("103", "A105", 140, "Floor 4 A105", TEACHERS[1])
   ),
   new Pupil(
      "13457657", "Wesley Garland", 27, "Tel Aviv", "assets/p_3.jpg",
      { Math: 74, Physics: 60, Chemistry: 55, Art: 70 },
      new Class("104", "B105", 140, "Floor 2 B105", TEACHERS[1])
   ),
   new Pupil(
      "83563234", "Bob Walberg", 23, "Jerusalem", "assets/p_4.jpg",
      { Math: 96, Physics: 89, Chemistry: 91, Art: 86 },
      new Class("105", "A105", 140, "Floor 3 A105", TEACHERS[5])
   ),
   new Pupil(
      "934523423", "Milton Clark", 24, "Herzliya", "assets/p_5.jpg",
      { Math: 92, Physics: 83, Chemistry: 79, Art: 87 },
      new Class("106", "B105", 140, "Floor 2 B105", TEACHERS[4])
   ),
   new Pupil(
      "234566364", "Judy Friedman", 22, "Herzliya", "assets/p_6.jpg",
      { Math: 66, Physics: 61, Chemistry: 59, Art: 58 },
      new Class("107", "C105", 140, "Floor 4 C105", TEACHERS[3])
   ),
   new Pupil(
      "745634578", "Bill Henry", 29, "Tel Aviv", "assets/p_7.jpg",
      { Math: 75, Physics: 95, Chemistry: 75, Art: 85 },
      new Class("108", "B302", 140, "Floor 1 B302", TEACHERS[2])
   ),
   new Pupil(
      "634563457", "Tim Dylan", 31, "Petah Tikva", "assets/p_8.jpg",
      { Math: 61, Physics: 70, Chemistry: 59, Art: 55 },
      new Class("109", "A201", 140, "Floor 5 A201", TEACHERS[0])
   ),
]
