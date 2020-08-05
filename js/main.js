
//work experience
$('.empyrean').on('click', function(){

$('.duty').html('<li> Here I work as a <span class="highlight"> Business analyst </span> I primarily work on project teams,  I Work in  <span class="highlight">cooperation </span> with my project managers Work on more than one project at a time and so must constantly reevaluate their priorities and deadlines</li> ' )

$('.duty2').html( '<li>I have to gain an understanding of the organization’s <span class="highlight">business processes </span> relevant to the clients Requirements. I Document standard procedures and find ways refine inefficiencies within the systems processes. <span class="highlight"> Documentation </span> serves as the guide for relaying information that ensures deliverables to our 3rd party vendors and clients are transmitted <span class="highlight> securely  </span>and meets deadlines.</li> <br>')
$('.duty3').html(' <li> I have to Brainstorm solutions for client requests, this includes but not limited to Web Designs, <span class="highlight"> system functionalities, </span> File Transitions etc.')
// 
$('.duty4').html('<li>During my role here I have gained experience in <br> <li><span class="highlight">SQL</span> </li> <li>Python</li> <li class="highlight"> HTML</li><li> <span class"highlight">Ticketing Systems</span> </li><li>MicroSoft Excel</li></li>')
// Flesh out the details of a business solution, which requires a good understanding of how technological solutions are implemented.</li> </ul>')
$('.expSwitch').attr('src', './images/emp.gif')


})

$('.logix').on('click', function(){

  $('.duty').html(' <li> I Managed employee schedules by creating itineraries for employees by identifying daily client requests and displaying efficient <span class ="highlight">time management </span>skills to ensure all appointments are met within the given restraints</li> <br> <li> <span class="highlight">Track trends</span> based on weekly volumes by maintaining and updating specific test types received daily</li> <br>')
  $('.duty2').html( '<li> I arranged and assisted <span class="highlight"> interactions </span> between rehabilitation centers, Clinics and Hospitals.Kept track of medical supplies, and ensured that our inventory was <span class="highlight"> sufficient</span> for daily client requests. </li>' )
  $('.duty3').html( '<li>  </li>' )
  $('.duty4').html( '<li> </li>' )

  $('.expSwitch').attr('src', './images/logix-logo.png')
  
  })


//education
$('.umhb').on('click', function(){
    $('.eduName').text("UMHB")
    $('.edutext').text("Major: Computer Information Systems")
    $('.gpatext').text("GPA: 3.01")
    $('.honor').text("Achievements")
    $('.alcolade').text("University Ambassador")
    $('.al2').text("NCAA Men's BasketBall")
    $('.al3').text("")
    $('.imgSwitch').attr('src', './images/umhb.jpg' )
    $('.cert').attr('src', './images/umhbcert.jpg')
    ScrollReveal().reveal('.imgSwitch', {distance:'-200px' ,duration:700})
})

$('.uot').on('click', function(){
    $('.eduName').text("University of Texas")
    $('.edutext').text("Coding Bootcamp Certificate Program")
    $('.imgSwitch').attr('src', './images/bootcamp.png' )
    $('.gpatext').text("Letter Grade: A-")
    $('.honor').text("Achievements")
    $('.alcolade').text("FullStack Certification")
    $('.al2').text("King of Code (API Project)")
    $('.al3').text("")
    $('.cert').attr('src', './images/UOTCert.png')
    ScrollReveal().reveal('.imgSwitch', {distance:'-200px' ,duration:700})
})




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