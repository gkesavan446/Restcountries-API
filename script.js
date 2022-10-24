var container = document.createElement("div");
container.setAttribute("class","container");

var row = document.createElement("div");
row.setAttribute("class","row");
container.append(row);


var res1=fetch("https://restcountries.com/v2/all")
.then((data)=>data.json())
.then((data1)=>{   
    for(var i=0; i<data1.length; i++){      
      if(data1[i].latlng!=undefined){        
        row.innerHTML += `<div class="col-lg-4 col-sm-12">
        <div class="card">
        <div class="card-header"><b>${data1[i].name}</b></div>
        <div class="card-body">
        <img src="${data1[i].flag}" class="main">
        <h6 class="card-title">Captial : ${data1[i].capital}</h6>
        <h6 class="card-title">Region : ${data1[i].region}</h6>
        <h6 class="card-title">Country Code : ${data1[i].alpha3Code}</h6>
        <h6 class="card-title">Lattitude : ${data1[i].latlng[0]}</h6>
        <h6 class="card-title">Longitude : ${data1[i].latlng[1]}</h6>                 
        <button class= "btn btn-primary" id="button" onclick="foo(${data1[i].latlng[0]},${data1[i].latlng[1]})">Click for Weather</button>
        </div>
      </div>
      </div>`
      }     
      document.body.append(container);
    }
});
function foo(a,b){
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${a}&lon=${b}&appid=0cfd7567e88acae7767ba8f415206d85`)
  .then((data)=>data.json())
  .then((data1)=>{    
    alert(`Temprature for this country now is : ${data1.main.temp}`);
  });
}