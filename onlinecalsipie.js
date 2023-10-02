

numlen = document.querySelectorAll(".ib").length;

for(var i = 0;i<numlen;i++){
    
  if(i===0){
    document.querySelectorAll(".item")[i].addEventListener("click",function(){
      
    document.querySelector("input").value =document.querySelector("input").value.slice(0,-1);
  });
  }

  if(i===2){
    document.querySelectorAll(".item")[i].addEventListener("click",function(){
      
     document.querySelector("input").value =document.querySelector("input").innerHTML.slice(0,-1);
  });
  }

  if(i===1){
    document.querySelectorAll(".item")[i].addEventListener("click",function(){
      var result = document.querySelector("input").value;
      calc(result);
     
  });
  }
    if(i===3){
      document.querySelectorAll(".item")[i].addEventListener("click",function(){
        
       document.querySelector("input").value+="1";
    });
    }


    if(i===4){
      document.querySelectorAll(".item")[i].addEventListener("click",function(){
        
       document.querySelector("input").value+="2";
    });
    }

    if(i===5){
      document.querySelectorAll(".item")[i].addEventListener("click",function(){
        
       document.querySelector("input").value+="3";
    });
    }


    if(i===6){
      document.querySelectorAll(".item")[i].addEventListener("click",function(){
        
       document.querySelector("input").value+="4";
    });
    }
    if(i===7){
      document.querySelectorAll(".item")[i].addEventListener("click",function(){
        
       document.querySelector("input").value+="5";
    });
    }
    if(i===8){
      document.querySelectorAll(".item")[i].addEventListener("click",function(){
        
       document.querySelector("input").value+="6";
    });
    }
    
    if(i===9){
      document.querySelectorAll(".item")[i].addEventListener("click",function(){
        
       document.querySelector("input").value+="7";
    });
    }

    if(i===10){
      document.querySelectorAll(".item")[i].addEventListener("click",function(){
        
       document.querySelector("input").value+="8";
    });
    }

    if(i===11){
      document.querySelectorAll(".item")[i].addEventListener("click",function(){
        
       document.querySelector("input").value+="9";
    });
    }

    if(i===12){
      document.querySelectorAll(".item")[i].addEventListener("click",function(){
        
       document.querySelector("input").value+="(";
    });
    }

    if(i===13){
      document.querySelectorAll(".item")[i].addEventListener("click",function(){
        
       document.querySelector("input").value+="0";
    });
    }


    if(i===14){
      document.querySelectorAll(".item")[i].addEventListener("click",function(){
        
       document.querySelector("input").value+=")";
    });
    }
    

}

var opplen = document.querySelectorAll(".ob").length;
for(var i = 0;i<opplen;i++){


  if(i===0){
    document.querySelectorAll(".ob")[i].addEventListener("click",function(){
      
     document.querySelector("input").value+="+";
  });
  }

  if(i===1){
    document.querySelectorAll(".ob")[i].addEventListener("click",function(){
      
     document.querySelector("input").value+="-";
  });
  }

  if(i===2){
    document.querySelectorAll(".ob")[i].addEventListener("click",function(){
      
     document.querySelector("input").value+="x";
  });
  }

  if(i===3){
    document.querySelectorAll(".ob")[i].addEventListener("click",function(){
      
     document.querySelector("input").value+="/";
  });
  }
  if(i===4){
    document.querySelectorAll(".ob")[i].addEventListener("click",function(){
      
     document.querySelector("input").value+=".";
  });
  }

  
}


function calc(uin){
  var x = uin;
  x = x.replace(" ", "");
  x = x.replace("÷","/");
  x = x.replace("x","*");
  x = x.replace("X","*");
  x = x.replace("XX","**");
  x = x.replace("xx","**");
  var check = expcheck(x);
  if (check ===0){
    var number=normalise(bodmas(x));

    document.querySelector("input").value= number;
  
  }

}

