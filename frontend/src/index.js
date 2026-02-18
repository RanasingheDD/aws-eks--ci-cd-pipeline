import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    axios.get("/api")
      .then(res => setMessage(res.data.message))
      .catch(err => setMessage("Error fetching backend"));
  }, []);

  return <h1>{message}</h1>;
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
