class Person {
constructor(fisrtName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
greeting(){
    console.log("Hello, my name is " + this.firstName + ".");
}
}
class Student extends Person {
    constructor(studentID, firstName, lastName){
       super(firstName, lastName);
       this.studentID = studentID; 
    }
    studentInfo(){
        console.log(this.studentID + " " + this.firstName + ", " + this.lastName);
    }
}
let student = new Student(12, "John", "Smith");
student.greeting();
student.studentInfo();