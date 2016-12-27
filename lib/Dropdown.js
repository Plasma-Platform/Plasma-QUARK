'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
      filterQuery: _this.props.defaultFilterQuery,
      value: _this.props.defaultValue ? _this.props.defaultValue : _this.props.options[0] ? _this.props.options[0].value : ''
    };


    _this.toggle = _this.toggle.bind(_this);
    _this.handleButtonKeyDown = _this.handleButtonKeyDown.bind(_this);
    _this.handleFilterInput = _this.handleFilterInput.bind(_this);
    _this.handleFilterBlur = _this.handleFilterBlur.bind(_this);
    _this.handleFilterKeyDown = _this.handleFilterKeyDown.bind(_this);
    _this.handleOptionClick = _this.handleOptionClick.bind(_this);
    _this.handleOptionKeyDown = _this.handleOptionKeyDown.bind(_this);
    _this.handleDropdownKeyDown = _this.handleDropdownKeyDown.bind(_this);
    _this.handleDropdownBlur = _this.handleDropdownBlur.bind(_this);

    _this.contentPosition = 'bottom';
    return _this;
  }

  (0, _createClass3.default)(Dropdown, [{
    key: 'open',
    value: function open() {
      var _this2 = this;

      this.setContentPosition();

      this.setState({
        open: true,
        filterQuery: ''
      }, function () {
        if (_this2.props.showFilter) {
          _this2.filterInput.focus();
        } else {
          _this2.button.focus();
        }
        if (_this2.props.onOpen) {
          _this2.props.onOpen();
        }
      });
    }
  }, {
    key: 'close',
    value: function close() {
      var _this3 = this;

      this.setState({
        open: false
      }, function () {
        _this3.button.blur();
        if (_this3.props.onClose) {
          _this3.props.onClose();
        }
      });
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      this.state.open === true ? this.close() : this.open();
    }
  }, {
    key: 'handleButtonKeyDown',
    value: function handleButtonKeyDown(event) {
      var keyCode = event.keyCode;

      if (keyCode === 40 && this.props.type !== 3 && this.option0) {
        this.option0.focus();
      }
    }
  }, {
    key: 'handleFilterInput',
    value: function handleFilterInput() {
      var filterValue = this.filterInput.value;

      this.setState({
        filterQuery: filterValue.trim()
      });
    }
  }, {
    key: 'handleFilterBlur',
    value: function handleFilterBlur() {
      this.filterInput.value = this.filterInput.value.trim();
    }
  }, {
    key: 'handleFilterKeyDown',
    value: function handleFilterKeyDown(event) {
      var keyCode = event.keyCode;

      if (keyCode === 40 && this.option0) {
        this.option0.focus();
      }
    }
  }, {
    key: 'handleOptionClick',
    value: function handleOptionClick(option) {
      var _this4 = this;

      this.setState({
        open: false,
        value: option.value
      }, function () {
        _this4.props.onChange ? _this4.props.onChange(_this4.state.value) : null;
      });
    }
  }, {
    key: 'handleOptionKeyDown',
    value: function handleOptionKeyDown(event, option, optionIndex) {
      var keyCode = event.keyCode;

      if (keyCode === 13) {
        this['option' + optionIndex].click();
      } else if (keyCode === 40 && this['option' + (optionIndex + 1)]) {
        this['option' + (optionIndex + 1)].focus();
      } else if (keyCode === 38) {
        if (this['option' + (optionIndex - 1)]) {
          this['option' + (optionIndex - 1)].focus();
        } else if (this.props.showFilter) {
          this.filterInput.focus();
        }
      }
    }
  }, {
    key: 'handleDropdownKeyDown',
    value: function handleDropdownKeyDown(event) {
      var keyCode = event.keyCode;

      if (keyCode === 27) {
        this.close();
      }
    }
  }, {
    key: 'handleDropdownBlur',
    value: function handleDropdownBlur(event) {
      if (this.container.contains(event.target) === false && this.container !== event.target && this.open) {
        this.close();
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.value;
    }
  }, {
    key: 'getOptionByValue',
    value: function getOptionByValue(optionValue) {
      return this.props.options.filter(function (option) {
        return option.value === optionValue;
      })[0];
    }
  }, {
    key: 'setContentPosition',
    value: function setContentPosition() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
      var buttonHeight = this.button.offsetHeight;
      var buttonTopOffset = this.button.getBoundingClientRect().top + scrollTop;
      var buttonBottomOffset = documentHeight - buttonTopOffset - buttonHeight;
      var contentHeight = this.content.offsetHeight;

      if (contentHeight > buttonBottomOffset) {
        if (buttonTopOffset > contentHeight) {
          this.contentPosition = 'top';
        } else {
          this.contentPosition = 'bottom-fixed';
        }
      } else {
        this.contentPosition = 'bottom';
      }
    }
  }, {
    key: 'renderOptions',
    value: function renderOptions() {
      var _this5 = this;

      var filterQuery = this.state.filterQuery.toLowerCase();
      var filterRegExp = new RegExp('\\b' + filterQuery, 'gi');

      var activeOptionIndex = -1;
      var disabledOptionIndex = 0;

      return this.props.options.filter(function (option) {
        var isSelectedOption = _this5.props.type !== 3 && option.value === _this5.state.value;
        var isRespondToSearch = filterQuery.length > 0 ? filterRegExp.test(option.label.toLowerCase()) : true;
        var isVisible = isSelectedOption !== true && isRespondToSearch === true;

        return isVisible;
      }).map(function (option, index) {
        var selectedClassName = _this5.state.value === option.value ? ' dropdown__option_selected' : '';
        var optionClassName = 'dropdown__option' + selectedClassName;
        var optionIconClassName = option.icon && option.icon.length > 0 ? ' dropdown__icon icon icon-' + option.icon : '';

        var optionIndex = void 0;

        if (option.disabled) {
          disabledOptionIndex--;
          optionIndex = disabledOptionIndex;
        } else {
          activeOptionIndex++;
          optionIndex = activeOptionIndex;
        }

        return _react2.default.createElement(
          'li',
          {
            className: optionClassName,
            tabIndex: option.disabled || _this5.state.open === false ? -1 : 0,
            'aria-label': option.label,
            role: 'option',
            onClick: function onClick() {
              _this5.handleOptionClick(option);
            },
            onKeyDown: function onKeyDown(event) {
              _this5.handleOptionKeyDown(event, option, optionIndex);
            },
            key: index,
            ref: function ref(_ref) {
              _this5['option' + optionIndex] = _ref;
            }
          },
          optionIconClassName.length > 0 && _react2.default.createElement('i', { className: optionIconClassName }),
          option.html ? option.html : option.label
        );
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('click', this.handleDropdownBlur);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('click', this.handleDropdownBlur);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      var typeClassName = ' dropdown_type_' + this.props.type;
      var disabledClassName = this.props.disabled ? ' dropdown_disabled' : '';
      var contentPosClassName = ' dropdown_content-position_' + this.contentPosition;
      var openedClassName = this.state.open ? ' dropdown_open' : ' dropdown_closed';
      var addClassName = this.props.className ? ' ' + this.props.className : '';
      var containerClassName = 'dropdown' + typeClassName + disabledClassName + contentPosClassName + openedClassName + addClassName;

      var selectedOption = this.getOptionByValue(this.state.value);
      var selectedOptionLabel = selectedOption ? selectedOption.html || selectedOption.label : this.props.options.length ? this.props.options[0].html || this.props.options[0].label : '';

      var selectedOptionIcon = selectedOption && selectedOption.icon ? selectedOption.icon : this.props.options.length && this.props.options[0].icon ? this.props.options[0].icon : '';

      var buttonIconClassName = selectedOptionIcon.length > 0 ? ' dropdown__icon icon icon-' + selectedOptionIcon : '';

      return _react2.default.createElement(
        'div',
        {
          className: containerClassName,
          id: this.props.id || null,
          tabIndex: '-1',
          onKeyDown: this.handleDropdownKeyDown,
          ref: function ref(_ref6) {
            _this6.container = _ref6;
          }
        },
        (this.props.type === 1 || this.props.type === 2) && _react2.default.createElement(
          'span',
          { className: 'dropdown__label' },
          this.props.label
        ),
        _react2.default.createElement(
          'button',
          {
            className: 'dropdown__button',
            type: 'button',
            'aria-label': this.props.label,
            onClick: this.toggle,
            onKeyDown: this.handleButtonKeyDown,
            ref: function ref(_ref2) {
              _this6.button = _ref2;
            }
          },
          this.props.showSelectedOptionLabelInButton && buttonIconClassName.length > 0 ? _react2.default.createElement('i', { className: buttonIconClassName }) : this.props.defaultButtonIcon.length > 0 ? _react2.default.createElement('i', { className: 'dropdown__icon icon icon-' + this.props.defaultButtonIcon }) : null,
          this.props.showSelectedOptionLabelInButton ? selectedOptionLabel : this.props.defaultButtonLabel,
          _react2.default.createElement('span', { className: 'dropdown__arrow' })
        ),
        this.props.type === 3 && _react2.default.createElement(
          'span',
          { className: 'dropdown__label' },
          this.props.label
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'dropdown__content',
            ref: function ref(_ref5) {
              _this6.content = _ref5;
            }
          },
          this.props.showFilter && _react2.default.createElement(
            'div',
            { className: 'dropdown__filter-box' },
            _react2.default.createElement('input', {
              className: 'dropdown__filter-input',
              type: 'search',
              value: this.state.filterQuery,
              placeholder: this.props.filterHint || null,
              tabIndex: this.state.open ? '0' : '-1',
              onChange: this.handleFilterInput,
              onBlur: this.handleFilterBlur,
              onKeyDown: this.handleFilterKeyDown,
              ref: function ref(_ref3) {
                _this6.filterInput = _ref3;
              }
            })
          ),
          _react2.default.createElement(
            'ul',
            {
              className: 'dropdown__options',
              ref: function ref(_ref4) {
                _this6.optionsList = _ref4;
              }
            },
            this.renderOptions().length === 0 && this.props.showFilter ? _react2.default.createElement(
              'li',
              { className: 'dropdown__option dropdown__no-results' },
              this.props.noResultsText + ' "' + this.state.filterQuery + '"'
            ) : this.renderOptions()
          )
        )
      );
    }
  }]);
  return Dropdown;
}(_react2.default.Component);

