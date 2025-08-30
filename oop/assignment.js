class person{
    constructor(fullname,age,email,phone){
        this.fullname = fullname,
        this.age = age,
        this.email = email,
        this.phone = phone
    }
    sleep(){
        console.log(`${this.fullname} is sleeping`);
    }
}

const person1 = new person('Egbala Joy',20,'joy@gmail.com','0908765434');
const person2 = new person('Glorious Pearl',24,'pearly@yahoo.com','080881234');
const person3 = new person('Azubuike Ikechukwu',21,'buike21@yahoo.com','07090876543');

person1.sleep();
person2.sleep();


//STUDENT CLASS
class students extends person{
    constructor(fullname,age,email,phone,regno, course){
        super(fullname,age,email,phone);
        this.regno = regno;
        this.course = course;
    }
    enrollment(){
        console.log(`Welcome ${this.fullname}!!! Thanks for signing up for our ${this.course} Course. Here is your RegNo: ${this.regno}`);
    }
}

const student1 = new students('Glorious Pearl',24,'pearly@yahoo.com','080881234','WB2ADV1211', 'Frontend Development');

student1.enrollment();

//TEACHER CLASS
class teachers extends person{
    constructor(fullname,age,email,phone,qualification, course){
        super(fullname,age,email,phone)
        this.qualification = qualification;
        this.course = course;
    }
    teaching(){
        console.log(`Tutor ${this.fullname}'s course ${this.course} will be starting on Monday 28th July`);
    }
}

const teacher1 = new teachers('Gadus Imile',34,'gad@yahoo.com','0919911234','BSc', 'Frontend Development React');

teacher1.teaching();