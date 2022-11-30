const cargarDatosTabla = async() => {
    try{
        const respuesta = await fetch('https://inshorts.deta.dev/news?category=science');
        //Comprobamos la respuesta correcta
        if(respuesta.status === 200){
            const data = await respuesta.json();

            let datatable = `
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>Author</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </tfoot>
                <tbody>`;
            for (element in data["data"]){
                let info = data["data"][element];
                datatable += `
                    <tr class="Contenido">
                        <td class="autorH">${info["author"]}</td>
                        <td>${info["title"]}</td>
                        <td>${info["content"]}</td>
                        <td>${info["date"]}</td>
                        <td>${info["time"]}</td>
                    </tr>
                `;
            }
            datatable+=`</tbody>`;
            document.getElementById('datatablesSimple').innerHTML=datatable;
        }
        
    } catch(error){
        console.log(error);
    }
}

cargarDatosTabla();