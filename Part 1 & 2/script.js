

var seconds = 0;
var seconds2 = 0;
var Divy = document.querySelectorAll("div")[4];
var Divy2 = document.querySelectorAll("div")[5];

const MoveCars = (ev) =>{
  ev.preventDefault();
    
  function move(){  
    
    Divy.style.marginLeft = `${seconds+=1}px` ;
    Divy2.style.marginLeft = `${seconds2+=0.96}px`
      

    
    

   };

   
    var cancel1 = setInterval(move, 5);
    
  
   
  function cancel(){
    clearInterval(cancel1);
    alert("Green is the winner")

  };
    setTimeout(cancel, 6900);
  
};








 function changeText(text)
        {
            var display = document.getElementById('text-display');
            display.innerHTML = "";
            display.innerHTML = text;
        }
          function changeback(text)
        {
            var display = document.getElementById('text-display');
            display.innerHTML = "";
            display.innerHTML = text;
        }
        


        document.addEventListener('DOMContentLoaded', ()=>{
          document.getElementById('St_art').addEventListener('click', MoveCars);
          
        });