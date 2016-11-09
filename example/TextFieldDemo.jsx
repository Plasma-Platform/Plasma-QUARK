import React from 'react';
import TextFields from '../lib/textFields';

export default class TextAreaDemo extends React.Component {
  showTooltip = (ref) => {
    let innerRef = ref.input;

    innerRef.setValidationStatus(false, innerRef.props.notificationText);
  }

  validate = () => {
    this.showTooltip(this.refs.password);
  }
  render () {
    return (
      <section>
        <h1 className="TMUI__TypographyHeader--4"> Text Fields </h1>
        <div className="flex">
          <div className="half-width spacing-right-20">
            <TextFields.F1
              className="spacing-outer-bottom-20"
              label='Text field type = F1'
            />
            <TextFields.F2
              className="spacing-outer-bottom-20"
              label='Text field type = F2'
              type = 'search'
              customIcon = 'icon-man'
            />
            <TextFields.F3
              className="spacing-outer-bottom-20"
              label='Text field type = F3'
            />
            <TextFields.F4
              className="spacing-outer-bottom-20"
              label='Enter your password (Field type F4)'
              eyeTooltipText="asdasdasdds"
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
              maxWidth="300"
              onBlur={() => null}
              onChange={() => null}
              validate={this.validate}
              ref={ref => this.password = ref}
              type='password'
            />
          </div>
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
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
              maxWidth="300"
              onBlur={() => null}
              onChange={() => null}
              validate={this.validate}
              ref={ref => this.password = ref}
              type='password'
            />
          </div>
        </div>
      </section>
    );
  }
}