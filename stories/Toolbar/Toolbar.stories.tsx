import React, { useState } from 'react';

import {
  Toolbar,
  ToolbarItem,
  ToolbarDividerItem,
  DropdownMenu,
  LinkList,
  LinkListItem,
  Icon
} from '../../src';

export const Esempio = () => (
  <div className='toolbar-docs-style'>
    <Toolbar>
      <ToolbarItem label='messaggi' iconName='it-comment' active />
      <ToolbarItem label='immagini' iconName='it-camera' />
      <ToolbarItem label='documenti' iconName='it-file' />
      <ToolbarItem label='privacy' iconName='it-lock' />
      <ToolbarItem label='preferiti' iconName='it-star-outline' disabled />
    </Toolbar>
  </div>
);

export const EsempioMedium = () => (
  <div className='toolbar-docs-style'>
    <Toolbar size={'medium'}>
      <ToolbarItem label='messaggi' iconName='it-comment' active />
      <ToolbarItem label='immagini' iconName='it-camera' />
      <ToolbarItem label='documenti' iconName='it-file' />
      <ToolbarItem label='privacy' iconName='it-lock' />
      <ToolbarItem label='preferiti' iconName='it-star-outline' disabled />
    </Toolbar>
  </div>
);

export const EsempioSmall = () => (
  <div className='toolbar-docs-style'>
    <Toolbar size={'small'}>
      <ToolbarItem label='messaggi' iconName='it-comment' active />
      <ToolbarItem label='immagini' iconName='it-camera' />
      <ToolbarItem label='documenti' iconName='it-file' />
      <ToolbarItem label='privacy' iconName='it-lock' />
      <ToolbarItem label='preferiti' iconName='it-star-outline' />
      <ToolbarItem label='downloads' iconName='it-download' disabled />
    </Toolbar>
  </div>
);

export const EsempioWithDivider = () => (
  <div className='toolbar-docs-style'>
    <Toolbar>
      <ToolbarItem label='messaggi' iconName='it-comment' active />
      <ToolbarItem label='immagini' iconName='it-camera' />
      <ToolbarDividerItem />
      <ToolbarItem label='documenti' iconName='it-file' />
      <ToolbarItem label='privacy' iconName='it-lock' />
      <ToolbarDividerItem />
      <ToolbarItem label='preferiti' iconName='it-star-outline' disabled />
    </Toolbar>
  </div>
);

export const EsempioConBadgeGrande = () => (
  <div className='toolbar-docs-style'>
    <Toolbar>
      <ToolbarItem
        label='messaggi'
        iconName='it-comment'
        active
        badge={{
          value: 1,
          label: 'da leggere',
          srText: `c'è un messaggio da leggere`
        }}
      />
      <ToolbarItem
        label='documenti'
        iconName='it-file'
        badge={{
          value: 42,
          label: 'da esaminare',
          srText: `ci sono 42 documenti da esaminare`
        }}
      />
      <ToolbarItem label='immagini' iconName='it-camera' />
      <ToolbarItem label='privacy' iconName='it-lock' />
      <ToolbarItem label='preferiti' iconName='it-star-outline' disabled />
    </Toolbar>
  </div>
);

export const EsempioConBadgeMedio = () => (
  <div className='toolbar-docs-style'>
    <Toolbar size='medium'>
      <ToolbarItem
        label='messaggi'
        iconName='it-comment'
        active
        badge={{
          value: 1,
          label: 'da leggere',
          srText: `c'è un messaggio da leggere`
        }}
      />
      <ToolbarItem
        label='documenti'
        iconName='it-file'
        badge={{
          value: 42,
          label: 'da esaminare',
          srText: `ci sono 42 documenti da esaminare`
        }}
      />
      <ToolbarItem label='immagini' iconName='it-camera' />
      <ToolbarItem label='privacy' iconName='it-lock' />
      <ToolbarItem label='preferiti' iconName='it-star-outline' disabled />
    </Toolbar>
  </div>
);

