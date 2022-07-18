import React from "react";
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetail";
import EmojiPicker from "./EmojiSelector";

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="Sam"
                timeAgo="Today at 4:45PM"
                text={"First text"}/>
            <CommentDetail
                author="Alex"
                timeAgo="Today at 2:00AM"
                text={"Second text"}/>
            <CommentDetail
                author="Jane"
                timeAgo={"Today at 5:00PM"}
                text={"Third text"}/>
        </div>
    )
}

ReactDOM.render(<EmojiPicker onEmojiSelect={console.log} emojiTooltip={true}/>, document.querySelector('#root'))
