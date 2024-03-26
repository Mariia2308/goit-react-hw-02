
import { useEffect } from 'react';
import css from './Options.module.css';

const Options = ({ resetBtn, onToggleOption, clickTapNote, total }) => {
  
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.code === "Escape") {
        onToggleOption();
      }
    }

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onToggleOption]);

  return (
    <div className={css.cards}>
      <button className={css.btn} onClick={() => clickTapNote("good")}>Good</button>
      <button className={css.btn} onClick={() => clickTapNote("neutral")}>Neutral</button>
      <button className={css.btn} onClick={() => clickTapNote("bad")}>Bad</button>
      {total !== 0 && <button className={css.btn} onClick = { resetBtn } > Reset</button >}
    </div>
  );
};



export default Options;
