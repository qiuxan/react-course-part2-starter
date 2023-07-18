import useTodos from './hooks/useTodo';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const PostList = () => {
 

  const {data, error, isLoading} =useTodos();

  if (isLoading) return <p>Loading</p>;

  if (error) return <p>{error.message }</p>;

  return (
    <ul className="list-group">
      {data?.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default PostList;
