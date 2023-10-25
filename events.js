console.log("separate js log");

//option1  directly acces
//<button onclick=console.log(66)>another btn </button>

//option 2 add on click 
function  makered(){
    document.body.style.backgroundColor='red';
 }

 //option 3

 const mkblue=document.getElementById('blue');
        mkblue.onclick=makeblue;

        function makeblue(){
    document.body.style.backgroundColor='blue';

        }
//3-2

        const prple=document.getElementById('purple');
      prple.onclick=function purple(){
        document.body.style.backgroundColor='purple';
      } 

      //option 4
      const pinkbtn=document.getElementById('make-pink');
      pinkbtn.addEventListener('click',makepink);
        function makepink()
        { 
           document.body.style.backgroundColor='pink'; 
        }
      
//option 4 another

 const makegreen=document.getElementById('green');
      makegreen.addEventListener('click',function makeGreen(){
       document.body.style.backgroundColor='green'; 
      })  
 
      //option 4 final
      document.getElementById('makeorange').addEventListener('click',function(){
        document.body.style.backgroundColor='orange';
              }) 