export const EsempioConBadgePiccolo = () => (
  <div className='toolbar-docs-style'>
    <Toolbar size='small'>
      <ToolbarItem
        label='messaggi'
        iconName='it-comment'
        active
        badge={{
          value: 1,
          label: 'da leggere',
          srText: `c'è un messaggio da leggere`
        }}
      />
      <ToolbarItem
        label='documenti'
        iconName='it-file'
        badge={{
          value: 42,
          label: 'da esaminare',
          srText: `ci sono 42 documenti da esaminare`
        }}
      />
      <ToolbarItem label='immagini' iconName='it-camera' />
      <ToolbarItem label='privacy' iconName='it-lock' />
      <ToolbarItem label='preferiti' iconName='it-star-outline' disabled />
    </Toolbar>
  </div>
);

export const EsempioConDropdownGrande = () => {
  const [openFirst, toggleFirst] = useState(false);
  const [openSecond, toggleSecond] = useState(false);
  const [openThird, toggleThird] = useState(false);
  const [openFourth, toggleFourth] = useState(false);
  const [openFifth, toggleFifth] = useState(false);
  return (
    <div className='toolbar-docs-style'>
      <Toolbar size='large'>
        <ToolbarItem
          label='messaggi'
          iconName='it-comment'
          active
          badge={{
            value: 1,
            label: 'da leggere',
            srText: `c'è un messaggio da leggere`
          }}
          dropdown
          dropdownProps={{
            isOpen: openFirst,
            toggle: () => toggleFirst(!openFirst)
          }}
        >
          <DropdownMenu>
            <LinkList>
              <LinkListItem>Azione 1</LinkListItem>
              <LinkListItem>Azione 2</LinkListItem>
              <LinkListItem>Azione 3</LinkListItem>
            </LinkList>
          </DropdownMenu>
        </ToolbarItem>
        <ToolbarItem
          label='immagini'
          iconName='it-camera'
          badge={{
            value: 42,
            label: 'da visualizzare',
            srText: `ci sono 42 immagini da visualizzare`
          }}
          dropdown
          dropdownProps={{
            isOpen: openSecond,
            toggle: () => toggleSecond(!openSecond)
          }}
        >
          <DropdownMenu>
            <LinkList>
              <LinkListItem>Azione 1</LinkListItem>
              <LinkListItem>Azione 2</LinkListItem>
              <LinkListItem>Azione 3</LinkListItem>
            </LinkList>
          </DropdownMenu>
        </ToolbarItem>
        <ToolbarItem
          label='documenti'
          iconName='it-file'
          dropdown
          dropdownProps={{
            isOpen: openThird,
            toggle: () => toggleThird(!openThird)
          }}
        >
          <DropdownMenu>
            <LinkList>
              <LinkListItem>Azione 1</LinkListItem>
              <LinkListItem>Azione 2</LinkListItem>
              <LinkListItem>Azione 3</LinkListItem>
            </LinkList>
          </DropdownMenu>
        </ToolbarItem>
        <ToolbarItem
          label='privacy'
          iconName='it-lock'
          disabled
          dropdown
          dropdownProps={{
            isOpen: openFourth,
            toggle: () => toggleFourth(!openFourth)
          }}
        >
          <DropdownMenu>
            <LinkList>
              <LinkListItem>Azione 1</LinkListItem>
              <LinkListItem>Azione 2</LinkListItem>
              <LinkListItem>Azione 3</LinkListItem>
            </LinkList>
          </DropdownMenu>
        </ToolbarItem>
        <ToolbarItem
          label='altro'
          iconName='it-more-actions'
          dropdown
          dropdownProps={{
            isOpen: openFifth,
            toggle: () => toggleFifth(!openFifth)
          }}
          showMore
        >
          <DropdownMenu>
            <LinkList>
              <LinkListItem className='left-icon'>
                <Icon className='mr-2' icon='it-link'></Icon>
                <span>Azione 1</span>
              </LinkListItem>
              <LinkListItem className='left-icon'>
                <Icon className='mr-2' icon='it-mail'></Icon>
                <span>Azione 2</span>
              </LinkListItem>
              <LinkListItem className='left-icon'>
                <Icon className='mr-2' icon='it-settings'></Icon>
                <span>Azione 3</span>
              </LinkListItem>
            </LinkList>
          </DropdownMenu>
        </ToolbarItem>
      </Toolbar>
    </div>
  );
};

