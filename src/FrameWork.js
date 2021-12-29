import logo from "./logo.svg";
import App from "./App";
import './FrameWork.css';

import TextOutputBox from './ShoppingList';



function DrawBody( props ) {
    return (
        <div>
            <div className="Body">
                <div className="LeftBody">
                    <p>Miau Left </p>
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <div className="MidBody">
                    <p>Miau Mid Miau</p>
                    <img src={logo} className="App-logo" alt="logo"/>
                    < TextOutputBox data={props.data} />
                </div>
                <div className="RightBody">
                    <p>Right Miau</p>
                    <img src={logo} className= "App-logo" alt="logo"/>
                </div>
            </div>
            <div className="BottomBody">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link"
                   href="https://reactjs.org"
                   target="_blank"
                   rel="noopener noreferrer">
                    Learn React
                </a>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        </div>
    )
}

export default DrawBody;