import FormApi from "./components/FormApi";
import PostData from "./components/PostData";

import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  const postsData = async () => {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users/1/posts"
      );
      const data = await res.json();

      setPosts(data);
    } catch (e) {
      console.error("this is errot " + e);
    }
  };

  useEffect(() => {
    postsData();
  }, []);

  const addPosts = async (title, body) => {
    try {
      await fetch("https://jsonplaceholder.typicode.com/users/1/posts", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          body: body,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setPosts((Prevpost) => [data, ...Prevpost]);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const delPostData = async (index) => {
    alert("Are You Sure Delete The Post");
    await fetch(`https://jsonplaceholder.typicode.com/users/1/posts${index}`, {
      method: "DELETE",
    });

    setPosts(
      posts.filter((delpost) => {
        return delpost !== index;
      })
    );
  };

  return (
    <>
      <div className="container">
        <header>
          <h1>React Rest Api</h1>
          <FormApi addPosts={addPosts} />
        </header>

        <div className="post-container">
          {posts.map((post, index) => {
            return (
              <PostData postData={post} key={index} delPostData={delPostData} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
