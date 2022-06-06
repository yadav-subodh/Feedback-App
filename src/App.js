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
import { FeedbackProvier } from "./context/FeedbackContext";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <FeedbackProvier>
        <Router>
          <Header />

          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <div>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />

                    <AboutIconLink />
                  </div>
                }
              ></Route>

              <Route path="/about" element={<AboutPage />}></Route>
              <Route path="/post/*" element={<Post />}></Route>
            </Routes>
          </div>
        </Router>
      </FeedbackProvier>
    </>
  );
}

export default App;
