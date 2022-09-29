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

    describe('gitName', () => {

    })

    describe('gitRole', () => {

    })



});