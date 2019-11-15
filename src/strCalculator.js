class stringCalculator{

    Add(string) {

        let negatives = this.negatives(numbers);
        let results = 0;

        //Convert string to numbers
        for (let i = 0; i < numbers.length; i++) {

            let digit = parseInt(numbers[i])

            //Throw an error if there's a negative

                if (negatives) {
                    throw ('Negatives are not allowed')
                }
            //
        }
    
        if (string === "") {
            return 0;
        }
        

}
    
        
}
// function Add(string) {
//      if (string = "")
//      return 0;

//      return string
//  }





let calc = new stringCalculator();
 console.log(calc.Add('1'))
 module.exports = {stringCalculator}
