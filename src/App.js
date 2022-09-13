import UseFetch from "./UseFetch";
import { Routes, Route } from "react-router-dom";
import SinglePost from "./SinglePost";
import AllPosts from "./AllPosts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllPosts />} />
        <Route path="/:id" element={<SinglePost />} />
      </Routes>
    </div>
  );
}

export default App;