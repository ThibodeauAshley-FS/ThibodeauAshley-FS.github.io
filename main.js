// JavaScript Document

let userResponse;

if (confirm('Hello! Are you a devloper interested in working with me?')) {
  // Run Game
	alert('OK Great! Please open your browsers console log to continue...');
    userResponse = true;
	console.log('Challenge Accepted!');
    PrimaryProgram();
    var yn = PlayAgain();
    
    while(yn == true)
        {
            PrimaryProgram();
            yn = PlayAgain();
        }
} 
else {
  // Do nothing!
  console.log('User is not interested.');
	userResponse = false
}



//Class for the Main Program
function PrimaryProgram()
{

    Header("HIGH LOW");
    Instructions();

    //Call Ask for Max function
    var max = AskMax();

    //Calculate High Score
    let score = ScoreCalc(max);
    console.log('Highest Possible Score: _' + score);

    //Generate Random Number
    let privateNumber = RandomNumberGen(max);

    //Set Variables for while loop: Count of Guess, User Guess Number
    let counter = 1;
    let userGuess = 0;
        
        //While Loop for User guess Entry
        while(userGuess != privateNumber && score > 0)
        {
            let userGuesslet;

            //Subtract Score
            score -= (100 * counter);

            //Display Count Ask for Guess
            Divider(userGuesslet = prompt('Guess ' + counter +': '));

            //Set & Validate User Guess
            userGuess = ValidateInteger(userGuesslet);

                //Conditionals for High or Low Guess
                if (userGuess > privateNumber)
                {
                    console.log("Sorry," + userGuess + " is too high");
                    console.log("\r\n Current Score: " + score);
                }
                else if (userGuess < privateNumber)
                {
                    console.log("Sorry," + userGuess + " is too low");
                    console.log("\r\n Current Score: " + score);
                }

            //Add count to guess
            counter ++;
            
        }

            //Conditional for Win and Lose
            if (userGuess == privateNumber)
            { 
                //Display Winning message
                Win(privateNumber, score);
            }
            else if (score < 0)
            { 
                //Display losing message
                Lose();
            }

} //= END PRIMARY PROGRAM =======

//=========================================================================================================
// TASKS TO BE PERFORMED 
//=========================================================================================================


//Ask user for maximum input
function AskMax()
{
    let maxlet = prompt("Between 0 and __ what would you like to play? (must be higher than 10)");
    max = ValidateIntegerMax(maxlet);

    return max;
}

function RandomNumberGen(max)
{
    var min = 0;
        
    min = Math.ceil(min);
    max = Math.floor(max);
    
    return Math.floor(Math.random() * (max - min) + min);   
}

//Calculates score on max input
function ScoreCalc(max)
{
    let highScore = max * 50;

    return highScore;
}
    
//Asks User to repeat game
function PlayAgain()
{
    let repeat = true;
    let inputYN;

    Divider(inputYN = prompt("Would you like to play again [Y/N]: _"));
    var yesNo = YesNo(inputYN);
    
        //Conditional for 
        if (yesNo == "Y")
        {
            repeat = true;
        }
        else if (yesNo == "N")
        {
            repeat = false;
            ExitProgram();
        }

    return repeat;
}
//=========================================================================================================
 
//Exit Program
function ExitProgram()
{
        //Clear Console
        console.clear();

        //Display Closing statement
        Header("Maybe next time. Have a great day!");

}

//=========================================================================================================
//Class for Validation
//=========================================================================================================
    //Validated user entered an leteger
    function ValidateIntegerMax(input)
    {
        while(isNaN(input) && input > 10)
        {
            if(NaN)
            {
                //Display Error message
                Divider("Sorry! Please enter a vaild number!\r\n");
                //Renter Input value
                input = prompt("Please enter a number _");

            }
            if(input < 10)
            {
                //Display Error message
                Divider("Error: Value less than 10!\r\n");
                //Renter Input value
                input = prompt("Please enter a number greater than 10");

            }

        }

        return Number(input);
    }
    function ValidateInteger(input)
    {
        while(isNaN(input) && input > 0)
        {
            if(NaN)
            {
                //Display Error message
                Divider("Sorry! Please enter a vaild number!\r\n");
                //Renter Input value
                input = prompt("Please enter a number _");

            }
            if(input < 0)
            {
                //Display Error message
                Divider("Error: Value less than 0!\r\n");
                //Renter Input value
                input = prompt("Please enter a number greater than 0");

            }

        }

        return Number(input);
    }


    //Validate user entered Y or N
    function YesNo(text)
    {
        let TF;
        
        while (text.toUpperCase() != "Y" && text.toUpperCase() != "N")
        {
            //Error Message
            Divider("Sorry! Your entry is invalid! ");
            text = prompt("Would you like to play again [Y/N]: _");
        }
        
        return text.toUpperCase();
    }

//=========================================================================================================
// UI
//=========================================================================================================
    //Displays Heading text
    function Header(text)
    {
        console.clear();
        console.log("========================================");
        console.log("  "+text);
        console.log("========================================");
        

    }

    //Displays Instructions for game
    function Instructions()
    {
            console.log("\r\nThe game is simple! " +
            "\r\n - You will be asked to guess a number. " +
            "\r\n - If incorrect a hlet will be provided before asking for another guess. " +
            "\r\n - This repeats until you've guessed correctly or your score reaches 0. " +
            "\r\n - Polets are awarded based on maximum number and number of guesses." +
            "\r\n - The longer it takes to guess the higher the deduction will be! GOOD LUCK!");

    }

    //Displays Divider with the below text
    function Divider(text)
    {
        console.log("\r\n--------------------");
        console.log(text);
    }

    //Displays winning message
    function Win(hidnum, score)
    {
        console.clear();
        console.log("\r\n\r\n");
        console.log("☆;:*:;☆;:*:;☆!!CONGRATULATIONS!!☆;:*:;☆;:*:;☆");
        console.log("            "+ hidnum + "is the answer!");
        console.log("          Your final score is: _" + score);
        console.log("\r\n\r\n");
        console.alert("Whether you won or not it was the attempt that matters! Please contact me at played@Ash1ey.com");
        
        
            
    }

    //Displays losing message
    function Lose()
    {
        console.clear();
        console.log("\r\n\r\n");
        console.log("∀ԀOS ∀ԀIԀ ︵╰(°□°)╯︵ ∀ԀIԀ ∀ԀOS\r\n");
        console.log("          !! OH NO !!");
        console.log("         !!!YOU LOST!!!");
        console.log("The number was" + rNumber);
        console.log("\r\n\r\n");
        console.alert("Whether you won or not it was the attempt that matters! Please contact me at played@Ash1ey.com");
    }


