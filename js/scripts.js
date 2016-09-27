$(document).ready(function() {
 $("form#favoritethings").submit(function(event) {
   var music = $("input#favorite-music").val();
   var animal = $("input#favorite-animal").val();
   var sport = $("input#favorite-sport").val();





   var yourFavoriteThings = [music, animal, sport];
    $("ul#favoritethings").append("<li>" + yourFavoriteThings[0] + "</li>");
    $("ul#favoritethings").append("<li>" + yourFavoriteThings[1] + "</li>");
    $("ul#favoritethings").append("<li>" + yourFavoriteThings[2] + "</li>");
     event.preventDefault();

 });
});
