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
      value: _this.props.options[0] ? _this.props.options[0].value : _this.props.defaultValue
    };


    _this.open = _this.open.bind(_this);
    _this.close = _this.close.bind(_this);
    _this.toggle = _this.toggle.bind(_this);
    _this.handleFilterInput = _this.handleFilterInput.bind(_this);
    _this.handleFilterBlur = _this.handleFilterBlur.bind(_this);
    _this.handleFilterKeyDown = _this.handleFilterKeyDown.bind(_this);
    _this.handleOptionClick = _this.handleOptionClick.bind(_this);
    _this.handleOptionKeyDown = _this.handleOptionKeyDown.bind(_this);
    _this.handleDropdownKeyDown = _this.handleDropdownKeyDown.bind(_this);
    _this.handleDropdownBlur = _this.handleDropdownBlur.bind(_this);
    _this.getValue = _this.getValue.bind(_this);
    _this.getOptionByValue = _this.getOptionByValue.bind(_this);
    _this.setContentPosition = _this.setContentPosition.bind(_this);
    _this.renderLabel = _this.renderLabel.bind(_this);
    _this.renderContent = _this.renderContent.bind(_this);
    _this.renderOptions = _this.renderOptions.bind(_this);

    _this.contentPosition = 'bottom';
    return _this;
  }

  (0, _createClass3.default)(Dropdown, [{
    key: 'open',
    value: function open() {
      var _this2 = this;

      this.setContentPosition();

      this.setState({
        open: true
      }, function () {
        if (_this2.props.type === 3) {
          _this2.filterInput.value = '';
          _this2.filterInput.focus();
        }
        _this2.props.onOpen ? _this2.props.onOpen() : null;
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
        _this3.props.onClose ? _this3.props.onClose() : null;
      });
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      this.state.open ? this.close() : this.open();
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
        _this4.props.onChange ? _this4.props.onChange() : null;
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
        } else if (this.props.type === 3) {
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
      if (this.container.contains(event.relatedTarget) === false && this.container !== event.relatedTarget && this.open) {
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
      var documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
      var containerHeight = this.container.offsetHeight;
      var containerTopOffset = this.container.getBoundingClientRect().top;
      var containerBottomOffset = documentHeight - containerTopOffset - containerHeight;
      var contentHeight = this.content.offsetHeight;

      console.log('containerHeight', containerHeight);
      console.log('containerTopOffset', containerTopOffset);
      console.log('containerBottomOffset', containerBottomOffset);
      console.log('contentHeight', contentHeight);

      if (contentHeight > containerBottomOffset && containerTopOffset > containerBottomOffset) {
        this.contentPosition = 'top';
      } else {
        this.contentPosition = 'bottom';
      }
    }
  }, {
    key: 'renderLabel',
    value: function renderLabel() {
      return _react2.default.createElement(
        'span',
        { className: 'dropdown__label' },
        this.props.label
      );
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      var _this5 = this;

      return _react2.default.createElement(
        'div',
        {
          className: 'dropdown__content',
          ref: function ref(_ref3) {
            _this5.content = _ref3;
          }
        },
        this.props.type === 3 && _react2.default.createElement(
          'div',
          { className: 'dropdown__filter-box' },
          _react2.default.createElement('input', {
            className: 'dropdown__filter-input',
            type: 'search',
            value: this.state.filterQuery,
            placeholder: this.props.filterText || null,
            tabIndex: this.state.open ? '0' : '-1',
            onChange: this.handleFilterInput,
            onBlur: this.handleFilterBlur,
            onKeyDown: this.handleFilterKeyDown,
            ref: function ref(_ref) {
              _this5.filterInput = _ref;
            }
          })
        ),
        _react2.default.createElement(
          'ul',
          {
            className: 'dropdown__options',
            ref: function ref(_ref2) {
              _this5.optionsList = _ref2;
            }
          },
          this.renderOptions()
        )
      );
    }
  }, {
    key: 'renderOptions',
    value: function renderOptions() {
      var _this6 = this;

      var filterQuery = this.state.filterQuery.toLowerCase();

      return this.props.options.map(function (option, index) {
        return _react2.default.createElement(
          'li',
          {
            className: 'dropdown__option' + (_this6.state.value === option.value ? ' dropdown__option_selected' : ''),
            tabIndex: option.disabled || _this6.state.open === false ? -1 : 0,
            'aria-label': option.label,
            role: 'option',
            hidden: option.label.toLowerCase().indexOf(filterQuery) === 0 && filterQuery.length > 0,
            onClick: function onClick() {
              _this6.handleOptionClick(option);
            },
            onKeyDown: function onKeyDown(event) {
              _this6.handleOptionKeyDown(event, option, index);
            },
            key: index,
            ref: function ref(_ref4) {
              _this6['option' + index] = _ref4;
            }
          },
          option.label
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      var typeClassName = ' dropdown_type_' + this.props.type;
      var disabledClassName = this.props.disabled ? ' dropdown_disabled' : '';
      var contentPosClassName = ' dropdown_content-position_' + this.contentPosition;
      var openedClassName = this.state.open ? ' dropdown_open' : ' dropdown_closed';
      var addClassName = this.props.className ? ' ' + this.props.className : '';
      var containerClassName = 'dropdown' + typeClassName + disabledClassName + contentPosClassName + openedClassName + addClassName;

      var selectedOption = this.getOptionByValue(this.state.value);
      var selectedOptionLabel = selectedOption ? selectedOption.label : this.props.options.length ? this.props.options[0].label : '';
      var selectedOptionIcon = selectedOption ? selectedOption.icon : '';

      return _react2.default.createElement(
        'div',
        {
          className: containerClassName,
          id: this.props.id || null,
          tabIndex: '-1',
          onKeyDown: this.handleDropdownKeyDown,
          onBlur: this.handleDropdownBlur,
          ref: function ref(_ref6) {
            _this7.container = _ref6;
          }
        },
        (this.props.type === 1 || this.props.type === 2) && this.renderLabel(),
        _react2.default.createElement(
          'button',
          {
            className: 'dropdown__button' + (this.props.type === 3 ? ' icon icon-' + selectedOptionIcon + '' : ''),
            type: 'button',
            'aria-label': this.props.label,
            onClick: this.toggle,
            ref: function ref(_ref5) {
              _this7.button = _ref5;
            }
          },
          selectedOptionLabel,
          _react2.default.createElement('span', { className: 'dropdown__arrow' })
        ),
        this.props.type === 3 && this.renderLabel(),
        this.renderContent()
      );
    }
  }]);
  return Dropdown;
}(_react2.default.Component);

Dropdown.propTypes = {
  defaultOpen: _react2.default.PropTypes.bool,
  type: _react2.default.PropTypes.oneOf([1, 2, 3]).isRequired,
  className: _react2.default.PropTypes.string,
  id: _react2.default.PropTypes.string,
  disabled: _react2.default.PropTypes.bool,
  label: _react2.default.PropTypes.string,
  filterQuery: _react2.default.PropTypes.string,
  filterText: _react2.default.PropTypes.string,
  defaultFilterQuery: _react2.default.PropTypes.string,
  noResultsText: _react2.default.PropTypes.string,
  options: _react2.default.PropTypes.array.isRequired,
  optionsToShow: _react2.default.PropTypes.number,
  defaultValue: _react2.default.PropTypes.string,
  onOpen: _react2.default.PropTypes.func,
  onClose: _react2.default.PropTypes.func,
  onChange: _react2.default.PropTypes.func
};
Dropdown.defaultProps = {
  defaultOpen: false,
  defaultFilterQuery: '',
  defaultValue: ''
};
exports.default = Dropdown;