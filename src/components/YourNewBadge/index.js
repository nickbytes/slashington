import React from "react";
import Barcode from "react-barcode";

const YourNewBadge = props =>
  <div
    style={{
      margin: "200px auto 0"
    }}
  >
    <div
      style={{
        width: "280px",
        margin: "0 auto",
        border: "2px solid black",
        padding: "25px",
        textAlign: "center",
        height: "450px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: "20px",
        position: "relative"
      }}
    >
      <div
        style={{
          width: "90px",
          height: "10px",
          borderRadius: "8px",
          border: "2px solid black",
          margin: "0 auto",
          top: "18px",
          position: "absolute",
          left: "calc(50% - 45px)"
        }}
      />
      <img
        style={{
          width: "150px",
          margin: "0 auto 20px",
          border: "2px solid black"
        }}
        src={props.imgSrc}
        alt={"Definitely you."}
      />
      <div>
        <h1
          style={{
            fontSize: "1rem",
            margin: "0",
            textAlign: "center",
            fontWeight: "bold"
          }}
        >
          {props.playerName}
        </h1>
        <h2
          style={{
            fontSize: "1rem",
            margin: "0",
            textAlign: "center"
          }}
        >
          {props.playerOccupation}
        </h2>
      </div>
      <div>
        <Barcode width={1.5} value={`${props.playerName}.n325938`} />
      </div>
    </div>
  </div>;

export default YourNewBadge;
