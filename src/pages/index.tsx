import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Post from "./Post";
import PostDetail from "./PostDetail";

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  POST: "/post",
  POST_DETAIL: "/post/:id",
} as const;

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.POST} element={<Post />} />
        <Route path={ROUTES.POST_DETAIL} element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
