import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const displayTime = () => {
    let icon = minutes < 30 ? "☕️" : "🍱";
    let count = minutes < 30 ? Math.ceil(minutes / 5) : Math.ceil(minutes / 10);
    return icon.repeat(count) + ` ${minutes} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {displayTime()}
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
