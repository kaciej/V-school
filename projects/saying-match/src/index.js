import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import components
import CustomNavbar from "./components/navbar";
import Peeps from "./components/peeps.js";
import PeepsList from "./containers/peepsList.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";

class App extends React.Component {
  render() {
    let myLinks = [
  {
    text: "STAND UP",
    link: "http://www.robin-williams.net/comedygraphy.php"
  },
  {
    text: "PLAYS",
    link: "http://www.robin-williams.net/plays.php"
  },
  {
    text: "FILMS",
    link: "http://www.robin-williams.net/filmography.php"
  },
  {
    text: "DEATH",
    link: "http://www.hollywoodreporter.com/news/robin-williams-autopsy-confirms-death-746194"
  },
    {
    text: "PLAYS",
    link: "http://www.robin-williams.net/plays.php"
  }
];
let robinInfo = [
  {
    img: "images/hook.png",
    movie: "Hook",
    name: "Peter Panning",
    quote: "Oh, no. To live... to live would be an awfully big adventure."
  },
  {
    img: "images/mrs-doubtfire.png",
    movie: "Mrs. Doubtfire",
    name: "Euphegenia Doubtfire",
    quote: "Sink the sub. Hide the weasel. Park the porpoise. A bit of the old Humpty Dumpty, Little Jack Horny, the Horizontal Mambo, hmm? The Bone Dancer, Rumpleforeskin, Baloney Bop, a bit of the old Cunning Linguistics?"
  },
  {
    img: "images/good-will-hunting.png",
    movie: "Good Will Hunting",
    name: "Sean McGuire",
    quote: "You'll have bad times, but it'll always wake you up to the good stuff you weren't paying attention to."
  },
  {
    img: "images/dead-poets.png",
    movie: "Dead Poets Society",
    name: "John Keating",
    quote: "We don't read and write poetry because it's cute. We read and write poetry because we are members of the human race. And the human race is filled with passion. And medicine, law, business, engineering, these are noble pursuits and necessary to sustain life. But poetry, beauty, romance, love, these are what we stay alive for."
  },
  {
    img: "images/aladdin-genie.png",
    movie: "Aladin",
    name: "Genie",
    quote: "You'll never have a friend like me."
  },
  {
    img: "images/Good-Morning-Vietnam.png",
    movie: "Good Morning Vietnam",
    name: "Adrian Cronauer",
    quote: "Goooooooood morning Vietnam! It's 0600 hours. What does the 'O' stand for? O my God, it's early! Speaking of early, let's hear it for that Marty Lee Drywitz. Silky smooth sounds, making me sound like Peggy Lee..."
  }
]
    return (
      <div>
        <CustomNavbar brand="Robin Williams" links={myLinks}/>
        <Header />
        <PeepsList works={robinInfo}/>
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(
  <App/>, document.querySelector("#root"))
