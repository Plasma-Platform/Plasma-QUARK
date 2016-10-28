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
    showFilter         : React.PropTypes.bool,
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
    open        : this.props.defaultOpen || false,
    filterQuery : this.props.defaultFilterQuery || '',
    value       : this.props.options ? this.props.options[0].value : this.props.defaultValue
  }

  constructor (props) {
    super(props);

    this.renderLabel       = this.renderLabel.bind(this);
    this.renderButton      = this.renderButton.bind(this);
    this.renderOptions     = this.renderOptions.bind(this);
    this.renderFilterInput = this.renderFilterInput.bind(this);

    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.handleDropdownBlur  = this.handleDropdownBlur.bind(this);
    this.handleDropdownKeyUp = this.handleDropdownKeyUp.bind(this);
    this.setContentPos       = this.setContentPos.bind(this);
    this.setValue            = this.setValue.bind(this);
    this.getValue            = this.getValue.bind(this);
    this.open                = this.open.bind(this);
    this.close               = this.close.bind(this);
    this.toggle              = this.toggle.bind(this);
    this.filterOptions       = this.filterOptions.bind(this);
    this.handleFilterBlur    = this.handleFilterBlur.bind(this);
    this.handleFilterKeyDown = this.handleFilterKeyDown.bind(this);
    this.handleOptionClick   = this.handleOptionClick.bind(this);
    this.handleOptionKeyDown = this.handleOptionKeyDown.bind(this);
    this.getOptionByValue    = this.getOptionByValue.bind(this);

    this.contentPos   = 'bottom';
  }

  handleDocumentClick = (event) => {
    if (this.container.contains(event.target) === false && this.container !== event.target && this.state.open) {
      this.close();
    }
  }

  handleDropdownBlur = (event) => {
    if (this.container.contains(event.relatedTarget) === false && this.container !== event.relatedTarget && this.open) {
      this.close();
    }
  }

  handleDropdownKeyUp = (event) => {
    if (event.keyCode === 27 && this.state.open) {
      this.close();
    }
  }

  setContentPos = () => {
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
    const contentHeight    = this.content.offsetHeight;
    const contentTopOffset = this.content.getBoundingClientRect().top + pageYOffset;

    if (contentTopOffset + contentHeight - documentHeight > 0 && contentTopOffset > documentHeight - contentTopOffset) {
      this.contentPos = 'top';
    } else {
      this.contentPos = 'bottom';
    }
  }

  setValue = (newValue) => {
    this.setState({
      open  : false,
      value : newValue
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(newValue);
      }
    });
  }

  getValue = () => {
    return this.state.value;
  }

  open = () => {
    this.setContentPos();

    this.setState({
      open        : true,
      filterQuery : ''
    }, () => {
      this.filterInput.focus();
    });
  }

  close = () => {
    this.setState({
      open: false
    });
  }

  toggle = () => {
    if (this.state.open === true) {
      this.close();
    } else {
      this.open();
    }
  }

  filterOptions = () => {
    if (this.contentPos === 'bottom') {
      this.setContentPos();
    }

    this.setState({
      filterQuery: this.filterInput.value
    });
  }

  handleFilterBlur = (event) => {
    this.filterInput.value = this.filterInput.value.trim();
    this.filterOptions();
  }

  handleFilterKeyDown= (event) => {
    const firstOptionIndex = this.props.options.findIndex((option, index) => {
      return option.disabled !== true;
    });

    if (event.keyCode === 40) {
      event.preventDefault();
      this[`option${firstOptionIndex}`].focus();
    }
  }

  handleOptionClick = (option) => {
    if (option.disabled !== true) {
      this.setValue(option.value);
    }
  }

  handleOptionKeyDown = (event, option, optionIndex) => {
    event.preventDefault();

    const keyCode = event.keyCode;
    const prevOptions = [];

    const nextOptionIndex = this.props.options.findIndex((option, index) => {
      return index > optionIndex && option.disabled !== true;
    });

    this.props.options.forEach((option, index) => {
      if (index < optionIndex && option.disabled !== true) {
        prevOptions.push(index);
      }
    });

    const prevOptionIndex = prevOptions.slice(-1)[0];

    if (keyCode === 13) {
      this.setValue(option.value);
    } else if (keyCode === 40 && nextOptionIndex > 0 && nextOptionIndex < this.props.options.length) {
      this[`option${nextOptionIndex}`].focus();
    } else if (keyCode === 38) {
      if (prevOptionIndex >= 0) {
        this[`option${prevOptionIndex}`].focus();
      } else if (this.props.showFilter) {
        this.filterInput.focus();
      }
    }
  }

  getOptionByValue = (optionValue) => {
    return this.props.options.filter((option) => {
      return option.value === optionValue;
    })[0];
  }

  renderLabel = () => {
    return <span className="dropdown__label">{this.props.label}</span>;
  }

  renderButton = (selectedOption) => {
    return <button
      className  = {`dropdown__button${selectedOption.icon ? ' icon icon-' + selectedOption.icon : ''}`}
      type       = "button"
      aria-label = {this.props.label}
      value      = {selectedOption.value}
      onClick    = {this.toggle}
      disabled   = {this.props.disabled}
    >
      {selectedOption.label}
      <span className="dropdown__arrow"></span>
    </button>;
  }

  renderFilterInput = () => {
    return <input
      className   = "dropdown__filter-input"
      type        = "search"
      placeholder = {this.props.filterHint ? this.props.filterHint : ''}
      value       = {this.state.filterQuery}
      tabIndex    = {this.state.open ? 0 : -1}
      onChange    = {this.filterOptions}
      onBlur      = {this.handleFilterBlur}
      onKeyDown   = {this.handleFilterKeyDown}
      ref         = {(ref) => this.filterInput = ref}
    />;
  }

  renderOptions = (filterRegExp) => {
    return this.props.options.filter((option) => {
      return option.label.toLowerCase().indexOf(filterRegExp) === 0;
    }).map((option, optionIndex) => {
      const selectedClassName = option.value === this.state.value ? ' dropdown__option_selected' : '';
      const disabledClassName = option.disabled ? ' dropdown__option_disabled' : '';
      const iconClassName   = option.icon ? ` icon icon-${option.icon}` : '';
      const optionClassName   = `dropdown__option${selectedClassName}${disabledClassName}${iconClassName}`;

      return (
        <li
          className  = {optionClassName}
          aria-label = {option.label}
          tabIndex   = {option.disabled || this.state.open === false ? -1 : 0}
          role       = "option"
          onClick    = {() => { this.handleOptionClick(option); }}
          onKeyDown  = {(event) => { this.handleOptionKeyDown(event, option, optionIndex); }}
          key        = {optionIndex}
          ref        = {ref => { this[`option${optionIndex}`] = ref; }}
        >
          {option.label}
        </li>
      );
    });
  }

  componentDidMount () {
    window.addEventListener('click', this.handleDocumentClick);
    this.setContentPos();
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      open        : nextProps.open ? nextProps.open : this.state.open,
      filterQuery : nextProps.filterQuery ? nextProps.filterQuery : this.state.filterQuery,
      value       : nextProps.value ? nextProps.value : this.state.value
    });
  }

  componentWillUnmount () {
    window.removeEventListener('click', this.handleDocumentClick);
  }

  render () {
    const filterRegExp   = this.state.filterQuery.toLowerCase();
    const selectedOption = this.getOptionByValue(this.state.value || this.props.value);

    const openClassName     = `${this.state.open ? ' dropdown_state_open' : ''}`;
    const disabledClassName   = `${this.props.disabled ? ' dropdown_disabled' : ''}`;
    const contentPosClassName = ` dropdown_content-pos_${this.contentPos}`;
    const addClassName       = `${this.props.className ? ' ' + this.props.className : ''}`;
    const typeClassName     = ` dropdown_type_${this.props.type}`;

    const options     = this.renderOptions(filterRegExp);
    const isNoResults = this.props.showFilter && options.length === 0 && filterRegExp.length > 0 && this.props.noResultsText;

    return (
      <div
        className = {`dropdown${typeClassName}${contentPosClassName}${openClassName}${disabledClassName}${addClassName}`}
        id        = {this.props.id || null}
        tabIndex  = "-1"
        role      = "listbox"
        onBlur    = {this.handleDropdownBlur}
        onKeyDown = {this.handleDropdownKeyUp}
        ref       = {container => this.container = container}
      >

        {(this.props.type === 1 || this.props.type === 2) ? this.renderLabel() : null}
        {this.renderButton(selectedOption)}
        {(this.props.type === 3) ? this.renderLabel() : null}

        <div
          className = "dropdown__content"
          ref       = {(ref) => { this.content = ref; }}
        >
          {this.props.showFilter ? this.renderFilterInput() : null}
          <ul
            className = "dropdown__options"
            role      = "list"
          >
            {isNoResults
              ? <li className="dropdown__option dropdown__no-results">
                  {`${this.props.noResultsText} "${this.state.filterQuery}"`}
                </li>
              : options
            }
          </ul>
        </div>

      </div>
    );
  }
}
