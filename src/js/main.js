const loadCss = (href) => {
  $('<link>')
    .appendTo('head')
    .attr({
      type: 'text/css',
      rel: 'stylesheet',
      href: href
    })
}

$(() => {
  loadCss('/components/header/header.css')
  loadCss('/components/footer/footer.css')
  $('#header').load('/components/header/header.html')
  $('#footer').load('/components/footer/footer.html')
})
