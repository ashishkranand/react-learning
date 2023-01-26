import React, {useState} from 'react'


export default function Textform (props) {
    const handleUpClick=()=>{
        let newText =text.toUpperCase();
        setText(newText);
    }
    const handleLowClick=()=>{
        let newText =text.toLowerCase();
        setText(newText);
    }
    const handleResetClick=()=>{
        setText("");
    }
    const handleCountVowelClick=()=>{
        for(count=0;count<=text.length;count++){
            if(text.charAt(count).match(/[aeiouAEIOU]/)){
                countChar++;
                setCount(countChar);
            }
        }
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    let [count,setCount] = useState(0);
    let countChar=0;
    const [text, setText] = useState('');
  return (
    <>
    <div className='container'>
      <h2>{props.heading}</h2>
      <div className='mb-3'>
        <textarea className='form-control'value={text} onChange={handleOnChange} id='myBox' rows='8'></textarea>
      </div>
      <button className="btn btn-danger mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-danger mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-danger mx-2 my-2" onClick={handleCountVowelClick}>Count vowel</button>
      <button className="btn btn-danger mx-2 my-2" onClick={handleResetClick}>Reset</button>
    </div>
    <div className="container my-4">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} word and {text.length} characters</p>
        <p>{text.split(" ").length-1} Spaces</p>
        <p>{0.008*text.split(" ").length} time take in reading</p>
        <p>{count} vowels</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
