var contributors = [
["/assets/images/sathya-peri.jpg", "https://www.linkedin.com/in/gosathya/", "Sathya Peri"],
["/assets/images/erick-pinos.jpg", "https://www.twitter.com/erickpinos", "Erick Pinos"],
];

document.getElementById('contributors').innerHTML = "contributors_display";

run();



function run() {

   var contributors_display = '';
   var count = 0;

   for (var i = 0; i < contributors.length; i++) {
      contributors_display += `
      <a href="`+contributors[count][1]+`" target="_blank"><img src="`+contributors[count][0]+`" width="50px" style="border-radius: 50%;"></a>`
      count += 1;
   }

   document.getElementById('contributors').innerHTML = contributors_display;

}