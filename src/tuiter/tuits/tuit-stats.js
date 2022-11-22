import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  return (
      <div className="row mt-2 mb-2">
        <div className="col-3">
          <i className="bi bi-chat pe-1"></i>
          {tuit.replies ? tuit.replies : 0}
        </div>
        <div className="col-3">
          <i className="bi bi-arrow-repeat pe-1"></i>
          {tuit.retuits ? tuit.retuits : 0}
        </div>
        <div className="col-3">
          <i onClick={() => dispatch(updateTuitThunk({...tuit, likes: tuit.likes + 1}))}
             className="bi bi-heart-fill me-2 text-danger"></i>
          {tuit.likes}
        </div>
        <div className="col-3">
          <i className="bi bi-share"></i>
        </div>
      </div>
  );
};
export default TuitStats;