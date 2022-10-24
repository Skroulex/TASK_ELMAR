import React from 'react';
import {getAfter, getBefore, getTotal} from "../../store/InputSlice";
import {useDispatch, useSelector} from "react-redux";
import "./input.css"

const Input = () => {

    const dispatch = useDispatch()

    const total = useSelector(state => state.InputSlice.total)
    const before = useSelector(state => state.InputSlice.before)
    const after = useSelector(state => state.InputSlice.after)

    const handleBeforeChange = (e) => {
       dispatch(getBefore(e.target.value))
    };

    const handleAfterChange = (e) => {
        dispatch(getAfter(e.target.value))

    };

    const handleTotalChange = (e) => {
        dispatch(getTotal(e.target.value))
    }

    return (
        <div className="input">
            <label htmlFor="1"><input id='1' type="number" value={before} onChange={handleBeforeChange}/>От</label>
            <label htmlFor="2"><input id='2' type="number" value={after} onChange={handleAfterChange}/>До</label>
            <label htmlFor="3"><input id='3' type="number" value={total} onChange={handleTotalChange}/>Расчет</label>
        </div>
    );
};

export default Input;