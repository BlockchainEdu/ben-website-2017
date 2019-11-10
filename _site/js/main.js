const loadCss = (href) => {
  $('<link>')
    .appendTo('head')
    .attr({
      type: 'text/css',
      rel: 'stylesheet',
      href: href
    })
}

/*
$(() => {
  loadCss('/components/header/header.css')
  loadCss('/components/footer/footer.css')
  $('#header').load('/components/header/header.html')
  $('#footer').load('/components/footer/footer.html')
})
*/

// Product Page

/*
function run() {

  if ( netlifyIdentity.currentUser() != null){
    console.log(0);
    console.log(netlifyIdentity.currentUser());
   document.getElementById('test').innerHTML = 'Logged In';
  } else {
    console.log(1);
   document.getElementById('test').innerHTML = 'Not Logged In';
 };

};

run();
*/