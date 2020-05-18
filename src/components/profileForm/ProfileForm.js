import React, {Component} from "react";
import './ProfileForm.css'
import FormField from "../formField/FormField";

export default class ProfileForm extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: ""
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const newProfile = {
            email: this.state.email,
            password: this.state.password
        };

        console.log(newProfile)

        this.setState({
            password: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <fieldset>
                    <legend>Мой профиль</legend>

                    <FormField
                        label={'email'}
                        type={'email'}
                        placeholder={'email'}
                        name={'email'}
                        value={this.state.email}
                        onChange={this.onChange}
                    />
                    <FormField
                        label={'Пароль'}
                        type={'password'}
                        placeholder={'Ваш пароль'}
                        name={'password'}
                        value={this.state.password}
                        onChange={this.onChange}
                    />

                    <button type="submit" className="btn btn-primary">Submit</button>
                </fieldset>
            </form>
        );
    }
}
