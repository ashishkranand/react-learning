import React, {useState} from 'react'


export default function Textform (props) {
    const handleUpClick=()=>{
        let newText =text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","success");
    }
    const handleLowClick=()=>{
        let newText =text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case","success");
    }
    const handleResetClick=()=>{
        setText("");
        props.showAlert("Reset success","success");
    }
    const handleCountVowelClick=()=>{
        for(count=0;count<=text.length;count++){
            if(text.charAt(count).match(/[aeiouAEIOU]/)){
                countChar++;
                setCount(countChar);
            }
        }
        props.showAlert("Number of vowel counted","success");
    }

    const copytext=()=>{
        var text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        let str = text.value;
        if(str.length<=0){
            props.showAlert("Nothing to copy","warning");
        }
        else{
            props.showAlert("Copied to clipboard","success");

        }
    }
    const removeextraspaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces","success");
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    let [count,setCount] = useState(0);
    let countChar=0;
    const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>{props.heading}</h2>
      <div className='mb-3'>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='grey'?'white':'white', color:props.mode==='white'?'#042743':'#042743'}}  id='myBox' rows='8'></textarea>
      </div>
      <button className="btn btn-danger mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-danger mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-danger mx-2 my-2" onClick={handleCountVowelClick}>Count vowel</button>
      <button className="btn btn-danger mx-2 my-2" onClick={copytext}>Copy text</button>
      <button className="btn btn-danger mx-2 my-2" onClick={removeextraspaces}>Remove extra spaces</button>
      <button className="btn btn-danger mx-2 my-2" onClick={handleResetClick}>Reset</button>
    </div>
    <div className="container my-4 " style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length-1} word and {text.length} characters</p>
        <p>{text.split(" ").length-1} Spaces</p>
        <p>{0.008*text.split(" ").length} time take in reading</p>
        <p>{count} vowels</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox above to preview here."}</p>
    </div>
    </>
  )
}
