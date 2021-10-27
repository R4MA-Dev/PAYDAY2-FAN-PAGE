document.getElementById("dark-button").addEventListener("click", darkMode);

function darkMode(){
    let html = document.querySelector(":root");

    let button = document.getElementById("dark-button");
    button.disabled = true;

    if(button.innerText == "Modo Oscuro"){
        html.style.setProperty("--black-color", "white");
        html.style.setProperty("--white-color", "rgb(39, 38, 38)");
        button.innerText = "Modo Claro";
    }else{
        html.style.setProperty("--black-color", "rgb(39, 38, 38)");
        html.style.setProperty("--white-color", "white");
        button.innerText = "Modo Oscuro";
    }
    button.disabled = false;
}