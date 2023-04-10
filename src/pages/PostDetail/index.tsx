import { Link } from "react-router-dom";

function PostDetail() {
  return (
    <div>
      <h1>포스트 디테일 페이지</h1>
      {/* 이런것도 되네.. */}
      <Link to={".."} relative="path">
        이전페이지
      </Link>
    </div>
  );
}

export default PostDetail;
