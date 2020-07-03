import React from 'react';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';


function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <div className="btn from-left" onClick={decoratedOnClick}>

        {children}
      
      </div>
    );
  }

  export default CustomToggle;
  