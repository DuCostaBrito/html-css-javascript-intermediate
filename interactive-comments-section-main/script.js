const commentInfo = {
    "id": 1,
    "userPic": 'images/avatars/image-juliusomo.png',
    "name": 'Eduard Brito',
    "comment": document.getElementById("comment-input")
};
const submitBtn = document.getElementById("submit-button");
const commentsCont = document.getElementById("comments-container");

submitBtn.addEventListener("click", () => {
    if (commentInfo.comment.value != "") {
        const div = document.createElement('div');
        div.classList = 'comment-card';
        div.id = commentInfo.id;
        div.innerHTML = `
        <div class="grid fw-bold | score">
        <button><img src="images/icon-plus.svg" alt="upvote" /></button>
        <span>0</span>
        <button><img src="images/icon-minus.svg" alt="downvote" /></button>
      </div>
      <div class="grid | comment-section">
        <div class="flex | comment-header">
          <div class="flex | comment-meta"> 
            <img class="user-avatar" src="${commentInfo.userPic}" alt="userAvatar" />
            <span class="fw-bold | user-name">${commentInfo.name}</span>
            <small class="post-time">Post time</small>
          </div>
          <div class="flex | comment-buttons">
            <button class="flex fc-500 fw-semi-bold hidden | delete-button"><img src="images/icon-delete.svg" alt=""> <span>Delete</span></button>
            <button class="flex fc-600 fw-semi-bold hidden | edit-button"><img src="images/icon-edit.svg" alt=""> <span>Edit</span></button>
            <button class="flex fc-600 fw-semi-bold | reply-button"><img src="images/icon-reply.svg" alt=""> <span>Reply</span></button>
          </div>
        </div>
        <div class="comment">${commentInfo.comment.value}</div>
      </div>
      `;
      commentsCont.insertAdjacentElement('beforeend', div)
      console.log(commentInfo);
    }

});