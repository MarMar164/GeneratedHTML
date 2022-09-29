const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager")


describe('Manager', () => {

    describe('initalization', () => {
        //arrange
        //act


        describe('should get initallized correctly', () => {
            let newManager = new Intern("jhon", 3, "jhon@gmail.com")
            //assert
            expect(newManager.name).toEqual("jhon")
            expect(newManager.id).toEqual(3)
        })
    })

    describe('gitOfficeNum', () => {
        const testOfficeNum = 215;
        const e = new Employee(testOfficeNum);
        expect(e.getOfficeNum()).toEqual(testOfficeNum);
    })

    describe('gitRole', () => {
        const testRole = "Manager"
        const empl = new Employee(testRole);
        expect(empl.getRole()).toBe(testRole);
    })



});