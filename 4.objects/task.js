function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let student1 = new Student();
let student2 = new Student();
let student3 = new Student();

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks) {
    for (let i = 0; i < marks.length; i++) {
      this.marks.push(marks[i])
    } 
   }
}

Student.prototype.getAverage = function () {
  let result = 0;

  if (!this.marks || this.marks.length === 0) {
    return 0;
  } else {
      for (let i = 0; i < this.marks.length; i++) {
        result += this.marks[i];
    }
    return result / this.marks.length;
  }
}

Student.prototype.exclude = function (reason) {
delete this.subject;
delete this.marks;  
this.excluded = reason;
}



