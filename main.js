var input=document.querySelector("#inputs");
var button=document.querySelector("#btn");
var output=document.querySelector("#out");

button.addEventListener("click",clickHandler);

function clickHandler(){
    console.log("clicked");

    var date=input.value;
    if(date !== ""){
      var datearray=date.split("-");
    console.log(datearray); //yyyy-mm-dd
    var mmddyyyy=datearray[1]+datearray[2]+datearray[0];
    console.log(mmddyyyy);

    checkPalindrome(mmddyyyy);
    }
    else{
      console.log("enter date first");
      showMessage("Enter date first")
    }    
}

function checkPalindrome(d){
  var newd=d;
  var newarr=newd.split("");
  var revarr=newarr.reverse();
  var revd=revarr.join('');
  console.log(revd)

  if(newd===revd){
    console.log("pal")
    showMessage("Wow ! your birthday is a Palindrome!")

  }
  else{
    console.log("not pal")
    showMessage("Your birthday is not a Palindrome")
  }
}



function showMessage(m){
  output.innerHTML=m;
}

