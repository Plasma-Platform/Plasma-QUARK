import React from 'react';

import './Dropdown.less';

export default class Dropdown extends React.Component {
  static propTypes = {
    defaultOpen        : React.PropTypes.bool,
    type               : React.PropTypes.oneOf([1, 2, 3]).isRequired,
    className          : React.PropTypes.string,
    id                 : React.PropTypes.string,
    disabled           : React.PropTypes.bool,
    label              : React.PropTypes.string,
    filterQuery        : React.PropTypes.string,
    filterText         : React.PropTypes.string,
    defaultFilterQuery : React.PropTypes.string,
    noResultsText      : React.PropTypes.string,
    options            : React.PropTypes.array.isRequired,
    optionsToShow      : React.PropTypes.number,
    defaultValue       : React.PropTypes.string,
    onOpen             : React.PropTypes.func,
    onClose            : React.PropTypes.func,
    onChange           : React.PropTypes.func
  }

  static defaultProps = {
    defaultOpen        : false,
    defaultFilterQuery : '',
    defaultValue       : ''
  }

  state = {
    open        : this.props.defaultOpen,
    filterQuery : this.props.defaultFilterQuery,
    value       : this.props.options[0] ? this.props.options[0].value : this.props.defaultValue
  }

  constructor (props) {
    super(props);

    this.open                = this.open.bind(this);
    this.close               = this.close.bind(this);
    this.toggle              = this.toggle.bind(this);
    this.handleButtonKeyDown = this.handleButtonKeyDown.bind(this);
    this.handleFilterInput   = this.handleFilterInput.bind(this);
    this.handleFilterBlur    = this.handleFilterBlur.bind(this);
    this.handleFilterKeyDown = this.handleFilterKeyDown.bind(this);
    this.handleOptionClick   = this.handleOptionClick.bind(this);
    this.handleOptionKeyDown = this.handleOptionKeyDown.bind(this);
    this.handleDropdownBlur  = this.handleDropdownBlur.bind(this);
    this.getValue            = this.getValue.bind(this);
    this.getOptionByValue    = this.getOptionByValue.bind(this);

    this.renderLabel       = this.renderLabel.bind(this);
    this.renderButton      = this.renderButton.bind(this);
    this.renderOptions     = this.renderOptions.bind(this);
    this.renderFilterInput = this.renderFilterInput.bind(this);
  }

  open () {
    this.setState({
      open: true
    }, () => {
      if (this.props.type === 3) {
        this.filterInput.value = '';
        this.filterInput.focus();
      }
      this.props.onOpen ? this.props.onOpen() : null;
    });
  }

  close () {
    this.setState({
      open: false
    }, () => {
      this.props.onClose ? this.props.onClose() : null;
    });
  }

  toggle () {
    this.setState({
      open: !this.state.open
    }, () => {
      this.props.onToggle ? this.props.onToggle() : null;
    });
  }

  handleButtonKeyDown (event) {

  }

  handleFilterInput () {
    this.setState({
      filterQuery: this.filterInput.value.trim()
    });
  }

  handleFilterBlur () {
    this.filterInput.value = this.filterInput.value.trim();
  }

  handleFilterKeyDown (event) {

  }

  handleOptionClick (option) {
    this.setState({
      open  : false,
      value : option.value
    }, () => {
      this.props.onChange ? this.props.onChange() : null;
    });
  }

  handleOptionKeyDown (event) {

  }

  handleDropdownBlur (event) {
    if (this.container.contains(event.relatedTarget) === false && this.container !== event.relatedTarget && this.open) {
      this.close();
    }
  }

  getValue = () => {
    return this.state.value;
  }

  getOptionByValue = (optionValue) => {
    return this.props.options.filter((option) => {
      return option.value === optionValue;
    })[0];
  }

  renderLabel () {
    return (
      <span className="dropdown__label">{this.props.label}</span>
    );
  }

  renderContent () {
    const contentPos          = 'bottom';
    const contentPosClassName = `dropdown__content_position_${contentPos}`;
    const contentClassName    = `dropdown__content ${contentPosClassName}`;

    return (
      <div
        className = {contentClassName}
        ref       = {ref => { this.content = ref; }}
      >
        {this.props.showFilter &&
          <div className="dropdown__search-box">
            <input
              className    = "dropdown__search-input"
              type         = "search"
              value        = {this.state.filterQuery}
              placeholder  = {this.props.filterText || null}
              onChange     = {this.handleFilterInput}
              onBlur       = {this.handleFilterBlur}
              onKeyDown    = {this.handleFilterKeyDown}
              ref          = {ref => { this.filterInput = ref; }}
            />
          </div>
        }
        <ul
          className = "dropdown__options"
          ref       = {ref => { this.optionsList = ref; }}
        >
          {this.renderOptions()}
        </ul>
      </div>
    );
  }

  renderOptions () {
    const filterQuery = this.state.filterQuery.toLowerCase();

    return (
      this.props.options.map((option, index) => {
        return (
          <li
            className  = {`dropdown__option${this.state.value === option.value ? ' dropdown__option_selected' : ''}`}
            tabIndex   = {option.disabled || this.state.open === false ? -1 : 0}
            aria-label = {option.label}
            role       = "option"
            hidden     = {option.label.toLowerCase().indexOf(filterQuery) === 0}
            onClick    = {() => { this.handleOptionClick(option); }}
            onKeyDown  = {(event) => { this.handleOptionKeyDown(event, option, index); }}
            key        = {index}
            ref        = {ref => { this[`option${index}`] = ref; }}
          >
            {option.label}
          </li>
        );
      })
    );
  }

  render () {
    const openedClassName     = this.state.open      ? ` dropdown_open`           : '';
    const typeClassName       = ` dropdown_type_${this.props.type}`;
    const disabledClassName   = this.props.disabled  ? ` dropdown_disabled`       : '';
    const addClassName        = this.props.className ? ` ${this.props.className}` : '';
    const containerClassName  = `dropdown${openedClassName}${typeClassName}${disabledClassName}${addClassName}`;

    const selectedOption      = this.getOptionByValue(this.state.value);
    const selectedOptionLabel = selectedOption ? selectedOption.label : this.props.options.length ? this.props.options[0].label : '';

    return (
      <div
        className = {containerClassName}
        id        = {this.props.id || null}
        tabIndex  = "-1"
        onKeyDown = {this.handleDropdownKeyDown}
        onBlur    = {this.handleDropdownBlur}
        ref       = {ref => { this.container = ref; }}
      >
        {(this.props.type === 1 || this.props.type === 2) &&
          this.renderLabel()
        }

        <button
          className  = "dropdown__button"
          type       = "button"
          aria-label = {this.props.label}
          onClick    = {this.toggle}
          onKeyDown  = {this.handleButtonKeyDown}
          ref        = {ref => { this.button = ref; }}
        >
          {selectedOptionLabel}
        </button>

        {this.props.type === 3 &&
          this.renderLabel()
        }

        {this.renderContent()}
      </div>
    );
  }
}
