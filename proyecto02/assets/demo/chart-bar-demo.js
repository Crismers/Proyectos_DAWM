// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

//Cargamos datos de la API
const cargarDatosBarChart = async() => {
  const respuesta = await fetch('https://inshorts.deta.dev/news?category=science');
  if(respuesta.status === 200){
    const data = await respuesta.json();
    //Buscamos a los autores y su cantidad de publicaciones
    let autores = [];
    let cant_publi = [];
    for (element in data["data"]){
      let info = data["data"][element];
      let indice = autores.indexOf(info["author"]);
      if(indice === -1){
        autores.push(info["author"]);
        cant_publi.push(1);
      }else{
        cant_publi[indice]+=1;
      }
    }

    var ctx = document.getElementById("myBarChart");
    var myLineChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: autores,
        datasets: [{
          label: "Publications",
          backgroundColor: "rgba(2,117,216,1)",
          borderColor: "rgba(2,117,216,1)",
          data: cant_publi,
        }],
      },
      options: {
        scales: {
          xAxes: [{
            time: {
              unit: 'author'
            },
            gridLines: {
              display: false
            },
            ticks: {
              maxTicksLimit: autores.length
            }
          }],
          yAxes: [{
            ticks: {
              min: 0,
              max: 8,
              maxTicksLimit: 5
            },
            gridLines: {
              display: true
            }
          }],
        },
        legend: {
          display: false
        }
      }
    });
  }
}
// Bar Chart 
cargarDatosBarChart();
