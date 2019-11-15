const {stringCalculator} = require('../src/strCalculator');

const validate = new stringCalculator

//test if the string is empty//
describe ("verify the string", function() {
    let validate = new stringCalculator;
    it("should have an empty string", function() {
        expect(validate.Add('') ).toEqual(0);
    });

    it("should have  number in the string", function(){
        expect(validate.Add("1")).toEqual(1);
    });
    
    it("should add two numbers", function(){
        expect(validate.Add("1,2")). toEqual(3);
    });

    it("Should allow newline between numbers", function() {
        expect(validate.Add("1 \n2")).toEqual(3);
    });

    // it("", function() {
    //     expect(validate.Add("")).toEqual();
    // });
});
