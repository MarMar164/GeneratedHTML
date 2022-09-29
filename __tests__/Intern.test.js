const Intern = require("../lib/Intern")
const Employee = require("../lib/Employee");

describe('Intern', () => {

    describe('initalization', () => {
        //arrange
        //act


        describe('should get initallized correctly', () => {
            let newIntern = new Intern("Mar", 25, "mar@gmail.com")
            //assert
            expect(newIntern.name).toEqual("mar")
            expect(newIntern.id).toEqual(25)
        })
    })

    describe('gitSchoolName', () => {
        const testSchoolName = "SMU";
        const empl = new Employee(testSchoolName);
        expect(empl.getRole()).toBe(testSchoolName);
    })

    describe('gitRole', () => {
        const testRole = "Intern";
        const empl = new Employee(testRole);
        expect(empl.getRole()).toBe(testRole);
    })



});