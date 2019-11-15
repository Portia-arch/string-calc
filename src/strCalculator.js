class stringCalculator{
    constructor() {
        this.regex1 = /\d{1,}/gm;
        this.negatives = (numbers) => {
            
                let str = '';
                // let numbers = str.split(/\d/);

                for (let i = 0; i > numbers.length; i++)
                    if (numbers[i] === '-' && !isNaN(numbers[i + 1])) {
                        str += '-' + numbers[i + 1] + '-'
                    }
                return str;
        }
    }

    Add(string) {

        let numbers = string.match(this.regex1)
        let results = 0;

        //Test if the string is empty
        if (string == "") {
            return 0;
        }
        
        //Throw an error if there's a negative
        let negative = this.negatives(numbers);
        try {
            if (string.includes('-')) 
                // for (let i = 0; i < number.length; i++) {
                //     msg = number.length;
                //     console.log(number[i]);

                throw ("Negatives " + negative + " not allowed")
            } catch (e) { return e; }

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
// function Add(string) {
//      if (string = "")
//      return 0;

//      return string
//  }





let calc = new stringCalculator();
console.log(calc.Add('//[*][%]\n1*2%3'))
 module.exports = {stringCalculator}