function normalise(uresult) {
  var res = parseFloat(uresult);
  if (Number.isInteger(res) == true) {
      return parseInt(res);
  } else {
      return res;
  }
}
function bodmas(userinput) {
  var exp = String(userinput);
  if (exp.includes("(")) {
      var result = brackets(exp);
      return bodmas(result);
  } else if (exp.includes("/")) {
      var result = divide(exp);
      var x = String(bodmas(result));
      return String(x);
  }else if (exp.includes("*")) {
      var result = multi(exp);
      var x = String(bodmas(result));
      return String(x);
  } else if (exp.includes("+") || exp.includes("-")) {
      var result = addsub(exp);
      return result;
  } else {
      return String(exp);
  }
}




function expcheck(sinput) {
  const obj1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'u', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const obj2 = obj1.map(x => x.toUpperCase());
  const obj3 = ";?\"',<>?:}{[]@!$";
  const count = sinput.split('').reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
  }, {});
  const lbcount = count["("];
  const rbcount = count[")"];
  for (let x = 0; x < sinput.length; x++) {
      if (lbcount !== rbcount) {
          console.log("Invalid expression");
          return 1;
      } else if (obj1.includes(sinput[x])) {
          console.log("Invalid expression");
          return 1;
      } else if (obj2.includes(sinput[x])) {
          console.log("Invalid expression");
          return 1;
      } else if (obj3.includes(sinput[x])) {
          console.log("Invalid expression");
          return 1;
      } else if (sinput[x].match(/[a-zA-Z]/)) {
          console.log("Invalid expression");
          return 1;
      }
  }
  return 0;
}

function brackets(userinput) {
  var sample = String(userinput);
  var size = sample.length;
  var Lbrack = 0;
  var Rbrack = 0;
  var c = 0;
  for (var i = 0; i < size; i++) {
      if (sample[i] === "(") {
          c = c + 1;
          if (c === 1) {
              Lbrack = i;
          }
      } else if (sample[i] === ")") {
          if (c === 1) {
              Rbrack = i;
          }
          c = c - 1;
      }
  }
  var subsample = sample.slice(Lbrack + 1, Rbrack);
  subsample = bodmas(subsample);
  var Lsample = sample.slice(0, Lbrack);
  var Rsample = sample.slice(Rbrack + 1);
  if (Rsample.length !== 0) {
      if (Rsample[0] === "(" || Rsample[0].match(/\d/) !== null) {
          Rsample = "*" + Rsample;
      }
  }
  if (Lsample.length !== 0) {
      if (Lsample.slice(-1) === ")" || Lsample.slice(-1).match(/\d/) !== null) {
          Lsample = Lsample + "*";
      }
  }
  var fullstring = Lsample + String(subsample) + Rsample;
  if (fullstring.includes("(")) {
      fullstring = brackets(fullstring);
  }
  return fullstring;
}

function divide(uinput) {
  let string = uinput;
  let z = 1;
  let a = string.indexOf("/");
  let var1 = string.slice(0, a);
  if (string[a + 1] == "-") {
    z = -1;
    var2 = string.slice(a + 2);
  } else {
    z = 1;
    var2 = string.slice(a + 1);
  }
  let sindex_a_l = 0;
  let sindex_a_r = var1.length - 1;
  for (let i = var1.length - 1; i >= 0; i--) {
    if (var1[i].match(/[a-zA-Z0-9.]/)) {
      continue;
    } else {
      sindex_a_l = i + 1;
      break;
    }
  }
  let sindex_b_l = 0;
  let sindex_b_r = var2.length - 1;
  for (let i = 0; i < var2.length; i++) {
    if (var2[i].match(/[a-zA-Z0-9.]/)) {
      continue;
    } else {
      sindex_b_r = i - 1;
      break;
    }
  }
  let n1 = var1.slice(sindex_a_l, sindex_a_r + 1);
  let n2 = var2.slice(sindex_b_l, sindex_b_r + 1);
  n1 = String(n1);
  n2 = String(n2);
  let num1 = parseFloat(n1);
  let num2 = parseFloat(n2);
  let num3 = num1 / (z * num2);
  num3 = String(num3);
  let leftstring = var1.slice(0, sindex_a_l);
  let rightstring = var2.slice(sindex_b_r + 1);
  let fullstring = leftstring + num3 + rightstring;
  fullstring = fullstring.replace("--", "+", 1);
  fullstring = fullstring.replace("+-", "-", 1);
  if (fullstring.includes("*")) {
    return multi(fullstring);
  } else {
    return fullstring;
  }
}


