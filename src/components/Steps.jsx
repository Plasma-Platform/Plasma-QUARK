import React, {PropTypes} from 'react';

import './Steps.less';

export default function Steps (props) {
  const {
    className,
    id,
    name,
    steps,
    activeStep,
    disableUpcomingSteps,
    disablePassedSteps,
    onRequestChange
  } = props;

  const activeStepContent = steps.filter((step, stepIndex) => {
    return stepIndex === activeStep;
  })[0].content || null;

  const stepsCustomClassName = `${className ? ` ${className}` : ''}`;

  return (
    <div
      className = {`tm-quark-steps${stepsCustomClassName}`}
      id        = {id || null}
      name      = {name || null}
    >
      {props.steps.map((step, stepIndex) => {
        const isDisabled = activeStep === stepIndex || step.disabled || (activeStep < stepIndex && disableUpcomingSteps) || (activeStep > stepIndex && disablePassedSteps);

        return (
          <span
            className  = {`tm-quark-steps__label tm-quark-steps__label_${step.label ? 'with-title' : 'without-title'} tm-quark-steps__label_${step.disabled ? 'disabled' : activeStep === stepIndex ? 'active' : activeStep < stepIndex ? 'upcoming' : 'passed'}`}
            key        = {stepIndex}
          >
            <span
              className        = {`tm-quark-steps__toggle-btn tm-quark-steps__toggle-btn_${step.disabled ? 'disabled' : activeStep === stepIndex ? 'active' : activeStep < stepIndex ? 'upcoming' : 'passed'}`}
              data-step-number = {stepIndex + 1}
              aria-label       = {stepIndex}
              role             = "button"
              onClick          = {() => { isDisabled ? null : onRequestChange(stepIndex); }}
            >
              {step.label || null}
            </span>
          </span>
        );
      })}

      <div className="tm-quark-steps__step-content">
        {activeStepContent}
      </div>
    </div>
  );
}

Steps.propTypes = {
  steps                : PropTypes.arrayOf(PropTypes.object).isRequired,
  activeStep           : PropTypes.number,
  disableUpcomingSteps : PropTypes.bool,
  disablePassedSteps   : PropTypes.bool,
  onRequestChange      : PropTypes.func
};

Steps.defaultProps = {
  activeStep           : 0,
  disableUpcomingSteps : true,
  disablePassedSteps   : false,
  onRequestChange      : () => {}
};
