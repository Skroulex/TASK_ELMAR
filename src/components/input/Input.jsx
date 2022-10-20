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
            <p>От</p>
            <input type="number" value={before} onChange={handleBeforeChange}/>
            <p>До</p>
            <input type="number" value={after} onChange={handleAfterChange}/>
            <div>
                <p>Расчет</p>
                <input type="number" value={total} onChange={handleTotalChange}/>
            </div>
        </div>
    );
};

export default Input;