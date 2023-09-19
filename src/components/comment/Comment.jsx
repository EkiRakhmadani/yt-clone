/* eslint-disable react/prop-types */
import "./_comment.scss";
import moment from "moment";

const Comment = ({ comment }) => {
  const {
    authorDisplayName,
    authorProfileImageUrl,
    publishedAt,
    textOriginal,
  } = comment;

  return (
    <div className="comment p-2 d-flex">
      <img src={authorProfileImageUrl} alt="" className="rounded-circle mr-3" />
      <div className="comment_body">
        <p className="comment_header mb-1">
          {authorDisplayName} • {moment(publishedAt).fromNow()}
        </p>
        <p className="mb-0">{textOriginal}</p>
      </div>
    </div>
  );
};

export default Comment;
