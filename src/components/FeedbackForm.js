import Card from "./shared/Card";
import { useState } from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { isDisabled } from "@testing-library/user-event/dist/utils";

function FeedbackForm({handleAdd}) {
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10)
  
  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("text must be at least 10 characters");
      setBtnDisabled(true);
    } else{
        setMessage(null)
        setBtnDisabled(false)
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {

    e.preventDefault()
    if(text.trim().length>10){
        const newFeedBack ={
            text,
            rating
        }
        handleAdd(newFeedBack)
        setText('')
    }
  }
  
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2> How would you rate your sevice with us</h2>
        {/* @todo -  rating select component */}
        <RatingSelect select={(rating) => setRating(rating)}/>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            name=""
            id=""
            placeholder="write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
