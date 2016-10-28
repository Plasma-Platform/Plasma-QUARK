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
      open: _this.props.defaultOpen || false,
      filterQuery: _this.props.defaultFilterQuery || '',
      value: _this.props.options ? _this.props.options[0].value : _this.props.defaultValue
    };

    _this.handleDocumentClick = function (event) {
      if (_this.container.contains(event.target) === false && _this.container !== event.target && _this.state.open) {
        _this.close();
      }
    };

    _this.handleDropdownBlur = function (event) {
      if (_this.container.contains(event.relatedTarget) === false && _this.container !== event.relatedTarget && _this.open) {
        _this.close();
      }
    };

    _this.handleDropdownKeyUp = function (event) {
      if (event.keyCode === 27 && _this.state.open) {
        _this.close();
      }
    };

    _this.setContentPos = function () {
      var documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
      var contentHeight = _this.content.offsetHeight;
      var contentTopOffset = _this.content.getBoundingClientRect().top + pageYOffset;

      if (contentTopOffset + contentHeight - documentHeight > 0 && contentTopOffset > documentHeight - contentTopOffset) {
        _this.contentPos = 'top';
      } else {
        _this.contentPos = 'bottom';
      }
    };

    _this.setValue = function (newValue) {
      _this.setState({
        open: false,
        value: newValue
      }, function () {
        if (_this.props.onChange) {
          _this.props.onChange(newValue);
        }
      });
    };

    _this.getValue = function () {
      return _this.state.value;
    };

    _this.open = function () {
      _this.setContentPos();

      _this.setState({
        open: true,
        filterQuery: ''
      }, function () {
        _this.filterInput.focus();
      });
    };

    _this.close = function () {
      _this.setState({
        open: false
      });
    };

    _this.toggle = function () {
      if (_this.state.open === true) {
        _this.close();
      } else {
        _this.open();
      }
    };

    _this.filterOptions = function () {
      if (_this.contentPos === 'bottom') {
        _this.setContentPos();
      }

      _this.setState({
        filterQuery: _this.filterInput.value
      });
    };

    _this.handleFilterBlur = function (event) {
      _this.filterInput.value = _this.filterInput.value.trim();
      _this.filterOptions();
    };

    _this.handleFilterKeyDown = function (event) {
      var firstOptionIndex = _this.props.options.findIndex(function (option, index) {
        return option.disabled !== true;
      });

      if (event.keyCode === 40) {
        event.preventDefault();
        _this['option' + firstOptionIndex].focus();
      }
    };

    _this.handleOptionClick = function (option) {
      if (option.disabled !== true) {
        _this.setValue(option.value);
      }
    };

    _this.handleOptionKeyDown = function (event, option, optionIndex) {
      event.preventDefault();

      var keyCode = event.keyCode;
      var prevOptions = [];

      var nextOptionIndex = _this.props.options.findIndex(function (option, index) {
        return index > optionIndex && option.disabled !== true;
      });

      _this.props.options.forEach(function (option, index) {
        if (index < optionIndex && option.disabled !== true) {
          prevOptions.push(index);
        }
      });

      var prevOptionIndex = prevOptions.slice(-1)[0];

      if (keyCode === 13) {
        _this.setValue(option.value);
      } else if (keyCode === 40 && nextOptionIndex > 0 && nextOptionIndex < _this.props.options.length) {
        _this['option' + nextOptionIndex].focus();
      } else if (keyCode === 38) {
        if (prevOptionIndex >= 0) {
          _this['option' + prevOptionIndex].focus();
        } else if (_this.props.showFilter) {
          _this.filterInput.focus();
        }
      }
    };

    _this.getOptionByValue = function (optionValue) {
      return _this.props.options.filter(function (option) {
        return option.value === optionValue;
      })[0];
    };

    _this.renderLabel = function () {
      return _react2.default.createElement(
        'span',
        { className: 'dropdown__label' },
        _this.props.label
      );
    };

    _this.renderButton = function (selectedOption) {
      return _react2.default.createElement(
        'button',
        {
          className: 'dropdown__button' + (selectedOption.icon ? ' icon icon-' + selectedOption.icon : ''),
          type: 'button',
          'aria-label': _this.props.label,
          value: selectedOption.value,
          onClick: _this.toggle,
          disabled: _this.props.disabled
        },
        selectedOption.label,
        _react2.default.createElement('span', { className: 'dropdown__arrow' })
      );
    };

    _this.renderFilterInput = function () {
      return _react2.default.createElement('input', {
        className: 'dropdown__filter-input',
        type: 'search',
        placeholder: _this.props.filterHint ? _this.props.filterHint : '',
        value: _this.state.filterQuery,
        tabIndex: _this.state.open ? 0 : -1,
        onChange: _this.filterOptions,
        onBlur: _this.handleFilterBlur,
        onKeyDown: _this.handleFilterKeyDown,
        ref: function ref(_ref) {
          return _this.filterInput = _ref;
        }
      });
    };

    _this.renderOptions = function (filterRegExp) {
      return _this.props.options.filter(function (option) {
        return option.label.toLowerCase().indexOf(filterRegExp) === 0;
      }).map(function (option, optionIndex) {
        var selectedClassName = option.value === _this.state.value ? ' dropdown__option_selected' : '';
        var disabledClassName = option.disabled ? ' dropdown__option_disabled' : '';
        var iconClassName = option.icon ? ' icon icon-' + option.icon : '';
        var optionClassName = 'dropdown__option' + selectedClassName + disabledClassName + iconClassName;

        return _react2.default.createElement(
          'li',
          {
            className: optionClassName,
            'aria-label': option.label,
            tabIndex: option.disabled || _this.state.open === false ? -1 : 0,
            role: 'option',
            onClick: function onClick() {
              _this.handleOptionClick(option);
            },
            onKeyDown: function onKeyDown(event) {
              _this.handleOptionKeyDown(event, option, optionIndex);
            },
            key: optionIndex,
            ref: function ref(_ref2) {
              _this['option' + optionIndex] = _ref2;
            }
          },
          option.label
        );
      });
    };

    _this.renderLabel = _this.renderLabel.bind(_this);
    _this.renderButton = _this.renderButton.bind(_this);
    _this.renderOptions = _this.renderOptions.bind(_this);
    _this.renderFilterInput = _this.renderFilterInput.bind(_this);

    _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
    _this.handleDropdownBlur = _this.handleDropdownBlur.bind(_this);
    _this.handleDropdownKeyUp = _this.handleDropdownKeyUp.bind(_this);
    _this.setContentPos = _this.setContentPos.bind(_this);
    _this.setValue = _this.setValue.bind(_this);
    _this.getValue = _this.getValue.bind(_this);
    _this.open = _this.open.bind(_this);
    _this.close = _this.close.bind(_this);
    _this.toggle = _this.toggle.bind(_this);
    _this.filterOptions = _this.filterOptions.bind(_this);
    _this.handleFilterBlur = _this.handleFilterBlur.bind(_this);
    _this.handleFilterKeyDown = _this.handleFilterKeyDown.bind(_this);
    _this.handleOptionClick = _this.handleOptionClick.bind(_this);
    _this.handleOptionKeyDown = _this.handleOptionKeyDown.bind(_this);
    _this.getOptionByValue = _this.getOptionByValue.bind(_this);

    _this.contentPos = 'bottom';
    return _this;
  }

  (0, _createClass3.default)(Dropdown, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('click', this.handleDocumentClick);
      this.setContentPos();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        open: nextProps.open ? nextProps.open : this.state.open,
        filterQuery: nextProps.filterQuery ? nextProps.filterQuery : this.state.filterQuery,
        value: nextProps.value ? nextProps.value : this.state.value
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('click', this.handleDocumentClick);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var filterRegExp = this.state.filterQuery.toLowerCase();
      var selectedOption = this.getOptionByValue(this.state.value || this.props.value);

      var openClassName = '' + (this.state.open ? ' dropdown_state_open' : '');
      var disabledClassName = '' + (this.props.disabled ? ' dropdown_disabled' : '');
      var contentPosClassName = ' dropdown_content-pos_' + this.contentPos;
      var addClassName = '' + (this.props.className ? ' ' + this.props.className : '');
      var typeClassName = ' dropdown_type_' + this.props.type;

      var options = this.renderOptions(filterRegExp);
      var isNoResults = this.props.showFilter && options.length === 0 && filterRegExp.length > 0 && this.props.noResultsText;

      return _react2.default.createElement(
        'div',
        {
          className: 'dropdown' + typeClassName + contentPosClassName + openClassName + disabledClassName + addClassName,
          id: this.props.id || null,
          tabIndex: '-1',
          role: 'listbox',
          onBlur: this.handleDropdownBlur,
          onKeyDown: this.handleDropdownKeyUp,
          ref: function ref(container) {
            return _this2.container = container;
          }
        },
        this.props.type === 1 || this.props.type === 2 ? this.renderLabel() : null,
        this.renderButton(selectedOption),
        this.props.type === 3 ? this.renderLabel() : null,
        _react2.default.createElement(
          'div',
          {
            className: 'dropdown__content',
            ref: function ref(_ref3) {
              _this2.content = _ref3;
            }
          },
          this.props.showFilter ? this.renderFilterInput() : null,
          _react2.default.createElement(
            'ul',
            {
              className: 'dropdown__options',
              role: 'list'
            },
            isNoResults ? _react2.default.createElement(
              'li',
              { className: 'dropdown__option dropdown__no-results' },
              this.props.noResultsText + ' "' + this.state.filterQuery + '"'
            ) : options
          )
        )
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
  defaultFilterQuery: '',
  defaultValue: ''
};
exports.default = Dropdown;