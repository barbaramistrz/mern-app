import React, { useEffect, useState } from "react";

const App = () => {
  const [serverState, setServerState] = useState(null);
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((state) => {
        setServerState(state.status);
      });
  });

  fetch("/api/posts")
    .then((response) => response.json())
    .then((r) => setPosts(r.posts));

  //   fetch('api/posts/gIt6mVlTqGonw7J8', {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       title: 'Moj nowy tytul po update',
  //       content: 'Nowe lorem ipsum',
  //     }),
  //   })
  //     .then((r) => r.json())
  //     .then(console.warn);
  // }, []);

  const handlePostAdd = () => {
    fetch('api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    })
      .then((r) => r.json())
      .then(console.warn);
  };

  const handlePostDelete = (id) => {
    fetch(`api/posts/${id}`, {
      method: 'DELETE',
    })
      .then((r) => r.json())
      .then(console.warn);
  };


  return (
    <div className="App">
      Status serwera:" {serverState}
      <ul>
      {posts.map((post) => (
          <li key={post._id} onClick={() => handlePostDelete(post._id)}>
            {post.title}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />
            <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="content"
      />
      <button onClick={handlePostAdd}>Add</button>
    </div>
  );
};

export default App;
