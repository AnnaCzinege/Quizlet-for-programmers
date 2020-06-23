import React from "react";
import {
  CardContainer,
  CardInner,
  CardFront,
  CardBack,
} from "./elements/FlashcardElements";

const Flashcard = () => {
  return (
    <div>
      <h1>Flashcards</h1>
      <CardContainer>
        <CardInner>
          <CardFront>
            <span>almonds</span>
          </CardFront>
          <CardBack>
            <span>almendras</span>
          </CardBack>
        </CardInner>
      </CardContainer>
    </div>
  );
};

export default Flashcard;