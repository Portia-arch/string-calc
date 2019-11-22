class stringCalculator{
    constructor() {
        this.regex1 = /\d{1,}/gm;
        this.negatives = (numbers) => {
            
                let str = '';

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
        
        if (negative) {
            throw new Error('Negatives '+ negative +' not allowed');
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

let calc = new stringCalculator();
console.log(calc.Add('-2, 1001'))
 module.exports = {stringCalculator}
