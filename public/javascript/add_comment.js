let json_comments = [];

try{
  let tmp_comments = JSON.parse(localStorage.getItem("json_comments"));

  tmp_comments.map((comment)=>{
    console.log(comment);
    json_comments.push(comment);
  });
  
}
catch(TypeError){
  localStorage.setItem('json_comments',JSON.stringify(json_comments));
}
  

function comment(){
  let comment_username = document.querySelector('#username').value;
  let comment = document.querySelector('#comment').value;

  let newComment = {
    username: comment_username,
    comment: comment
  }
  json_comments.push(newComment);
  localStorage.setItem('json_comments',JSON.stringify(json_comments));

}