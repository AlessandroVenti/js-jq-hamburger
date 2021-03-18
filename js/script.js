
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

