  let mesas = function (){
    let nm = document.getElementById("mesas").value;
    let con = '';
    for(i = 0; i < nm; i++){
      con += '<div class="card text-center w-75 m-auto mss">' +
                '<div class="card-body">' +
                  '<h5 class="card-title">Mesa no. '+(i+1)+'</h5>' +
                  '<div class="card-text">' +

                    '<div class="form-group">' +
                      '<label for="adultos">numero de adultos :</label>' +
                      '<input type="number" id="adultos'+i+'" name="adultos" value="1" min="1" max="4" onchange="getmax('+i+')">' +
                    "</div>" +

                    '<div class="form-group">' +
                      '<label for="menores">numero de menores :</label>' +
                      '<input type="number" id="menores'+i+'" name="menores" value="0" min="0" max="0" onchange="edds('+i+')">' +
                    "</div>" +

                    '<div id="edds'+i+'"></div>' +
                    
                  "</div>" +
                "</div>" +
            "</div>";
    }
    document.getElementById("mesass").innerHTML = con;
  }

  let getmax = function (i){
    let val = parseInt(document.getElementById("adultos"+i).value);
    let ma = 0;
    switch(val){
      case 1: ma = 4; break;
      case 2: ma = 3; break;
      case 3: ma = 2; break;
      case 4: ma = 0; break;
    }

    document.getElementById("menores"+i).max = ma;
  }

  let edds =  function (i){
    let ni = parseInt(document.getElementById("menores"+i).value);
    let rep = '';
    for(a = 0; a < ni; a++){
      rep += '<div class="form-group">'+
      '<label for="edades">edad no. '+(a+1)+' :</label>'+
      '<input type="number" id="edades'+i+a+'" name="edades" value="1" min="1" max="17">'+
      '</div>';
    }
    document.getElementById("edds"+i).innerHTML = rep;
  }

  let btn = function (){
    let arrmesas = [];
    let nm = document.getElementById("mesas").value;

    for(i = 0; i < nm; i++){
      let val = parseInt(document.getElementById("adultos"+i).value);
      let ni = parseInt(document.getElementById("menores"+i).value);

      arrmesas[i]={
        adultos: val,
        menores: ni,
        edades: []
      };

      for(a = 0; a < ni; a++){
        arrmesas[i].edades[a] = parseInt(document.getElementById("edades"+i+""+a).value);
      }
    }

    localStorage.setItem('arrmesas', JSON.stringify(arrmesas));
    window.open("reservacion.html");
  }