let restaurant= "https://raw.githubusercontent.com/aybaneze/lim-2018-01-foodmap/master/restaurantes.json";
let TypeFood=[];

const FunctionCities = () =>{
 fetch(restaurant)
.then(dateJson => dateJson.json() )
.then((restCity)=>{ 
  let content= document.getElementById("lugares");
  content.innerHTML="";
  for(let i = 0 ; i<restCity.length;i++){
     
let distrito = restCity[i].Distrito;
console.log(distrito);

    if(OptDistrito.value == distrito )
    {
     content.innerHTML+=`<center><div class="w3-container w3-card w3-white w3-round w3-margin" style="width:95%;height:200px;" >
                           <div class="divText"> 
                            <p style="font-size:50%;">`+ restCity[i].NomRestaurant+ `</p>
                             <p style="font-size:50%;">`+ restCity[i].direccion+ `</p>
                             <p style="font-size:50%;">`+ restCity[i].TipoComida+ `</p>
                             <button id="boton" onclick="document.getElementById('id01').style.display='block'" type="button"> Información </button>
                             <div id="id01" class="w3-modal w3-animate-zoom" onclick="this.style.display='none'">
                             <div class="w3-container w3-card w3-white w3-round w3-margin" style="width:50%;height:80%;">
                              <p>`+restCity[i].NomRestaurant+`</p>
                             </div>
                             </div>
                          </div> 
                          <div class="divImg">
                          <img id="imgLogo" src="`+ restCity[i].imagen+`">
                          </div>
                          </div></center>`;
     
      
    }
   else
{
  // alert("No selecciono nada")
}
console.log(restCity[i].NomRestaurant)
}});}



let SelectDistrito = document.getElementById("SelectDistrito");
let OptDistrito = SelectDistrito.options[SelectDistrito.selectedIndex].value;

function Seleccionar(){
  OptDistrito= document.getElementById("SelectDistrito")
  console.log(OptDistrito.value)
}

const btnBuscar= document.getElementById('btnBuscar');

btnBuscar.addEventListener('click', FunctionCities);