function multi(uinput) {
  let string = uinput;
  let z = 1;
  let a = string.indexOf("*");
  let var1 = string.slice(0, a);
  if (string[a + 1] === "-") {
    z = -1;
    var2 = string.slice(a + 2);
  } else {
    z = 1;
    var2 = string.slice(a + 1);
  }
  let sindex_a_l = 0;
  let sindex_a_r = var1.length - 1;
  for (let i = var1.length - 1; i >= 0; i--) {
    if (var1[i].match(/[a-zA-Z0-9.]/)) {
      continue;
    } else {
      sindex_a_l = i + 1;
      break;
    }
  }
  let sindex_b_l = 0;
  let sindex_b_r = var2.length - 1;
  for (let i = 0; i < var2.length; i++) {
    if (var2[i].match(/[a-zA-Z0-9.]/)) {
      continue;
    } else {
      sindex_b_r = i - 1;
      break;
    }
  }
  let n1 = var1.slice(sindex_a_l, sindex_a_r + 1);
  let n2 = var2.slice(sindex_b_l, sindex_b_r + 1);
  n1 = String(n1);
  n2 = String(n2);
  let num1 = parseFloat(n1);
  let num2 = parseFloat(n2);
  let num3 = num1 * z * num2;
  num3 = String(num3);
  let leftstring = var1.slice(0, sindex_a_l);
  let rightstring = var2.slice(sindex_b_r + 1);
  let fullstring = leftstring + num3 + rightstring;
  fullstring = fullstring.replace("--", "+", 1);
  fullstring = fullstring.replace("+-", "-", 1);
  if (fullstring.includes("*")) {
    return multi(fullstring);
  } else {
    return fullstring;
  }
}





function addsub(uinput) {
  
  let string = uinput;
  
  let n = 1;
  let x = string.length;
  let istring = "";
  let newstring = string;
  while (n == 1) {
      if (string[0] == "+") {
          newstring = string.slice(1);
          break;
      } else if (string[0] == "-") {
          newstring = "0" + string;
          n = 0;
          break;
      } else {
          break;
      }
  }
  
  var opplist = [];
  var varlist = [];
  istring = "";
  for (let sc = 0; sc < newstring.length; sc++) {
    if (newstring[sc] === "+" || newstring[sc] === "-") {
        opplist.push(newstring[sc]);
    } else {
        istring = istring + newstring[sc];
        try {
            if (newstring[sc+1].includes("+") || newstring[sc+1].includes("-")) {
                varlist.push(istring);
                istring = "";
            }
        } catch {
            varlist.push(istring);
            istring = "";
            break;
        }
    }
}
varilist = varlist.map(x => parseFloat(x));
l1 = opplist.length;
l2 = varilist.length;
if (l1 === l2 - 1) {
    uresult = 0;
    for (let i = 0; i < l2 - 1; i++) {
        if (opplist[i] === "+") {
            num1 = varilist[i];
            num2 = varilist[i+1];
            num3 = num1 + num2;
            uresult = num3;
            varilist[i] = 0;
            varilist[i+1] = uresult;
        } else {
            num1 = varilist[i];
            num2 = varilist[i+1];
            num3 = num1 - num2;
            uresult = num3;
            varilist[i] = 0;
            varilist[i+1] = uresult;
        }
    }
}
uresult = parseFloat(uresult);
if (Number.isInteger(uresult)) {
    return parseInt(uresult);
} else {
    return uresult;
}}
