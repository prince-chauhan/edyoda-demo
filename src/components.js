import { useState } from "react"

export const Dropdown = ({ name }) => {
    return (
        <div className='dropdown'>
            <div className="dropdown-title">
                <div className='dropdown-text'>
                    {name}
                </div>
                <div className='dropdown-icon'>
                    <img src={require("./assets/images/arrdown.png")} className="basic-img" alt={name} />
                </div>
            </div>
        </div>
    )
}
export const Point = ({ content, img }) => {
    return (
        <div className='points'>
            <div className='point-icons'>
                <img src={img} alt='Benefits' className="basic-img" />
            </div>
            <div className='point-content'>
                {content}
            </div>
        </div>
    )
}
export const Step = ({ count, title }) => {
    return (
        <div className='steps'>
            <div className='step-count'>{count}</div>
            <div className='step-title'>{title}</div>
        </div>
    )
}
export const Plan = ({ disbaled = false, months, cost, selected = false, setThis, id, label = '', labelColor = 'red-bc' }) => {
    return (
        <div className={`plans ${disbaled ? 'disabled' : (selected ? 'selected' : 'not-selected')} `} onClick={() => { !disbaled && setThis(id) }}>
            {label.length > 0 && <div className={`special-label ${labelColor}`}>{label}</div>}
            <div className='plan-left-portion'>
                <div className={`radio-img`}>
                    <img src={disbaled ? require('./assets/images/circle.png') : (selected ? require('./assets/svg/tick.svg').default : require('./assets/images/check.png'))} alt='' className="basic-img" />
                </div>
                <div className='plan-title'>
                    {months + ' Months Subscription'}
                </div>
            </div>
            <div className='plan-right-portion'>
                <div className='total-cost'>
                    Total <span className='highlighted-price'>₹{cost}</span>
                </div>
                <div className='monthly-cost'>
                    ₹{Math.round(cost / months)} <span className='fadded-color'>/mo</span>
                </div>
            </div>
        </div>
    )
}