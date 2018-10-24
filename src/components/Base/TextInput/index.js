import React from "react";
import PropTypes from "prop-types";
import style from "./style.scss";

export default class TextInput extends React.Component {
  static propTypes = {
    addValue: PropTypes.func,
    keyAdd: PropTypes.string,
    descriptionText: PropTypes.string,
    className: PropTypes.string
  };
  static defaultProps = {
    keyAdd: "Enter",
    descriptionText: "Новая запись",
    className: "formField",
    addValue: null
  };
  state = {
    itemList: [],
    itemValue: "",
    validationError: false
  };
  setValueInput = event => {
    event.stopPropagation();
    return this.setState({
      itemValue: event.target.value,
      validationError: false
    });
  };
  addItemInList = event => {
    const { itemList, itemValue } = this.state;
    const { addValue, keyAdd } = this.props;
    if (event.target.value.length <= 0) {
      this.setState({ validationError: true });
      return false;
    }

    if (event.key === keyAdd && typeof addValue === "function") {
      event.stopPropagation();
      addValue(itemValue);
      return this.setState({ itemValue: "", validationError: false });
    }
    return null;
  };
  showErrorValidation = validationError => {
    if (validationError) {
      return (
        <div id="validationError" className={style.validationError}>
          Заполните поле
        </div>
      );
    }
    return null;
  };
  render() {
    const { itemValue, validationError } = this.state;
    const { className, descriptionText } = this.props;
    return (
      <div>
        <input
          className={className}
          value={itemValue}
          placeholder={descriptionText}
          onChange={this.setValueInput}
          onKeyPress={this.addItemInList}
        />
        {this.showErrorValidation(validationError)}
      </div>
    );
  }
}
