const { Employee,Intern } = require('../lib/classes.js');

describe('Intern Tests', () =>{
    
    describe('Initialization', () =>{
        it(`Should return a class containing a Name`, () =>{
            const TestIntern = new Intern('Klaus', 1789, 'klausmcedillo@gmail.com','ITESM');

            expect('name' in TestIntern).toEqual(true);
        })
        it(`Should return a class containing an Id`, () =>{
            const TestIntern = new Intern('Klaus', 1789, 'klausmcedillo@gmail.com','ITESM');

            expect('id' in TestIntern).toEqual(true);
        })
        it(`Should return a class containing an Email`, () =>{
            const TestIntern = new Intern('Klaus', 1789, 'klausmcedillo@gmail.com','ITESM');

            expect('email' in TestIntern).toEqual(true);
        })
        it(`Should return a class containing a School`, () =>{
            const TestIntern = new Intern('Klaus', 1789, 'klausmcedillo@gmail.com','ITESM');

            expect('school' in TestIntern).toEqual(true);
        })
    });
    
    describe('Methods', () =>{
        it(`Should return its Name`, () =>{
            const TestIntern = new Intern('Klaus', 1789, 'klausmcedillo@gmail.com','ITESM');

            expect(TestIntern.getName()).toEqual('Klaus');
        })
        it(`Should return its Id`, () =>{
            const TestIntern = new Intern('Klaus', 1789, 'klausmcedillo@gmail.com','ITESM');

            expect(TestIntern.getId()).toEqual(1789);
        })
        it(`Should return its Email`, () =>{
            const TestIntern = new Intern('Klaus', 1789, 'klausmcedillo@gmail.com','ITESM');

            expect(TestIntern.getEmail()).toEqual('klausmcedillo@gmail.com');
        })
        it(`Should return its School`, () =>{
            const TestIntern = new Intern('Klaus', 1789, 'klausmcedillo@gmail.com','ITESM');

            expect(TestIntern.getSchool()).toEqual('ITESM');
        })
        it(`Should return 'Intern' when asked its Role`, () =>{
            const TestIntern = new Intern('Klaus', 1789, 'klausmcedillo@gmail.com','ITESM');

            expect(TestIntern.getRole()).toEqual('Intern');
        })
    });

});