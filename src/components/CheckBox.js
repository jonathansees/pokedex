import React from 'react';

import '../styles/components.scss';

const CheckBox = (props) => {
    let changeHandler = (checked) => {
        props.onChange(checked)
    }

    return (
        <form className="check-box">
            <div className="switch">
                <p>{ props.title }</p>
                <label>
                    { props.off }
                    <input 
                        type="checkbox"
                        name="checkbox"
                        onChange={(event) => changeHandler(event.target.checked)}
                        checked={props.checked} />
                    <span className="lever"></span>
                    { props.on }
                </label>
            </div>
        </form>
    )
}

export default CheckBox;



