import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [name1, setName1] = useState("");
  const [value1, setValue1] = useState("");
  const [h1_Text, setHeading] = useState("");
  const [h2_Text, setHeading2] = useState("");
  const [h3_Text, setHeading3] = useState("");
  const [isMousedOver, setMouseOver] = useState(false);

  function handle_change(event) {
    setName(event.target.value);
    console.log(event.target.value);
    // console.log(event);
    // console.log(event.target.type);
    // console.log(event.target.placeholder);
  }

  function handle_change1(event) {
    setName1(event.target.value);
    console.log(event.target.value);
    // console.log(event);
    // console.log(event.target.type);
    // console.log(event.target.placeholder);
  }

  function handle_change2(event) {
    setValue1(event.target.value);
    console.log(event.target.value);
    // console.log(event);
    // console.log(event.target.type);
    // console.log(event.target.placeholder);
  }


  function handleMouseOver() {
    setMouseOver(!isMousedOver);
  }

  function handle_click(event) {
    setHeading(name);
    setHeading2(name1);
    setHeading3(value1);
    // console.log({ name });

    event.preventDefault();
  }

  return (
    <div className="container rev-cont">
        <div className="row">
            <div className="col-md-12">
                <h2>Put your review </h2>
                <form onSubmit={handle_click}>
                  <input
                    onChange={handle_change}
                    type="text"
                    className="rev-input"
                    placeholder="company, crypto, NFTs"
                    value={name}
                    />
                    <br></br>
                    <input
                    onChange={handle_change1}
                    type="text"
                    className="rev-input"
                    placeholder="What's your review?"
                    value={name1}
                    />
                    <br></br>
                    <input onChange={handle_change2} type="range" value={value1}/> 
                    <br></br>
                    <button
                    style={{ backgroundColor: isMousedOver ? "Yellow" : "white" }}
                    className="rev-input2"
                    type="submit"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOver}
                    >
                    Send
                    </button>
                </form>
                <img src=".\img\nft\home_michelangelo.png" className="img-fluid rev-img" alt=""/>
            </div>
            <div className="col-md-12 mt-5 safe-rev">
                <h2 className="text-dark company">{h1_Text}</h2>
                <h2 className="text-dark text-rev">{h2_Text}</h2>
                <h2 className="text-dark number-rev">{h3_Text}</h2>
            </div>
        </div>
    </div>
  );
}

export default App;
