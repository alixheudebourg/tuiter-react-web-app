import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`

        <div class="hstack gap-4">
            <input type="text" class="form-control" id="input1" placeholder="Search">
            <i class="fa fa-cog fa-2x text-primary bg-body-tertiary border"></i>
        </div>                          

        <!-- TABS -->
        <div class="mt-3">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
            </ul>
        </div>

        <!-- Big image -->
        <div class="mt-3">
            <img width="100%" src="../../images/starship.jpeg">
        </div>

        ${PostSummaryList()}
    `);
}
export default ExploreComponent;

