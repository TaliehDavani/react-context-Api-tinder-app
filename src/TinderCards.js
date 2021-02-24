import React, { useState, useEffect } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import brad from "./assets/brad-pitt.jpg";
import james from "./assets/james-stewart.jpg";
import marilyn from "./assets/marilyn-monroe.jpg";
import ingrid from "./assets/ingrid-bergman.jpg";
import clark from "./assets/clark-gable.jpg"
import databse from "./firebase";


function TinderCards() {
  const [people, setPeople] = useState([
    
    { name: "Ingrid", url: `${ingrid}` },
    { name: "James", url: `${james}` },
    { name: "Brad", url: `${brad}` },
    { name: "Marilyn", url: `${marilyn}` },
    { name: "Clark", url: `${clark}` },
  ]);

  //Piese of code which runs based on a condition
  /* useEffect(() => {
  const unsubscribe = database
  .collection("people")
  .onSnapshot((snapshot) =>
   setPeople(snapshot.docs.map((doc) => doc.data()))
   );
  return () => {
  this is the cleanup...
   unsubscribe();
   };
  }, []);*/

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
