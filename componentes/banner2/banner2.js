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

    let aBoton = document.createElement("a")
    aBoton.textContent = "LOG IN"
    aBoton.className = "boton-banner2"
    aBoton.href = "pages/bannerLogin.html"; 
    div.appendChild(aBoton);

    let orText = document.createElement('span');
    orText.textContent = "OR";
    orText.className = "or-text";
    div.appendChild(orText);

    let bBoton = document.createElement("a")
    bBoton.textContent = "REGISTER"
    bBoton.className = "boton2-banner2"
    bBoton.href = "pages/bannerRegister.html"; 
    div.appendChild(bBoton);

    


    

   

    return div;
}

document.body.appendChild(banner2());