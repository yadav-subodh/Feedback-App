import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure, want to delete ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedBack) => {
    newFeedBack.id = uuidv4();
    console.log(newFeedBack);
    setFeedback([newFeedBack, ...feedback]);
  };

  return (
    <>
      <Router>
        <Header />

        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats feedback={feedback} />
                  <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                  />

                  <AboutIconLink />
                </div>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/post/*" element={<Post />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
