import React from 'react';

import './Dropdown.less';

export default class Dropdown extends React.Component {
  static propTypes = {
    id          : React.PropTypes.string,
    name        : React.PropTypes.string,
    defaultOpen : React.PropTypes.bool,
    value       : React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    label             : React.PropTypes.string,
    showLabelInButton : React.PropTypes.bool,
    labelSize         : React.PropTypes.oneOf([
      'small',
      'medium'
    ]),
    showLabel  : React.PropTypes.bool,
    showButton : React.PropTypes.bool,
    buttonSize : React.PropTypes.oneOf([
      'medium',
      'large'
    ]),
    showOptionHTMLInButton : React.PropTypes.bool,
    showFilterBox          : React.PropTypes.bool,
    filterBoxPlaceholder   : React.PropTypes.string,
    filterNoResultsText    : React.PropTypes.string,
    defaultFilterQuery     : React.PropTypes.string,
    options                : React.PropTypes.array,
    optionsToShow          : React.PropTypes.number,
    optionSize             : React.PropTypes.oneOf([
      'medium',
      'large'
    ]),
    showSelectedOption   : React.PropTypes.bool,
    optionIconRadioStyle : React.PropTypes.bool,
    optionIconSize       : React.PropTypes.oneOf([
      'medium',
      'large'
    ]),
    disabled : React.PropTypes.bool,
    onOpen   : React.PropTypes.func,
    onChange : React.PropTypes.func,
    onClose  : React.PropTypes.func
  }

  static defaultProps = {
    defaultOpen            : false,
    showLabelInButton      : false,
    labelSize              : 'medium',
    showLabel              : true,
    showButton             : true,
    buttonSize             : 'medium',
    showOptionHTMLInButton : true,
    showFilterBox          : false,
    filterBoxPlaceholder   : '',
    filterNoResultsText    : 'No results match',
    defaultFilterQuery     : '',
    options                : [],
    optionsToShow          : 5,
    optionSize             : 'medium',
    showSelectedOption     : true,
    optionIconRadioStyle   : false,
    optionIconSize         : 'medium',
    disabled               : false
  }

  state = {
    open        : this.props.defaultOpen,
    filterQuery : this.props.defaultFilterQuery
  }

  constructor (props) {
    super(props);

    this.open                     = this.open.bind(this);
    this.handleCloseAnimationEnd  = this.handleCloseAnimationEnd.bind(this);
    this.close                    = this.close.bind(this);

    this.handleOptionSelect       = this.handleOptionSelect.bind(this);
    this.filterOptions            = this.filterOptions.bind(this);

    this.handleDropdownBlur       = this.handleDropdownBlur.bind(this);
    this.handleContainerKeyDown   = this.handleContainerKeyDown.bind(this);
    this.handleButtonKeyDown      = this.handleButtonKeyDown.bind(this);
    this.handleFilterInputKeyDown = this.handleFilterInputKeyDown.bind(this);
    this.handleOptionKeyDown      = this.handleOptionKeyDown.bind(this);
  }

  open () {
    this.setState({
      open: true
    }, () => {
      this.animateShowContent();
      window.addEventListener('click', this.handleDropdownBlur);

      if (this.props.onOpen) {
        this.props.onOpen(this.getValue());
      }
    });
  }

  getOptionsListMaxHeight () {
    const options              = this.optionsList.querySelectorAll('.tm-quark-dropdown__option');

    let optionsListHeight      = 0;
    let lastVisibleOptionIndex = Math.min(options.length - 1, this.props.optionsToShow - 1);

    Array.from({
      length: this.props.optionsToShow
    }).map((optionNumber, optionIndex) => {
      const option = options[optionIndex];

      if (option) {
        optionsListHeight += (lastVisibleOptionIndex === optionIndex && this.props.optionsToShow !== this.props.options.length ? option.offsetHeight / 2 : option.offsetHeight);
      }
    });

    return optionsListHeight;
  }

  getContainerCoordinates () {
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );

    const containerRect = this.container.getBoundingClientRect();
    const scrollTop     = window.pageYOffset || document.documentElement.scrollTop;

    const containerTopOffset    = containerRect.top + scrollTop;
    const containerBottomOffset = documentHeight - (containerRect.bottom + scrollTop);

