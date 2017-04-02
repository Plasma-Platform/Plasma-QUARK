'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Steps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Steps(props) {
  var className = props.className,
      id = props.id,
      name = props.name,
      steps = props.steps,
      activeStep = props.activeStep,
      disableUpcomingSteps = props.disableUpcomingSteps,
      disablePassedSteps = props.disablePassedSteps,
      onRequestChange = props.onRequestChange;


  var activeStepContent = steps.filter(function (step, stepIndex) {
    return stepIndex === activeStep;
  })[0].content || null;

  var stepsCustomClassName = '' + (className ? ' ' + className : '');

  return _react2.default.createElement(
    'div',
    {
      className: 'tm-quark-steps' + stepsCustomClassName,
      id: id || null,
      name: name || null
    },
    props.steps.map(function (step, stepIndex) {
      var isDisabled = activeStep === stepIndex || step.disabled || activeStep < stepIndex && disableUpcomingSteps || activeStep > stepIndex && disablePassedSteps;

      return _react2.default.createElement(
        'span',
        {
          className: 'tm-quark-steps__label tm-quark-steps__label_' + (step.label ? 'with-title' : 'without-title') + ' tm-quark-steps__label_' + (step.disabled ? 'disabled' : activeStep === stepIndex ? 'active' : activeStep < stepIndex ? 'upcoming' : 'passed'),
          key: stepIndex
        },
        _react2.default.createElement(
          'span',
          {
            className: 'tm-quark-steps__toggle-btn tm-quark-steps__toggle-btn_' + (step.disabled ? 'disabled' : activeStep === stepIndex ? 'active' : activeStep < stepIndex ? 'upcoming' : 'passed'),
            'data-step-number': stepIndex + 1,
            'aria-label': stepIndex,
            role: 'button',
            onClick: function onClick() {
              isDisabled ? null : onRequestChange(stepIndex);
            }
          },
          step.label || null
        )
      );
    }),
    _react2.default.createElement(
      'div',
      { className: 'tm-quark-steps__step-content' },
      activeStepContent
    )
  );
}

Steps.propTypes = {
  steps: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
  activeStep: _react.PropTypes.number,
  disableUpcomingSteps: _react.PropTypes.bool,
  disablePassedSteps: _react.PropTypes.bool,
  onRequestChange: _react.PropTypes.func
};

Steps.defaultProps = {
  activeStep: 0,
  disableUpcomingSteps: true,
  disablePassedSteps: false,
  onRequestChange: function onRequestChange() {}
};