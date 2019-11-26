class stringCalculator{
    constructor() {
        this.regex1 = /\d{1,}/gm;
       
    }

    Add(string) {

        let numbers = string.match(this.regex1)
        let results = 0;

        //Test if the string is empty
        if (string == "") {
            return 0;
        }
        
        let str = "";

        for (let i = 0; i < string.length; i++){
            if (string[i] === "-" && !isNaN(string[i + 1])) {
                str += "-" + string[i + 1] + " "
            }
        }

        //Throw an error if there's a negative

        if (str != "") {
            throw new Error("Negatives not allowed " + str);
        }

        //Convert string to numbers
        for (let i = 0; i < numbers.length; i++) {
            let digit = parseInt(numbers[i])
                if (digit > 1000) {
                    continue
                }
                if (digit) {
                    results += digit;
                }
        }
        return results
        
    }   
        
}

// let calc = new stringCalculator();
// console.log(calc.Add("/-1\n-2%"))
 module.exports = {stringCalculator}
