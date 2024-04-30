import { useState } from 'react';
import { useEffect } from 'react';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Description from './components/Description/Description';
import Notification from './components/Description/Notification';
import css from './App.module.css';

function App() {  
  const initialNote = { good: 0, neutral: 0, bad: 0 }

  
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
  }
  const totalFeedback = TapNote.good + TapNote.neutral + TapNote.bad;
  const positiveFeedback = Math.round(((TapNote.good + TapNote.neutral) / totalFeedback) * 100)


//buttons
  const toggleOptionsVisibility = () => {
  }

  const handleResetOptions = () => {
    setTapNote(initialNote)
  }

  return (
    <div className={css.wrapper}>
      <Description />
        <div className="card">
          <Options onToggleOption={toggleOptionsVisibility}
            clickTapNote={clickTapNote}
            resetBtn={handleResetOptions}
            total={totalFeedback}
        />
      </div>
      { (<Feedback notes={TapNote} total={totalFeedback} positiveFeedback = {positiveFeedback} />
        
      )}
      {totalFeedback === 0 && <Notification /> }
    </div>
  );
}

export default App;
