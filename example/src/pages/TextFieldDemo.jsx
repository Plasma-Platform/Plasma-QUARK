import React from 'react';
import TextFields from '../../../lib/textFields';
import Button from '../../../lib/buttons';

export default class TextAreaDemo extends React.Component {
  showTooltip = (ref) => {
    let innerRef = ref.input;

    innerRef.setValidationStatus(false, innerRef.props.notificationText);
  }

  validate = () => {
    for (var comp of this.components) {
      this.showTooltip(comp);
    }
  }

  components = [];

  render () {
    return (
      <section>
        <h1 className="TMUI__TypographyHeader--4"> Text Fields </h1>
        <div className="flex">
          <form className="half-width spacing-right-20">
            <TextFields.F1
              className="spacing-outer-bottom-20"
              label='Text field type = F1'
              notificationText='The most important notification in the world'
              notificationType='N3E'
              ref={ref => this.components.push(ref)}
            />
            <TextFields.F2
              className="spacing-outer-bottom-20"
              label='Text field type = F2'
              type = 'search'
              notificationText='The most important notification in the world'
              notificationType='N1A'
              customIcon = 'icon-man'
              ref={ref => this.components.push(ref)}
            />
            <TextFields.F3
              className="spacing-outer-bottom-20"
              label='Text field type = F3'
              notificationText='The most important notification in the world'
              notificationType='N2B'
              ref={ref => this.components.push(ref)}
            />
            <TextFields.F4
              className="spacing-outer-bottom-20"
              label='Enter your password (Field type F4)'
              eyeTooltipText="asdasdasdds"
              notificationText='The most important notification in the world'
              notificationType='N2F'
              maxWidth="300"
              onBlur={() => null}
              onChange={() => null}
              onSubmit={this.validate}
              ref={ref => this.components.push(ref)}
              type='password'
            />
            <Button.B2A
              type="submit"
              onClick={this.validate}
            >
              Show tooltip
            </Button.B2A>
          </form>
          <div className="half-width spacing-left-20">
            <TextFields.F1
              disabled
              className="spacing-outer-bottom-20"
              label='Disabled F1'
            />
            <TextFields.F2
              disabled
              className="spacing-outer-bottom-20"
              label='Disabled = F2'
              type = 'search'
            />
            <TextFields.F3
              disabled
              className="spacing-outer-bottom-20"
              label='Disabled TA3'
            />
            <TextFields.F4
              disabled
              className="spacing-outer-bottom-20"
              label='Enter your password (Field type F4)'
              eyeTooltipText="asdasdasdds"
              type='password'
            />
          </div>
        </div>
      </section>
    );
  }
}