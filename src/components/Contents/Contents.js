import React, {useEffect} from "react";
import PreContent from "./PreContent/PreContent";
import RunButton from "./RunButton/RunButton";
import ResultHtml from "./ResultHTML/ResultHTML";
import ResultContent from "./ResultContent/ResultContent";
import Sidebar from "./Sidebar/Sidebar";
import "./Contents.scss";

const Contents = () => {
  const [htmlString, setHtmlString] = React.useState("");
  const [open, setOpen] = React.useState(false);  

  useEffect(() => {
    console.log(htmlString);
    
  }, [htmlString]);

  return (
    <div className="main-container">
      <Sidebar className="sidebar" />
      <div className="content">
        <PreContent className="preContent" setHtmlString={setHtmlString} />
        <RunButton className="runButton" onClick={() => setOpen(true)} />
        <ResultContent className="resultContent" content={htmlString} open={open} setOpen={setOpen} />
        <ResultHtml className="resultHtml" htmlstring={htmlString} />
      </div>
    </div>
  );
};

export default Contents;
