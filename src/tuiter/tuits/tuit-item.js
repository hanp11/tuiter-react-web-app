import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({tuit}) => {

  const dispatch = useDispatch();

  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }

  return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-auto">
            <img className="wd-small-img rounded-circle"
                 src={tuit.image ? `/images/${tuit.image}` : '/images/nasa.jpg'}/>
          </div>
          <div className="col">
            <i className="bi bi-x-lg float-end"
               onClick={() => deleteTuitHandler(tuit._id)}></i>
            <span className="fw-bolder">{tuit.userName}</span>
            {
              //<i className="bi bi-patch-check-fill text-primary p-1"></i>
            }
            <span className="text-secondary pe-1">{tuit.handle ? tuit.handle : '@NASA'}</span>
            <span className="text-secondary">&bull; {tuit.time ? tuit.time : '0h'}</span>
            <div>{tuit.tuit}</div>
            <TuitStats key={tuit._id} tuit={tuit}/>
          </div>
        </div>
      </li>
  );
};
export default TuitItem;