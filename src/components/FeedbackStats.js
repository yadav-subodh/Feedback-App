import React from "react";
import FeedbackContext from "../context/FeedbackContext";
import { useContext } from "react";
function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  let Average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  Average = Average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating:{isNaN(Average) ? 0 : Average} </h4>
    </div>
  );
}

export default FeedbackStats;
