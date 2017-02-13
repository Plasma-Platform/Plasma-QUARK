'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

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
      value: _this.getOptionByValue(_this.props.defaultValue) ? _this.props.defaultValue : _this.props.options[0].value,
      filterQuery: _this.props.defaultFilterQuery,
      selectedOption: _this.props.defaultValue && _this.getOptionByValue(_this.props.defaultValue) ? _this.getOptionByValue(_this.props.defaultValue) : _this.props.options[0]
    };


    _this.open = _this.open.bind(_this);
    _this.handleCloseAnimationEnd = _this.handleCloseAnimationEnd.bind(_this);
    _this.close = _this.close.bind(_this);

    _this.selectOption = _this.selectOption.bind(_this);
    _this.filterOptions = _this.filterOptions.bind(_this);

    _this.handleDropdownBlur = _this.handleDropdownBlur.bind(_this);
    _this.handleContainerKeyDown = _this.handleContainerKeyDown.bind(_this);
    _this.handleButtonKeyDown = _this.handleButtonKeyDown.bind(_this);
    _this.handleFilterInputKeyDown = _this.handleFilterInputKeyDown.bind(_this);
    _this.handleOptionKeyDown = _this.handleOptionKeyDown.bind(_this);

    _this.contentPosition = 'bottom';
    return _this;
  }

  (0, _createClass3.default)(Dropdown, [{
    key: 'open',
    value: function open() {
      var _this2 = this;

      this.setState({
        open: true
      }, function () {
        _this2.animateShowContent();
        window.addEventListener('click', _this2.handleDropdownBlur);

        if (_this2.props.onOpen) {
          _this2.props.onOpen(_this2.state.value);
        }
      });
    }
  }, {
    key: 'getOptionsListMaxHeight',
    value: function getOptionsListMaxHeight() {
      var _this3 = this;

      var options = this.optionsList.querySelectorAll('.tm-quark-dropdown__option');

      var optionsListHeight = 0;
      var lastVisibleOptionIndex = Math.min(options.length - 1, this.props.optionsToShow - 1);

      (0, _from2.default)({
        length: this.props.optionsToShow
      }).map(function (optionNumber, optionIndex) {
        var option = options[optionIndex];

        if (option) {
          optionsListHeight += lastVisibleOptionIndex === optionIndex && _this3.props.optionsToShow !== _this3.props.options.length ? option.offsetHeight / 2 : option.offsetHeight;
        }
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
    key: 'animateShowContent',
    value: function animateShowContent() {
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
    }
  }, {
    key: 'close',
    value: function close() {
      window.removeEventListener('click', this.handleDropdownBlur);
      this.animateCloseContent();
    }
  }, {
    key: 'animateCloseContent',
    value: function animateCloseContent() {
      this.content.classList.add('tm-quark-dropdown__content_close');
      this.content.addEventListener('animationend', this.handleCloseAnimationEnd);
    }
  }, {
    key: 'handleCloseAnimationEnd',
    value: function handleCloseAnimationEnd() {
      var _this4 = this;

      this.content.removeEventListener('animationend', this.handleCloseAnimationEnd);

      this.setState({
        open: false
      }, function () {
        if (_this4.props.onClose) {
          _this4.props.onClose(_this4.state.value);
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
    key: 'getVisibleOptions',
    value: function getVisibleOptions() {
      var _this5 = this;

      var filterQuery = this.state.filterQuery.toLowerCase().trim();
      var filterQueryRegExp = new RegExp('\\b' + filterQuery, 'gi');
      var visibleOptions = this.props.options.filter(function (option) {
        return option.label.search(filterQueryRegExp) >= 0 && (_this5.props.showSelectedOption ? true : _this5.state.value !== option.value);
      });

      return visibleOptions;
    }
  }, {
    key: 'selectOption',
    value: function selectOption(option) {
      var _this6 = this;

      this.setState({
        value: option.value,
        selectedOption: option
      }, function () {
        if (_this6.props.onChange) {
          _this6.props.onChange(_this6.state.value);
        }
        _this6.close();
      });
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

      if (keyCode === 40) {
        this.filterInput ? this.filterInput.focus() : this.option0 ? this.option0.focus() : null;
      }
    }
  }, {
    key: 'handleFilterInputKeyDown',
    value: function handleFilterInputKeyDown(event) {
      var keyCode = event.keyCode;

      if (keyCode === 40 && this.option0) {
        this.option0.focus();
      }
    }
  }, {
    key: 'handleOptionKeyDown',
    value: function handleOptionKeyDown(event, option, optionIndex) {
      var keyCode = event.keyCode;

      if (keyCode === 13) {
        this.selectOption(option);
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
    key: 'getValue',
    value: function getValue() {
      return this.state.value;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.open) {
        window.addEventListener('click', this.handleDropdownBlur);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.state.open) {
        window.removeEventListener('click', this.handleDropdownBlur);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      var visibleOptions = this.getVisibleOptions();

      var selectedOption = this.getOptionByValue(this.state.selectedOption.value) || this.props.options[0].value;

      var activeOptionIndex = -1;
      var disabledOptionIndex = 0;

      return _react2.default.createElement(
        'div',
        {
          className: 'tm-quark-dropdown tm-quark-dropdown_' + (this.state.open ? 'open' : 'closed') + ' tm-quark-dropdown_type_' + this.props.type + (this.props.disabled ? ' tm-quark-dropdown_disabled' : '') + ' ' + (this.props.className || ''),
          id: this.props.id || null,
          tabIndex: '-1',
          onKeyDown: this.handleContainerKeyDown,
          ref: function ref(_ref10) {
            _this7.container = _ref10;
          }
        },
        this.props.showLabelInButton === false && this.props.showLabel && _react2.default.createElement(
          'span',
          {
            className: 'tm-quark-dropdown__label tm-quark-dropdown__label_size_' + this.props.labelSize + (this.props.disabled ? ' tm-quark-dropdown__label_disabled' : ''),
            ref: function ref(_ref) {
              _this7.label = _ref;
            }
          },
          this.props.label
        ),
        _react2.default.createElement('input', {
          className: 'tm-quark-drodpown__value-input',
          type: 'hidden',
          name: this.props.name || null,
          ref: function ref(_ref2) {
            _this7.valueInput = _ref2;
          }
        }),
        this.props.showButton && _react2.default.createElement(
          'button',
          {
            className: 'tm-quark-dropdown__button' + (this.state.open ? ' tm-quark-dropdown__button_open' : '') + ' tm-quark-dropdown__button_size_' + this.props.buttonSize + (this.props.disabled ? ' tm-quark-dropdown__button_disabled' : ''),
            type: 'button',
            'aria-label': this.props.label,
            onClick: this.state.open ? this.close : this.open,
            onKeyDown: this.handleButtonKeyDown,
            ref: function ref(_ref4) {
              _this7.button = _ref4;
            }
          },
          this.props.showLabelInButton && this.props.showLabel && _react2.default.createElement(
            'span',
            {
              className: 'tm-quark-dropdown__label tm-quark-dropdown__label_size_' + this.props.labelSize + (this.props.disabled ? ' tm-quark-dropdown__label_disabled' : ''),
              ref: function ref(_ref3) {
                _this7.label = _ref3;
              }
            },
            this.props.label
          ),
          _react2.default.createElement(
            'span',
            { className: 'tm-quark-dropdown__selected-option-content' },
            selectedOption.icon && this.props.optionIconRadioStyle !== true && _react2.default.createElement('i', { className: 'tm-quark-dropdown__icon tm-quark-dropdown__icon_size_medium icon icon-' + selectedOption.icon }),
            this.props.showOptionHTMLInButton && selectedOption.html ? selectedOption.html : selectedOption.label
          )
        ),
        this.state.open && _react2.default.createElement(
          'div',
          {
            className: 'tm-quark-dropdown__content',
            ref: function ref(_ref9) {
              _this7.content = _ref9;
            }
          },
          this.props.showFilterBox && _react2.default.createElement(
            'div',
            {
              className: 'tm-quark-dropdown__filter-box',
              ref: function ref(_ref6) {
                _this7.filterBox = _ref6;
              }
            },
            _react2.default.createElement('input', {
              className: 'tm-quark-dropdown__filter-input',
              type: 'search',
              placeholder: this.props.filterBoxPlaceholder,
              value: this.state.filterQuery,
              tabIndex: this.state.open ? '0' : '-1',
              onChange: function onChange(event) {
                _this7.filterOptions(event.target.value);
              },
              onKeyDown: this.handleFilterInputKeyDown,
              ref: function ref(_ref5) {
                _this7.filterInput = _ref5;
              },
              autoFocus: true
            })
          ),
          _react2.default.createElement(
            'ul',
            {
              className: 'tm-quark-dropdown__options',
              ref: function ref(_ref8) {
                _this7.optionsList = _ref8;
              }
            },
            visibleOptions.length > 0 ? visibleOptions.map(function (option, index) {
              if (option.disabled) {
                disabledOptionIndex = disabledOptionIndex - 1;
              } else {
                activeOptionIndex = activeOptionIndex + 1;
              }

              var optionIndex = option.disabled ? disabledOptionIndex : activeOptionIndex;
              var optionIcon = _this7.props.optionIconRadioStyle ? 'tm-quark-dropdown__icon tm-quark-dropdown__icon_size_medium tm-quark-dropdown__icon_type_radio' : option.icon ? 'tm-quark-dropdown__icon tm-quark-dropdown__icon_size_' + _this7.props.optionIconSize + ' ' + ('icon icon-' + option.icon) : '';

              return _react2.default.createElement(
                'li',
                {
                  className: 'tm-quark-dropdown__option ' + (option.disabled ? 'tm-quark-dropdown__option_disabled ' : '') + 'tm-quark-dropdown__option_size_' + _this7.props.optionSize + (option.value === _this7.state.value ? ' tm-quark-dropdown__option_selected' : ''),
                  tabIndex: option.disabled || _this7.state.open === false ? -1 : 0,
                  role: 'option',
                  onClick: function onClick(event) {
                    _this7.selectOption(option);
                  },
                  onKeyDown: function onKeyDown(event) {
                    _this7.handleOptionKeyDown(event, option, optionIndex);
                  },
                  ref: function ref(_ref7) {
                    _this7['option' + optionIndex] = _ref7;
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
  defaultValue: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  label: _react2.default.PropTypes.string,
  showLabelInButton: _react2.default.PropTypes.bool,
  labelSize: _react2.default.PropTypes.oneOf(['small', 'medium']),
  showLabel: _react2.default.PropTypes.bool,
  showButton: _react2.default.PropTypes.bool,
  buttonSize: _react2.default.PropTypes.oneOf(['medium', 'large']),
  showOptionHTMLInButton: _react2.default.PropTypes.bool,
  showFilterBox: _react2.default.PropTypes.bool,
  filterBoxPlaceholder: _react2.default.PropTypes.string,
  filterNoResultsText: _react2.default.PropTypes.string,
  defaultFilterQuery: _react2.default.PropTypes.string,
  options: _react2.default.PropTypes.array,
  optionsToShow: _react2.default.PropTypes.number,
  optionSize: _react2.default.PropTypes.oneOf(['medium', 'large']),
  showSelectedOption: _react2.default.PropTypes.bool,
  optionIconRadioStyle: _react2.default.PropTypes.bool,
  optionIconSize: _react2.default.PropTypes.oneOf(['medium', 'large']),
  disabled: _react2.default.PropTypes.bool,
  onOpen: _react2.default.PropTypes.func,
  onChange: _react2.default.PropTypes.func,
  onClose: _react2.default.PropTypes.func
};
Dropdown.defaultProps = {
  defaultOpen: false,
  showLabelInButton: false,
  labelSize: 'medium',
  showLabel: true,
  showButton: true,
  buttonSize: 'medium',
  showOptionHTMLInButton: true,
  showFilterBox: false,
  filterBoxPlaceholder: '',
  filterNoResultsText: 'No results match',
  defaultFilterQuery: '',
  options: [],
  optionsToShow: 5,
  optionSize: 'medium',
  showSelectedOption: true,
  optionIconRadioStyle: false,
  optionIconSize: 'medium',
  disabled: false
};
exports.default = Dropdown;