import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to uppercase.', 'success')
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to lowercase.', 'success')
    }
    const handleClClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert('Text Cleared.', 'success')
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
                <h1>{props.heading}</h1>
                <textarea style={{backgroundColor:props.mode==='dark'?'#244a68':'white', color: props.mode==='dark'?'white':'black'}} className="form-control my-3" id="mybox" rows="8" value={text} onChange={handleOnChange}></textarea>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick} >Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClClick} >Clear Text</button>
            </div>
            <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2 className="my-1">Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
                <h2 className="my2">Preview</h2>
                <p>{text.length>0?text:"Nothing to preview!"}</p>
            </div>
        </>
    )
}
