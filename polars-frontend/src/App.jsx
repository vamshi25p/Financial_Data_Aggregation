import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Financials from "./components/Financials";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function App() {
  const [dataFile, setDataFile] = useState(null);
  const handleClick = (file) => {
    setDataFile(file);
  };

  return (
    <>
      <div className="button-container">
        <Button
          variant="primary"
          onClick={() => handleClick("20K_Financial_Data")}
          className="m-3 p-3"
        >
          20K Financial Data
        </Button>
        <Button
          variant="primary"
          onClick={() => handleClick("30K_Financial_Data")}
          className="m-3 p-3"
        >
          30K Financial Data
        </Button>
      </div>

      {dataFile && <Financials dataFile={dataFile} />}
    </>
  );
}

export default App;
