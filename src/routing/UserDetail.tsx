import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetail = () => {
  const paras = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  const localtion = useLocation();

  return <p>User {paras.id}</p>;
};

export default UserDetail;
