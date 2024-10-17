import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function UtilityTool(props) {
    const [text, setText] = useState("");
    const [qrText, setQrText] = useState("");

    const upcase = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Text is converted into Uppercase", "success");
    };

    const lowcase = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Text is converted into Lowercase", "success");
    };

    const clear = () => {
        let newtext = "";
        setText(newtext);
        props.showAlert("Texts have been cleared", "danger");
    };

    const removeSpace = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra spaces have been removed", "success");
    };

    const copy = () => {
        let newtext = document.getElementById("validationTextarea");
        newtext.select();
        navigator.clipboard.writeText(newtext.value);
        props.showAlert("Copied to clipboard", "primary");
    };

    const capitalizeSentences = () => {
        let newtext = text
            .split(".")
            .map(sentence => sentence.trim())
            .filter(sentence => sentence.length > 0)
            .map(sentence => sentence[0].toUpperCase() + sentence.slice(1))
            .join(". ");
        setText(newtext);
        props.showAlert("Your paragraph has been capitalize", "success");
    };

    const generateQrCode = () => {
        try {
          if (text.length <= 2500) {
            setQrText(text); 
            props.showAlert("QR Code generated. Scroll down to scan.", "success");
          } else {
            props.showAlert("Text is too long for QR code", "warning"); 
          }
        } catch (error) {
          props.showAlert("Error generating QR", "danger"); 
        }
      };
      
    const upchange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <div className="container mt-4">
                <h4>Text Utils-Uppercase | Lowercase | Word Counter | Character Counter | Remove Extra Spaces | QR Generator </h4>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        placeholder="Type here"
                        onChange={upchange}
                        id="validationTextarea"
                        rows={10}
                    ></textarea>
                </div>
                <button
                    disabled={text === null || text === ""}
                    type="button"
                    className="btn btn-primary mx-1 my-1"
                    onClick={upcase}
                >
                    Convert to UpperCase
                </button>
                <button
                    disabled={text === null || text === ""}
                    type="button"
                    className="btn btn-primary mx-1 my-1"
                    onClick={lowcase}
                >
                    Convert to LowerCase
                </button>
                <button
                    disabled={text === null || text === ""}
                    type="button"
                    className="btn btn-primary mx-1 my-1"
                    onClick={removeSpace}
                >
                    Remove Extra Space
                </button>
                <button
                    disabled={text === null || text === ""}
                    type="button"
                    className="btn btn-primary mx-1 my-1"
                    onClick={capitalizeSentences}
                >
                    Capitalize Sentences
                </button>
                <button
                    disabled={text === null || text === ""}
                    type="button"
                    className="btn btn-primary mx-1 my-1"
                    onClick={copy}
                >
                    Copy Text
                </button>
                <button
                    disabled={text === null || text === ""}
                    type="button"
                    className="btn btn-primary mx-1 my-1"
                    onClick={clear}
                >
                    Clear Text
                </button>
                <button
                    disabled={text === null || text === ""}
                    type="button"
                    className="btn btn-primary mx-1 my-1"
                    onClick={generateQrCode}
                >
                    Generate QR
                </button>
            </div>
            <div className="container my-4">
                <p>
                    <b>{text.split(" ").filter((item) => item.trim() !== "").length}</b>{" "}
                    words
                </p>
                <p>
                    <b>{text.length}</b> characters
                </p>
                <p>
                    Required{" "}
                    <b>
                        {0.008 * text.split(" ").filter((item) => item.trim() !== "").length}
                    </b>{" "}
                    minutes to read
                </p>
                {qrText && (
                    <div className="my-4">
                        <h2>QR Code</h2>
                        <QRCodeSVG value={qrText} size={128} />
                    </div>
                )}
                <h2>Preview</h2>
                <div>
                    <div className="card-body">
                        <p>{text === "" ? "Nothing to preview!" : text}</p>
                    </div>
                </div>
               
            </div>
        </div>
    );
}
