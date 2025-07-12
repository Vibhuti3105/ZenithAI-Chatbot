import "./Main.css";
import { assets } from "../../assets/assets";
import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";

// const Main = () => {
  // destructuring the object of context

  const Main = ({ nightMode, setNightMode }) => {

  const {
    input,
    setInput,
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
  } = useContext(Context);

  // // ✅ Night Mode toggle state
  // const [nightMode, setNightMode] = useState(false);

  const handleCardClick = (prompt) => {
    setInput(prompt);
    setRecentPrompt(prompt);
    setPrevPrompts([prompt, ...prevPrompts]);
    onSent(prompt);
  };

  return (
    <>
      {/* <div className="main">
        <div className="nav">
          <p
            style={{ cursor: "pointer" }}
            onClick={() => window.location.reload()}
          >
            Gemini
          </p>
          <img src={assets.user_icon} alt="UserIcon" />
        </div> */}
        <div className={`main ${nightMode ? "night" : ""}`}>
        <div className="nav">
          <p
            style={{ cursor: "pointer" }}
            onClick={() => window.location.reload()}
          >
            Zenith AI
          </p>

          {/* ✅ Top-Right Night Mode Toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              onClick={() => setNightMode(!nightMode)}
              className="night-toggle"
              title="Toggle Night Mode"
            >
              {nightMode ? "☀️" : "🌙"}
            </button>
            <img src={assets.user_icon} alt="UserIcon" />
          </div>
        </div>
         
        <div className="main-container">
          {!showResult ? (
            <>
              <div className="greet">
                <p>
                  <span>Hello, Vibhuti.</span>
                </p>
                <p>How can I help you today?</p>
              </div>
              <div className="cards">
                <div
                  className="card"
                  onClick={() =>
                    handleCardClick(
                      "Suggest beautiful places to visit in Himachal Pradesh."
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  <p>Suggest beautiful places to visit in Himachal Pradesh.</p>
                  <img src={assets.compass_icon} alt="CompassIcon" />
                </div>
                <div
                  className="card"
                  onClick={() =>
                    handleCardClick(
                      "What are the best time management tips for students?"
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  <p>What are the best time management tips for students?</p>
                  <img src={assets.bulb_icon} alt="BulbIcon" />
                </div>
                <div
                  className="card"
                  onClick={() =>
                    handleCardClick(
                      "Create a study plan to learn Python in 4 weeks."
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  <p>Create a study plan to learn Python in 4 weeks.</p>
                  <img src={assets.code_icon} alt="CodeIcon" />
                </div>
                <div
                  className="card"
                  onClick={() =>
                    handleCardClick(
                      "Recommend a 10-minute daily meditation routine."
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  <p>Recommend a 10-minute daily meditation routine.</p>
                  <img src={assets.bulb_icon} alt="BulbIcon" />
                </div>
              </div>
            </>
          ) : (
            <div className="result">
              <div className="result-title">
                <img  src={assets.user_icon} alt="UserIcon" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.zenith} alt="ZenithIcon" />
                {loading ? (
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          )}

          <div className="main-bottom">
            <div className="search-box">
              <input
                onChange={(event) => setInput(event.target.value)}
                value={input}
                type="text"
                placeholder="Enter a prompt here"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && input.trim()) {
                    e.preventDefault();
                    onSent();
                  }
                }}
              />
              <div className="search-box-icon">
                <img src={assets.gallery_icon} alt="GalleryIcon" />
                <img src={assets.mic_icon} alt="MicIcon" />
                {input ? (
                  <img
                    onClick={() => onSent()}
                    src={assets.send_icon}
                    alt="SendIcon"
                  />
                ) : null}
              </div>
            </div>
            <p className="bottom-info">
              ZenithAI may display inaccurate info, including about people, so
              double-check its responses.{" "}
              <a href="https://support.google.com/gemini/answer/13594961?visit_id=638488069169109558-2959892032&p=privacy_notice&rd=1#privacy_notice">
                Your privacy & Gemini Apps
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
