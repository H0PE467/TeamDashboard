
//////////////////////      Employee      //////////////////////

class Employee {

    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return 'Employee'
    }
}

//////////////////////      Manager -> Employee      //////////////////////

class Manager extends Employee{
    constructor(name, id, email,officeNumber){
        super(name, id, email)

        this.officeNumber = officeNumber;
    }
}

Manager.prototype.getRole = () => {return 'Manager'};

//////////////////////      Engineer -> Employee      //////////////////////

class Engineer extends Employee{
    constructor(name, id, email, gitHub_Username){
        super(name, id, email)

        this.gitHub_Username = gitHub_Username;
    }

    getGithub(){
        return this.gitHub_Username
    }
}

Engineer.prototype.getRole = () => {return 'Engineer'};

//////////////////////      Intern -> Employee      //////////////////////

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email)

        this.school = school;
    }

    getSchool(){
        return this.school
    }
}

Intern.prototype.getRole = () => {return 'Intern'};