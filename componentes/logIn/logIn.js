export function logIn(){

    let div = document.createElement("div");
    div.className = "div-logIn";

    let h1 = document.createElement("h1");
    h1.className = "welcome";
    h1.textContent = "Welcome Back!";
    div.appendChild(h1);

    let p = document.createElement("p");
    p.className = "texto-login";
    p.textContent = " Yay! You're back! Thanks for shopping with us.We have excited deals and promotions going on, grab your pick now! ";
    div.appendChild(p);

    let h2 = document.createElement("h2");
    h2.className = "LOG-IN";
    h2.textContent = "LOG IN";
    div.appendChild(h2);
    
    let span = document.createElement("span");
    span.className = "Email-adress";
    span.textContent = "Email address";
    div.appendChild(span);
    


    return div;

}
