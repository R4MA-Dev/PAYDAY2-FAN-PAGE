window.onscroll = function click(){
    if(document.documentElement.scrollTop > 1500){
        document.querySelector(".to-container").classList.add("show");      
    }else{
        document.querySelector(".to-container").classList.remove("show");  
    }
    document.querySelector(".to-container").addEventListener("click",animarScroll);
}

function animarScroll(){
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0){
        window.requestAnimationFrame(animarScroll);
        window.scrollBy(0, -(currentScroll/16));
        
    }else{
        return false;
    }
}

 
