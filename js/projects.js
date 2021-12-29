class HoverPic {
  constructor(className, title, frames, description, imgSrc, vchref, vshref) {
    this.className = className;
    this.title = title;
    this.frames = frames;
    this.description = description;
    this.imgSrc = imgSrc;
    this.vchref = vchref;
    this.vshref = vshref;
  }
}

//New Project constructors
rpg = new HoverPic(
  "rpg",
  "Pokemon RPG",
  "Used: Javascript, HTML, CSS,",
  "Test your memory with this fun Clicky Application. Click on each character only once. Characters are shuffled everytime. Can you get them all?",
  "./images/projectImages/Pokemon RPG.gif",
  "https://github.com/kibell/pokemon-rpg-game",
  " https://kibell.github.io/pokemon-rpg-game/",
  "block",
  "none"
);
giphy = new HoverPic(
  "giphy",
  "Giphy API",
  "Used: Jquery, Javascript, Node, Spotify API,OMDB API, Bands API",
  "Giphy Text",
  "./images/projectImages/giphy API.gif",
  "https://github.com/kibell/GiphyAPI",
  "https://kibell.github.io/GiphyAPI/",
  "block",
  "none"
);

ctrack = new HoverPic(
  "ctrack",
  "Corona Tracker",
  "Used: Jquery, Javascript, Node, Spotify API,OMDB API, Bands API",
  "Corona Text",
  "./images/projectImages/ctrack.gif",
  "https://github.com/kibell/CoronaTracker",
  "https://warm-lowlands-22039.herokuapp.com/"
);

liri = new HoverPic(
  "liri",
  "Liri Bot",
  "Used: Jquery, Javascript, Node, Spotify API,OMDB API, Bands API",
  "Node Liri app uses 3 different API's to give the user information on specific requests using very specific syntax using the Terminal. This Application uses a combination of node and javascript for its functionality.",
  "./images/projectImages/Liri.gif",
  "https://github.com/kibell/LIRI",
  "https://warm-lowlands-22039.herokuapp.com/"
);

triviaProject = new HoverPic(
  "triviaProject",
  "Netflix Clone App",
  "Used: React, Javascript, Firebase, HTML, CSS",
  "This Project is a replica of Netflix, Site is deployed with Heroku, please allow time to load.",
  "./images/projectImages/Netflix Clone.gif",
  "https://github.com/kibell/Netflix-Clone",
  "https://warm-lowlands-22039.herokuapp.com/"
);

bellSprout = new HoverPic(
  "bellSprout",
  "BellSprout Web Design",
  "Used: Javascript, HTML, CSS, WordPress",
  "Designed this Website using wordpress.",
  "./images/projectImages/Bell.gif",
  "",
  "https://bellsproutdesigns.com/"
);

meetMe = new HoverPic(
  "meetMe",
  "Meet Me Geocoder App",
  "Used: Javascript, Google API, HTML, CSS",
  "Meet me Uses Google's API to find the midpoint between two locations.",
  "./images/projectImages/Document.gif",
  "https://github.com/kibell/Meetme",
  "https://kibell.github.io/Meetme/Address.html"
);

orgSpace = new HoverPic(
  "orgSpace",
  "Org Spaces",
  "Used: Javascript, HTML, CSS, Express, Sequlize, SQL, handlebars ",
  "Allows the user to enter and store items in a database so that the user will always know where their items are located.",
  "./images/projectImages/organized spaces2.gif",
  "https://github.com/kibell/My-Spaces",
  "https://orgspaces.herokuapp.com/"
);

triviaR = new HoverPic( 
    'triviaR',
    "Timed Trivia App",
    "Used: Javascript, HTML, CSS",
    "Try out this timed Quiz game. How well is your comic knowledge?",
     './images/projectImages/Trivia.gif',
    "https://github.com/kibell/Trivia-Game-",
    " https://kibell.github.io/Trivia-Game-/"
     );
     
clicky = new HoverPic(
  "clicky",
  "Anime Clicky App",
  "Used: Javascript, HTML, CSS,",
  "Test your memory with this fun Clicky Application. Click on each character only once. Characters are shuffled everytime. Can you get them all?",
  "./images/projectImages/React App.gif",
  "https://github.com/kibell/Clicky-Game-React",
  " https://naughty-allen-95382a.netlify.app/"
);


function hoverPi(id) {
  //List of project id's stored in an object
  const projectObj = {
    rpg,
    giphy,
    ctrack,
    liri,
    triviaProject,
    bellSprout,
    meetMe,
    orgSpace,
    triviaR,
    clicky,
  };

  //code for hovering over images, Will display cooresponding information to the UI

  for (let proj in projectObj) {
    let projLib = "";

    if (id === projectObj[proj].className) {
      projLib = projectObj[proj];
      $(".projectTitle").text(projectObj[proj].title);
      $(".frames").text(projectObj[proj].frames);
      $(".description").text(projectObj[proj].description);
      $(".projectImg").attr("src", projectObj[proj].imgSrc);
      $(".viewCode").text("View Code");
      $(".viewSite").text("Visit Site");
      document.getElementById("viewCode").href = projectObj[proj].vchref;
      document.getElementById("viewSite").href = projectObj[proj].vshref;
      document.getElementById("projectImg").style.display = "block";
      document.getElementById("vc").style.display = "block";
      document.getElementById("vs").style.display = "block";
    } else {
    }
  }
}