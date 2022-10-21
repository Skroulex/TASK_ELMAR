import React from 'react';
import {getAfter, getBefore, getTotal} from "../../store/InputSlice";
import {useDispatch, useSelector} from "react-redux";

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
        <div style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <label htmlFor=""><input type="number" value={before} onChange={handleBeforeChange}/>От</label>
            <label htmlFor=""><input type="number" value={after} onChange={handleAfterChange}/>До</label>
            <label htmlFor=""><input type="number" value={total} onChange={handleTotalChange}/>Расчет</label>
        </div>
    );
};

export default Input;