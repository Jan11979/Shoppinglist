import DrawBody from "./FrameWork";

import './InputBlock.css';

import {useState} from "react";

import {CreateList} from './ShoppingList'
import parse from "html-react-parser";

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


//<textarea id="beschreibungImput" name="textarea"></textarea>
function CreateListWrap(props) {
    if (props === undefined) {
        return null;
    }
    else{
        return <div>{parse(CreateList(props.data))}</div> ;
    }
}

function MyImput(props) {
    const [name, setName] = useState("Peter");
    const [addArtikel, setArtikel] = useState("MilchXXX");
    const [listData, setListData] = useState({"list": []});
    const FuckFu = props.funk;
    //let listData = {"list": ["Butter1", "Butter2", "Butter3"]};
    const handleSubmit = (event) => {
        event.preventDefault();
        let newData = {"id": "-1", "name": "XXX", "list": ["XXX", "XXX", "XXX"]};
        newData.name = name;
        newData.list = listData.list;
        FuckFu(newData);
        console.log(name);
    }
    const handleBlur = (event) => {
        event.preventDefault();
        console.log(name);
    }
    const handleAdd = (event) => {
        event.preventDefault();
        let newListData = listData;
        newListData.list.push( addArtikel );
        setListData(  newListData );
        setArtikel("");
        console.log(addArtikel);
    }
    /* < CreateListWrap data={listData}/> */
    return (
        <div className="inputBigBox">
            <div className="inputBlock1">
                <p>Liste</p>
                < CreateListWrap data={listData.list}/>
            </div>
            <div className="inputBlock2">
                <form  onBlur={handleBlur}>
                    <label>Name:
                        <input type="text" value={name}
                               onChange={(e) => setName(e.target.value)}/>
                    </label>
                </form>

                <form onSubmit={handleAdd} >
                    <label>
                        <input type="text" value={addArtikel}
                               onChange={(e) => setArtikel(e.target.value)}/>
                    </label>
                    <button type = 'submit'>Add</button>
                </form>

                <form onSubmit={handleSubmit} >
                    <label>Kaufe:
                        <button type = 'submit'>AddListe</button>
                    </label>
                </form>

            </div>
        </div>
    )
}

export default MyImput;