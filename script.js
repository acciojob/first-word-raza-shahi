function firstWord(s) {
  // your code here
    if(s.length == 0){
        return s;
    }
    s=s.trim();
    let splitedStr = s.split(" ");
    return splitedStr[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
