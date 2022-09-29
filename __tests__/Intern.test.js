const Intern = require("../lib/Intern")


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

    describe('gitName', () => {

    })

    describe('gitRole', () => {

    })



});