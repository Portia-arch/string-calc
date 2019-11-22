const {stringCalculator} = require('../src/string_Calculator');

const validate = new stringCalculator();

//test if the string is empty//
describe ("verify the string", function() {
    let validate = new stringCalculator;
    it("should have an empty string", function() {
        expect(validate.Add('') ).toEqual(0);
    });

    //test if there is a number//
    it("should have  number in the string", function(){
        expect(validate.Add("1")).toEqual(1);
    });
    
    //test for two numbers and add them//
    it("should add two numbers", function(){
        expect(validate.Add("1,2")). toEqual(3);
    });

    //test if it allows a  newline in between numbers//
    it("Should allow newline between numbers", function() {
        expect(validate.Add("1 \n2")).toEqual(3);
    });

    //should return an error if there are negatives
    it("should return error message and negative number", () => {
        expect(() => { validate.Add('-2, 1') }).toThrowError('Negatives  not allowed.')
    });

    //the numbers should not be greater than 100
    it("should no be greater than 1000", function() {
        expect(validate.Add("2+1001")).toEqual(2);
    });
});
