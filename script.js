function calculater(){
    const number1= parseInt(document.getElementById('number1').value);
   let number2;
   number2= parseInt(document.getElementById('number2').value);
   
   const opt=document.getElementById('opreator').value;
   
   //we can do it with switch -case
   
//    switch(opt)
//    {
//        case"+":
//        document.getElementById("result").innerHTML = number1+number2 ;
//        break;
//        case"-":
//        document.getElementById("result").innerHTML = number1-number2 ;
//        break;
//        case"*":
//        document.getElementById("result").innerHTML = number1*number2 ;
//        break;
//        case"/":
//        document.getElementById("result").innerHTML = number1/number2 ;
//        break;
//        default:
//            document.getElementById("result").innerHTML = "unknown opt" ;
//    }
    //we can do it by if &else
    if        (opt === "+"){
        document.getElementById("result").innerHTML = number1+number2 ;
    }
    else if   (opt==="-") {
        document.getElementById("result").innerHTML = number1-number2 ;
    }
    else if   (opt==="*"){
        document.getElementById("result").innerHTML = number1*number2 ;
    } 
    else if   (opt==="/"){
        document.getElementById("result").innerHTML = number1/number2 ;
    }
    else{
        document.getElementById("result").innerHTML = "unknown opt" ;
    }
}
  
