let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

/* Scenario: You will build an interface and event handler so the user enters their name, and 
the program (using an event) tells them if they are a member or not. 

Requirements;
Go the the form 'membership' and uncomment it.
Create the  GUI interface side of the form as needed.  Use controls 
to get the user name, trigger an event, and display the output. 
Write code for an event handler so that when it runs, it outputs a message telling the user 
if they are a member or not (ie if they are in the membership array or not).
If they are not a member, add their name to the membership array.  
**** Remember, you must use controls for all messages (NO alerts nor console.log). 
You can use any controls,
events, and/or event handlers you want. 
*/

let memberName = ""


btnFirstName.onclick=function(){
  let memberName = inptFirstName.value
 if (members.includes(memberName)) {
    lblIsMember.hidden = false
    lblIsMember.textContent = "That user is a member!"
   } else { 
    lblIsMember.hidden = false
    lblIsMember.textContent = "That first name is not a member, we will add it to the array of members"
    members.push(memberName)
  }
  console.log(members)
}

