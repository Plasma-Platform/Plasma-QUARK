'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dropdown = function (_React$Component) {
  (0, _inherits3.default)(Dropdown, _React$Component);

  function Dropdown(props) {
    (0, _classCallCheck3.default)(this, Dropdown);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Dropdown.__proto__ || (0, _getPrototypeOf2.default)(Dropdown)).call(this, props));

    _this.state = {
      open: _this.props.defaultOpen,
      filterQuery: _this.props.defaultFilterQuery
    };


    _this.toggle = _this.toggle.bind(_this);
    _this.open = _this.open.bind(_this);
    _this.close = _this.close.bind(_this);
    _this.hideContent = _this.hideContent.bind(_this);

    _this.handleOptionSelect = _this.handleOptionSelect.bind(_this);
    _this.filterOptions = _this.filterOptions.bind(_this);

    _this.handleDropdownBlur = _this.handleDropdownBlur.bind(_this);
    _this.handleContainerKeyDown = _this.handleContainerKeyDown.bind(_this);
    _this.handleButtonKeyDown = _this.handleButtonKeyDown.bind(_this);
    _this.handleFilterInputKeyDown = _this.handleFilterInputKeyDown.bind(_this);
    _this.handleOptionKeyDown = _this.handleOptionKeyDown.bind(_this);

    _this.defaultSelectedOption = _this.props.defaultValue ? _this.getOptionByValue(_this.props.defaultValue) || _this.props.options[0] : _this.props.options[0];
    _this.defaultValue = _this.defaultSelectedOption.value;
    return _this;
  }

  (0, _createClass3.default)(Dropdown, [{
    key: 'toggle',
    value: function toggle() {
      this.state.open ? this.close() : this.open();
    }
  }, {
    key: 'open',
    value: function open() {
      this.setState({
        open: true
      }, this.showContent);
    }
  }, {
    key: 'showContent',
    value: function showContent() {
      var containerTopOffset = this.getContainerCoordinates().top;
      var containerBottomOffset = this.getContainerCoordinates().bottom;

      var optionsListMaxHeight = this.getOptionsListMaxHeight();
      var optionsListPosition = 'bottom';

      if (optionsListMaxHeight > containerBottomOffset - 20) {
        if (containerTopOffset > containerBottomOffset) {
          optionsListMaxHeight = Math.min(optionsListMaxHeight, containerTopOffset - 20);
          optionsListPosition = 'top';
        } else {
          optionsListMaxHeight = containerBottomOffset - 20;
        }
      }

      this.optionsList.style.maxHeight = optionsListMaxHeight + 'px';

      this.container.classList.add('tm-quark-dropdown_open-position_' + optionsListPosition);
      this.content.classList.add('tm-quark-dropdown__content_open');

      window.addEventListener('click', this.handleDropdownBlur);
      window.addEventListener('keydown', this.handleDropdownBlur);

      if (this.props.onOpen) {
        this.props.onOpen(this.getValue());
      }
    }
  }, {
    key: 'getOptionsListMaxHeight',
    value: function getOptionsListMaxHeight() {
      var _this2 = this;

      var options = [].concat((0, _toConsumableArray3.default)(this.optionsList.querySelectorAll('.tm-quark-dropdown__option')));

      var optionsListHeight = 0;
      var lastVisibleOptionIndex = Math.min(options.length - 1, this.props.optionsToShow - 1);

      options.slice(0, lastVisibleOptionIndex + 1).forEach(function (option, optionIndex) {
        optionsListHeight += lastVisibleOptionIndex === optionIndex && options.length > _this2.props.optionsToShow ? option.offsetHeight / 2 : option.offsetHeight;
      });

      return optionsListHeight;
    }
  }, {
    key: 'getContainerCoordinates',
    value: function getContainerCoordinates() {
      var documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);

      var containerRect = this.container.getBoundingClientRect();
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      var containerTopOffset = containerRect.top + scrollTop;
      var containerBottomOffset = documentHeight - (containerRect.bottom + scrollTop);

      return {
        top: containerTopOffset,
        bottom: containerBottomOffset
      };
    }
  }, {
    key: 'close',
    value: function close() {
      window.removeEventListener('click', this.handleDropdownBlur);
      window.removeEventListener('keydown', this.handleDropdownBlur);

      this.content.classList.add('tm-quark-dropdown__content_close');
      this.content.addEventListener('animationend', this.hideContent);
    }
  }, {
    key: 'hideContent',
    value: function hideContent() {
      var _this3 = this;

      this.content.removeEventListener('animationend', this.hideContent);

      this.setState({
        open: false
      }, function () {
        _this3.button.blur();

        if (_this3.props.onClose) {
          _this3.props.onClose(_this3.getValue());
        }
      });
    }
  }, {
    key: 'filterOptions',
    value: function filterOptions(filterQuery) {
      this.setState({
        filterQuery: filterQuery
      });
    }
  }, {
    key: 'getFilteredOptions',
    value: function getFilteredOptions() {
      var filterQuery = this.state.filterQuery.toLowerCase().trim();
      var filterQueryRegExp = new RegExp('\\b' + filterQuery, 'gi');

      var filteredOptions = this.props.options.filter(function (option) {
        return option.label.search(filterQueryRegExp) >= 0;
      });

      return filteredOptions;
    }
  }, {
    key: 'getOptionByValue',
    value: function getOptionByValue(optionValue) {
      var option = this.props.options.filter(function (optionData) {
        return optionData.value === optionValue;
      })[0];

      return option;
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.currentValue;
    }
  }, {
    key: 'handleDropdownBlur',
    value: function handleDropdownBlur(event) {
      if (this.container.contains(event.target) === false && event.target !== this.container && this.state.open) {
        this.close();
      }
    }
  }, {
    key: 'handleContainerKeyDown',
    value: function handleContainerKeyDown(event) {
      var keyCode = event.keyCode;

      if (keyCode === 27) {
        this.close();
      }
    }
  }, {
    key: 'handleButtonKeyDown',
    value: function handleButtonKeyDown(event) {
      var keyCode = event.keyCode;

      if (keyCode === 13) {
        this.state.open ? this.close() : this.open();
        event.stopPropagation();
      } else if (keyCode === 40) {
        this.filterInput ? this.filterInput.focus() : this.option0 ? this.option0.focus() : null;
      }
    }
  }, {
    key: 'handleFilterInputKeyDown',
    value: function handleFilterInputKeyDown(event) {
      var keyCode = event.keyCode;

      if (keyCode === 13) {
        event.stopPropagation();
      } else if (keyCode === 40 && this.option0) {
        this.option0.focus();
      }
    }
  }, {
    key: 'handleOptionKeyDown',
    value: function handleOptionKeyDown(event, option, optionIndex) {
      var keyCode = event.keyCode;

      if (keyCode === 13) {
        this.handleOptionSelect(option);
      } else if (keyCode === 40 && this['option' + (optionIndex + 1)]) {
        this['option' + (optionIndex + 1)].focus();
      } else if (keyCode === 38) {
        if (this['option' + (optionIndex - 1)] && optionIndex - 1 >= 0) {
          this['option' + (optionIndex - 1)].focus();
        } else if (this.filterInput) {
          this.filterInput.focus();
        }
      }
    }
  }, {
    key: 'handleOptionSelect',
    value: function handleOptionSelect(option) {
      this.selectedOption = option;
      this.currentValue = option.value;

      if (this.props.onChange) {
        this.props.onChange(option.value);
      }

      this.close();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.open) {
        window.addEventListener('click', this.handleDropdownBlur);
        window.addEventListener('keydown', this.handleDropdownBlur);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.state.open) {
        window.removeEventListener('click', this.handleDropdownBlur);
        window.removeEventListener('keydown', this.handleDropdownBlur);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      this.selectedOption = this.props.value && this.getOptionByValue(this.props.value) ? this.getOptionByValue(this.props.value) : this.currentValue && this.getOptionByValue(this.currentValue) ? this.getOptionByValue(this.currentValue) : this.defaultSelectedOption;
      this.currentValue = this.selectedOption.value;

      var filteredOptions = this.getFilteredOptions();
      var visibleOptions = this.props.showSelectedOption ? filteredOptions : filteredOptions.filter(function (option) {
        return option.value !== _this4.currentValue;
      });

      var activeOptionIndex = -1;
      var disabledOptionIndex = 0;

      return _react2.default.createElement(
        'div',
        {
          className: 'tm-quark-dropdown tm-quark-dropdown_' + (this.state.open ? 'open' : 'closed') + ' tm-quark-dropdown_type_' + this.props.type + (this.props.disabled ? ' tm-quark-dropdown_disabled' : '') + ' ' + (this.props.className || ''),
          id: this.props.id || null,
          name: this.props.name || null,
          tabIndex: '-1',
          onKeyDown: this.handleContainerKeyDown,
          ref: function ref(_ref9) {
            _this4.container = _ref9;
          }
        },
        this.props.showLabelInButton === false && this.props.showLabel && _react2.default.createElement(
          'span',
          {
            className: 'tm-quark-dropdown__label tm-quark-dropdown__label_size_' + this.props.labelSize + (this.props.disabled ? ' tm-quark-dropdown__label_disabled' : ''),
            ref: function ref(_ref) {
              _this4.label = _ref;
            }
          },
          this.props.label
        ),
        this.props.showButton && _react2.default.createElement(
          'span',
          {
            className: 'tm-quark-dropdown__button' + (this.state.open ? ' tm-quark-dropdown__button_open' : '') + ' tm-quark-dropdown__button_size_' + this.props.buttonSize + (this.props.disabled ? ' tm-quark-dropdown__button_disabled' : ''),
            'aria-label': this.props.label,
            role: 'button',
            tabIndex: '0',
            onClick: this.toggle,
            onKeyDown: this.handleButtonKeyDown,
            ref: function ref(_ref3) {
              _this4.button = _ref3;
            }
          },
          this.props.showLabelInButton && this.props.showLabel && _react2.default.createElement(
            'span',
            {
              className: 'tm-quark-dropdown__label tm-quark-dropdown__label_size_' + this.props.labelSize + (this.props.disabled ? ' tm-quark-dropdown__label_disabled' : ''),
              ref: function ref(_ref2) {
                _this4.label = _ref2;
              }
            },
            this.props.label
          ),
          this.props.buttonContent ? _react2.default.createElement(
            'span',
            { className: 'tm-quark-dropdown__button-content' },
            this.props.buttonContent
          ) : _react2.default.createElement(
            'span',
            { className: 'tm-quark-dropdown__button-content' },
            this.selectedOption.icon && this.props.optionIconRadioStyle !== true && _react2.default.createElement('i', { className: 'tm-quark-dropdown__icon tm-quark-dropdown__icon_size_medium icon icon-' + this.selectedOption.icon }),
            this.props.showOptionHTMLInButton && this.selectedOption.html ? this.selectedOption.html : this.selectedOption.label
          ),
          _react2.default.createElement('span', { className: 'tm-quark-dropdown__button-arrow' })
        ),
        this.state.open && _react2.default.createElement(
          'div',
          {
            className: 'tm-quark-dropdown__content',
            ref: function ref(_ref8) {
              _this4.content = _ref8;
            }
          },
          this.props.showFilterBox && _react2.default.createElement(
            'div',
            {
              className: 'tm-quark-dropdown__filter-box',
              ref: function ref(_ref5) {
                _this4.filterBox = _ref5;
              }
            },
            _react2.default.createElement('input', {
              className: 'tm-quark-dropdown__filter-input',
              type: 'search',
              placeholder: this.props.filterBoxPlaceholder,
              value: this.state.filterQuery,
              tabIndex: this.state.open ? '0' : '-1',
              onChange: function onChange(event) {
                _this4.filterOptions(event.target.value);
              },
              onKeyDown: this.handleFilterInputKeyDown,
              ref: function ref(_ref4) {
                _this4.filterInput = _ref4;
              },
              autoFocus: true
            })
          ),
          _react2.default.createElement(
            'ul',
            {
              className: 'tm-quark-dropdown__options',
              ref: function ref(_ref7) {
                _this4.optionsList = _ref7;
              }
            },
            visibleOptions.length > 0 ? visibleOptions.map(function (option, index) {
              if (option.disabled) {
                disabledOptionIndex = disabledOptionIndex - 1;
              } else {
                activeOptionIndex = activeOptionIndex + 1;
              }

              var optionIndex = option.disabled ? disabledOptionIndex : activeOptionIndex;
              var optionIcon = _this4.props.optionIconRadioStyle ? 'tm-quark-dropdown__icon tm-quark-dropdown__icon_size_medium tm-quark-dropdown__icon_type_radio' : option.icon ? 'tm-quark-dropdown__icon tm-quark-dropdown__icon_size_' + _this4.props.optionIconSize + ' ' + ('icon icon-' + option.icon) : '';

              return _react2.default.createElement(
                'li',
                {
                  className: 'tm-quark-dropdown__option ' + (option.disabled ? 'tm-quark-dropdown__option_disabled ' : '') + 'tm-quark-dropdown__option_size_' + _this4.props.optionSize + (option.value === _this4.currentValue && _this4.props.highlightSelectedOption ? ' tm-quark-dropdown__option_selected' : ''),
                  tabIndex: option.disabled || _this4.state.open === false ? -1 : 0,
                  role: 'option',
                  onClick: function onClick(event) {
                    _this4.handleOptionSelect(option);
                  },
                  onKeyDown: function onKeyDown(event) {
                    _this4.handleOptionKeyDown(event, option, optionIndex);
                  },
                  ref: function ref(_ref6) {
                    _this4['option' + optionIndex] = _ref6;
                  },
                  key: index
                },
                optionIcon.length > 0 && _react2.default.createElement('i', { className: optionIcon }),
                option.html || option.label
              );
            }) : this.state.filterQuery.length > 0 ? _react2.default.createElement(
              'li',
              { className: 'tm-quark-dropdown__option tm-quark-dropdown__option_size_' + this.props.optionSize + ' tm-quark-dropdown__option_type_no-filter-results' },
              this.props.filterNoResultsText + ' "' + this.state.filterQuery + '"'
            ) : null
          )
        )
      );
    }
  }]);
  return Dropdown;
}(_react2.default.Component);

