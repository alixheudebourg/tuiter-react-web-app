
const NavigationSidebar = () => {
    return (`
        <div class="list-group">

            <a href="#" class="list-group-item list-group-item-action">
                <i class="fab fa-twitter"></i>
            </a>

            <a href="#" class="list-group-item list-group-item-action">
                <div class="hstack gap-2">
                    <i class="fa fa-home"></i>
                    <span class="d-none d-xl-block">Home</span>
                </div>
            </a>

            <a href="#" class="list-group-item list-group-item-action active">
                <div class="hstack gap-2">
                    <i class="fa fa-hashtag"></i>
                    <span class="d-none d-xl-block">Explore</span>
                </div>
            </a>

            <a href="#" class="list-group-item list-group-item-action">
                <div class="hstack gap-2">
                    <i class="fa fa-bell"></i>
                    <span class="d-none d-xl-block">Notifications</span>
                </div>
            </a>

            <a href="#" class="list-group-item list-group-item-action">
                <div class="hstack gap-2">
                    <i class="fa fa-envelope"></i>
                    <span class="d-none d-xl-block">Messages</span>
                </div>
            </a>

            <a href="#" class="list-group-item list-group-item-action">
                <div class="hstack gap-2">
                    <i class="fa fa-bookmark"></i>
                    <span class="d-none d-xl-block">Bookmarks</span>
                </div>
            </a>

            <a href="#" class="list-group-item list-group-item-action">
                <div class="hstack gap-2">
                    <i class="fa fa-list"></i>
                    <span class="d-none d-xl-block">Lists</span>
                </div>
            </a>

            <a href="#" class="list-group-item list-group-item-action">
                <div class="hstack gap-2">
                    <i class="fa fa-user"></i>
                    <span class="d-none d-xl-block">Profile</span>
                </div>
            
            </a>

            <a href="#" class="list-group-item list-group-item-action">
                <div class="hstack gap-2">
                    <i class="fa fa-bars"></i>
                    <span class="d-none d-xl-block">More</span>
                </div>
            </a>
        </div>

        <div class="d-grid mt-3">
            <a href="tweet.html" class="btn btn-primary btn-block rounded-pill"> Tweet</a>
        </div>

    `);
}
export default NavigationSidebar;