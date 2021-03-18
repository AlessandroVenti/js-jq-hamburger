              // Creare un hamburger menu con l'utilizzo di Html, Css e JavaScript. Scrivere solo la parte con jQuery senza modiﬁcare HTML e CSS.


          //     Versione con controllo 



function showAndHide (element1) {

     var getHamburger = $(".hamburger-menu");

     switch(element1) {

          case ".show":

               getHamburger.show();

               break;

    
          case ".hide":

               getHamburger.hide();

     }

}



$(".fa-bars").click(function () {

     showAndHide(".show");

} );



$(".fa-times").click(function () {

     showAndHide(".hide");
     
} );



                              //    Versione compatta



// $(".fa-bars").click(function () {

//      $(".hamburger-menu").show();

// } );



// $(".fa-times").click(function () {

//      $(".hamburger-menu").hide();
     
// } );


