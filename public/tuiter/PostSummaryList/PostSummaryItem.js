const PostSummaryItem = (post) => {
    return (`
        <li class="list-group-item">
            <div class="hstack gap-4">
                <div>
                    ${post.topic} </br>
                    <b>${post.userName}</b> <i class="fa fa-check-circle" aria-hidden="true"></i> - ${post.time} </br>
                    ${post.title} </br>
                    ${post.tweets}
                </div>


                <img class="bg-body-tertiary border ms-auto rounded"
                    src=${post.image}
                    height="64px" width="64px">
            </div>
        </li>
    
    `);

}

export default PostSummaryItem;