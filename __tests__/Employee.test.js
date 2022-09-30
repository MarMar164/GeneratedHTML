const Employee = require("../lib/Employee")


describe('Employee', () => {

    describe('initalization', () => {
        //arrange
        //act


        describe('should get initallized correctly', () => {
            let newEmployee = new Employee("sid", 1, "sid@gmail.com")
            //assert
            expect(newEmployee.name).toEqual("sid")
            expect(newEmployee.id).toEqual(1)
        })
    })

    describe('getName', () => {
        const testName = "Tom";
        const e = new Employee(testName);
        expect(e.getName()).toBe(testName);
    })

    describe('getRole', () => {
        const testRole = "Employee";
        const empl = new Employee(testRole);
        expect(empl.getRole()).toBe(testRole);
    })
    //describe for Id and Email

    discribe('getId', () => {
        const testId = 11;
        const employ = new Employee(testId);
        expect(employ.getId()).toEqual(testId);
    })

    discribe('getEmail', () => {
        const testEmail = "mar@gmail.com";
        const employed = new Employee(testEmail);
        expect(employed.getEmail()).toBe(testEmail);
    })

});

