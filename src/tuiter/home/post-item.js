import React from "react";
import RefPost from "./ref-post";
import refPostsArray from "./ref-post/posts.json";

const PostItem = ({post}) => {

  const refPost = refPostsArray.find(p => p._id === post.referencePostId);

  return (
    <li className="list-group-item">
      <div className="row">
        {post.userRetweet &&
          <div className="ps-5 fw-bolder text-secondary">
            <i class="bi bi-arrow-repeat pe-1"></i>
            {`${post.userRetweet} Retweeted`}
          </div>
        }
        <div className="col-auto">
          <img className="wd-small-img rounded-circle" src={`/images/${post.userImage}`}/>
        </div>
        <ul className="col">
          <span className="fw-bolder">{post.userName}</span>
          <i className="bi bi-patch-check-fill text-primary p-1"></i>
          <span className="text-secondary">@{post.handle}</span>
          <span className="text-secondary">&middot; {post.time}</span>
          <a className="text-decoration-none text-dark float-end">
            <i className="bi bi-three-dots"></i>
          </a>
          <div className="mb-2">
            <span>
              {post.message}
              {post.messageLink &&
                  <>
                    <i className="bi bi-arrow-right p-1"></i>
                    <a href={`https://${post.messageLink}`} className="text-decoration-none">
                      {post.messageLink}</a>
                  </>
              }
            </span>
          </div>
          {post.image && <img className="rounded" src={`/images/${post.image}`} width="100%"/>}
          {post.referencePostId && <RefPost key = {refPost._id} post = {refPost}/>}
          <div className="text-secondary d-flex justify-content-between mt-2 mb-2">
            <span>
              <i className="bi bi-chat pe-1"></i>
              {post.numComments}
            </span>
              <span>
              <i class="bi bi-arrow-repeat pe-1"></i>
                {post.numRetweet}
            </span>
              <span>
              <i className="bi bi-heart pe-1"></i>
                {post.numLike}
            </span>
              <span>
              <i className="bi bi-upload me-2 pe-1"></i>
            </span>
            <span></span>
          </div>
          {post.showThread &&
            <div className="mt-3 mb-1">
              <a href="" className="text-decoration-none">Show this thread</a>
            </div>
          }
        </ul>
      </div>
    </li>
  );
};
export default PostItem;