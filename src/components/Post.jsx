import { useState, useEffect } from "react";

const Post = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://gorest.co.in/public/v1/posts")
      .then((response) => response.json())
      .then((post) => setPost(post.data));
  }, []);

  return (
    <>
      {post.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              border: "pink solid 1px",
              margin: "auto",
              width: "500px",
              marginBottom: "20px",
              padding: "20px",
            }}
          >
            <h5>{item.title}</h5>
            <div>{item.body}</div>
          </div>
        );
      })}
    </>
  );
};

export default Post;
