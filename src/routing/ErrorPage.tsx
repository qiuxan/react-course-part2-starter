import { error } from "console";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  console.log("🚀 ~ file: ErrorPage.tsx:5 ~ ErrorPage ~ error:", error);
  return (
    <>
      <h1>Oops...</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{isRouteErrorResponse(error) ? "invalid page" : "unexpected error"}</p>
    </>
  );
};

export default ErrorPage;
