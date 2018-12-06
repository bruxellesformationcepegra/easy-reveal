// On capture la taille de la fenêtre
var windowHeight = $(window).height();

// On crée une fonction "apparait"
function apparait () {
  // Pour chaque élément qui a la classe .revealable on va faire des choses ...
  $( ".revealable" ).each(function() {
    // Déclaration de 2 variables,
    // fromTop pour connaître la distance qui sépare chaque élément du top
    // windowScroll pour connaître la distance de scroll parcourure
    var fromTop = $(this).offset().top;
    var windowScroll = $(window).scrollTop();
    // Test si le scroll + la hauteur de fenêtre -100px est plus grand ou égal à fromTop
    if ((windowScroll + (windowHeight - 100)) >= fromTop) {
    // Si c'est plus grand ou égal, on applique la classe revealed
      $(this).addClass('revealed');
    }
  });
}
// On appelle la fonction apparait une fois sans évènement
apparait();
// On appelle la fonction apparait quand on scroll 
$(window).on('scroll', function() {
  apparait();
})
// $(window).scroll(function () { 
//   apparait();
// });
// Et foilàààà