import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = ({tuit}) => {

  const dispatch = useDispatch();

  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }

  return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-auto">
            <img className="wd-small-img rounded-circle" src={`/images/${tuit.image}`}/>
          </div>
          <div className="col">
            <i className="bi bi-x-lg float-end"
               onClick={() => deleteTuitHandler(tuit._id)}></i>
            <span className="fw-bolder">{tuit.userName}</span>
            <i className="bi bi-patch-check-fill text-primary p-1"></i>
            <span className="text-secondary pe-1">{tuit.handle}</span>
            <span className="text-secondary">&bull; {tuit.time}</span>
            <div>{tuit.tuit}</div>
            <TuitStats key={tuit._id}
                       replies={tuit.replies}
                       retuits={tuit.retuits}
                       likes={tuit.likes} liked={tuit.liked}/>
          </div>
        </div>
      </li>
  );
};
export default TuitItem;