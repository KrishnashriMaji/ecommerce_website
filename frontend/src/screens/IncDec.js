import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {inc,dec} from '../actions/inc';

export default function IncDec() {
    const dispatch = useDispatch();
    const num = useSelector((state) => state.incDec);
    const { nu } = num;

    const add = ()=>{
        console.log("sfddf")
        dispatch(inc(5));
    }
    return (
        <div>
            <h1>Calculator</h1>
            <button type="button" onClick={add}>Inc</button>
            <input type="text" />
            <button type="button" onClick={add}>Dec</button>
        </div>
    )
}
