import React, { useState } from "react";
import Comment from "./Comments"; // Update with your Comment component

const CommentsPage: React.FC = () => {
  const [comments, setComments] = useState([
    {
      id: "1",
      postedBy: "UserA",
      postedDate: "Tuesday, 15 August 2023", // Example date format
      comment: "This is the main comment.",
      likes: 10,
      dislikes: 2,
      nestedComments: [
        {
          id: "2",
          postedBy: "UserB",
          postedDate: "Tuesday, 15 August 2023", // Example date format
          comment: "Reply to the main comment.",
          likes: 5,
          dislikes: 1,
          nestedComments: [
            {
              id: "3",
              postedBy: "UserC",
              postedDate: "Tuesday, 15 August 2023", // Example date format
              comment: "Reply to the reply.",
              likes: 2,
              dislikes: 0,
              nestedComments: [],
            },
          ],
        },
        {
          id: "4",
          postedBy: "UserD",
          postedDate: "Tuesday, 15 August 2023", // Example date format
          comment: "Another reply to the main comment.",
          likes: 3,
          dislikes: 0,
          nestedComments: [],
        },
      ],
    },
  ]);

  const handleLike = (commentId: string) => {
    // Update likes in the state
    const updatedComments = comments.map((comment) =>
      updateCommentLikes(comment, commentId)
    );
    setComments(updatedComments);
  };

  const handleDislike = (commentId: string) => {
    // Update dislikes in the state
    const updatedComments = comments.map((comment) =>
      updateCommentDislikes(comment, commentId)
    );
    setComments(updatedComments);
  };

  const updateCommentLikes = (comment: any, targetCommentId: string) => {
    if (comment.id === targetCommentId) {
      return { ...comment, likes: comment.likes + 1 };
    } else if (comment.nestedComments.length > 0) {
      return {
        ...comment,
        nestedComments: comment.nestedComments.map((nestedComment: any) =>
          updateCommentLikes(nestedComment, targetCommentId)
        ),
      };
    }
    return comment;
  };

  const updateCommentDislikes = (comment: any, targetCommentId: string) => {
    if (comment.id === targetCommentId) {
      return { ...comment, dislikes: comment.dislikes + 1 };
    } else if (comment.nestedComments.length > 0) {
      return {
        ...comment,
        nestedComments: comment.nestedComments.map((nestedComment: any) =>
          updateCommentDislikes(nestedComment, targetCommentId)
        ),
      };
    }
    return comment;
  };

  const handleAddNestedComment = (
    parentCommentId: string,
    nestedCommentText: string
  ) => {
    const updatedComments = comments.map((comment) =>
      addNestedComment(comment, parentCommentId, nestedCommentText)
    );
    setComments(updatedComments);
  };

  const addNestedComment = (
    comment: any,
    parentCommentId: string,
    nestedCommentText: string
  ) => {
    if (comment.id === parentCommentId) {
      return {
        ...comment,
        nestedComments: [
          ...comment.nestedComments,
          {
            id: generateUniqueId(), // You need a function to generate unique IDs
            postedBy: "UserX", // Change as needed
            postedDate: "Tuesday, 15 August 2023", // Example date format
            comment: nestedCommentText,
            likes: 0,
            dislikes: 0,
            nestedComments: [],
          },
        ],
      };
    } else if (comment.nestedComments.length > 0) {
      return {
        ...comment,
        nestedComments: comment.nestedComments.map((nestedComment: any) =>
          addNestedComment(nestedComment, parentCommentId, nestedCommentText)
        ),
      };
    }
    return comment;
  };

  const generateUniqueId = () => {
    // Generate a unique ID here
    return Math.random().toString(36).substr(2, 9);
  };

  return (
    <div className="">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onLike={handleLike}
          onDislike={handleDislike}
          onAddNestedComment={handleAddNestedComment}
        />
      ))}
    </div>
  );
};

export default CommentsPage;
