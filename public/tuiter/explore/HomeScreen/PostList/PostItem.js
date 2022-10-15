const PostItem = (post) => {

    const replaceLinks = (str, links) => {
        let s = str.split(' ');
        links.forEach(l => s[l.wordIndex] = `<a href=${l.link} class="text-decoration-none">${s[l.wordIndex]}</a>`);
        return s.join(' ');
    }

    return(`
        <li class="list-group-item bg-black">
            <div class="row">
                <div class="col-auto">
                    <img class="wd-small-img rounded-circle" src=${post.userImage}>
                </div>
                <ul class="col">
                    <span class="fw-bolder">${post.userName}</span>
                    <i class="fa-solid fa-circle"></i>
                    <span class="text-secondary">@${post.handle}</span>
                    <span class="text-secondary">&middot; ${post.time}</span>
                    <a href="" class="text-decoration-none text-dark float-end">&ctdot;</a>
                    <div class="mb-2">
                        <span>
                            ${replaceLinks(post.message, post.messageLinks)}
                        </span>
                    </div>
                    <ul class="list-group mb-2">
                        <li class="list-group-item bg-black p-0">
                            <img class=${post.title ? 'wd-rounded-top' : 'wd-rounded'}
                                src=${post.image} width="100%"/>
                        </li>
                        ${post.title && (
                            `<li class="list-group-item bg-black">
                                <div>${post.title}</div>
                                <div class="text-secondary fw-lighter">${post.content}</div>
                                <div class="text-secondary fw-lighter">
                                    <i class="fa-solid fa-link"></i>
                                    ${post.link}
                                </div>
                            </li>`
                        )}
                    </ul>
                    <div class="text-secondary fw-lighter d-flex justify-content-between">
                        <span>
                            <i class="fa-regular fa-comment me-2"></i>
                            ${post.numComments}
                        </span>
                        <span>
                            <i class="fa-solid fa-retweet me-2"></i>
                            ${post.numRetweet}
                        </span>          
                        <span>  
                            <i class="fa-regular fa-heart me-2"></i>
                            ${post.numLike}
                        </span>        
                        <span>  
                            <i class="fa-solid fa-arrow-up-from-bracket me-2"></i>
                        </span>
                        <span></span>
                    </div>
                </ul>
            </div>
        </li>
    `);
}
export default PostItem;