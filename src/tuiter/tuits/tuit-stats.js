import React from "react";

const TuitStats = ({ replies, retuits, likes, liked }) => {
  return (
      <div className="row mt-2 mb-2">
        <div className="col-3">
          <i className="bi bi-chat pe-1"></i>
          {replies}
        </div>
        <div className="col-3">
          <i className="bi bi-arrow-repeat pe-1"></i>
          {retuits}
        </div>
        <div className="col-3">
          <i className={`bi pe-1
              ${liked ? 'bi-heart-fill text-danger' : 'bi-heart'}`}></i>
          {likes}
        </div>
        <div className="col-3">
          <i className="bi bi-share"></i>
        </div>
      </div>
  );
};
export default TuitStats;