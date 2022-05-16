//Esto tiene que ser la función que se debe mandar a llamar en el script principal del proyecto
export default function hamburguerMenu(selectorPanel,selectorHamburger,selectorEnlaceMenu){

    document.addEventListener("click",(e)=>{  //Delegción de eventos
        //El espacio asterisco utilizado en la siguiente línea de código hace referencia a todos los hijos.
        if(e.target.matches(selectorHamburger) || e.target.matches(`${selectorHamburger} *`)){
            document.querySelector(selectorPanel).classList.toggle("is-active");
           
        }
        if(e.target.matches(selectorEnlaceMenu)|| e.target.matches(`${selectorEnlaceMenu} *`)){
            document.querySelector(selectorPanel).classList.remove("is-active");
            
        }
      
 
    });
}
