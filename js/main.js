console.log("im working")
$('.fa-html5 ').on('click',function() {
    console.log("html")
    $('.desTitle').text("HTML")
    $('.des').text("Throughout my time as a Business Analyst I spent a fraction of my time Testing and making updates to the Benefits Portal Website. My knowledge of HTML increased with the education I have recieved at the UT coding academy.")
  });

  $('.fa-css3-alt').on('click',function() {
    console.log("css")
    $('.desTitle').text("CSS")
    $('.des').text("My experience at the UT coding camp enhanced by abilities in CSS. Styling designs and having the free range of being creative is one of my favortie aspects of Web Development")
  });

  $('.fa-js').on('click',function() {
    console.log("javaScript")
    $('.desTitle').text("JavaScript")
    $('.des').text("My experience at the UT coding camp enhanced by abilities in JavaScript. I have Project examples below that showcase some of my skills using this coding language.")
  });

  $('.fa-node-js').on('click',function() {
    console.log("Node. JS")
    $('.desTitle').text("NODE")
    $('.des').text("My experience at the UT coding camp enhanced by abilities in Node. We enhanced our skills in Javascript learning Node. Project examples below.")
  });
  
  $('.fa-language').on('click',function() {
    console.log("Spanish")
    $('.desTitle').text("Communication")
    $('.des').text("I have been practicing Spanish for 3 years, I can communicate effectively in Spanish. I can read, write, and speak at an intermidate level. ")
  });

  $('.fa-git-alt').on('click',function() {
    console.log("Terminal")
    $('.desTitle').text("Git Bash/Terminal")
    $('.des').text("Throughout the Bootcamp we have been utilizing Git Bash/Terminal for colloabrative projects and for commiting changes with our code to Git Hub. Take a look at my GitHub Account to see my commit history for each project" )
  });

  $('.sql').on('click',function() {
    console.log("sql")
    $('.desTitle').text("MicroSoft SQL")
    $('.des').text("SQL is the foundation software that I use at Empyrean Benefits Solutions, We use SQL everyday for aggregating data for clients, building reports, and analyzing data for our vendors and clients" )
  });


//   

if ($(window).width() < 960) {

   
 }
 else {
    ScrollReveal().reveal('.d1', {distance:'-200px' ,duration:500})
    ScrollReveal().reveal('.navSec', {distance:'-100px' ,duration:500,})
    ScrollReveal().reveal('.beginning', {distance:'100px' ,duration:1500,})
   
    ScrollReveal().reveal('.d2', {distance:'-200px' ,duration:700})
    ScrollReveal().reveal('.d3', {distance:'-200px' ,duration:900})
    ScrollReveal().reveal('.d4', {distance:'-200px' ,duration:1100})
    ScrollReveal().reveal('.up', {distance:'200px' ,duration:900, delay:300})
    ScrollReveal().reveal('.down', {distance:'-200px' ,duration:900,  delay:300})
 }




 // weather API


 const queryURL = "https://dataservice.accuweather.com/forecasts/v1/daily/1day/351197?apikey=%20IeOsHUbDMuyIriwI6Ra2gWcG56IaA0Qn"
 // IeOsHUbDMuyIriwI6Ra2gWcG56IaA0Qn

 $.ajax({
 url: queryURL,
 method: "GET"
}).then(function(response) {
 const iconCode = response.DailyForecasts[0].Day.Icon
 let iconUrl = `https://developer.accuweather.com/sites/default/files/${iconCode}-s.png`
 const iconCodeN = response.DailyForecasts[0].Night.Icon
 let iconUrlN = `https://developer.accuweather.com/sites/default/files/${iconCodeN}-s.png`
 console.log(response);
 
 $('#tempMin').html("LOW " + response.DailyForecasts[0].Temperature.Minimum.Value +  "&#176" + " F ");
 $('#temp').html("HIGH " + response.DailyForecasts[0].Temperature.Maximum.Value  +  "&#176" + " F");
 $('#iconPhrase').text(response.DailyForecasts[0].Day.IconPhrase);
 // $('#icon').html("<img src='"  + iconUrl  + "'>")


 $('#iconPhraseN').text(response.DailyForecasts[0].Night.IconPhrase);
 // $('#iconN').html("<img src='"  + iconUrlN  + "'>")

 if(iconCode < 10 ){
   let iconUrl = `https://developer.accuweather.com/sites/default/files/0${iconCode}-s.png`
   $('#icon').html("<img src='"  + iconUrl  + "'>")

 } else {
   let iconUrl = `https://developer.accuweather.com/sites/default/files/${iconCode}-s.png`
   $('#icon').html("<img src='"  + iconUrl  + "'>")

 }

 if(iconCodeN < 10 ){
   let iconUrlN = `https://developer.accuweather.com/sites/default/files/0${iconCodeN}-s.png`
   $('#iconN').html("<img src='"  + iconUrlN  + "'>")

 } else {
   let iconUrlN = `https://developer.accuweather.com/sites/default/files/${iconCodeN}-s.png`
   $('#iconN').html("<img src='"  + iconUrlN  + "'>")

 }


 n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

});