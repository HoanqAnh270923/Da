import Header from "../../components/Header/Header";
import Contents from "../../components/Contents/Contents";
import React from "react";

function Learn() {
  React.useEffect(() => {
    // scroll to top when page loaded
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="exo-font">
      <Header />
      <Contents />
    </div>
  );
}

export default Learn;
