const PostData = ({ postData, delPostData }) => {
  return (
    <>
        <div className="post">
          <h3>{postData.title}</h3>
          <p>{postData.body}</p>
          <div id="delBtn">
            <button className="del-btn" onClick={() => delPostData(postData)}>
              Delete
            </button>
          </div>
        </div>
    </>
  );
};

export default PostData;
