export function banner(){

    let div = document.createElement("div");
    div.className = "BannerDiv"

    let span = document.createElement("span");
    span.textContent = "Geeta."
    div.appendChild(span);

    let aBoton = document.createElement("a");
    aBoton.textContent = "Shop Now"
    aBoton.className = "divBoton"
    aBoton.href = "../../pages/banner1.html";
    div.appendChild(aBoton);



    return div;
}