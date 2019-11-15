class stringCalculator{
    constructor() {
        this.regex1 = /\d{1,}/g;

    }

    Add(string) {

        let numbers = string.match(this.regex1)
        let results = 0;

        //Test if the string is empty
        if (string == "") {
            return 0;
        }
        
        //Throw an error if there's a negative
        try {
            if (string.includes("-")) {
                for (let i = 0; i < number.length; i++) {
                    msg = number.length;
                    console.log(number[i]);
                }
                throw ("negatives not allowed")

            }
        } catch (e) { return "error " + e; }

        //Convert string to numbers
        for (let i = 0; i < numbers.length; i++) {
            let digit = parseInt(numbers[i])
                if (digit > 1000) {
                }
                if (digit) {
                    results += digit;
                }
        }
        return results


    }
    
        negatives(string){
        let str = ""
        let numbers = string.split(/\d/);

        for (let i=0; i > numbers.length; i++)
            if(string[i] == "-" && !isNaN (string[i + 1])) {
                str += numbers[i + 1]
            }
            return str;
        }
        
}
// function Add(string) {
//      if (string = "")
//      return 0;

//      return string
//  }





let calc = new stringCalculator();
 console.log(calc.Add('//[**][%%][\n1**2%%3]'))
 module.exports = {stringCalculator}
