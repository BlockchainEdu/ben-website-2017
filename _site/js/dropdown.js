 jQuery(document).ready(function() {
// Hide the div
jQuery('#reveal').hide();
jQuery('.rv_button').click(function(e){
e.preventDefault();jQuery("#reveal").slideToggle();
jQuery('.rv_button').toggleClass('opened closed');
});
});