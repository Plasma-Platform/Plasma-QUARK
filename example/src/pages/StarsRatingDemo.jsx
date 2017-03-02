import React from 'react';
import StarsRating from '../../../lib/StarsRating';


export default class StarsRatingDemo extends React.Component {
  handleBlur = () => {
    this.ta1.input.setValidationStatus(false, 'Test notification');
  };

  render () {
    return (
      <section>

        <h1 className="TMUI__TypographyHeader--4"> Stars </h1>
        <div className="flex spacing-outer-bottom-20">
          <div className="half-width spacing-right-20">
            <StarsRating
              rating={3}
            /><br />
            <StarsRating
              rating={3.32}
              checkStars={(checked)=>{alert(checked);}}
              hovered={true}
            />
          </div>
        </div>
        <a target="_blank" href="http://confluence.devoffice.com/display/DEVDOC/Text+Area">Text Area in Confluence</a>
      </section>
    );
  }
}
