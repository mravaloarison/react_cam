import Webcam from "react-webcam";
import { useState } from "react";

function App() {
  const [isCameraOn, setIsCameraOn] = useState(false);

  const handleCamera = () => {
    setIsCameraOn(!isCameraOn);
  }

  return (
    <div className="App">
      <button onClick={handleCamera}>
        {isCameraOn ? "Turn off camera" : "Turn on camera"}
      </button>
      {isCameraOn && <Webcam />}
    </div>
  );
}

export default App;
