
// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato
//





$(document).ready(function(){

  var apinum = 'https://flynn.boolean.careers/exercises/api/random/int';




$('.quadrato').click(function (){

    $.ajax(
      {
        url : apinum,
        method : 'GET',
        success: function (data){
          var numrandom = data.response;
          console.log(numrandom);
          $('.quadrato').click(function (){
            if(numrandom <= 5){
              $(this).addClass('yellow');
              $(this).removeClass('green');
              $(this).text(numrandom);
              console.log(this);
            }else{
              $(this).addClass('green');
              $(this).removeClass('yellow');

              $(this).text(numrandom);
            }

          });
        },

        error: function (){


        }

      }


    );

  });

});
