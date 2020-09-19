
  var grade;
  var colunas = 135;
  var linhas = 40;
  var cor = [Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 256)]
  var cor_fundo = [Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 256)]
  var chance = 1
  var vizinhos = 0;
  var grade_backup = [];


function setup() {
    createCanvas(colunas * 10, linhas * 10);
  }


function fazer_array(colunas, linhas){
    var matrix = new Array(colunas);
    for (let i = 0; i < matrix.length; i++){
        matrix[i] = new Array(linhas);
    }
    return matrix;
}


function gerar_aleatorio(){
    grade = fazer_array(colunas , linhas);
    grade_backup = grade;
    for (let x = 0; x < colunas; x++){
        for (let y = 0; y < linhas; y++){
            if (Math.floor(Math.random() * 100) < document.getElementById('porcentagem').value){
                grade[x][y] = 1}


        }
    }
    
}


  function draw() {
    background(cor_fundo);

    for (let a = 0; a < colunas; a++){
        for (let b = 0; b < linhas; b++){
            let x = a * 10;
            let y = b * 10;
            if (grade[a][b] == 1) {
                fill(cor);
                rect(x,y, 10,10);


            } 
        }
    }
}

    function verificar(X,Y){
        var redor = 0
        for(let n = -1; n < 2; n++){
            for(let s = -1; s < 2; s++){
                  try{  //Caso o valor for negativo ele pula e evita o erro
                if (grade[X + n][Y +  s] == 1){redor ++}
              }
              catch{}
            }
        }
        if(grade[X][Y] == 1){redor = redor -1}
        return(redor);
    }


    function desigualdade_social(a){ //Aplica as Regras Do jogo
        if (a == 1){return grade} 
      for (let c = 0; c < colunas; c++){
          for (let l = 0; l < linhas; l++){
            //console.log(verificar(c,l));
            vizinhos = verificar(c,l);
            try{
            if (vizinhos == 2){grade_backup[c][l] = grade[c][l]}
            if (vizinhos > 3 ){grade_backup[c][l] = 0}
            if (vizinhos < 2 ){grade_backup[c][l] = 0}
            if (vizinhos == 3){grade_backup[c][l] = 1}
          }
          catch{}
            }
        }
        return(grade_backup)}
//for(let i; i < )
    var v = 0
    function proxima_gen(){ grade = desigualdade_social(v)}

    function bernardo(s){
        
        if (s == 1){
            var tempo = setInterval(proxima_gen, 500)
            document.getElementById("kruger").style.color = "red"
            document.getElementById("kruger1").style.color = "black"   
            v = 0
        }
        else{
            document.getElementById("kruger1").style.color = "red"
            document.getElementById("kruger").style.color = "black"    
            v = 1
        } 
      }
 

fazer_array()
gerar_aleatorio()
