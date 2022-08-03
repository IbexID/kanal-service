import React from "react";

const PostItem = React.forwardRef(({ img, author, company, title, text }, ref) => {
  return (
    <div className="post-item" ref={ref}>
      <img className="post-item__img" src={img} alt="post-img" />
      <div className="post-item__top">
        <p className="post-item__author">Author: {author}</p>
        <p className="post-item__company">Company: {company}</p>
      </div>
      <h6 className="post-item__title">Title:{title}</h6>
      <p className="post-item__text">{text}</p>
    </div>
  );
})

export default PostItem;
