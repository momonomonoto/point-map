import React from "react";
import PropTypes from "prop-types";
import style from "./style.scss";

export default function Bar({ title }) {
  return (
    <div className={style.appBar}>
      <h1 className={style.title}>{title}</h1>
    </div>
  );
}

Bar.propTypes = {
  title: PropTypes.string
};

Bar.defaultProps = {
  title: "Title"
};
