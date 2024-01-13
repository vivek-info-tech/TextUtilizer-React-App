
import { React, useState } from 'react';


export default function TextForm() {
  const [text, setText] = useState('');

  const ChangeText = (event) => {

    setText(event.target.value);
  }

  const ConvertUpCase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  const ConvertLowCase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  const ConvertRemoveCase = () => {
    let newtext = text.split(/[ ] +/);
    setText(newtext.join(" "));
  }
  const ConvertClearCase = () => {
    let newtext = "";
    setText(newtext);
  }
  return (

    <>
      <div className="container my-2" >

        <div class="mb-3 ">
          <h2 className='h2-danger'>Write here your massage </h2>

          <textarea class="form-control" id="exampleFormControlTextarea1" value={text} onChange={ChangeText} rows="8"></textarea>
        </div>
        <button className="btn btn-secondary" onClick={ConvertUpCase}>UpperCase</button>
        <button className="btn btn-secondary mx-2" onClick={ConvertLowCase}>LowerCase</button>
        <button className="btn btn-secondary mx-4" onClick={ConvertRemoveCase}>Remove Extra Spaces</button>
        <button className="btn btn-secondary mx-4" onClick={ConvertClearCase}>Clear</button>
      </div>
      <div className="container">
        <h1>Your text summary </h1>
        <p>
          {text.split(" ").length}  words and {text.length} carachters</p>
        <p> {0.008 * text.split(" ").length} </p>
        <h2>Preview</h2>
        <p> {text}  </p>
      </div>
    </>

  );
}
