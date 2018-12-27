var stats = {};
stats['MIT'] = 15;
stats['Northwestern University'] = 11;
stats['Ryerson University'] = 5;
stats['Boston College'] = 5;
stats['Tufts University'] = 4;
stats['Columbia University'] = 4;
stats['University of Delaware'] = 3;
stats['Carleton University'] = 3;
stats['University of Puerto Rico'] = 3;
stats['IIT Bombay'] = 3;
stats['Temple University'] - 3;

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
  
  for(key in stats){
    var value = stats[key];
    console.log(value);

    var school = key;
    var schoolvalue = value;

    var decimal = value / 15;
    var percent = (decimal*100).toFixed(1) + "%";

    var one = '<div class="row"><div class="card white"><div class="card-content" style="color:#000!important"><span style="font-weight:600; display:inline">' + school + '</span><span class="number-of-students" style="font-weight:600; display:inline; float:right">'+schoolvalue+'</span><div id="progressbar"><div style="width:'+percent+'"></div></div></div></div></div>';

    all += one;
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
    /*
  
    var inputs = document.getElementsByClassName('number-of-students');
    var result = document.getElementById('total-students');
    var sum = 0; 

    for(var i=0; i<inputs.length; i++) {
        var ip = inputs[i];

        sum += parseInt(ip.value);

    }

    result.value = sum;
    result.innerHTML = sum;
*/