Dropdown.propTypes = {
  id: _react2.default.PropTypes.string,
  name: _react2.default.PropTypes.string,
  defaultOpen: _react2.default.PropTypes.bool,
  defaultValue: _react2.default.PropTypes.any,
  value: _react2.default.PropTypes.any,
  showLabel: _react2.default.PropTypes.bool,
  label: _react2.default.PropTypes.string,
  showLabelInButton: _react2.default.PropTypes.bool,
  labelSize: _react2.default.PropTypes.oneOf(['small', 'medium']),
  showButton: _react2.default.PropTypes.bool,
  buttonContent: _react2.default.PropTypes.any,
  showOptionHTMLInButton: _react2.default.PropTypes.bool,
  buttonSize: _react2.default.PropTypes.oneOf(['medium', 'large']),
  showFilterBox: _react2.default.PropTypes.bool,
  defaultFilterQuery: _react2.default.PropTypes.string,
  filterBoxPlaceholder: _react2.default.PropTypes.string,
  filterNoResultsText: _react2.default.PropTypes.string,
  options: _react2.default.PropTypes.array,
  optionsToShow: _react2.default.PropTypes.number,
  optionSize: _react2.default.PropTypes.oneOf(['medium', 'large']),
  showSelectedOption: _react2.default.PropTypes.bool,
  highlightSelectedOption: _react2.default.PropTypes.bool,
  optionIconRadioStyle: _react2.default.PropTypes.bool,
  optionIconSize: _react2.default.PropTypes.oneOf(['medium', 'large']),
  disabled: _react2.default.PropTypes.bool,
  onOpen: _react2.default.PropTypes.func,
  onChange: _react2.default.PropTypes.func,
  onClose: _react2.default.PropTypes.func
};
Dropdown.defaultProps = {
  defaultOpen: false,
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
  disabled: false
};
exports.default = Dropdown;