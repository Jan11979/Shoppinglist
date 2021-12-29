import DrawBody from "./FrameWork";

import parse from 'html-react-parser'

import {useState} from "react";
import MyImput from "./InputBlock";

import './ShoppingList.css';




function InputBox(props) {
    let [text, setText] = useState("Maiu")
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(text);
    }
    return (
        <form><label>Kaufe:
            <input type="text" value={text}
                   onChange={(e) => setText(e.target.value)}/>
        </label></form>
    )
}
export function CreateList(props) {
    let retString = "<ul>";
    let size2 = props.length;
    for (let i2 = 0; i2 < size2; i2++) {
        retString += "<li>" + props[i2] + "</li>";
    }
    retString += "</ul>";
    return retString;
}

function GetListe(props) {
    let retString = "<div >";
    let size = props.data.length;
    for (let i = 0; i < size; i++) {
        retString += "<div class=\"EinkaufElement\">";
        retString += "<h1>Shoppingliste für " + props.data[i].name + "</h1>";
        retString += CreateList( props.data[i].list );
        retString += "</div>"
    }
    retString += "</div>"
    return <div>{parse(retString)}</div> ;
}

function TextOutputBox(props) {
    const data = props.data;
    let [text, setText] = useState(props.data)

    return (
        <form><label>Kaufe:
            < GetListe data={data}/>

        </label></form>
    )

    /*            <p>  {data[0].name} </p>
                <p>  {data[0].list[0]} </p>
                <p>  {data[0].list[1]} </p>
    */

}

export default TextOutputBox


