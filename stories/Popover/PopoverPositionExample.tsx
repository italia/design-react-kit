import React, { useState, useRef } from 'react';
import { Button, Popover, PopoverBody } from '../../src';

const PopoverPositionExample = () => {
  const [popoverOpen1, setPopoverOpen1] = useState(false);
  const [popoverOpen2, setPopoverOpen2] = useState(false);
  const [popoverOpen3, setPopoverOpen3] = useState(false);
  const [popoverOpen4, setPopoverOpen4] = useState(false);

  const targetRef1 = useRef(null);
  const targetRef2 = useRef(null);
  const targetRef3 = useRef(null);
  const targetRef4 = useRef(null);

  return (
    <div className='d-flex flex-column'>
      <div className='mx-auto align-self-center p-2'>
        <span>
          <Button
            className='mr-1'
            color='secondary'
            innerRef={targetRef1}
            onClick={() => {
              setPopoverOpen1(!popoverOpen1);
            }}
          >
            Popover {'a sinistra'}
          </Button>
          <Popover
            placement={'left'}
            isOpen={popoverOpen1}
            target={targetRef1}
            toggle={() => {
              setPopoverOpen1(!popoverOpen1);
            }}
          >
            <PopoverBody>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus
            </PopoverBody>
          </Popover>
        </span>
      </div>
      <div className='mx-auto align-self-center p-2'>
        <span>
          <Button
            className='mr-1'
            color='secondary'
            innerRef={targetRef2}
            onClick={() => {
              setPopoverOpen2(!popoverOpen2);
            }}
          >
            Popover {'a destra'}
          </Button>
          <Popover
            placement={'right'}
            isOpen={popoverOpen2}
            target={targetRef2}
            toggle={() => {
              setPopoverOpen2(!popoverOpen2);
            }}
          >
            <PopoverBody>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus
            </PopoverBody>
          </Popover>
        </span>
      </div>
      <div className='mx-auto align-self-center p-2'>
        <span>
          <Button
            className='mr-1'
            color='secondary'
            innerRef={targetRef3}
            onClick={() => {
              setPopoverOpen3(!popoverOpen3);
            }}
          >
            Popover {'in alto'}
          </Button>
          <Popover
            placement={'top'}
            isOpen={popoverOpen3}
            target={targetRef3}
            toggle={() => {
              setPopoverOpen3(!popoverOpen3);
            }}
          >
            <PopoverBody>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus
            </PopoverBody>
          </Popover>
        </span>
      </div>
      <div className='mx-auto align-self-center p-2'>
        <span>
          <Button
            className='mr-1'
            color='secondary'
            innerRef={targetRef4}
            onClick={() => {
              setPopoverOpen4(!popoverOpen4);
            }}
          >
            Popover {'in basso'}
          </Button>
          <Popover
            placement={'bottom'}
            isOpen={popoverOpen4}
            target={targetRef4}
            toggle={() => {
              setPopoverOpen4(!popoverOpen4);
            }}
          >
            <PopoverBody>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus
            </PopoverBody>
          </Popover>
        </span>
      </div>
    </div>
  );
};
PopoverPositionExample.story = {
  name: 'Le quattro direzioni'
};

export default PopoverPositionExample;
