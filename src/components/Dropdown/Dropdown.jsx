import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Dropdown.less';

export default class Dropdown extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    defaultOpen: PropTypes.bool,
    closeOnClickOutside: PropTypes.bool,
    defaultValue: PropTypes.node,
    value: PropTypes.node,
    showLabel: PropTypes.bool,
    label: PropTypes.string,
    showLabelInButton: PropTypes.bool,
    labelSize: PropTypes.oneOf([
      'small',
      'medium',
    ]),
    showButton: PropTypes.bool,
    buttonContent: PropTypes.node,
    showOptionHTMLInButton: PropTypes.bool,
    buttonSize: PropTypes.oneOf([
      'medium',
      'large',
    ]),
    showFilterBox: PropTypes.bool,
    defaultFilterQuery: PropTypes.string,
    filterBoxPlaceholder: PropTypes.string,
    filterNoResultsText: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
    optionsToShow: PropTypes.number,
    optionSize: PropTypes.oneOf([
      'medium',
      'large',
    ]),
    showSelectedOption: PropTypes.bool,
    highlightSelectedOption: PropTypes.bool,
    optionIconRadioStyle: PropTypes.bool,
    optionIconSize: PropTypes.oneOf([
      'medium',
      'large',
    ]),
    disabled: PropTypes.bool,
    onOpen: PropTypes.func,
    onChange: PropTypes.func,
    onClose: PropTypes.func,
    className: PropTypes.string,
    type: PropTypes.oneOf([
      1,
      2,
      3,
      4,
      5,
      5,
      6,
      7,
    ]),
  }

  static defaultProps = {
    defaultOpen: false,
    closeOnClickOutside: true,
    showLabel: true,
    showLabelInButton: false,
    labelSize: 'medium',
    showButton: true,
    showOptionHTMLInButton: true,
    buttonSize: 'medium',
    showFilterBox: false,
    defaultFilterQuery: '',
    filterBoxPlaceholder: '',
    filterNoResultsText: 'No results match',
    options: [],
    optionsToShow: 5,
    optionSize: 'medium',
    showSelectedOption: true,
    highlightSelectedOption: true,
    optionIconRadioStyle: false,
    optionIconSize: 'medium',
    disabled: false,
    onOpen: () => {},
    onChange: () => {},
    onClose: () => {},
    buttonContent: null,
    label: null,
    id: null,
    name: null,
    defaultValue: null,
    value: null,
    className: '',
    type: 1,
  }

  constructor(props) {
    super(props);

    const firstOption = this.props.options[0] || {};

    this.defaultSelectedOption = (
      this.getOptionByValue(this.props.value)
      || this.getOptionByValue(this.props.defaultValue)
      || firstOption.value
    );

    this.openContentPosition = 'bottom';
    this.optionsListMaxHeight = '100%';
    this.showOptionsListScrollBar = false;
  }

  state = {
    open: this.props.defaultOpen,
    showContent: false,
    filterQuery: this.props.defaultFilterQuery,
  }

  componentDidMount() {
    if (this.props.defaultOpen) {
      this.showContent();
    }
  }

  componentWillUnmount() {
    if (this.state.showContent && this.props.closeOnClickOutside) {
      window.removeEventListener('click', this.handleDropdownBlur);
    }
  }

  getOptionsListMaxHeight = () => {
    const options = [...this.optionsList.querySelectorAll('.tm-quark-dropdown__option')];

    let optionsListHeight = 0;
    const lastVisibleOptionIndex = Math.min(options.length - 1, this.props.optionsToShow - 1);

    options.slice(0, lastVisibleOptionIndex + 1).forEach((option, optionIndex) => {
      optionsListHeight += (
        lastVisibleOptionIndex === optionIndex
        && options.length
        >
          this.props.optionsToShow
          ? option.offsetHeight / 2
          : option.offsetHeight
      );
    });

    return optionsListHeight;
  }

  getContainerCoordinates = () => {
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight,
    );

    const containerRect = this.container.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const containerTopOffset = containerRect.top + scrollTop;
    const containerBottomOffset = documentHeight - (containerRect.bottom + scrollTop);

    return {
      top: containerTopOffset,
      bottom: containerBottomOffset,
    };
  }

  getFilteredOptions = () => {
    const filterQuery = this.state.filterQuery.toLowerCase().trim();
    const filterQueryRegExp = new RegExp(`\\b${filterQuery}`, 'gi');

    const filteredOptions = this.props.options.filter(option => (
      option.label.search(filterQueryRegExp) >= 0
    ));

    return filteredOptions;
  }

  getOptionByValue = (optionValue) => {
    if (!optionValue) {
      return null;
    }

    return this.props.options.find(optionData => (
      optionData.value === optionValue
    ));
  }

  getValue() {
    return this.currentValue;
  }

  filterOptions = (filterQuery) => {
    this.setState({
      filterQuery,
    });
  }

  toggle = () => {
    if (this.state.showContent) {
      this.close();
    } else {
      this.open();
    }
  }

  open = () => {
    this.setState(() => ({
      open: true,
      showContent: false,
    }), this.showContent);
  }

  showContent = () => {
    this.props.onOpen(this.getValue());

    if (this.props.closeOnClickOutside) {
      window.addEventListener('click', this.handleDropdownBlur);
    }

    this.setState(() => ({
      open: true,
      showContent: true,
    }));
  }

  close = () => {
    if (this.props.closeOnClickOutside) {
      window.removeEventListener('click', this.handleDropdownBlur);
    }

    this.hideContent();
  }

  hideContent = () => {
    this.setState(() => ({
      open: true,
      showContent: false,
    }));
  }

  handleContentAnimationEnd = (event) => {
    if (event.target === this.content) {
      if (this.state.showContent) {
        this.handleShowContentAnimationEnd();
      } else {
        this.handleHideContentAnimationEnd();
      }
    }
  }

  handleShowContentAnimationEnd = () => {
    if (this.filterInput) {
      this.filterInput.focus();
    }
  }

  handleHideContentAnimationEnd = () => {
    if (this.button) {
      this.button.blur();
    }

    this.setState(() => ({
      open: false,
      showContent: false,
    }), () => {
      if (this.props.onClose) {
        this.props.onClose(this.getValue());
      }
    });
  }

  handleDropdownBlur = (event) => {
    if (
      !this.container.contains(event.target)
      && event.target !== this.container
      && this.state.showContent
    ) {
      this.close();
    }
  }

  handleContainerKeyDown = (event) => {
    const keyCode = event.keyCode;

    if (keyCode === 27) {
      this.close();
    }
  }

  handleButtonKeyDown = (event) => {
    const keyCode = event.keyCode;

    if (keyCode === 40) {
      if (this.fileInput) {
        this.filterInput.focus();
      } else if (this.option0) {
        this.option0.focus();
      }
    }
  }

  handleFilterInputKeyDown = (event) => {
    const keyCode = event.keyCode;

    if (keyCode === 13) {
      event.stopPropagation();
    } else if (keyCode === 40 && this.option0) {
      this.option0.focus();
    }
  }

  handleOptionKeyDown = (event, option, optionIndex) => {
    const keyCode = event.keyCode;

    if (keyCode === 13) {
      this.handleOptionSelect(option);
    } else if (keyCode === 40 && this[`option${optionIndex + 1}`]) {
      this[`option${optionIndex + 1}`].focus();
    } else if (keyCode === 38) {
      if (this[`option${optionIndex - 1}`] && optionIndex - 1 >= 0) {
        this[`option${optionIndex - 1}`].focus();
      } else if (this.filterInput) {
        this.filterInput.focus();
      }
    }
  }

  handleOptionSelect = (option) => {
    this.selectedOption = option;
    this.currentValue = option.value;

    if (this.props.onChange) {
      this.props.onChange(option.value);
    }

    this.close();
  }

  render() {
    const filteredOptions = this.getFilteredOptions();
    const visibleOptions = this.props.showSelectedOption
      ? filteredOptions :
      filteredOptions.filter(option => (
        option.value !== this.currentValue
      ));

    if (this.state.showContent) {
      const containerTopOffset = this.getContainerCoordinates().top;
      const containerBottomOffset = this.getContainerCoordinates().bottom;
      const optionsListMaxHeight = this.getOptionsListMaxHeight();

      if (optionsListMaxHeight > (containerBottomOffset - 20)) {
        if (containerTopOffset > containerBottomOffset) {
          this.showOptionsListScrollBar = (
            (optionsListMaxHeight > (containerTopOffset - 20))
            || (visibleOptions.length > this.props.optionsToShow)
          );
          this.optionsListMaxHeight = `${Math.min(optionsListMaxHeight, containerTopOffset - 20)}px`;
          this.openContentPosition = 'top';
        } else {
          this.showOptionsListScrollBar = true;
          this.optionsListMaxHeight = containerBottomOffset - 20;
        }
      } else {
        this.showOptionsListScrollBar = visibleOptions.length > this.props.optionsToShow;
        this.optionsListMaxHeight = `${optionsListMaxHeight}px`;
        this.openContentPosition = 'bottom';
      }
    }

    this.selectedOption = (
      this.getOptionByValue(this.props.value)
      || this.getOptionByValue(this.currentValue)
      || this.defaultSelectedOption
    );
    this.currentValue = this.selectedOption
      ? this.selectedOption.value
      : null;

    let activeOptionIndex = -1;
    let disabledOptionIndex = 0;

    return (
      <div
        className={`tm-quark-dropdown tm-quark-dropdown_open-position_${this.openContentPosition} tm-quark-dropdown_${this.state.showContent ? 'open' : 'closed'} tm-quark-dropdown_type_${this.props.type} ${this.props.disabled ? 'tm-quark-dropdown_disabled' : ''} ${this.props.className}`}
        id={this.props.id}
        name={this.props.name}
        tabIndex="-1"
        onKeyDown={this.handleContainerKeyDown}
        ref={(ref) => { this.container = ref; }}
        role="presentation"
      >
        {(this.props.showLabelInButton === false && this.props.showLabel) && (
          <span
            className={`tm-quark-dropdown__label tm-quark-dropdown__label_size_${this.props.labelSize}${this.props.disabled ? ' tm-quark-dropdown__label_disabled' : ''}`}
            ref={(ref) => { this.label = ref; }}
          >
            {this.props.label}
          </span>
        )}

        {this.props.showButton && (
          <button
            className={`tm-quark-dropdown__button${this.state.showContent ? ' tm-quark-dropdown__button_open' : ''} tm-quark-dropdown__button_size_${this.props.buttonSize}${this.props.disabled ? ' tm-quark-dropdown__button_disabled' : ''}`}
            aria-label={this.props.label}
            type="button"
            onClick={this.toggle}
            onKeyDown={this.handleButtonKeyDown}
            ref={(ref) => { this.button = ref; }}
          >
            <span className="tm-quark-dropdown__button-inner">
              {(this.props.showLabelInButton && this.props.showLabel) && (
                <span
                  className={`tm-quark-dropdown__label tm-quark-dropdown__label_size_${this.props.labelSize}${this.props.disabled ? ' tm-quark-dropdown__label_disabled' : ''}`}
                  ref={(ref) => { this.label = ref; }}
                >
                  {this.props.label}
                </span>
              )}

              {this.props.buttonContent ? (
                <span className="tm-quark-dropdown__button-content">
                  <span className="tm-quark-dropdown__button-label-content">
                    {this.props.buttonContent}
                  </span>
                </span>
              ) : (
                <span className="tm-quark-dropdown__button-content">
                  {(this.selectedOption
                    && this.selectedOption.icon
                    && !this.props.optionIconRadioStyle) && (
                      <i className={`tm-quark-dropdown__icon tm-quark-dropdown__icon_size_medium icon icon-${this.selectedOption.icon}`} />
                    )}

                  <span className="tm-quark-dropdown__button-label-content">
                    {this.props.showOptionHTMLInButton && !!this.selectedOption && (
                      this.selectedOption.html || this.selectedOption.label
                    )}
                  </span>
                </span>
              )}

              <span className="tm-quark-dropdown__button-arrow" />
            </span>
          </button>
        )}

        {this.state.open && (
          <div
            className={`tm-quark-dropdown__content${this.state.showContent ? ' tm-quark-dropdown__content_animate_show' : ' tm-quark-dropdown__content_animate_hide'}`}
            onAnimationEnd={this.handleContentAnimationEnd}
            ref={(ref) => { this.content = ref; }}
          >
            {this.props.showFilterBox && (
              <div
                className="tm-quark-dropdown__filter-box"
                ref={(ref) => { this.filterBox = ref; }}
              >
                <input
                  className="tm-quark-dropdown__filter-input"
                  type="search"
                  placeholder={this.props.filterBoxPlaceholder}
                  value={this.state.filterQuery}
                  tabIndex={this.state.showContent ? '0' : '-1'}
                  onChange={(event) => { this.filterOptions(event.target.value); }}
                  onKeyDown={this.handleFilterInputKeyDown}
                  ref={(ref) => { this.filterInput = ref; }}
                />
              </div>
            )}

            {this.props.options.length && (
              <ul
                className="tm-quark-dropdown__options"
                style={{
                  maxHeight: this.optionsListMaxHeight,
                  overflow: this.showOptionsListScrollBar ? 'auto' : null,
                }}
                ref={(ref) => { this.optionsList = ref; }}
              >
                {visibleOptions.length > 0 ? (

                  visibleOptions.map((option) => {
                    if (option.disabled) {
                      disabledOptionIndex -= 1;
                    } else {
                      activeOptionIndex += 1;
                    }

                    const optionIconDefaultClassName = option.icon
                      ? `tm-quark-dropdown__icon tm-quark-dropdown__icon_size_${this.props.optionIconSize} ${`icon icon-${option.icon}`}`
                      : null;
                    const optionIconClassName = this.props.optionIconRadioStyle
                      ? 'tm-quark-dropdown__icon tm-quark-dropdown__icon_size_medium tm-quark-dropdown__icon_type_radio'
                      : optionIconDefaultClassName;

                    const optionIndex = option.disabled ? disabledOptionIndex : activeOptionIndex;

                    return (
                      <li
                        className={`tm-quark-dropdown__option ${option.disabled ? 'tm-quark-dropdown__option_disabled ' : ''}tm-quark-dropdown__option_size_${this.props.optionSize}${option.value === this.currentValue && this.props.highlightSelectedOption ? ' tm-quark-dropdown__option_selected' : ''}`}
                        tabIndex={option.disabled || this.state.showContent === false ? -1 : 0}
                        onClick={() => { this.handleOptionSelect(option); }}
                        onKeyDown={(event) => {
                          this.handleOptionKeyDown(event, option, optionIndex);
                        }}
                        ref={(ref) => { this[`option${optionIndex}`] = ref; }}
                        key={option.value}
                        role="option"
                        aria-selected={!option.disabled && option.value === this.currentValue}
                      >
                        {optionIconClassName && (
                          <i className={optionIconClassName} />
                        )}
                        {option.html || option.label}
                      </li>
                    );
                  })
                ) : (
                  this.state.filterQuery.length > 0 && (
                    <li className={`tm-quark-dropdown__option tm-quark-dropdown__option_size_${this.props.optionSize} tm-quark-dropdown__option_type_no-filter-results`}>
                      {`${this.props.filterNoResultsText} "${this.state.filterQuery}"`}
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
        )}
      </div>
    );
  }
}
