const commentInfo = {
  "id": 0,
  "userPic": 'images/avatars/image-juliusomo.png',
  "username": 'Eduard Brito',
  "content": document.getElementById("comment-input"),
  "score": 0,
  "createdAt": "just now"
};

fetch('data.json')
  .then((response) => response.json())
  .then((json) => {
    json.comments.forEach(comment => {
      const info = {
        "id": comment.id,
        "userPic": comment.user.image.png,
        "username": comment.user.username,
        "content": comment.content,
        "score": comment.score,
        "createdAt": comment.createdAt
      }
      addComment(info);
    });
  });

const submitBtn = document.getElementById("submit-button");
const commentsCont = document.getElementById("comments-container");
let comAux;

submitBtn.addEventListener("click", () => {
  if (commentInfo.content.value != "") {
    addComment(commentInfo);
    resetInput();
    console.log(commentInfo);
  }

});

function addComment(item) {
  const div = document.createElement('div');
  if (item.id === 0) {
    comAux = item.content.value;
  }
  else {
    comAux = item.content;
  }
  div.classList = 'comment-card';
  div.id = item.id;
  div.innerHTML = `
  <div class="grid fw-bold | score">
  <button><img src="images/icon-plus.svg" alt="upvote" /></button>
  <span>${item.score}</span>
  <button><img src="images/icon-minus.svg" alt="downvote" /></button>
</div>
<div class="grid | comment-section">
  <div class="flex | comment-header">
    <div class="flex | comment-meta"> 
      <img class="user-avatar" src="${item.userPic}" alt="userAvatar" />
      <span class="fw-bold | user-name">${item.username}</span>
      <small class="post-time">${item.createdAt}</small>
    </div>
    <div class="flex | comment-buttons">
      <button onclick="document.getElementById('id01').style.display='block'" class="flex fc-500 fw-semi-bold | delete-button"><img src="images/icon-delete.svg" alt=""> <span>Delete</span></button>
      <button class="flex fc-600 fw-semi-bold | edit-button"><img src="images/icon-edit.svg" alt=""> <span>Edit</span></button>
      <button class="flex fc-600 fw-semi-bold | reply-button"><img src="images/icon-reply.svg" alt=""> <span>Reply</span></button>
    </div>
  </div>
  <div class="comment">${comAux}</div>
</div>
`;
  commentsCont.insertAdjacentElement('beforeend', div);
};

function resetInput(){
  commentInfo.content.value = "";
}
