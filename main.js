
// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato
//





$(document).ready(function(){

  var apinum = 'https://flynn.boolean.careers/exercises/api/random/int';




$('.quadrato').click(function (){
 var questo_quadrato = this;
    $.ajax(
      {
        url : apinum,
        method : 'GET',
        success: function (data){
          var numrandom = data.response;
          console.log(numrandom);

            if(numrandom <= 5){
              $(questo_quadrato).addClass('yellow');

              $(questo_quadrato).text(numrandom);
              console.log(this);
            }else{
              $(questo_quadrato).addClass('green');
          

              $(questo_quadrato).text(numrandom);
            }


        },

        error: function (){


        }

      }


    );

  });

});
