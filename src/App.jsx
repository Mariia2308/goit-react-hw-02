import { useState } from 'react';
import { useEffect } from 'react';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Description from './components/Description/Description';
import Notification from './components/Description/Notification';
import css from './App.module.css';

function App() {  
  const initialNote = { good: 0, neutral: 0, bad: 0 }
// States
  const [feedbackGiven, setFeedbackGiven] = useState(false);
  
//Local Storage parcing and back
  const [TapNote, setTapNote] = useState(() => {
    const stringifyNotes = localStorage.getItem("noteVal")
    const parsedNotes = JSON.parse(stringifyNotes) ?? initialNote
    return parsedNotes
  });

  useEffect(() => {
    localStorage.setItem('noteVal', JSON.stringify(TapNote))
  }, [TapNote])

//calculations
  
  const clickTapNote = (note) => {
    setTapNote({ ...TapNote, [note]: TapNote[note] + 1 })
    setFeedbackGiven(true);
  }
  const totalFeedback = TapNote.good + TapNote.neutral + TapNote.bad;
  const positiveFeedback = Math.round(((TapNote.good + TapNote.neutral) / totalFeedback) * 100)


//buttons
  const toggleOptionsVisibility = () => {
  }

  const handleResetOtions = () => {
    setTapNote(initialNote)
    setFeedbackGiven(false); 
  }

  return (
    <div className={css.wrapper}>
      <Description />
        <div className="card">
          <Options onToggleOption={toggleOptionsVisibility}
            clickTapNote={clickTapNote}
            resetBtn={handleResetOtions}
            total={totalFeedback}
        />
      </div>
      { (feedbackGiven &&
          <Feedback notes={TapNote} total={totalFeedback} positiveFeedback = {positiveFeedback} />
        
      )}
      {totalFeedback === 0 && <Notification /> }
    </div>
  );
}

export default App;
