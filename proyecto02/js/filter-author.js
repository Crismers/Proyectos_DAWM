
document.addEventListener("keyup",e=>{
    if(e.target.matches("#buscador")){
        if(e.key === "Escape")e.target.value=""

        document.querySelectorAll(".Contenido").forEach(arti =>{
            console.log(arti.getElementsByClassName('autorH')[0].innerHTML.toLowerCase());
            if(arti.getElementsByClassName('autorH')[0].innerHTML.toLowerCase().includes(e.target.value.toLowerCase())){
              arti.classList.remove("filtro")
            }else{
                arti.classList.add("filtro")
            }
            //arti.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            //    ?arti.classList.remove("filtro")
            //    :arti.classList.add("filtro")
        })
    }
})