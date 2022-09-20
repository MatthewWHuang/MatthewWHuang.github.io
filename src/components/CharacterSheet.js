import React, { useState } from "react";
import Box from "./Box";

function CharacterSheet({ info }) {
  console.log(info);
  const [result, setResult] = useState("none");
  const [resultSource, setResultSource] = useState("none");

  const dismissResult = () => {
    setResult("none");
    setResultSource("none");
  };

  const roll = (sides) => {
    setResult(Math.ceil(Math.random() * sides));
    setResultSource("D" + sides);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "row",
        }}
      >
        <div style={{ flexDirection: "column", padding: 0 }}>
          <h2
            style={{
              marginLeft: 20,
              marginTop: 0,
              marginBottom: 5,
              textAlign: "left",
            }}
          >
            {info.name}
          </h2>
          <h6
            style={{
              marginTop: 0,
              marginBottom: 5,
              marginLeft: 25,
              fontWeight: "normal",
              textAlign: "left",
            }}
          >
            {"Level " + info.level.toString() + " " + info.class}
          </h6>
        </div>
        <Box style={{ display: "flex", flexDirection: "column", margin: 0 }}>
          <h5 style={{ margin: 0 }}>EXP</h5>
          <div style={{ display: "flex", flexDirection: "row", margin: 0 }}>
            <h2 style={{ display: "flex", margin: 0, marginRight: 10 }}>
              {info.exp}
            </h2>
            <h2
              style={{
                display: "flex",
                margin: 0,
                paddingLeft: 10,
                borderLeftStyle: "solid",
                color: "darkgrey",
              }}
            >
              {info.expMax}
            </h2>
          </div>
        </Box>
      </div>
      <div
        style={{ textAlign: "center", display: "flex", flexDirection: "row" }}
      >
        <div style={{ flexDirection: "column" }}>
          {Object.keys(info.attributes).map((atr) => (
            <div style={{ width: 100 }}>
              <Box style={{ height: 72 }}>
                <h1 style={{ margin: 0 }}>{info.attributes[atr]}</h1>
                <h3 style={{ margin: 0 }}>{atr.toUpperCase()}</h3>
              </Box>
            </div>
          ))}
        </div>
        <div style={{ flexDirection: "column", width: 100 }}>
          <Box>
            <h5 style={{ margin: 0 }}>HP</h5>
            <h2 style={{ margin: 0 }}>{info.hp}</h2>
            <h2 style={{ margin: 0, borderTopStyle: "double" }}>{info.hp}</h2>
          </Box>
          <Box>
            <h5 style={{ margin: 0 }}>MANA</h5>
            <h2 style={{ margin: 0 }}>{info.mana}</h2>
            <h2 style={{ margin: 0, borderTopStyle: "double" }}>{info.mana}</h2>
          </Box>
          <Box>
            {[
              "Fire",
              "Water",
              "Earth",
              "Air",
              "Poision",
              "Acid",
              "Disease",
              "Pure",
              "Dark",
              "Light",
            ].map((res) => (
              <h5
                style={{
                  margin: 0,
                  borderTopStyle: res !== "Fire" ? "dashed" : "none",
                }}
              >
                {res + " res. " + info.resistances[res].toString() + "%"}
              </h5>
            ))}
            <h5
              style={{
                margin: 0,
                borderTopStyle: "dashed",
                textAlign: "center",
              }}
            >
              Piercing res. 0%
            </h5>
            <h5
              style={{
                margin: 0,
                borderTopStyle: "dashed",
                textAlign: "center",
              }}
            >
              Slashing res. 0%
            </h5>
            <h5
              style={{
                margin: 0,
                borderTopStyle: "dashed",
                textAlign: "center",
              }}
            >
              Blud. res. 0%
            </h5>
          </Box>
        </div>
        <div style={{ flexDirection: "column", width: 170 }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <Box>
                <h5 style={{ margin: 0, width: 50 }}>SPEED</h5>
                <h2 style={{ margin: 0, width: 50 }}>{info.speed}</h2>
              </Box>
              <Box>
                <h5 style={{ margin: 0, width: 50 }}>AVOID</h5>
                <h2 style={{ margin: 0, width: 50 }}>{info.avoid}</h2>
              </Box>
              <Box>
                <h5 style={{ margin: 0, width: 50 }}>HIT</h5>
                <h2 style={{ margin: 0, width: 50 }}>{info.hit}</h2>
              </Box>
              <Box>
                <h5 style={{ margin: 0, width: 50 }}>M. HIT</h5>
                <h2 style={{ margin: 0, width: 50 }}>{info.mhit}</h2>
              </Box>
            </div>
            <div>
              <Box>
                <h6 style={{ margin: 0, width: 50 }}>Copper</h6>
                <h3 style={{ margin: 0, width: 50 }}>0</h3>
                <h6 style={{ margin: 0, width: 50, borderTopStyle: "dashed" }}>
                  Silver
                </h6>
                <h3 style={{ margin: 0, width: 50 }}>0</h3>
                <h6 style={{ margin: 0, width: 50, borderTopStyle: "dashed" }}>
                  Gold
                </h6>
                <h3 style={{ margin: 0, width: 50 }}>0</h3>
                <h6 style={{ margin: 0, width: 50, borderTopStyle: "dashed" }}>
                  Platinum
                </h6>
                <h3 style={{ margin: 0, width: 50 }}>0</h3>
                <h6 style={{ margin: 0, width: 50, borderTopStyle: "dashed" }}>
                  Amythest
                </h6>
                <h3 style={{ margin: 0, width: 50 }}>0</h3>
                <h6 style={{ margin: 0, width: 50, borderTopStyle: "dashed" }}>
                  Diamond
                </h6>
                <h3 style={{ margin: 0, width: 50 }}>0</h3>
              </Box>
            </div>
          </div>
          <Box style={{ width: 135, height: 425 }}>
            <h5>No Proficencies</h5>
          </Box>
        </div>

        <Box style={{ width: 600, height: 683, alignContent: "center" }}>
          <button style={{ width: 50 }} onClick={() => roll(4)}>
            D4
          </button>
          <button style={{ width: 50 }} onClick={() => roll(6)}>
            D6
          </button>
          <button style={{ width: 50 }} onClick={() => roll(8)}>
            D8
          </button>
          <button style={{ width: 50 }} onClick={() => roll(10)}>
            D10
          </button>
          <button style={{ width: 50 }} onClick={() => roll(12)}>
            D12
          </button>
          <button style={{ width: 50 }} onClick={() => roll(20)}>
            D20
          </button>
        </Box>

        {/* <p>
          {`VIT: ${info.attributes.vit} 
WIS: ${info.attributes.wis}`}
        </p> */}
      </div>
      {result !== "none" ? (
        <Box
          style={{
            position: "fixed",
            right: 0,
            bottom: 0,
            height: 200,
            width: 350,
            display: "flex",
            flexDirection: "column",
            justifyContent: "column",
          }}
          onClick={dismissResult}
        >
          <h6 style={{ margin: 0 }}>{resultSource}</h6>
          <h1>{result}</h1>
        </Box>
      ) : null}
    </div>
  );
}
export default CharacterSheet;