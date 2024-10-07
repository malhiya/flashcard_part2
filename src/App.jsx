import './App.css';
import {useState} from 'react';
import Card from "./components/Card";
import backgroundImg from "./images/background.png"
// { answer:"Good morning", queston:"صباح الخي"}
const App = () => {
  const [studyList, setStudyList] = useState([
  { answer:"Thank you", question:"شكرًا لك"},
  { answer:"How are you?", question:"كيف حالك"},
  { answer:"What is your name?", question:"ما اسمك؟"},
  { answer:"God willing", question:"إن شاء الله‎"},
  { answer:"Let's go", question:"يللا"},
  { answer:"See you later", question:"إلى اللقاء"},
  { answer:"You’re welcome", question:"عفواً"},
  { answer:"Yes", question:"نعم"},
  { answer:"No", question:"لا"},
  { answer:"Good morning", queston:"صباح الخي"}
  ]);

  const [index, setIndex] = useState(0);
  const [isTurned, setisTurned] = useState(false);
  const [guessInput, setGuessInput] = useState("");
  const [inputClass, setInputClass] = useState('default-input');



  const handleCardClick = () => {
    setisTurned(!isTurned); // Toggle the flipped state
  };

  const handleNextQuestion = () => {
    if (index === studyList.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    // reset card side to be on english first
    setisTurned(false);
    setInputClass('default-input');
    setGuessInput("");
  };

  const handlePrevQuestion = () => {
    if (index === 0) {
      return;
    } else {
      setInputClass('default-input');
      setGuessInput("");
      setIndex(index - 1); 
    }
    checkIsTurned(false); 
  };


  const handleInputAnswer = (e) => {
    setGuessInput(e.target.value);
  };

  const checkAnswer = () => {
    const realAnswer = studyList[index].answer.toLowerCase();
    const guess = guessInput.toLowerCase();
   
    if (realAnswer === guess) {
      setInputClass('valid-input'); 
    } else {
      setInputClass('invalid-input'); 
    }
  }

  return (

    <div className='App'>
      <div className='header'>
        <h1> Learn Arabic</h1>
        <h2>Common Arabic Phrases</h2>
        <h4>Cards: {studyList.length}</h4>
      </div>

      <div className='card' onClick={() => {handleCardClick(); }}>
        <Card 
          question={studyList[index].question}
          answer={studyList[index].answer}
          isTurned={isTurned}
          setIsTurned={setisTurned}
          onNext = {handleNextQuestion}
        />
      </div>

      <div className="input-area"> 
        <p>Type your answer here: </p>
        <input 
          type="text" 
          className={inputClass} 
          placeholder="Answer" 
          value={guessInput} 
          onChange={handleInputAnswer}>
        </input>
        <button id="submit-btn" onClick={checkAnswer}> Submit</button>
      </div>
      
      <br></br>



      <div>
        <button id="prev" onClick={handlePrevQuestion}> ← </button>
        <button id="next" onClick={handleNextQuestion}> → </button>
      </div>

    </div>
  );
}

export default App;