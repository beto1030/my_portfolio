import React, { useState, useEffect, useRef } from 'react';
import Papa from 'papaparse';
import Flashcard from './Flashcard';
import '../styles/Flashcards.css';

const Flashcards = () => {
  const [bibleVerses, setBibleVerses] = useState([]);
  const [flashcards, setFlashcards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState([]);
  const tinderContainerRef = useRef();


  useEffect(() => {
      Papa.parse(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vT4RSZbkE2WL0AZeOc4SN9vDjbc8Ghst0uhJWZYwO8_kqLw3ZOEXjOck3jnUUianxSOyKOJA3aQR-Kh/pub?output=csv',
      {
        download: true,
        header: true,
        complete: function (results) {
          setBibleVerses(results.data);
        },
      }
    );
  }, []);
    

  useEffect(() => {
    if (bibleVerses.length > 0) {
      const newFlashcards = bibleVerses.map((verse, index) => (
        <Flashcard
          key={index}
          verse={verse.Verse}
          verseReference={verse['Verse Reference']}
          isFlipped={flippedCards.includes(index)}
          flip={() => handleFlip(index)}


        />
      ));
      setFlashcards(newFlashcards);
    }
  }, [bibleVerses, flippedCards]);


  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % bibleVerses.length);
    setFlippedCards([]); // Reset flipped cards when moving to the next card

  };

  const handlePrev = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + bibleVerses.length) % bibleVerses.length);
    setFlippedCards([]); // Reset flipped cards when moving to the previous card
  };
    

  const handleFlip = (index) => {
    if (!flippedCards.includes(index)) {
      setFlippedCards((prevFlipped) => [...prevFlipped, index]);
    } else {
      setFlippedCards((prevFlipped) => prevFlipped.filter((item) => item !== index));
    }
  };

return (
    <div className="flashcards-container">
      <h1>Flashcards</h1>
      <div className="flashcards-stack">
     {bibleVerses.length > 0 && flashcards[currentCardIndex]}
        
      </div>
      <div className="flashcard-buttons">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={() => handleFlip(currentCardIndex)}>Flip</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
     
    
     
  
);

};

export default Flashcards;
