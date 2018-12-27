var stats = {};
stats['MIT'] = ['/assets/logos/seals/mit.png',14,'USA'];
stats['Northwestern University'] = ['/assets/logos/seals/northwestern-university.png',10,'USA'];
stats['BITS Pilani - Goa Campus'] = ['/assets/logos/seals/bits-pilani.png',7,'India'];
stats['Ryerson University'] = ['/assets/logos/seals/ryerson-university.png',5,'USA'];
stats['Boston College'] = ['/assets/logos/seals/boston-college.png',4,'USA'];
stats['Columbia University'] = ['/assets/logos/seals/columbia-university.png',4,'USA'];
stats['Tufts University'] = ['/assets/logos/seals/tufts-university.png',4,'USA'];

window.onload = function() {
  var result = document.getElementById('total-students');
  var mit = document.getElementById('num-of-students');
  var mitprogress = document.getElementById('progressbar');
  var test = document.getElementById('test');
  var sum = 0;
  var all = "";

  for(key in stats){
    var value = stats[key];
    console.log(value);
    sum += value;
  }

  var color = 1;
  
  var rank = 0;

  for(key in stats){
    var image = stats[key][0];
    console.log(image);
    var value = stats[key][1];
    console.log(value);
    var country = stats[key][2];

    var school = key;
    var schoolimage = image;
    var schoolvalue = value;

    var decimal = value / 15;
    var percent = (decimal*100).toFixed(1) + "%";

    var backgroundcolor = "";

    if (color % 2 == 0){
      backgroundcolor = "lemonchiffon";
    }

    var one = '<div class="row" style="background-color: ' + backgroundcolor + '">'
     + '<div class="col s12 m1 center-align offset-m1">' + rank + '</div>'
     + '<div class="col s12 m1 center-align"><img src="' + schoolimage + '" height="75px"></div>'
     + '<div class="col s12 m2 center-align">' + school + '</div>'
     + '<div class="col s12 m2 center-align">'+schoolvalue+'</div>'
     + '<div class="col s12 m2 center-align">' + country + '</div>'
     + '</div>';

    rank += 1;
    all += one;
    color += 1;
  }

  test.innerHTML = all;

  mit.innerHTML = stats['mit'];
//  mitprogress.style.padding = 10px;
  var number = stats['mit'] / sum;
  console.log(number);

  var pct = (number*100).toFixed(1) + "%";

  $('#progressbar>div').css('width', pct);

  console.log(sum);
  result.innerHTML = sum; 

}