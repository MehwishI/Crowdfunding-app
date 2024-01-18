import React from "react";

const Progressbar = ({ bgcolor, progress, height }) => {
  const progressWidth = progress <= 100 ? progress : 100;
  const Parentdiv = {
    height: height,
    width: "100%",
    backgroundColor: "lightgray",

    borderRadius: 40,
    marginTop: 15,
  };

  const Childdiv = {
    height: "100%",
    width: `${progressWidth}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: "right",
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default Progressbar;
