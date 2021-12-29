import logo from './logo.svg';

import {useState} from "react";

import './App.css';


import DrawBody from './FrameWork';

import MyImput from './InputBlock';

/* const [DataShopingList, setListe] = useState([]); */
function App() {
    let allData = [ {"id": "-1", "name": "Peter" , "list": ["Milch1", "Milch2", "Milch3"] } ];
    const [DataShopingList, setListe] = useState(allData);
    const Fuck = (prop) => {
        let currentAllData = [];
        let size = DataShopingList.length;
        for (let i = 0; i < size; i++) {
            let obj = {"id":DataShopingList[i].id, "name":DataShopingList[i].name, "list":DataShopingList[i].list }
            currentAllData.push(obj);
        }
        let obj2 = {"id":prop.id, "name":prop.name, "list": prop.list }
        currentAllData.push(obj2);


//            let currentAllData = DataShopingList;// DataShopingList;//{...DataShopingList}
//        let obj = {"id":prop.id, "name":data.name};
//        currentAllData.push(prop);
//        DataShopingList.push(prop);

        //let currentAllData = DataShopingList;
        //currentAllData += " " + prop + " ";
       // DataShopingList[0].name = "Test";
        setListe(currentAllData);
    }
  //  let Fuck = setListe;
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                < MyImput  funk={Fuck} />
            </header>

            < DrawBody data={DataShopingList} />

        </div>
    );
}

export default App;
