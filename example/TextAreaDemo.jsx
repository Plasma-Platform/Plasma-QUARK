import React from 'react';
import TextAreas from '../lib/textareas';

export default class TextAreaDemo extends React.Component {
  render () {
    return (
      <section>
        <h1 className="TMUI__TypographyHeader--4"> Text Areas </h1>
        <div className="flex">
          <div className="half-width spacing-right-20">
            <TextAreas.TA1
              className="spacing-outer-bottom-20"
              label='Text area type = TA1'
            />
            <TextAreas.TA2
              className="spacing-outer-bottom-20"
              label='Text area type = TA2'
              type = 'search'
              customIcon = 'icon-man'
            />
            <TextAreas.TA3
              className="spacing-outer-bottom-20"
              label='Text area type = TA3'
            />
            <TextAreas.TA4
              className="spacing-outer-bottom-20"
              label='Text area type = TA4'
            />
            <TextAreas.TA5
              className="spacing-outer-bottom-20"
              label='Text area type = TA5'
              maxLength={300}
            />
            <TextAreas.TA6
              className="spacing-outer-bottom-20"
              label='Text area type = TA6'
              value = "lorem dfkhnvkjdfnjk djkfdfjkndfkjgndfkj"
              maxLength = {10}
            />
            <TextAreas.TA7
              className="spacing-outer-bottom-20"
              label='Text area type = TA7'
            />
            <TextAreas.TA8
              className="spacing-outer-bottom-20"
              label='Text area type = TA8'
            />
          </div>
          <div className="half-width spacing-left-20">
            <TextAreas.TA1
              disabled
              className="spacing-outer-bottom-20"
              label='Disabled TA1'
            />
            <TextAreas.TA2
              disabled
              className="spacing-outer-bottom-20"
              label='Disabled = TA2'
              type = 'search'
            />
            <TextAreas.TA3
              disabled
              className="spacing-outer-bottom-20"
              label='Disabled TA3'
            />
            <TextAreas.TA4
              disabled
              className="spacing-outer-bottom-20"
              label='Disabled TA4'
            />
            <TextAreas.TA5
              disabled
              className="spacing-outer-bottom-20"
              label='Disabled TA5'
            />
            <TextAreas.TA6
              disabled
              className="spacing-outer-bottom-20"
              label='Disabled TA6'
            />
            <TextAreas.TA7
              disabled
              className="spacing-outer-bottom-20"
              label='Disabled TA7'
            />
            <TextAreas.TA8
              disabled
              className="spacing-outer-bottom-20"
              label='Disabled TA8'
            />
          </div>
        </div>
      </section>
    );
  }
}