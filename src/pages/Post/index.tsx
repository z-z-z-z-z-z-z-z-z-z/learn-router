import { generatePath, Link } from "react-router-dom";
import { ROUTES } from "..";

const posts = [
  {
    id: "1",
    title: "첫번째 글",
  },
  {
    id: "2",
    title: "두번째 글",
  },
  {
    id: "3",
    title: "세번째 글",
  },
  {
    id: "4",
    title: "네번째 글",
  },
];

function Post() {
  const getPostDetailUrl = (id: string) =>
    generatePath(ROUTES.POST_DETAIL, { id });

  return (
    <div>
      <h1>글 내용</h1>
      <ul>
        {posts.map(({ title, id }) => (
          <li>
            <Link to={getPostDetailUrl(id)} key={id}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Post;
