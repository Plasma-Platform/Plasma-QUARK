import React from 'react';
import PropTypes from 'prop-types';

import './Steps.less';

const Steps = ({
  className,
  id,
  name,
  steps,
  activeStep,
  disableUpcomingSteps,
  disablePassedSteps,
  onRequestChange,
}) => {
  const activeStepContent = steps.find((step, stepIndex) => (
    stepIndex === activeStep || step.id === activeStep
  ));

  return (
    <div
      className={`tm-quark-steps ${className}`}
      id={id}
      name={name}
    >
      {steps.map((step, stepIndex) => {
        const isDisabled = (
          activeStep === stepIndex
          || step.disabled
          || (activeStep < stepIndex && disableUpcomingSteps)
          || (activeStep > stepIndex && disablePassedSteps)
        );

        const notActiveStepClassName = activeStep < stepIndex ? 'upcoming' : 'passed';
        const activeStepClassName = activeStep === stepIndex ? 'active' : notActiveStepClassName;

        return (
          <span
            className={`tm-quark-steps__label tm-quark-steps__label_${step.label ? 'with-title' : 'without-title'} tm-quark-steps__label_${step.disabled ? 'disabled' : activeStepClassName}`}
            key={step.id}
          >
            <span
              className={`tm-quark-steps__toggle-btn tm-quark-steps__toggle-btn_${step.disabled ? 'disabled' : activeStepClassName}`}
              data-step-number={stepIndex + 1}
              aria-label={stepIndex}
              role="button"
              onClick={() => {
                if (!isDisabled) {
                  onRequestChange(stepIndex, step.id || null);
                }
              }}
              tabIndex="0"
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
};

Steps.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeStep: PropTypes.number,
  disableUpcomingSteps: PropTypes.bool,
  disablePassedSteps: PropTypes.bool,
  onRequestChange: PropTypes.func,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};

Steps.defaultProps = {
  activeStep: 0,
  disableUpcomingSteps: true,
  disablePassedSteps: false,
  onRequestChange: () => {},
  className: '',
  id: null,
  name: null,
};

export default Steps;
