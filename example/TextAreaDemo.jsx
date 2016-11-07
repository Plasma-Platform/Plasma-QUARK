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
              label='Text area type = TA1'
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
            />
            <TextAreas.TA2
              label='Text area type = TA2'
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
            />
            <TextAreas.TA3
              label='Text area type = TA3'
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
            />
            <TextAreas.TA4
              label='Text area type = TA4'
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
            />
            <TextAreas.TA5
              label='Text area type = TA5'
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
              maxWidth="300"
            />
            <TextAreas.TA6
              label='Text area type = TA6'
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
            />
            <TextAreas.TA7
              label='Text area type = TA7'
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
            />
            <TextAreas.TA8
              label='Text area type = TA8'
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
            />
          </div>
          <div className="half-width spacing-left-20">
            <TextAreas.TA1
              disabled
              label='Disabled TA1'
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
            />
            <TextAreas.TA2
              disabled
              label='Disabled = TA2'
              type = 'search'
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
            />
            <TextAreas.TA3
              disabled
              label='Disabled TA3'
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
            />
            <TextAreas.TA4
              disabled
              label='Disabled TA4'
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
            />
            <TextAreas.TA5
              disabled
              label='Disabled TA5'
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
            />
            <TextAreas.TA6
              disabled
              label='Disabled TA6'
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
            />
            <TextAreas.TA7
              disabled
              label='Disabled TA7'
              notificationText='dfkhnvkjdfnjk djkfdfjkndfkjgndfkj dfjgkndfkjgndfkjgndfjkg dfgkjndfkjgndf gjk'
              notificationType='N2F'
            />
            <TextAreas.TA8
              disabled
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