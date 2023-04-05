import React, { useEffect } from "react";
import { useDispatch, useSelector }
    from "react-redux";
import TuitItem from "./tuititem";
import { findTuitsThunk }
    from "../../services/tuits-thunks";

const TuitList = () => {
    const { tuits, loading } = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    return (
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

        </ul>
    );
};

export default TuitList;
