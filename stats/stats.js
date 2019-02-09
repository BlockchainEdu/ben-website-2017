var stats = [
["northwestern-university.png", "Northwestern University", "15", "USA"],
["boston-college.png", "Boston College", "8", "USA"],
["ryerson-university.png", "Ryerson University", "7", "Canada"],
["temple-university.png", "Temple University", "7", "USA"],
["bits-pilani.png", "BITS Pilani - Goa Campus", "6", "India"],
["columbia-university.png", "Columbia University", "6", "USA"],
["tufts-university.png", "Tufts University", "6", "USA"],
["university-of-south-florida.png", "University of South Florida", "6", "USA"],
["mit.png", "MIT", "5", "USA"],
["carnegie-mellon-university.png", "Carnegie Mellon University", "5", "USA"],
["northeastern-university.png", "Northeastern University", "5", "USA"],
["university-of-miami.png", "University of Miami", "5", "USA"],
];

var stats_2 = [
["rochester-institute-of-technology.png", "RIT", "117", "USA"],
["uc-berkeley.png", "UC Berkeley", "84", "USA"],
["university-of-michigan.png", "University of Michigan", "78", "USA"],
["mit.png", "MIT", "32", "USA"],
["university-of-delaware.png", "University of Delaware", "25", "USA"],
["university-of-florida.png", "University of Florida", "19", "USA"],
["northwestern-university.png", "Northwestern University", "15", "USA"],
["university-of-wisconsin.png", "University of Wisconsin", "12", "USA"],
["boston-college.png", "Boston College", "8", "USA"],
["ryerson-university.png", "Ryerson University", "7", "Canada"],
["temple-university.png", "Temple University", "7", "USA"],
["bits-pilani.png", "BITS Pilani - Goa Campus", "6", "India"],
["columbia-university.png", "Columbia University", "6", "USA"],
["tufts-university.png", "Tufts University", "6", "USA"],
["university-of-south-florida.png", "University of South Florida", "6", "USA"],
["carnegie-mellon-university.png", "Carnegie Mellon University", "5", "USA"],
["northeastern-university.png", "Northeastern University", "5", "USA"],
["university-of-miami.png", "University of Miami", "5", "USA"],
["carleton-university.jpg", "Carleton University", "3", "Canada"],
["harvard-university.jpg", "Harvard University", "3", "USA"],
["iit-bombay.png", "IIT Bombay", "3", "USA"],
["upr-bayamon.png", "UPR Bayamon", "3", "Puerto Rico"],
["rutgers-university.png", "Rutgers University", "3", "USA"],
["indiana-university.jpg", "Indiana University", "2", "USA"],
["tulane-university.png", "Tulane University", "2", "USA"],
["bentley-university.png", "Bentley University", "2", "USA"],
["gonzaga-university.png", "Gonzaga University", "2", "USA"],
["harvard-business-school.png", "Harvard Business School", "2", "USA"],
["harvard-law-school.png", "Harvard Law School", "2", "USA"],
["university-of-mississippi.png", "University of Mississippi", "2", "USA"],
["bits-pilani.png", "BITS Pilani - Hyderabad Campus", "1", "India"],
["cuny-brooklyn-college.png", "CUNY Brooklyn College", "1", "USA"],
["hkust.png", "HKUST", "1", "USA"],
["hofstra-university.png", "Hofstra University", "1", "USA"],
["howard-university.png", "Howard University", "1", "USA"],
["university-of-chicago.jpg", "University of Chicago", "1", "USA"],
];

var stats_regions = [
["Boston", "1"],
];

run();

function run() {

   var stats_display = '';
   var count = 0;
   var arrayLength = stats.length;

   for (var i = 0; i < arrayLength; i++) {
      var rank = count + 1;
      stats_display += `
      <div class="row" style="">
        <div class="col s12 m1 center-align offset-m2">`+rank+`</div>
        <div class="col s12 m1 center-align"><img src="/assets/logos/seals/`+stats[count][0]+`" width="100%"></div>
        <div class="col s12 m2 center-align">`+stats[count][1]+`</div>
        <div class="col s12 m2 center-align">`+stats[count][2]+`</div>
        <div class="col s12 m2 center-align">`+stats[count][3]+`</div>
      </div>
   `
      count += 1;
   }

   document.getElementById('stats').innerHTML = stats_display;

}