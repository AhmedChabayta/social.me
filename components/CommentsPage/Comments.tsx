import React, { useState } from "react";

interface CommentProps {
  comment: {
    id: string;
    postedBy: string;
    postedDate: string;
    comment: string;
    likes: number;
    dislikes: number;
    nestedComments: CommentProps["comment"][];
  };
  onLike: (commentId: string) => void;
  onDislike: (commentId: string) => void;
  onAddNestedComment: (commentId: string, nestedComment: string) => void;
}

const Comment: React.FC<CommentProps> = ({
  comment,
  onLike,
  onDislike,
  onAddNestedComment,
}) => {
  const [nestedCommentText, setNestedCommentText] = useState("");

  const handleNestedCommentChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNestedCommentText(event.target.value);
  };

  const handleNestedCommentSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (nestedCommentText.trim() !== "") {
      onAddNestedComment(comment.id, nestedCommentText);
      setNestedCommentText(""); // Clear the input field after submission
    }
  };

  return (
    <div className="mb-4 bg-gray-100 p-4">
      <div className="mb-2 flex items-center text-gray-800">
        <strong>{comment.postedBy}</strong> ({comment.postedDate})
      </div>
      <div className="mb-2 text-gray-800">{comment.comment}</div>
      <div className="flex items-center space-x-4">
        <button
          className="rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-700"
          onClick={() => onLike(comment.id)}
        >
          Like ({comment.likes})
        </button>
        <button
          className="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-700"
          onClick={() => onDislike(comment.id)}
        >
          Dislike ({comment.dislikes})
        </button>
      </div>
      <div className="ml-4 mt-2">
        <form onSubmit={handleNestedCommentSubmit} className="mt-4">
          <input
            type="text"
            value={nestedCommentText}
            onChange={handleNestedCommentChange}
            placeholder="Write a nested comment..."
            className="rounded border p-1"
          />
          <button
            type="submit"
            className="ml-2 rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-700"
          >
            Add Nested Comment
          </button>
        </form>
        {comment.nestedComments.map((nestedComment) => (
          <div
            className="mt-4 border-l-2 border-gray-400 pl-4"
            key={nestedComment.id}
          >
            <Comment
              comment={nestedComment}
              onLike={onLike}
              onDislike={onDislike}
              onAddNestedComment={onAddNestedComment}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
