import React, { Component } from "react";

class GenderUse extends Component{
    constructor() {
        super() 
        this.state = {
            firstName: "",
            lastName: "",
            gender: "",
            status:""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? 
            this.setState({
                [name]:checked
            })
            :
            this.setState({
                [name]:value
            })
    }
    render() {
        return (
            <main>
                <input name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="Введите имя" />
                <br />
                <input name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="Введите фамилию" />
                <br />
                <label>
                    <input type="radio" name="gender" value="Мужчина" checked={this.state.gender === "Мужчина"} onChange={this.handleChange}/> Мужчина
                    
                </label>
                <label>
                    <input type="radio" name="gender" value="Женщина" checked={this.state.gender === "Женщина"} onChange={this.handleChange}/> Женщина
                    
                </label>
                <br />
                <label>
                    <input type="radio" name="status" value="Холост" checked={this.state.status === "Холост"} onChange={this.handleChange} />Холост
                    <input type="radio" name="status" value="Семейный" checked={this.state.status === "Семейный"} onChange={this.handleChange}  />Семейный
                </label>
                <br/>
                {/* <button>Показать данные пользователя</button> */}
                <hr />
                <h2>Информация</h2>
                <p>Твое имя:{this.state.firstName}</p>
                <p>Твоя фамилия:{this.state.lastName}</p>
                <p>Твой пол: { this.state.gender }</p>
                <p>Твое семейное положение: {this.state.status }</p>
            </main>
        )
    }
}
















export default GenderUse