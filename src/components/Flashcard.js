// Flashcard.js
import React, {useState} from 'react';
import '../styles/Flashcard.css';

const Flashcard = ({verse, verseReference, isFlipped}) => {
      //console.log('Flashcard props:', letter, verseReference, verse);
  const [flipped, setFlipped] = useState(isFlipped);

  const handleFlip = () => {
    setFlipped(!flipped);
  };


  return (
      <div className={`tinderCard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flashcard">
        <div className="question">
          <div className="content">
            <h1>{verse.charAt(0)}</h1>
          </div>
        </div>
        <div className="answer">
          <div className="content">
            <h2>{verseReference}</h2>
            <div className="verse">{isFlipped ? verse : 'Click Flip to see verse'}</div>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default Flashcard;

