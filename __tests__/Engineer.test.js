const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");


describe('Engineer', () => {

    describe('initalization', () => {
        //arrange
        //act


        describe('should get initallized correctly', () => {
            let newEngineer = new Engineer("slime", 12, "slime@gmail.com", "slime123")
            //assert
            expect(newEngineer.name).toEqual("slime")
            expect(newEngineer.id).toEqual(12)
            expect(newEngineer.gitGithub).toEqual("slime123")
        })
    })

    describe('githubName', () => {
        const testGitName = "Batman";
        const emple = new Employee(testGitName);
        expect(e.getName()).toBe(testGitName);
    })

    describe('gitRole', () => {
        const testRole = "Engineer"
        const e = new Employee(testRole);
        expect(e.getRole()).toBe(testRole);
    })



});