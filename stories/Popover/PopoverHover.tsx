import React, { useState, useRef } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from '../../src';

const PopoverHover = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const targetRef = useRef(null);

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };
  return (
    <div>
      <Button
        color='secondary'
        data-container='body'
        data-toggle='popover'
        data-trigger='hover'
        data-placement='right'
        data-html='true'
        innerRef={targetRef}
        onMouseOver={() => setPopoverOpen(true)}
        onMouseOut={() => setPopoverOpen(false)}
      >
        Apertura in Hover
      </Button>

      <Popover
        placement='right'
        target={targetRef}
        isOpen={popoverOpen}
        toggle={togglePopover}
      >
        <PopoverHeader>Popover in Hover</PopoverHeader>
        <PopoverBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel
          finibus augue.
        </PopoverBody>
      </Popover>
    </div>
  );
};

PopoverHover.story = {
  name: 'Modalità Hover'
};
export default PopoverHover;
