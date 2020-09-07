export const projects = [{
  title: "Architecture Portfolio",
  img: "iconArch.jpg",
  website: "https://edytamakowiec.github.io/",
  code: "https://github.com/Orawko/ArchitecturePortfolio",
  info: {
    technologies: ["JavaScript", "React.js", "RWD"],
    date: "June 2020",
    description: "One-page responsive web application presenting architect's projects. \n\n" +
      "Features:\n" +
      "• Displaying and zooming project photos in responsive image lightbox\n" +
      "• Automatic scrolling to content when element is clicked in nav bar\n" +
      "• Floating return to top button\n" +
      "• Automatic language selection, based on browser default language\n" +
      "• Clicking on phone or email in \"Contact\" section, opens required application"
  }
}, {
  title: "Shape Generator",
  img: "iconArt.jpg",
  website: "https://7verr.csb.app/",
  code: "https://github.com/Orawko/Shape-generator",
  info: {
    technologies: ["JavaScript", "CSS", "HTML", "Algorithms"],
    date: "March 2020",
    description: "In this web application, you can draw shape using defined rules. There is also possibility to draw random shape using genetic algorithm.\n" +
      "\n" +
      "Algorithm steps:\n" +
      "• Initial population - generate random shapes using defined rules\n" +
      "• Natural selection - rate shapes from initial population and remove 1/4 with worst marks\n" +
      "• Crossover - divide shapes into pairs and add parts of them to new one\n" +
      "• Mutation - shapes after crossover are mutated with random intensity. Mutation changes some parts of shape\n" +
      "• New generation - after mutation new generation of shapes is created. They are rated and the best of them is displayed to user. Now this is our initial population."
  }
}, {
  title: "YourGuide - Mobile App",
  img: "iconGuide.jpg",
  website: "",
  code: "",
  info: {
    technologies: ["React Native", "Node.js", "Express.js", "Passport.js", "MySQL"],
    date: "June 2019",
    description: "Mobile application created with React Native that simplify booking of guides in tourist cities. There is also Node.js based server and relational MySQL database.\n" +
      "\n" +
      "There are two groups of users in the application: tourists and guides. Guides define their free dates and the cities in which they can guide.\n" +
      "Tourists can view guides' profiles, contact them and leave feedback."
  },
}, {
  title: "Other projects",
  img: "iconOthers.jpg",
  website: "https://github.com/Orawko",
  code: "",
  info: {
    technologies: ["Java", "C++", "Scala", "Python", "Bash"],
    date: "From 2018",
    description: "Various projects, both own and related to the university. You can find there projects written in JavaScript and projects written in other languages. In many of them I created advanced algorithms or solved numerical methods problems."
  },
}]