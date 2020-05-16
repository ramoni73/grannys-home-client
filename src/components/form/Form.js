import React from "react";
import './Form.css'
import FormField from "../formField/FormField";

const Form = (props) => {
    const {legend} = props;
    return (
        <form>
            <fieldset>
                <legend>{legend}</legend>

                <FormField
                    label={'email'}
                    type={'email'}
                    placeholder={'email'}
                />

                <FormField
                    label={'Пароль'}
                    type={'password'}
                    placeholder={'Ваш пароль'}
                />

                <button type="submit" className="btn btn-primary">Submit</button>
            </fieldset>
        </form>
    )
};

export default Form