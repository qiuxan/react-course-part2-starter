import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  const paras = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
 
  const localtion = useLocation();
  console.log("🚀 ~ file: UserDetailPage.tsx:9 ~ UserDetailPage ~ localtion:", localtion)

  return <p>User</p>;
};

export default UserDetailPage;
