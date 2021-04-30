// JavaScript Document

let userResponse;

if (confirm('Hello! Are you a devloper interested in working with me?')) {
  // Run Game
	alert('OK Great! Please open your browsers console log to continue...');
	console.log('Challenge Accepted!');
	userResponse = true;
} 
else {
  // Do nothing!
  console.log('User is not interested.');
	userResponse = false
}

while(userResponse == true)
{
        //Class for the Main Program
            function PrimaryProgram()
            {

                Display.Header("HIGH LOW");
                Display.Instructions();

                //Call Ask for Max function
                let max = Task.AskMax();

                //Calculate High Score
                let score = Task.ScoreCalc(max);
                console.log('Highest Possible Score: _' + score);

                //Generate Random Number
                let privateNumber = Task.RandomNumberGen(max);

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
                        Display.Divider(userGuesslet = prompt('Guess [{counter}]: Please enter a number _'));

                        //Set & Validate User Guess
                        userGuess = Validation.leteger(userGuesslet);

                            //Conditionals for High or Low Guess
                            if (userGuess > privateNumber)
                            {
                                console.log("Sorry," + userGuess + "is too high");
                                console.log("\r\n Current Score: _" + score);
                            }
                            else if (userGuess < privateNumber)
                            {
                                console.log("Sorry," + userGuess + "is too low");
                                console.log("\r\n Current Score: _" + score);
                            }

                        //Add count to guess
                        counter ++;
                        
                    }

                        //Conditional for Win and Lose
                        if (userGuess == privateNumber)
                        { 
                            //Display Winning message
                            Display.Win(privateNumber, score);
                        }
                        else if (score < 0)
                        { 
                            //Display losing message
                            Display.Lose();
                        }

            } //= END PRIMARY PROGRAM =======


        //CLASS FOR SPECIFIC TASKS TO BE PERFORMED 
        function Task()
        {
            let maxlet;
            let max;

            //Ask user for maximum input
            function AskMax()
            {
                Display.Divider(maxlet = prompt("Maximum Number: _"));
                max = Validation.leteger(maxlet);

                return max;
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

                let inputYN = Display.Divider(prompt("Would you like to play again [Y/N]: _"));
                let yesNo = Validation.YesNo(inputYN);
                
                    //Conditional for 
                    if (yesNo.ToUpper() == "Y")
                    {
                        repeat = true;
                    }
                    else if (yesNo.ToUpper() == "N")
                    {
                        repeat = false;
                        Task.ExitProgram();
                    }

                return repeat;
            }

            //Exit Program
            function ExitProgram()
            {
                    //Clear Console
                    console.Clear();

                    //Display Closing statement
                    Display.Header("Maybe next time. Have a great day!");

            }




        }


        //Class for Validation
        function Validation()
        {
            //Validated user entered an leteger
            function leteger(input)
            {
                while(isNaN(input) && input > 0)
                {
                    //Display Error message
                    Display.Divider("Sorry! Please enter a vaild number!\r\n");
                    //Renter Input value
                    input = prompt("Please enter a number _");
                }

                return input;
            }

            //Validate user entered Y or N
            function YesNo(text)
            {
                
                while (text.ToUpper() != "Y" && text.ToUpper() != "N")
                {
                    //Error Message
                    Display.Divider("Sorry! Your entry is invalid! ");
                    text = prompt("Would you like to play again [Y/N]: _");
                }
             
                return text;
            }



        }

        //Class for UI
        function Display()
        {
            //Displays Heading text
            function Header(text)
            {
                Console.Clear();
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
                Console.Write(text);
            }

            //Displays winning message
            function Win(hidnum, score)
            {
                Console.Clear();
                console.log("\r\n\r\n");
                console.log("☆;:*:;☆;:*:;☆!!CONGRATULATIONS!!☆;:*:;☆;:*:;☆");
                console.log("            "+ hidnum + "is the answer!");
                console.log("          Your final score is: _" + score);
                console.log("\r\n\r\n");
                
                
                    
            }

            //Displays losing message
            function Lose()
            {
                Console.Clear();
                console.log("\r\n\r\n");
                console.log("∀ԀOS ∀ԀIԀ ︵╰(°□°)╯︵ ∀ԀIԀ ∀ԀOS\r\n");
                console.log("          !! OH NO !!");
                console.log("         !!!YOU LOST!!!");
                console.log("\r\n\r\n");
                
            }

        }

}