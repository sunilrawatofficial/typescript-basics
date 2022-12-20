import studentLogin from './student'
import teacherLogin from './teacher'

let teach = new teacherLogin("Doctor Octavious");
let stu = new studentLogin("Peter Parker");

teach.login()
stu.login()