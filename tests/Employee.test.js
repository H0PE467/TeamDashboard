const { Employee } = require('../lib/classes.js');

describe('Employee Tests', () =>{
    
    describe('Initialization', () =>{
        it(`Should return a class containing a Name`, () =>{
            const TestEmployee = new Employee('Klaus', 1789, 'klausmcedillo@gmail.com');

            expect('name' in TestEmployee).toEqual(true);
        })
        it(`Should return a class containing an Id`, () =>{
            const TestEmployee = new Employee('Klaus', 1789, 'klausmcedillo@gmail.com');

            expect('id' in TestEmployee).toEqual(true);
        })
        it(`Should return a class containing a Email`, () =>{
            const TestEmployee = new Employee('Klaus', 1789, 'klausmcedillo@gmail.com');

            expect('email' in TestEmployee).toEqual(true);
        })
    });
    
    describe('Methods', () =>{
        it(`Should return its name`, () =>{
            const TestEmployee = new Employee('Klaus', 1789, 'klausmcedillo@gmail.com');

            expect(TestEmployee.getName()).toEqual('Klaus');
        })
        it(`Should return its Id`, () =>{
            const TestEmployee = new Employee('Klaus', 1789, 'klausmcedillo@gmail.com');

            expect(TestEmployee.getId()).toEqual(1789);
        })
        it(`Should return its email`, () =>{
            const TestEmployee = new Employee('Klaus', 1789, 'klausmcedillo@gmail.com');

            expect(TestEmployee.getEmail()).toEqual('klausmcedillo@gmail.com');
        })
        it(`Should return 'Employee' when asked its role`, () =>{
            const TestEmployee = new Employee('Klaus', 1789, 'klausmcedillo@gmail.com');

            expect(TestEmployee.getRole()).toEqual('Employee');
        })
    });

});