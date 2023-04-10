import { Link } from "react-router-dom";
import { ROUTES } from "..";

function About() {
  return (
    <div>
      <h1>어바웃 페이지입니다</h1>
      <Link to={ROUTES.HOME}>홈으로 가기</Link>
    </div>
  );
}

export default About;
