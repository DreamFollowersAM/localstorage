let mss = JSON.parse(localStorage.getItem('arrmesas'));

(function(){

  let con = '';
    for(i = 0; i < mss.length; i++){
      con += '<div class="card text-center w-75 m-auto mss">' +
                '<div class="card-body">' +
                  '<h5 class="card-title">Mesa no. '+(i+1)+'</h5>' +
                  '<div class="card-text">' +

                    '<div class="form-group">' +
                      '<label for="adultos">numero de adultos:'+mss[i].adultos+'</label>' +
                    "</div>" +

                    '<div class="form-group">' +
                      '<label for="menores">numero de menores:'+mss[i].menores+'</label>' +
                    "</div>" +

                    '<div id="replace'+i+'">'+
                    '<button type="button" class="btn btn-primary" onclick="edades('+i+')">mostrar edades</button>'+
                    '</div>' +
                    
                  "</div>" +
                "</div>" +
            "</div>";
    }
    document.getElementById("mesass").innerHTML = con;  
})();

function edades(i){
  let eds = '';
  for(a = 0; a < mss[i].menores; a++){
    eds += '<div class="form-group">' +
              '<label for="edad">edad no '+(a+1)+': '+mss[i].edades[a]+'</label>' +
            "</div>";
  }
  console.log(eds);
  document.getElementById("replace"+i).innerHTML = eds; 
}