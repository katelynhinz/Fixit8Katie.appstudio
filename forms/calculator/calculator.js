/*Scenario: Create a simple prototype calculator that gets 2 numbers from the user, 
adds or multiplies them depending on which the user wants to do,  displays the answer, 
and then clears the display when the user wants to calculate again. 

** Before you start to code, write out a rough algorithm of how to 
do this- pretend you are using a calculator with controls. Think about what you would 
  do at each step. Then code up your algorithm. I may ask to see this. 
    we could have two boxes where two numbers could be entered, and two separate buttons,
    one is multiply and one is addition.  When the user enters numbers and clicks the button,
    corresponding calculations take place and the result will show in a label. 

Requirements:
Has a new form named calculator.
Program gets two numbers from the user but does not use prompts - instead, 
uses controls to do this.
All input and output must be prefaced with the users' name.
The program uses at least one event and controls for all input and output. 
Uses at least one button, one label, and one input control
Controls are appropriately named. 
Control properties are used at design time to specify how the controls should look.
The program may not use any alerts, popups or console.log for output. You can use
console.log for debugging however. */
btnAdd.onclick=function(){
  let number1 = inptNumber1.value
  let number2 = inptNumber2.value
  lblAnswer.hidden = false
  lblAnswer.textContent = accountName + ", " + "here is the result: " + (Number(number1) + Number(number2))
}

btnMultiply.onclick=function(){
let number1 = inptNumber1.value
  let number2 = inptNumber2.value
  lblAnswer.hidden = false
  lblAnswer.textContent = accountName + ", " + "here is the result: " + (Number(number1) * Number(number2))
  
}
