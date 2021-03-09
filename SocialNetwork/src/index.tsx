import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addPost, changeNewTextPost, subscribe} from "./redux/State";
import ReactDOM from "react-dom";
import App from "./App";

export let rerenderEntireTree =()=>{
    debugger
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}  upDateNewPostText={changeNewTextPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

subscribe(rerenderEntireTree)
rerenderEntireTree()

// rerenderEntireTree(state)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
