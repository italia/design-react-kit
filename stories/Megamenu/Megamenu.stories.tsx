import React from 'react';
import { Megamenu, MegamenuItem } from '../../src';

export const Classico = () => {
  return (
    <Megamenu>
      <>
      <MegamenuItem />
      <MegamenuItem itemName='ciao'/>
      </>
    </Megamenu>
  );
};

export default {
  title: 'Componenti/Megamenu'
};