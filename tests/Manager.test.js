const { Employee,Manager} = require('../lib/classes.js');

describe('Manager Tests', () =>{
    
    describe('Initialization', () =>{
        it(`Should return a class containing a Name`, () =>{
            const TestManager = new Manager('Klaus', 1789, 'klausmcedillo@gmail.com',123);

            expect('name' in TestManager).toEqual(true);
        })
        it(`Should return a class containing an Id`, () =>{
            const TestManager = new Manager('Klaus', 1789, 'klausmcedillo@gmail.com',123);

            expect('id' in TestManager).toEqual(true);
        })
        it(`Should return a class containing an Email`, () =>{
            const TestManager = new Manager('Klaus', 1789, 'klausmcedillo@gmail.com',123);

            expect('email' in TestManager).toEqual(true);
        })
        it(`Should return a class containing an Office Number`, () =>{
            const TestManager = new Manager('Klaus', 1789, 'klausmcedillo@gmail.com',123);

            expect('officeNumber' in TestManager).toEqual(true);
        })
    });
    
    describe('Methods', () =>{
        it(`Should return its name`, () =>{
            const TestManager = new Manager('Klaus', 1789, 'klausmcedillo@gmail.com',123);

            expect(TestManager.getName()).toEqual('Klaus');
        })
        it(`Should return its Id`, () =>{
            const TestManager = new Manager('Klaus', 1789, 'klausmcedillo@gmail.com',123);

            expect(TestManager.getId()).toEqual(1789);
        })
        it(`Should return its Email`, () =>{
            const TestManager = new Manager('Klaus', 1789, 'klausmcedillo@gmail.com',123);

            expect(TestManager.getEmail()).toEqual('klausmcedillo@gmail.com');
        })
        it(`Should return 'Manager' when asked its Role`, () =>{
            const TestManager = new Manager('Klaus', 1789, 'klausmcedillo@gmail.com',123);

            expect(TestManager.getRole()).toEqual('Manager');
        })
    });

});