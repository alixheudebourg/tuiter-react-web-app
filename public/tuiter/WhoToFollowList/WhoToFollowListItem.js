
const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item ">
            <div class="hstack gap-4">
                <img class="rounded-circle" src=${who.avatarIcon}
                    height="32px">
                <div>
                    ${who.userName} <i class="fa fa-check-circle" aria-hidden="true"></i> </br>
                    @${who.handle}
                </div>

                <button class="btn btn-primary rounded-pill bg-body-tertiary border ms-auto">
                    Follow
                </button>
            </div>
        </li>
    `);
}
export default WhoToFollowListItem;