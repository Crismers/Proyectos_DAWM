let cargarDatos = async () =>{
    await fetch("https://inshorts.deta.dev/news?category=science")
      .then(response => response.json() )  
      .then( data => {
        let list = document.querySelector('ul');
        for (element in data["data"] ){
            let autor = document.createElement('li');
            let info = data["data"][element];
            autor.textContent = JSON.stringify(info["author"]);
            list.appendChild(autor);
            let titulo = document.createElement('li');
            let fecha = document.createElement('li');
            titulo.textContent = JSON.stringify(info["title"]);
            fecha.textContent = JSON.stringify(info["date"]);
            let subList = document.createElement('ul');
            subList.appendChild(titulo);
            subList.appendChild(fecha);
            list.appendChild(subList);
        }

      }
    )
}

window.addEventListener('DOMContentLoaded', (event) => {
    cargarDatos()
});
