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


}


function calc(x){
  document.querySelector("input").value= x+"eg added";
}