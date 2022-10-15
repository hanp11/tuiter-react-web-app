const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col">
                    <div class="text-secondary">${post.topic}</div>
                    <span class="fw-bolder">${post.userName}</span>
                    <i class="fa-solid fa-circle"></i>
                    <span class="text-secondary">&middot; ${post.time}</span>
                    <div class="fw-bolder">${post.title}</div>
                </div>
                <div class="col-auto">
                    <img class="wd-post-img rounded-3" src=${post.image}>
                </div>
            </div>
        </li>
    `);
}
export default PostSummaryItem;