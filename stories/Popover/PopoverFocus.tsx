import React, { useState, useRef } from 'react';
import { Popover, PopoverHeader, PopoverBody, Button } from '../../src';

const PopoverFocus = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const targetRef = useRef(null);

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };
  return (
    <div>
      <Button
        tabIndex={0}
        className='btn btn-lg btn-danger'
        color='danger'
        size='lg'
        tag='a'
        data-toggle='popover'
        data-trigger='focus'
        innerRef={targetRef}
      >
        Dismissible popover
      </Button>

      <Popover
        placement='right'
        trigger='focus'
        target={targetRef}
        isOpen={popoverOpen}
        toggle={togglePopover}
      >
        <PopoverHeader>Dismissible popover</PopoverHeader>
        <PopoverBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel
          finibus augue.
        </PopoverBody>
      </Popover>
    </div>
  );
};
PopoverFocus.story = {
  name: 'Dismiss al click successivo'
};
export default PopoverFocus;
