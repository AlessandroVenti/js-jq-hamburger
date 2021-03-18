
function showAndHide (element1) {

     if( element1 === ".show") {

          $(".hamburger-menu").show();

     } else if (element1 === ".hide") {

          $(".hamburger-menu").hide();
     }

}



$(".fa-bars").click(function () {

     showAndHide(".show");

} );



$(".fa-times").click(function () {

     showAndHide(".hide");
     
} );

