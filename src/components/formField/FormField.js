import React from "react";
import './FormField.css'

const FormField = (props) => {
    const { label, type, placeholder } = props;

    return(
        <div className="form-group">
            <label className='label-block'>
                {label}
                <input
                    className="form-control"
                    type={type}
                    placeholder={placeholder}
                />
            </label>
        </div>
    )
}

export default FormField