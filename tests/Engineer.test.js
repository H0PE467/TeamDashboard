const { Employee,Engineer } = require('../lib/classes.js');

describe('Engineer Tests', () =>{
    
    describe('Initialization', () =>{
        it(`Should return a class containing a Name`, () =>{
            const TestEngineer = new Engineer('Klaus', 1789, 'klausmcedillo@gmail.com','H0PE467');

            expect('name' in TestEngineer).toEqual(true);
        })
        it(`Should return a class containing an Id`, () =>{
            const TestEngineer = new Engineer('Klaus', 1789, 'klausmcedillo@gmail.com','H0PE467');

            expect('id' in TestEngineer).toEqual(true);
        })
        it(`Should return a class containing an Email`, () =>{
            const TestEngineer = new Engineer('Klaus', 1789, 'klausmcedillo@gmail.com','H0PE467');

            expect('email' in TestEngineer).toEqual(true);
        })
        it(`Should return a class containing a Github User`, () =>{
            const TestEngineer = new Engineer('Klaus', 1789, 'klausmcedillo@gmail.com','H0PE467',);

            expect('gitHub_Username' in TestEngineer).toEqual(true);
        })
    });
    
    describe('Methods', () =>{
        it(`Should return its Name`, () =>{
            const TestEngineer = new Engineer('Klaus', 1789, 'klausmcedillo@gmail.com','H0PE467');

            expect(TestEngineer.getName()).toEqual('Klaus');
        })
        it(`Should return its Id`, () =>{
            const TestEngineer = new Engineer('Klaus', 1789, 'klausmcedillo@gmail.com','H0PE467');

            expect(TestEngineer.getId()).toEqual(1789);
        })
        it(`Should return its Email`, () =>{
            const TestEngineer = new Engineer('Klaus', 1789, 'klausmcedillo@gmail.com','H0PE467');

            expect(TestEngineer.getEmail()).toEqual('klausmcedillo@gmail.com');
        })
        it(`Should return its Github User`, () =>{
            const TestEngineer = new Engineer('Klaus', 1789, 'klausmcedillo@gmail.com','H0PE467');

            expect(TestEngineer.getGithub()).toEqual('H0PE467');
        })
        it(`Should return 'Engineer' when asked its Role`, () =>{
            const TestEngineer = new Engineer('Klaus', 1789, 'klausmcedillo@gmail.com','H0PE467');

            expect(TestEngineer.getRole()).toEqual('Engineer');
        })
    });

});