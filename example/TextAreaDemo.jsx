import React from 'react';
import TextAreas from '../lib/textareas';

export default class TextAreaDemo extends React.Component {
  constructor (props, context) {
    super(props, context);
  }

  render () {
    return (
      <article>
        <h1 className="h2"> Text Area demo page </h1>
        <div className="flex">
          <div className="half-width spacing-right-20">
            <TextAreas.TA1
              className="spacing-outer-bottom-20"
              label='Text area type = TA1'
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
            />
            <TextAreas.TA2
              className="spacing-outer-bottom-20"
              label='Text area type = TA2'
              type = 'search'
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
            />
            <TextAreas.TA3
              className="spacing-outer-bottom-20"
              label='Text area type = TA3'
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
            />
            <TextAreas.TA4
              className="spacing-outer-bottom-20"
              label='Text area type = TA4'
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
            />
            <TextAreas.TA5
              className="spacing-outer-bottom-20"
              label='Text area type = TA5'
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
              maxWidth="300"
            />
            <TextAreas.TA6
              className="spacing-outer-bottom-20"
              label='Text area type = TA6'
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
              value = "lorem dfkhnvkjdfnjk djkfdfjkndfkjgndfkj"
              maxLength = {10}
            />
            <TextAreas.TA7
              className="spacing-outer-bottom-20"
              label='Text area type = TA7'
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
            />
            <TextAreas.TA8
              className="spacing-outer-bottom-20"
              label='Text area type = TA8'
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
            />
          </div>
          <div className="half-width spacing-left-20">
            <TextAreas.TA1
              disabled
              className="spacing-outer-bottom-20"
              label='Disabled TA1'
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
            />
            <TextAreas.TA2
              disabled
              className="spacing-outer-bottom-20"
              label='Disabled = TA2'
              type = 'search'
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
            />
            <TextAreas.TA3
              disabled
              className="spacing-outer-bottom-20"
              label='Disabled TA3'
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
            />
            <TextAreas.TA4
              disabled
              className="spacing-outer-bottom-20"
              label='Disabled TA4'
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
            />
            <TextAreas.TA5
              disabled
              className="spacing-outer-bottom-20"
              label='Disabled TA5'
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
            />
            <TextAreas.TA6
              disabled
              className="spacing-outer-bottom-20"
              label='Disabled TA6'
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
            />
            <TextAreas.TA7
              disabled
              className="spacing-outer-bottom-20"
              label='Disabled TA7'
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
            />
            <TextAreas.TA8
              disabled
              className="spacing-outer-bottom-20"
              label='Disabled TA8'
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
            />
          </div>
        </div>
      </article>
    );
  }
}