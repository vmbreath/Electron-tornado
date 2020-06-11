import React, {Component} from 'react';
import axios from 'axios';
import "./calc.scss"

class Calc extends Component{
    state = {
        sum:'',
        dec:'',
        operation:'*',
        equal:''
    };




    onHandleClick = () => {
        if (this.state.num1 && this.state.num2) {
            if (this.state.operation&&this.state.operation==='*'){
                axios.post('http://localhost:8888/mult', {x: Number(this.state.num1), y: Number(this.state.num2)})
                    .then(response => {
                        this.setState(() => ({
                            equal: response.data.result
                        }));

                        console.log(response.data.result);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
            if (this.state.operation&&this.state.operation==='/'){
                axios.post('http://localhost:8888/divide', {x: Number(this.state.num1), y: Number(this.state.num2)})
                    .then(response => {
                        this.setState(() => ({
                            equal: response.data.result
                        }));

                        console.log(response.data.result);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
            if (this.state.operation&&this.state.operation==='+'){
                axios.post('http://localhost:8888/sum', {x: Number(this.state.num1), y: Number(this.state.num2)})
                    .then(response => {
                        this.setState(() => ({
                            equal: response.data.result
                        }));

                        console.log(response.data.result);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
            if (this.state.operation&&this.state.operation==='-'){
                axios.post('http://localhost:8888/dec', {x: Number(this.state.num1), y: Number(this.state.num2)})
                    .then(response => {
                        this.setState(() => ({
                            equal: response.data.result
                        }));

                        console.log(response.data.result);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }

        }
    }

    onHandleClickSum = () => {
        this.setState(() => ({
            operation: '+'
        }))

    };
    onHandleClickDecrease = () => {
        this.setState(() => ({
            operation: '-'
        }))
    }

    onHandleClickDivide = () => {
                    this.setState(() => ({
                operation: '/'
        }))
    }
    onHandleClickMultiply = () => {
        this.setState(() => ({
            operation: '*'
        }))
    }



    render() {


        return(
            <div className={'Calc'}>
                <h1>Online calculator</h1>
                <fieldset className={'field'}>
                    <legend className={'legend'}>Введите числа для суммирования/вычитания/умножения/деления</legend>

                    <input className={"input"} type="number" onChange={e => {
                        this.setState({num1: e.target.value.trim()})
                    }}/>
                    {"  "+this.state.operation+"  "}
                    <input className={"input"} type="number" onChange={e => {
                        this.setState({num2: e.target.value.trim()})
                    }}/>
                    {"  "}={"  "}
                    <input className={"input"} value={this.state.equal} readOnly={true}/>
                    <br/>
                    <button onClick={this.onHandleClickSum} className={'OperationButton'} id={'plus'}></button>
                    <button onClick={this.onHandleClickDecrease} className={'OperationButton'} id={'minus'}></button>
                    <button onClick={this.onHandleClickMultiply} className={'OperationButton'} id={'mult'}></button>
                    <button onClick={this.onHandleClickDivide} className={'OperationButton'} id={'div'}></button>
                    <br/>
                    <button onClick={this.onHandleClick} className={"server"}>Отправить запрос на сервер</button>
                </fieldset>

            </div>
        )
    }
}

export default Calc;