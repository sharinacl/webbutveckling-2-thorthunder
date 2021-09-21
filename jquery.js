//header jQuery kod
$("#headertop").mouseenter(function(){
    $(".header-thor-thunder").slideDown(1000);
});
$("#banner").mouseenter(function(){
    $(".header-thor-thunder").fadeOut(3000);
});

//om oss jQuery kod. Den här är den koden för div id- article som jag döljer med hjälp av css och med hjälp av Jquery funktionen toggle kommer det glida varjegång när man trycka på den knappen med div klassen c-button

$(".c-button").click(function(){
    $("#idarticle").slideToggle(500);
});

//music jQuery kod. Här alla div elementet med klassen button1 2 3 4 använder jag funktionen click så att varjegång när man trycka på den knappen kommer div klassen med songs1 2 3 4 visar för att köra detta använder jag funktionen toggle.

$(".button1").click(function(){
    $(".songs1").slideToggle(500);
});
$(".button2").click(function(){
    $(".songs2").slideToggle(500);
});
$(".button3").click(function(){
    $(".songs3").slideToggle(500);
});
$(".button4").click(function(){
    $(".songs4").slideToggle(500);
});

$("#hide-me").ready(function(){
    $("#hide-me").hide();
  });

//funktion för att visa submeny med id sub-farger
$("#farger").click(function(){
    $("#sub-farger").slideToggle(500);
    
});
//funktion för att visa submeny med id sub-logo
$("#logo").click(function(){
    $("#sub-logo").slideToggle(500);
    
});

//funktion för att sortera svarta farger
$(".svart").click(function(){
    $(" .gallery2, .gallery4,.gallery6,.gallery8,.gallery10").show(500);
    $(".gallery1, .gallery3,.gallery5,.gallery7,.gallery9").hide(500);
    
});
//funktion för att sortera vita farger
$(".vit").click(function(){
    $(" .gallery1, .gallery3,.gallery5,.gallery7,.gallery9").show(500);
    $(".gallery2, .gallery4,.gallery6,.gallery8,.gallery10").hide(500);
    
});
//funktion för att sortera logo med Skalle eld
$(".eld").click(function(){
    $(" .gallery1, .gallery2, .gallery7, .gallery8").show(500);
    $(".gallery9, .gallery3, .gallery5,.gallery4,.gallery6,.gallery10").hide(500);
    
});
//funktion för att sortera logo med Skalle
$(".skalle").click(function(){
    $(" .gallery4, .gallery9, .gallery3, .gallery10").show(500);
    $(".gallery1, .gallery5, .gallery2,.gallery8,.gallery6,.gallery7").hide(500);
    
});
//funktion för att sortera logo bokstaver
$(".ttletter").click(function(){
    $(" .gallery5,.gallery6 ").show(500);
    $(".gallery1, .gallery4, .gallery9, .gallery3, .gallery10, .gallery2,.gallery8,.gallery7").hide(500);
    
});
//funktion för att sortera koppar
$("#kop").click(function(){
    $(".gallery8,.gallery7, .gallery9, .gallery10").show(500);
    $(".gallery5,.gallery6, .gallery1, .gallery4,  .gallery3,.gallery2").hide(500);
    
});
//funktion för att sortera alla tshirt
$("#tshirt").click(function(){
    $(".gallery5,.gallery6, .gallery1, .gallery4,  .gallery3,.gallery2").show(500);
    $(".gallery8,.gallery7, .gallery9, .gallery10").hide(500);
    
});
//funktion för att visa alla varorna igen
$("#all").click(function(){
    $(".gallery8,.gallery7, .gallery9, .gallery5,.gallery6, .gallery1, .gallery4,  .gallery3, .gallery2, .gallery10").show(500);
    
});