export const EsempioConDropdownMedia = () => {
  const [openFirst, toggleFirst] = useState(false);
  const [openSecond, toggleSecond] = useState(false);
  const [openThird, toggleThird] = useState(false);
  const [openFourth, toggleFourth] = useState(false);
  const [openFifth, toggleFifth] = useState(false);
  const [openSixth, toggleSixth] = useState(false);
  return (
    <div className='toolbar-docs-style'>
      <Toolbar size='medium'>
        <ToolbarItem
          label='messaggi'
          iconName='it-comment'
          active
          badge={{
            value: 1,
            label: 'da leggere',
            srText: `c'è un messaggio da leggere`
          }}
          dropdown
          dropdownProps={{
            isOpen: openFirst,
            toggle: () => toggleFirst(!openFirst)
          }}
        >
          <DropdownMenu>
            <LinkList>
              <LinkListItem>Azione 1</LinkListItem>
              <LinkListItem>Azione 2</LinkListItem>
              <LinkListItem>Azione 3</LinkListItem>
            </LinkList>
          </DropdownMenu>
        </ToolbarItem>
        <ToolbarItem
          label='immagini'
          iconName='it-camera'
          badge={{
            value: 42,
            label: 'da visualizzare',
            srText: `ci sono 42 immagini da visualizzare`
          }}
          dropdown
          dropdownProps={{
            isOpen: openSecond,
            toggle: () => toggleSecond(!openSecond)
          }}
        >
          <DropdownMenu>
            <LinkList>
              <LinkListItem>Azione 1</LinkListItem>
              <LinkListItem>Azione 2</LinkListItem>
              <LinkListItem>Azione 3</LinkListItem>
            </LinkList>
          </DropdownMenu>
        </ToolbarItem>
        <ToolbarItem
          label='documenti'
          iconName='it-file'
          dropdown
          dropdownProps={{
            isOpen: openThird,
            toggle: () => toggleThird(!openThird)
          }}
        >
          <DropdownMenu>
            <LinkList>
              <LinkListItem>Azione 1</LinkListItem>
              <LinkListItem>Azione 2</LinkListItem>
              <LinkListItem>Azione 3</LinkListItem>
            </LinkList>
          </DropdownMenu>
        </ToolbarItem>
        <ToolbarItem
          label='privacy'
          iconName='it-lock'
          dropdown
          dropdownProps={{
            isOpen: openFifth,
            toggle: () => toggleFifth(!openFifth)
          }}
        >
          <DropdownMenu>
            <LinkList>
              <LinkListItem>Azione 1</LinkListItem>
              <LinkListItem>Azione 2</LinkListItem>
              <LinkListItem>Azione 3</LinkListItem>
            </LinkList>
          </DropdownMenu>
        </ToolbarItem>
        <ToolbarItem
          label='preferiti'
          iconName='it-star-outline'
          disabled
          dropdown
          dropdownProps={{
            isOpen: openFourth,
            toggle: () => toggleFourth(!openFourth)
          }}
        >
          <DropdownMenu>
            <LinkList>
              <LinkListItem>Azione 1</LinkListItem>
              <LinkListItem>Azione 2</LinkListItem>
              <LinkListItem>Azione 3</LinkListItem>
            </LinkList>
          </DropdownMenu>
        </ToolbarItem>
        <ToolbarItem
          label='altro'
          iconName='it-more-actions'
          dropdown
          dropdownProps={{
            isOpen: openSixth,
            toggle: () => toggleSixth(!openSixth)
          }}
          showMore
        >
          <DropdownMenu>
            <LinkList>
              <LinkListItem className='left-icon'>
                <Icon className='mr-2' icon='it-link'></Icon>
                <span>Azione 1</span>
              </LinkListItem>
              <LinkListItem className='left-icon'>
                <Icon className='mr-2' icon='it-mail'></Icon>
                <span>Azione 2</span>
              </LinkListItem>
              <LinkListItem className='left-icon'>
                <Icon className='mr-2' icon='it-settings'></Icon>
                <span>Azione 3</span>
              </LinkListItem>
            </LinkList>
          </DropdownMenu>
        </ToolbarItem>
      </Toolbar>
    </div>
  );
};

