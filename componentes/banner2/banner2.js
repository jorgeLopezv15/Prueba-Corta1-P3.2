import { logIn } from "../logIn/logIn.js";
import { Register } from "../Register/Register.js";

export function banner2(){
    let div = document.createElement('div');
    div.className = "div-banner2";

    let h1 = document.createElement("h1");
    h1.textContent = "Geeta."
    div.appendChild(h1);

    let h2 = document.createElement("h2");
    h2.textContent = "Create your fashion in your own way"
    div.appendChild(h2);

    let p = document.createElement("p");
    p.textContent = "Each men and women has their own style, Geeta help you to create your unique style. "
    div.appendChild(p);

    let aBoton = document.createElement("div")
    aBoton.addEventListener('click',()=>{
        div.classList.add("ocultar");
        document.body.appendChild(logIn());

    })
    aBoton.textContent = "LOG IN"
    aBoton.className = "boton-banner2"
    div.appendChild(aBoton);

    let orText = document.createElement('span');
    orText.textContent = "OR";
    orText.className = "or-text";
    div.appendChild(orText);

    let bBoton = document.createElement("div");
    bBoton.addEventListener('click', ()=>{
        div.classList.add('ocultar');
        document.body.appendChild(Register());
    })

    bBoton.textContent = "REGISTER"
    bBoton.className = "boton2-banner2"
    div.appendChild(bBoton);

    


    

   

    return div;
}

document.body.appendChild(banner2());