Dropdown.propTypes = {
  type: _react2.default.PropTypes.oneOf([1, 2, 3, 4]).isRequired,
  options: _react2.default.PropTypes.array.isRequired,
  defaultOpen: _react2.default.PropTypes.bool,
  className: _react2.default.PropTypes.string,
  id: _react2.default.PropTypes.string,
  disabled: _react2.default.PropTypes.bool,
  label: _react2.default.PropTypes.string,
  showFilter: _react2.default.PropTypes.bool,
  filterQuery: _react2.default.PropTypes.string,
  filterHint: _react2.default.PropTypes.string,
  defaultFilterQuery: _react2.default.PropTypes.string,
  noResultsText: _react2.default.PropTypes.string,
  defaultValue: _react2.default.PropTypes.string,
  onOpen: _react2.default.PropTypes.func,
  onClose: _react2.default.PropTypes.func,
  onChange: _react2.default.PropTypes.func,
  showSelectedOptionLabelInButton: _react2.default.PropTypes.bool,
  defaultButtonLabel: _react2.default.PropTypes.string
};
Dropdown.defaultProps = {
  defaultOpen: false,
  showFilter: false,
  defaultFilterQuery: '',
  noResultsText: 'No results match',
  showSelectedOptionLabelInButton: true,
  defaultButtonIcon: '',
  defaultButtonLabel: null
};
exports.default = Dropdown;