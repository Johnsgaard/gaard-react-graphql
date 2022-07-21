import React from "react";
import PropTypes from "prop-types";

const MenuButton = (props) => {
  return (
    <div
      onClick={props.toggleSidePanel}
      className="sp-button"
      style={{ display: "block" }}
    >
      <span>Menu</span>
    </div>
  );
};

MenuButton.propTypes = {
  toggleSidePanel: PropTypes.func.isRequired,
};

export default MenuButton;
