import { useState } from "react";
import useTodos from "./hooks/useTodo";
import usePosts from "./hooks/usePosts";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const PostList = () => {
  const [userId, setUserId] = useState<number>();
  const { data, error, isLoading } = usePosts(userId);

  if (isLoading) return <p>Loading</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <select
        className="form-select mb3"
        onChange={(event) => setUserId(parseInt(event.target.value))}
        value={userId}
      >
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>
      <ul className="list-group">
        {data?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
