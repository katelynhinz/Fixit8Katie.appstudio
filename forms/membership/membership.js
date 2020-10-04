let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]
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
  
}

btnNextForm2.onclick=function(){
    ChangeForm(calculator)
}
