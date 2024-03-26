
import css from './Feedback.module.css';

const Feedback = ({ notes, total, positiveFeedback }) => {

  return (
    <ul className={css.nonelist} >
        <li>Good: {notes.good}</li>
        <li>Neutral: {notes.neutral}</li>
        <li>Bad: {notes.bad}</li>
        <li>Total: {total}</li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
    
  );
};




export default Feedback;
