import React from 'react';
import './App.css';
import axios from 'axios';
import Calc from "./calc";

class App extends React.Component{

    state = {};

render() {
    //Получем в консоль данные с http://localhost:8888/
    axios.get('http://localhost:8888/')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    //Получем в консоль данные с http://localhost:8888/tweet/5
    axios.get('http://localhost:8888/tweet/5')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    //Получем в консоль данные с http://localhost:8888/isEven?n=8
    axios.get('http://localhost:8888/isEven?n=8')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });


    return (
        <div className="App">
            <Calc/>

        </div>
    );

}


}

export default App;
