import { Link } from "react-router-dom";
import { ROUTES } from "..";

function Home() {
  return (
    <div>
      <h1>홈입니다</h1>
      <Link to={ROUTES.ABOUT}>어바웃 페이지로 이동</Link>
      <br />
      <Link to={ROUTES.POST}>포스트 페이지로 이동</Link>
    </div>
  );
}

export default Home;