    return {
      top    : containerTopOffset,
      bottom : containerBottomOffset
    };
  }

  animateShowContent () {
    const containerTopOffset    = this.getContainerCoordinates().top;
    const containerBottomOffset = this.getContainerCoordinates().bottom;

    let optionsListMaxHeight = this.getOptionsListMaxHeight();
    let optionsListPosition  = 'bottom';

    if (optionsListMaxHeight > (containerBottomOffset - 20)) {
      if (containerTopOffset > containerBottomOffset) {
        optionsListMaxHeight = Math.min(optionsListMaxHeight, containerTopOffset - 20);
        optionsListPosition  = 'top';
      } else {
        optionsListMaxHeight = containerBottomOffset - 20;
      }
    }

    this.optionsList.style.maxHeight = `${optionsListMaxHeight}px`;

    this.container.classList.add(`tm-quark-dropdown_open-position_${optionsListPosition}`);
    this.content.classList.add(`tm-quark-dropdown__content_open`);
  }

  close () {
    window.removeEventListener('click', this.handleDropdownBlur);
    this.animateCloseContent();
  }

  animateCloseContent () {
    this.content.classList.add('tm-quark-dropdown__content_close');
    this.content.addEventListener('animationend', this.handleCloseAnimationEnd);
  }

  handleCloseAnimationEnd () {
    this.content.removeEventListener('animationend', this.handleCloseAnimationEnd);

    this.setState({
      open: false
    }, () => {
      if (this.props.onClose) {
        this.props.onClose(this.getValue());
      }
    });
  }

  filterOptions (filterQuery) {
    this.setState({
      filterQuery: filterQuery
    });
  }

  getVisibleOptions () {
    const filterQuery       = this.state.filterQuery.toLowerCase().trim();
    const filterQueryRegExp = new RegExp('\\b' + filterQuery, 'gi');
    const visibleOptions = this.props.options.filter((option) => {
      return option.label.search(filterQueryRegExp) >= 0 && (this.props.showSelectedOption ? true : this.props.value !== option.value);
    });

    return visibleOptions;
  }

  handleOptionSelect (option) {
    if (this.props.onChange) {
      this.props.onChange(option.value);
    }
    this.close();
  }

  getOptionByValue (optionValue) {
    const option = this.props.options.filter((optionData) => {
      return optionData.value === optionValue;
    })[0];

    return option;
  }

  handleDropdownBlur (event) {
    if (this.container.contains(event.target) === false && event.target !== this.container && this.state.open) {
      this.close();
    }
  }

  handleContainerKeyDown (event) {
    const keyCode = event.keyCode;

    if (keyCode === 27) {
      this.close();
    }
  }

  handleButtonKeyDown (event) {
    const keyCode = event.keyCode;

    if (keyCode === 40) {
      this.filterInput ? this.filterInput.focus() : this.option0 ? this.option0.focus() : null;
    }
  }

  handleFilterInputKeyDown (event) {
    const keyCode = event.keyCode;

    if (keyCode === 40 && this.option0) {
      this.option0.focus();
    }
  }

  handleOptionKeyDown (event, option, optionIndex) {
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

  getValue () {
    return this.valueInput.value;
  }

  componentDidMount () {
    if (this.state.open) {
      window.addEventListener('click', this.handleDropdownBlur);
    }
  }

  componentWillUnmount () {
    if (this.state.open) {
      window.removeEventListener('click', this.handleDropdownBlur);
    }
  }

  render () {
    const visibleOptions = this.getVisibleOptions();
    const currentValue   = this.props.value || this.props.options[0].value;
    const selectedOption = this.getOptionByValue(currentValue);

    let activeOptionIndex   = -1;
    let disabledOptionIndex = 0;

    return (
      <div
        className = {`tm-quark-dropdown tm-quark-dropdown_${this.state.open ? 'open' : 'closed'} tm-quark-dropdown_type_${this.props.type}${this.props.disabled ? ' tm-quark-dropdown_disabled' : ''} ${this.props.className || ''}`}
        id        = {this.props.id || null}
        tabIndex  = "-1"
        onKeyDown = {this.handleContainerKeyDown}
        ref       = {(ref) => { this.container = ref; }}
      >
        {(this.props.showLabelInButton === false && this.props.showLabel) && (
          <span
            className = {`tm-quark-dropdown__label tm-quark-dropdown__label_size_${this.props.labelSize}${this.props.disabled ? ' tm-quark-dropdown__label_disabled' : ''}`}
            ref       = {(ref) => { this.label = ref; }}
          >
            {this.props.label}
          </span>
        )}

        <input
          className = "tm-quark-drodpown__value-input"
          type      = "hidden"
          name      = {this.props.name || null}
          value     = {currentValue}
          ref       = {(ref) => { this.valueInput = ref; }}
        />

        {this.props.showButton && (
          <button
            className = {`tm-quark-dropdown__button${this.state.open ? ' tm-quark-dropdown__button_open' : ''} tm-quark-dropdown__button_size_${this.props.buttonSize}${this.props.disabled ? ' tm-quark-dropdown__button_disabled' : ''}`}
            type       = "button"
            aria-label = {this.props.label}
            onClick    = {this.state.open ? this.close : this.open}
            onKeyDown  = {this.handleButtonKeyDown}
            ref        = {(ref) => { this.button = ref; }}
          >
            {(this.props.showLabelInButton && this.props.showLabel) && (
              <span
                className = {`tm-quark-dropdown__label tm-quark-dropdown__label_size_${this.props.labelSize}${this.props.disabled ? ' tm-quark-dropdown__label_disabled' : ''}`}
                ref       = {(ref) => { this.label = ref; }}
              >
                {this.props.label}
              </span>
            )}
            <span className="tm-quark-dropdown__selected-option-content">
              {(selectedOption.icon && this.props.optionIconRadioStyle !== true) && (
                <i className={`tm-quark-dropdown__icon tm-quark-dropdown__icon_size_medium icon icon-${selectedOption.icon}`}></i>
              )}
              {this.props.showOptionHTMLInButton && selectedOption.html ? selectedOption.html : selectedOption.label}
            </span>
          </button>
        )}

        {this.state.open && (
          <div
            className = {`tm-quark-dropdown__content`}
            ref       = {(ref) => { this.content = ref; }}
          >
            {this.props.showFilterBox && (
              <div
                className = "tm-quark-dropdown__filter-box"
                ref       = {(ref) => { this.filterBox = ref; }}
              >
                <input
                  className   = "tm-quark-dropdown__filter-input"
                  type        = "search"
                  placeholder = {this.props.filterBoxPlaceholder}
                  value       = {this.state.filterQuery}
                  tabIndex    = {this.state.open ? '0' : '-1'}
                  onChange    = {(event) => { this.filterOptions(event.target.value); }}
                  onKeyDown   = {this.handleFilterInputKeyDown}
                  ref         = {(ref) => { this.filterInput = ref; }}
                  autoFocus
                />
              </div>
            )}

            <ul
              className = "tm-quark-dropdown__options"
              ref       = {(ref) => { this.optionsList = ref; }}
            >
              {visibleOptions.length > 0 ? (

                visibleOptions.map((option, index) => {
                  if (option.disabled) {
                    disabledOptionIndex = disabledOptionIndex - 1;
                  } else {
                    activeOptionIndex = activeOptionIndex + 1;
                  }

                  const optionIndex = option.disabled ? disabledOptionIndex : activeOptionIndex;
                  const optionIcon  = this.props.optionIconRadioStyle ? 'tm-quark-dropdown__icon tm-quark-dropdown__icon_size_medium tm-quark-dropdown__icon_type_radio' : option.icon ? `tm-quark-dropdown__icon tm-quark-dropdown__icon_size_${this.props.optionIconSize} ${`icon icon-${option.icon}`}` : '';

                  return (
                    <li
                      className = {`tm-quark-dropdown__option ${option.disabled ? 'tm-quark-dropdown__option_disabled ' : ''}tm-quark-dropdown__option_size_${this.props.optionSize}${option.value === currentValue ? ' tm-quark-dropdown__option_selected' : ''}`}
                      tabIndex  = {option.disabled || this.state.open === false ? -1 : 0}
                      role      = "option"
                      onClick   = {(event) => { this.handleOptionSelect(option); }}
                      onKeyDown = {(event) => { this.handleOptionKeyDown(event, option, optionIndex); }}
                      ref       = {(ref) => { this[`option${optionIndex}`] = ref; }}
                      key       = {index}
                    >
                      {optionIcon.length > 0 && (
                        <i className={optionIcon}></i>
                      )}
                      {option.html || option.label}
                    </li>
                  );
                })
              ) : (
                this.state.filterQuery.length > 0 ? (
                  <li className={`tm-quark-dropdown__option tm-quark-dropdown__option_size_${this.props.optionSize} tm-quark-dropdown__option_type_no-filter-results`}>
                    {`${this.props.filterNoResultsText} "${this.state.filterQuery}"`}
                  </li>
                ) : (
                  null
                )
              )}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