export const EsempioConDropdownPiccola = () => {
  const [openFirst, toggleFirst] = useState(false);
  const [openSecond, toggleSecond] = useState(false);
  const [openThird, toggleThird] = useState(false);
  const [openFourth, toggleFourth] = useState(false);
  const [openFifth, toggleFifth] = useState(false);
  const [openSixth, toggleSixth] = useState(false);
  return (
    <div className='toolbar-docs-style'>
      <Toolbar size='small'>
        <ToolbarItem
          label='messaggi'
          iconName='it-comment'
          active
          badge={{
            value: 1,
            label: 'da leggere',
            srText: `c'è un messaggio da leggere`
          }}
          dropdown
          dropdownProps={{
            isOpen: openFirst,
            toggle: () => toggleFirst(!openFirst)
          }}
        >
          <DropdownMenu>
            <LinkList>
              <LinkListItem>Azione 1</LinkListItem>
              <LinkListItem>Azione 2</LinkListItem>
              <LinkListItem>Azione 3</LinkListItem>
            </LinkList>
          </DropdownMenu>
        </ToolbarItem>
        <ToolbarItem
          label='immagini'
          iconName='it-camera'
          badge={{
            value: 42,
            label: 'da visualizzare',
            srText: `ci sono 42 immagini da visualizzare`
          }}
          dropdown
          dropdownProps={{
            isOpen: openSecond,
            toggle: () => toggleSecond(!openSecond)
          }}
        >
          <DropdownMenu>
            <LinkList>
              <LinkListItem>Azione 1</LinkListItem>
              <LinkListItem>Azione 2</LinkListItem>
              <LinkListItem>Azione 3</LinkListItem>
            </LinkList>
          </DropdownMenu>
        </ToolbarItem>
        <ToolbarItem
          label='documenti'
          iconName='it-file'
          dropdown
          dropdownProps={{
            isOpen: openThird,
            toggle: () => toggleThird(!openThird)
          }}
        >
          <DropdownMenu>
            <LinkList>
              <LinkListItem>Azione 1</LinkListItem>
              <LinkListItem>Azione 2</LinkListItem>
              <LinkListItem>Azione 3</LinkListItem>
            </LinkList>
          </DropdownMenu>
        </ToolbarItem>
        <ToolbarItem
          label='privacy'
          iconName='it-lock'
          dropdown
          dropdownProps={{
            isOpen: openFifth,
            toggle: () => toggleFifth(!openFifth)
          }}
        >
          <DropdownMenu>
            <LinkList>
              <LinkListItem>Azione 1</LinkListItem>
              <LinkListItem>Azione 2</LinkListItem>
              <LinkListItem>Azione 3</LinkListItem>
            </LinkList>
          </DropdownMenu>
        </ToolbarItem>
        <ToolbarItem
          label='preferiti'
          iconName='it-star-outline'
          disabled
          dropdown
          dropdownProps={{
            isOpen: openFourth,
            toggle: () => toggleFourth(!openFourth)
          }}
        >
          <DropdownMenu>
            <LinkList>
              <LinkListItem>Azione 1</LinkListItem>
              <LinkListItem>Azione 2</LinkListItem>
              <LinkListItem>Azione 3</LinkListItem>
            </LinkList>
          </DropdownMenu>
        </ToolbarItem>
        <ToolbarItem
          label='altro'
          iconName='it-more-actions'
          dropdown
          dropdownProps={{
            isOpen: openSixth,
            toggle: () => toggleSixth(!openSixth)
          }}
          showMore
        >
          <DropdownMenu>
            <LinkList>
              <LinkListItem className='left-icon'>
                <Icon className='mr-2' icon='it-link'></Icon>
                <span>Azione 1</span>
              </LinkListItem>
              <LinkListItem className='left-icon'>
                <Icon className='mr-2' icon='it-mail'></Icon>
                <span>Azione 2</span>
              </LinkListItem>
              <LinkListItem className='left-icon'>
                <Icon className='mr-2' icon='it-settings'></Icon>
                <span>Azione 3</span>
              </LinkListItem>
            </LinkList>
          </DropdownMenu>
        </ToolbarItem>
      </Toolbar>
    </div>
  );
};

