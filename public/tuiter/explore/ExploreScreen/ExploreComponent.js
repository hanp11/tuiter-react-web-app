import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="row align-items-center">
            <!-- search field and cog -->
            <div class="col-10">
                <div class="position-relative">
                    <span class="position-absolute wd-search">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <input type="text" class="ps-5 form-control rounded-pill" 
                        placeholder="Search Twitter">
                </div>
            </div>

            <div class="col-2 text-end">
                <span class="text-primary"><i class="fa-solid fa-gear fa-2x"></i></span>
            </div>
        </div>
        <ul class="nav mb-2 nav-tabs mt-2">
            <!-- tabs -->
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item d-none d-md-inline">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
            </li>
        </ul>
        <!-- image with overlaid text -->
        <div class="position-relative">
            <img class="mb-2" src="../../../images/space-x-starship.jpg" width="100%"/>
            <h2 class="position-absolute bottom-0 left-0 text-white ps-2">SpaceX's Starship</h2>
        </div>
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;
