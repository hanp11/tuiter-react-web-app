const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item">
            <div class="row align-items-center">
                <div class="col-2 col-xl-auto">
                    <img class="wd-small-img rounded-circle"
                         src=${who.avatarIcon}/>
                </div>
                <div class="col-6 col-xl">
                    <div class="fw-bolder text-nowrap">
                        ${who.userName}
                        <i class="fa-solid fa-circle"></i>
                    </div>
                    <div>@${who.handle}</div>
                </div>
                <div class="col-4 col-xl-auto">
                    <button class="btn btn-primary btn-block rounded-pill float-end">
                        Follow
                    </button>
                </div>
            </div>
        </li>
    `);
}
export default WhoToFollowListItem;