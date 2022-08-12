import React from "react";
import ReactDOM from 'react-dom';
import EmojiPicker from "./EmojiSelector";

const App = () => {
    return (
        <div>
            <EmojiPicker/>
        </div>
    )
}

ReactDOM.render(<EmojiPicker onEmojiSelect={console.log} emojiTooltip={true}/>, document.querySelector('#root'))
