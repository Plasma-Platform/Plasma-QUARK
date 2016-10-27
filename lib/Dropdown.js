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
      value: _this.props.defaultValue || _this.props.options[0].value || ''
    };


    _this.open = _this.open.bind(_this);
    _this.close = _this.close.bind(_this);
    _this.toggle = _this.toggle.bind(_this);

    _this.handleButtonKeyDown = _this.handleButtonKeyDown.bind(_this);

    _this.handleFilterInput = _this.handleFilterInput.bind(_this);
    _this.handleFilterKeyDown = _this.handleFilterKeyDown.bind(_this);
    _this.handleFilterBlur = _this.handleFilterBlur.bind(_this);

    _this.handleOptionClick = _this.handleOptionClick.bind(_this);
    _this.handleOptionKeyDown = _this.handleOptionKeyDown.bind(_this);

    _this.handleDropdownKeyDown = _this.handleDropdownKeyDown.bind(_this);
    _this.handleDropdownBlur = _this.handleDropdownBlur.bind(_this);

    _this.setValue = _this.setValue.bind(_this);
    _this.getValue = _this.getValue.bind(_this);
    _this.getOptionByValue = _this.getOptionByValue.bind(_this);

    _this.renderLabel = _this.renderLabel.bind(_this);
    _this.renderContent = _this.renderContent.bind(_this);
    _this.renderOptions = _this.renderOptions.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Dropdown, [{
    key: 'open',
    value: function open() {
      var _this2 = this;

      this.setState({
        open: true
      }, function () {
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
        _this3.props.onClose ? _this3.props.onClose() : null;
      });
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      var _this4 = this;

      this.setState({
        open: !this.state.open
      }, function () {
        _this4.props.onToggle ? _this4.props.onToggle() : null;
      });
    }
  }, {
    key: 'handleButtonKeyDown',
    value: function handleButtonKeyDown(event) {}
  }, {
    key: 'handleFilterInput',
    value: function handleFilterInput() {
      this.setState({
        filterQuery: this.filterInput.value.trim()
      });
    }
  }, {
    key: 'handleFilterBlur',
    value: function handleFilterBlur() {
      this.filterInput.value = this.filterInput.value.trim();
    }
  }, {
    key: 'handleFilterKeyDown',
    value: function handleFilterKeyDown(event) {}
  }, {
    key: 'handleOptionClick',
    value: function handleOptionClick(option) {
      this.setValue(option.value);
    }
  }, {
    key: 'handleOptionKeyDown',
    value: function handleOptionKeyDown(event) {}
  }, {
    key: 'handleDropdownKeyDown',
    value: function handleDropdownKeyDown(event) {}
  }, {
    key: 'handleDropdownBlur',
    value: function handleDropdownBlur(event) {
      if (this.container.contains(event.relatedTarget) === false && this.container !== event.relatedTarget && this.open) {
        this.close();
      }
    }
  }, {
    key: 'setValue',
    value: function setValue(newValue) {
      var _this5 = this;

      this.setState({
        value: newValue
      }, function () {
        _this5.props.onChange ? _this5.props.onChange(newValue) : null;
      });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.value;
    }
  }, {
    key: 'getOptionByValue',
    value: function getOptionByValue(value) {
      return this.props.options.filter(function (option) {
        return option.value = value;
      })[0];
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
      var _this6 = this;

      var contentPos = 'bottom';
      var contentPosClassName = 'dropdown__content_position_' + contentPos;
      var contentClassName = 'dropdown__content ' + contentPosClassName;

      return _react2.default.createElement(
        'div',
        {
          className: contentClassName,
          ref: function ref(_ref3) {
            _this6.content = _ref3;
          }
        },
        this.props.showFilter && _react2.default.createElement(
          'div',
          { className: 'dropdown__search-box' },
          _react2.default.createElement('input', {
            className: 'dropdown__search-input',
            type: 'search',
            value: this.state.filterQuery,
            placeholder: this.props.filterText || null,
            onChange: this.handleFilterInput,
            onBlur: this.handleFilterBlur,
            onKeyDown: this.handleFilterKeyDown,
            ref: function ref(_ref) {
              _this6.filterInput = _ref;
            }
          })
        ),
        _react2.default.createElement(
          'ul',
          {
            className: 'dropdown__options',
            ref: function ref(_ref2) {
              _this6.optionsList = _ref2;
            }
          },
          this.renderOptions()
        )
      );
    }
  }, {
    key: 'renderOptions',
    value: function renderOptions() {
      var _this7 = this;

      return this.props.options.map(function (option, index) {
        return option.label.toLowerCase().indexOf(_this7.state.filterQuery.toLowerCase()) === 0 ? _react2.default.createElement(
          'li',
          {
            className: 'dropdown__option' + (_this7.state.value === option.value ? ' dropdown__option_selected' : ''),
            tabIndex: option.disabled || _this7.state.open === false ? -1 : 0,
            'aria-label': option.label,
            role: 'option',
            onClick: function onClick() {
              _this7.handleOptionClick(option);
            },
            onKeyDown: function onKeyDown(event) {
              _this7.handleOptionKeyDown(event, option, index);
            },
            key: index,
            ref: function ref(_ref4) {
              _this7['option' + index] = _ref4;
            }
          },
          option.label
        ) : null;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this8 = this;

      var openedClassName = this.state.open ? ' dropdown_open' : '';
      var typeClassName = ' dropdown_type_' + this.props.type;
      var disabledClassName = this.props.disabled ? ' dropdown_disabled' : '';
      var addClassName = this.props.className ? ' ' + this.props.className : '';
      var containerClassName = 'dropdown' + openedClassName + typeClassName + disabledClassName + addClassName;

      var selectedOption = this.getOptionByValue(this.state.value);

      return _react2.default.createElement(
        'div',
        {
          className: containerClassName,
          id: this.props.id || null,
          tabIndex: '-1',
          onKeyDown: this.handleDropdownKeyDown,
          onBlur: this.handleDropdownBlur,
          ref: function ref(_ref6) {
            _this8.container = _ref6;
          }
        },
        (this.props.type === 1 || this.props.type === 2) && this.renderLabel(),
        _react2.default.createElement(
          'button',
          {
            className: 'dropdown__button',
            type: 'button',
            'aria-label': this.props.label,
            onClick: this.toggle,
            onKeyDown: this.handleButtonKeyDown,
            ref: function ref(_ref5) {
              _this8.button = _ref5;
            }
          },
          selectedOption.Label
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
  showFilter: _react2.default.PropTypes.bool,
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
  defaultFilterQuery: ''
};
exports.default = Dropdown;