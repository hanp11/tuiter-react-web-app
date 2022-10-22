import React from "react";

const RefPost = ({post}) => {
  return (
      <li className="list-group-item rounded">
        <img className="wd-tiny-img rounded-circle me-1" src={`/images/${post.userImage}`}/>
        <span className="fw-bolder">{post.userName}</span>
        <i className="bi bi-patch-check-fill text-primary p-1"></i>
        <span className="text-secondary">@{post.handle}</span>
        <span className="text-secondary">&middot; {post.time}</span>
        <div className="mb-2">
            <span>
              {post.message}
              {post.messageLink &&
                  <>
                    <i className="bi bi-arrow-right p-1"></i>
                    {post.messageLink}
                  </>
              }
            </span>
        </div>
      </li>
  );
};
export default RefPost;