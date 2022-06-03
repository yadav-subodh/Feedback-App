import { Navigate, useNavigate, Routes, Route } from "react-router-dom";

function Post() {
  const status = 200;

  const navigate = useNavigate();

  if (status === 404) {
    return <Navigate to="/notFound" />;
  }

  const handleClick = () => {
    navigate("/about");
  };
  return (
    <div>
      <h1>Post</h1>
      <button onClick={handleClick}>Click</button>
      <Routes>
        <Route path="/show" element={<h1>Hello World</h1>}></Route>
      </Routes>
    </div>
  );
}

export default Post;
