import './App.css';
import {useState} from 'react';
import Card from "./components/Card";
import backgroundImg from "./images/background.png"

const App = () => {
  const [studyList, setStudyList] = useState([
  { question:"Good morning", answer:"صباح الخير"},
  { question:"Thank you", answer:"شكرًا لك"},
  { question:"How are you?", answer:"كيف حالك"},
  { question:"What is your name?", answer:"ما اسمك؟"},
  { question:"God willing", answer:"إن شاء الله‎"},
  { question:"Let's go", answer:"يللا"},
  { question:"See you later", answer:"إلى اللقاء"},
  { question:"You’re welcome", answer:"عفواً (Afwan)"},
  { question:"Yes", answer:"نعم"},
  { question:"No", answer:"لا"},
  ]);

  const [index, setIndex] = useState(0);
  const [isTurned, setisTurned] = useState(false);


  const handleCardClick = () => {
    setIsTurned(!isTurned); // Toggle the flipped state
  };

  const handleNextQuestion = () => {
    if (index === studyList.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1)
    }
    setisTurned(false);
  };

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
        />
      </div>
      <div>
        <button id="next" onClick={handleNextQuestion}> → </button>
      </div>

    </div>
  );
}

export default App;