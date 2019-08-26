
let offset; 


const btnSave = document.getElementById("encriptar");
btnSave.addEventListener("click", () => {
    offset = Number.parseInt(document.getElementById("codigoOffset").value); 
    let text = document.getElementById("text").value;
    
    let es = document.getElementById("textdes");
    es.innerHTML = window.cipher.encode(text, offset);
        
    
    
    //document.getElementById("textdes").value = palabra;
    //document.getElementById("text").value ="";
   // palabra = '';
    //alfEncode=''; 
    //ascii=''; 
    //offset=''; 
    //return palabra;

   
});

const btndes = document.getElementById("desencriptar");

 btndes.addEventListener("click", () => {
 offset = Number.parseInt(document.getElementById("codigoOffset").value);
 let text2 = document.getElementById("textdes").value;

 let de = document.getElementById("textdes");
 de.innerHTML = window.cipher.decode(text2, offset);
    
    
    
   // document.getElementById("text").value =palabra
    //document.getElementById("textdes").value=""
    //palabra = '';
    //alfEncode=''; 
    //ascii=''; 
    //offset=''; 
    //return palabra;

});







