import React from "react";

const Display = ({ integerColorArray }) => {
  return (
    <div>
      {integerColorArray.map((box, index) => (
        <div
          key={index}
          style={{
            display: "inline-block",
            margin: "10px",
            height: box.size,
            width: box.size,
            backgroundColor: box.color,
            textAlign:"center",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
          }}
        >{box.color}</div>
      ))}
    </div>
  );
};

export default Display;