export const EsempioVerticaleGrande = () => {
  const [openFirst, toggleFirst] = useState(false);
  return (
    <div className='toolbar-docs-style'>
      <Toolbar vertical>
        <ToolbarItem
          label='messaggi'
          iconName='it-comment'
          active
          badge={{
            value: 1,
            label: 'da leggere',
            srText: `c'è un messaggio da leggere`
          }}
        />
        <ToolbarItem
          label='immagini'
          iconName='it-camera'
          badge={{
            value: 42,
            label: 'da visualizzare',
            srText: `ci sono 42 immagini da visualizzare`
          }}
          dropdown
          dropdownProps={{
            isOpen: openFirst,
            toggle: () => toggleFirst(!openFirst)
          }}
        >
          <DropdownMenu>
            <LinkList>
              <LinkListItem>Azione 1</LinkListItem>
              <LinkListItem>Azione 2</LinkListItem>
              <LinkListItem>Azione 3</LinkListItem>
            </LinkList>
          </DropdownMenu>
        </ToolbarItem>
        <ToolbarDividerItem />
        <ToolbarItem label='immagini' iconName='it-camera' />
        <ToolbarItem label='privacy' iconName='it-lock' />
        <ToolbarItem label='preferiti' iconName='it-star-outline' disabled />
      </Toolbar>
    </div>
  );
};

export const EsempioVerticaleMedia = () => {
  const [openFirst, toggleFirst] = useState(false);
  return (
    <div className='toolbar-docs-style'>
      <Toolbar vertical size='medium'>
        <ToolbarItem
          label='messaggi'
          iconName='it-comment'
          active
          badge={{
            value: 1,
            label: 'da leggere',
            srText: `c'è un messaggio da leggere`
          }}
        />
        <ToolbarItem
          label='immagini'
          iconName='it-camera'
          badge={{
            value: 42,
            label: 'da visualizzare',
            srText: `ci sono 42 immagini da visualizzare`
          }}
          dropdown
          dropdownProps={{
            isOpen: openFirst,
            toggle: () => toggleFirst(!openFirst)
          }}
        >
          <DropdownMenu>
            <LinkList>
              <LinkListItem>Azione 1</LinkListItem>
              <LinkListItem>Azione 2</LinkListItem>
              <LinkListItem>Azione 3</LinkListItem>
            </LinkList>
          </DropdownMenu>
        </ToolbarItem>
        <ToolbarDividerItem />
        <ToolbarItem label='immagini' iconName='it-camera' />
        <ToolbarItem label='privacy' iconName='it-lock' />
        <ToolbarItem label='preferiti' iconName='it-star-outline' disabled />
      </Toolbar>
    </div>
  );
};

export const EsempioVerticalePiccola = () => {
  const [openFirst, toggleFirst] = useState(false);
  return (
    <div className='toolbar-docs-style'>
      <Toolbar vertical size='small'>
        <ToolbarItem
          label='messaggi'
          iconName='it-comment'
          active
          badge={{
            value: 1,
            label: 'da leggere',
            srText: `c'è un messaggio da leggere`
          }}
        />
        <ToolbarItem
          label='immagini'
          iconName='it-camera'
          badge={{
            value: 42,
            label: 'da visualizzare',
            srText: `ci sono 42 immagini da visualizzare`
          }}
          dropdown
          dropdownProps={{
            isOpen: openFirst,
            toggle: () => toggleFirst(!openFirst)
          }}
        >
          <DropdownMenu>
            <LinkList>
              <LinkListItem>Azione 1</LinkListItem>
              <LinkListItem>Azione 2</LinkListItem>
              <LinkListItem>Azione 3</LinkListItem>
            </LinkList>
          </DropdownMenu>
        </ToolbarItem>
        <ToolbarDividerItem />
        <ToolbarItem label='immagini' iconName='it-camera' />
        <ToolbarItem label='privacy' iconName='it-lock' />
        <ToolbarItem label='preferiti' iconName='it-star-outline' disabled />
      </Toolbar>
    </div>
  );
};
export default {
  title: 'Componenti/Toolbar'
};
