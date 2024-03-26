import PropTypes from 'prop-types';
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

Feedback.propTypes = {
  notes: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    
  }).isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired
};


export default Feedback;
