const NavigationSidebar = (active) => {
    return (`
        <div class="list-group">
            <a class="list-group-item list-group-item-action ${active === "index" && "active"}" href="/">
                <i class="fab fa-twitter"></i>
            </a>
            <a class="list-group-item list-group-item-action ${active === "home" && "active"}" href="../HomeScreen/index.html">
                <i class="fa-solid fa-house-chimney"></i>
                <span class="d-none d-xl-inline">Home</span>
            </a>
            <a class="list-group-item list-group-item-action ${active === "explore" && "active"}" href="../ExploreScreen/index.html">
                <i class="fa-solid fa-hashtag"></i>
                <span class="d-none d-xl-inline">Explore</span>
            </a>
            <a class="list-group-item list-group-item-action ${active === "notifications" && "active"}" href="">
                <i class="fa-solid fa-bell"></i>
                <span class="d-none d-xl-inline">Notifications</span>
            </a>
            <a class="list-group-item list-group-item-action ${active === "messages" && "active"}" href="">
                <i class="fa-solid fa-envelope"></i>
                <span class="d-none d-xl-inline">Messages</span>
            </a>
            <a class="list-group-item list-group-item-action ${active === "bookmarks" && "active"}" href="">
                <i class="fa-solid fa-bookmark"></i>
                <span class="d-none d-xl-inline">Bookmarks</span>
            </a>
            <a class="list-group-item list-group-item-action ${active === "lists" && "active"}" href="">
                <i class="fa-solid fa-list"></i>
                <span class="d-none d-xl-inline">Lists</span>
            </a>
            <a class="list-group-item list-group-item-action ${active === "profile" && "active"}" href="">
                <i class="fa-solid fa-user"></i>
                <span class="d-none d-xl-inline">Profile</span>
            </a>
            <a class="list-group-item list-group-item-action ${active === "more" && "active"}" href="">
                <i class="fa-solid fa-circle"></i>
                <span class="d-none d-xl-inline">More</span>
            </a>
        </div>
        <div class="d-grid mt-2">
            <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">Tweet</a>
        </div>
    `);
}
export default NavigationSidebar;