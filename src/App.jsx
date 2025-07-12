// import Main from "./components/Main/Main";
// import Sidebar from "./components/Sidebar/Sidebar";

// function App() {
//   return (
//     <>
//       <Sidebar />
//       <Main />
//     </>
//   );
// }

// export default App;
import { useState, useEffect } from "react";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [nightMode, setNightMode] = useState(() => {
    return localStorage.getItem("nightMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("nightMode", nightMode);
  }, [nightMode]);

  return (
    <div className={`app-container ${nightMode ? "night" : ""}`}>
      <Sidebar nightMode={nightMode} />
      <Main nightMode={nightMode} setNightMode={setNightMode} />
    </div>
  );
}

export default App;

