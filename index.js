const { Employee,Manager,Intern,Engineer } = require('./lib/classes.js');
const { createDOM, createCard } = require('./src/template.js');
const fs = require('fs');
const inquirer = require('inquirer');


let arrayOfCards = []


const questions = {
    type: 'list',
    message: `Do you want to add an Engineer, Intern or Exit? `,
    name: 'menuOption',
    choices: ['Engineer','Intern','Exit']
}

const ManagerQuestions = [{
    type: 'input',
    message: `Please enter the Team Manager's Name: `,
    name: 'name',
},
{
    type: 'input',
    message: `Manager's Id: `,
    name: 'id',
    validate: (input) => {
        
        if (!isNaN(input)) {
            return true;
        }

        let err = new Error('Invalid Number')
        return (err)

        
    }
},
{
    type: 'input',
    message: `Manager's Email: `,
    name: 'email',
    validate: (input) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)){
            return (true)
        }
        let err = new Error('Invalid Email')
        return (err)
    }
},
{
    type: 'input',
    message: `Manager's Office Number: `,
    name: 'officeNum',
    validate: (input) => {
        
        if (!isNaN(input)) {
            return true;
        }

        let err = new Error('Invalid Number')
        return (err)

        
    }
}]

const EngineerQuestions = [{
    type: 'input',
    message: `Name: `,
    name: 'name',
},
{
    type: 'input',
    message: `Id: `,
    name: 'id',
    validate: (input) => {
        
        if (!isNaN(input)) {
            return true;
        }

        let err = new Error('Invalid Number')
        return (err)

        
    }
},
{
    type: 'input',
    message: `Email: `,
    name: 'email',
    validate: (input) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)){
            return (true)
        }
        let err = new Error('Invalid Email')
        return (err)
    }
},
{
    type: 'input',
    message: `Github User: `,
    name: 'github',
}]

const InternQuestions = [{
    type: 'input',
    message: `Name: `,
    name: 'name',
},
{
    type: 'input',
    message: `Id: `,
    name: 'id',
    validate: (input) => {
        
        if (!isNaN(input)) {
            return true;
        }

        let err = new Error('Invalid Number')
        return (err)

        
    }
},
{
    type: 'input',
    message: `Email: `,
    name: 'email',
    validate: (input) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)){
            return (true)
        }
        let err = new Error('Invalid Email')
        return (err)
    }
},
{
    type: 'input',
    message: `School: `,
    name: 'school',
}]

const EmployeeQuestions = [{
    type: 'input',
    message: `Name: `,
    name: 'name',
},
{
    type: 'input',
    message: `Id: `,
    name: 'id',
    validate: (input) => {
        
        if (!isNaN(input)) {
            return true;
        }

        let err = new Error('Invalid Number')
        return (err)

        
    }
},
{
    type: 'input',
    message: `Email: `,
    name: 'email',
    validate: (input) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)){
            return (true)
        }
        let err = new Error('Invalid Email')
        return (err)
    }
}]

const menu = async() => {

    const decision = await inquirer.prompt([questions])
    return decision;

} 

const addMember = async(role) => {

    if (role == 'manager') {
        const newMemberIfo = await inquirer.prompt(ManagerQuestions)
        const newMember = createCard(newMemberIfo.name, newMemberIfo.id, newMemberIfo.email, 'Manager',newMemberIfo.officeNum)
        return newMember;        
    }
    if (role == 'engineer') {
        const newMemberIfo = await inquirer.prompt(EngineerQuestions)
        const newMember = createCard(newMemberIfo.name, newMemberIfo.id, newMemberIfo.email, 'Engineer',newMemberIfo.github)
        return newMember;        
    }    
    if (role == 'intern') {
        const newMemberIfo = await inquirer.prompt(InternQuestions)
        const newMember = createCard(newMemberIfo.name, newMemberIfo.id, newMemberIfo.email, 'Intern',newMemberIfo.school)        
        return newMember;        
    }
    if (role == 'employee') {
        const newMemberIfo = await inquirer.prompt(EmployeeQuestions)
        const newMember = createCard(newMemberIfo.name, newMemberIfo.id, newMemberIfo.email, 'Employee')        
        return newMember;        
    }else{
        return '';
    }

}


const main = async() => {
    let opt = '';
    let teamMember = '';
    let manager = '';


    manager =  await addMember('manager')
    arrayOfCards.push(manager)

    do {
        opt = await menu();

        console.log(opt.menuOption);

        if (opt.menuOption != 'Exit') {
            teamMember =  await addMember(opt.menuOption.toLowerCase())
            arrayOfCards.push(teamMember)
        }

    } while (opt.menuOption != 'Exit');

    var htmlContent = createDOM(arrayOfCards);

    if (!fs.existsSync('./dist')) {
        fs.mkdirSync('./dist')
    }

    fs.writeFile('./dist/my-team.html', htmlContent, (error) => { /* handle error */ });
}


main();






