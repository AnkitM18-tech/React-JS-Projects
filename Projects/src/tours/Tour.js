import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button
          className="delete-btn"
          onClick={
            () => removeTour(id)
            /* calling the function directly will result in instant deletion , always use callback while invoking with an argument  If there are no argument passing then you can reference it directly */
          }
        >
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
