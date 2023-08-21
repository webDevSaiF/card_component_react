import "./styles.css";
const cardData = [
  {
    name: "Monkey D. Luffy",
    description: `Monkey D. Luffy, also known as "Straw Hat Luffy" and commonly as "Straw
    Hat",is the founder and captain of the increasingly infamous and
    powerful Straw Hat Pirates, as well as the most powerful of its top
    fighters.He desires to find the legendary treasure left behind by the
    late Gol D. Roger and thereby become the Pirate King.`,
    skills: [
      { skill: "Optimistic", color: "pink" },
      { skill: "Funny", color: "orange" },
      { skill: "Loving", color: "cyan" },
      { skill: "Eating", color: "yellow" },
      { skill: "Good Hearted", color: "lime" }
    ],
    imgAvatar: "img/luffy.jpg"
  },
  {
    name: "Roronoa Zoro",
    description: `Roronoa Zoro is one of the two swordsmen of the Straw Hat Pirates. He is also known as the vice-captain of the Straw Hat Pirates as he was the 1st to join the Straw Hat Pirates and he is the second strongest member of the crew after Luffy. He is also the most loyal member to Luffy and respects him and his every decision.`,
    skills: [
      { skill: "Serious", color: "pink" },
      { skill: "Loyal", color: "orange" },
      { skill: "Drinking", color: "cyan" },
      { skill: "Strong", color: "yellow" },
      { skill: "Ambitious", color: "lime" }
    ],
    imgAvatar: "img/roronoa.jpg"
  }
];

export default function App() {
  return (
    <div className="App">
      <div className="cardContainer">
        {cardData.map((card) => (
          <div className="card">
            <Avatar name={card.name} imgAvatar={card.imgAvatar}></Avatar>
            <div className="cardData">
              <Intro name={card.name} description={card.description}></Intro>
              <div className="skillList">
                {card.skills.map((skill) => (
                  <SkillList skillObj={skill}></SkillList>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
function Avatar(props) {
  return <img className="avatar" src={props.imgAvatar} alt={props.name} />;
}
function Intro(props) {
  return (
    <div>
      <h1 className="headline">{props.name}</h1>
      <p className="bioText">{props.description}</p>
    </div>
  );
}
function SkillList(props) {
  const { skill, color } = props.skillObj;

  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <p>{skill}</p>
    </div>
  );
}
