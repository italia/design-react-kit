import { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from 'react';
import {
  DropdownMenu,
  Icon,
  LinkList,
  LinkListItem,
  Toolbar,
  ToolbarDividerItem,
  ToolbarItem
} from '../../src';

const meta: Meta<typeof Toolbar> = {
  title: "Documentazione/Componenti/Toolbar",
  component: Toolbar
};

export default meta;

type Story = StoryObj<typeof Toolbar>;

export const Esempio: Story = {
  render: () => (
    <div className='toolbar-docs-style'>
      <Toolbar>
        <ToolbarItem label='messaggi' iconName='it-comment' active />
        <ToolbarItem label='immagini' iconName='it-camera' />
        <ToolbarItem label='documenti' iconName='it-file' />
        <ToolbarItem label='privacy' iconName='it-lock' />
        <ToolbarItem label='preferiti' iconName='it-star-outline' disabled />
      </Toolbar>
    </div>
  )
};

export const EsempioMedium: Story = {
  render: () => (
    <div className='toolbar-docs-style'>
      <Toolbar size={'medium'}>
        <ToolbarItem label='messaggi' iconName='it-comment' active />
        <ToolbarItem label='immagini' iconName='it-camera' />
        <ToolbarItem label='documenti' iconName='it-file' />
        <ToolbarItem label='privacy' iconName='it-lock' />
        <ToolbarItem label='preferiti' iconName='it-star-outline' disabled />
      </Toolbar>
    </div>
  )
};

export const EsempioSmall: Story = {
  render: () => (
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
  )
};

export const EsempioWithDivider: Story = {
  render: () => (
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
  )
};

export const EsempioConBadgeGrande: Story = {
  render: () => (
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
  )
};

export const EsempioConBadgeMedio: Story = {
  render: () => (
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
  )
};

export const EsempioConBadgePiccolo: Story = {
  render: () => (
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
  )
};

const EsempioConDropdownGrandeWithHooks = () => {
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
          isDropdownOpen={openFirst}
          onClick={() => toggleFirst(!openFirst)}
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
          isDropdownOpen={openSecond}
          onClick={() => toggleSecond(!openSecond)}
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
          isDropdownOpen={openThird}
          onClick={() => toggleThird(!openThird)}
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
          isDropdownOpen={openFourth}
          onClick={() => toggleFourth(!openFourth)}
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
          isDropdownOpen={openFifth}
          onClick={() => toggleFifth(!openFifth)}
          showMore
        >
          <DropdownMenu>
            <LinkList>
              <LinkListItem className='left-icon'>
                <Icon className='me-2' icon='it-link'></Icon>
                <span>Azione 1</span>
              </LinkListItem>
              <LinkListItem className='left-icon'>
                <Icon className='me-2' icon='it-mail'></Icon>
                <span>Azione 2</span>
              </LinkListItem>
              <LinkListItem className='left-icon'>
                <Icon className='me-2' icon='it-settings'></Icon>
                <span>Azione 3</span>
              </LinkListItem>
            </LinkList>
          </DropdownMenu>
        </ToolbarItem>
      </Toolbar>
    </div>
  );
}

export const EsempioConDropdownGrande: Story = {
  render: () => <EsempioConDropdownGrandeWithHooks />,
  parameters: {
    docs: {
      canvas: { sourceState: "none" },
    },
  },
};

const EsempioConDropdownMediaWithHooks = () => {
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
          isDropdownOpen={openFirst}
          onClick={() => toggleFirst(!openFirst)}
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
          isDropdownOpen={openSecond}
          onClick={() => toggleSecond(!openSecond)}
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
          isDropdownOpen={openThird}
          onClick={() => toggleThird(!openThird)}
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
          isDropdownOpen={openFourth}
          onClick={() => toggleFourth(!openFourth)}
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
          isDropdownOpen={openFifth}
          onClick={() => toggleFifth(!openFifth)}
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
          isDropdownOpen={openSixth}
          onClick={() => toggleSixth(!openSixth)}
          showMore
        >
          <DropdownMenu>
            <LinkList>
              <LinkListItem className='left-icon'>
                <Icon className='me-2' icon='it-link'></Icon>
                <span>Azione 1</span>
              </LinkListItem>
              <LinkListItem className='left-icon'>
                <Icon className='me-2' icon='it-mail'></Icon>
                <span>Azione 2</span>
              </LinkListItem>
              <LinkListItem className='left-icon'>
                <Icon className='me-2' icon='it-settings'></Icon>
                <span>Azione 3</span>
              </LinkListItem>
            </LinkList>
          </DropdownMenu>
        </ToolbarItem>
      </Toolbar>
    </div>
  );
}

export const EsempioConDropdownMedia: Story = {
  render: () => <EsempioConDropdownMediaWithHooks />,
  parameters: {
    docs: {
      canvas: { sourceState: "none" },
    },
  },
};

const EsempioConDropdownPiccolaWithHooks = () => {
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
          isDropdownOpen={openFirst}
          onClick={() => toggleFirst(!openFirst)}
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
          isDropdownOpen={openSecond}
          onClick={() => toggleSecond(!openSecond)}
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
          isDropdownOpen={openThird}
          onClick={() => toggleThird(!openThird)}
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
          isDropdownOpen={openFourth}
          onClick={() => toggleFourth(!openFourth)}
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
          isDropdownOpen={openFifth}
          onClick={() => toggleFifth(!openFifth)}
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
          isDropdownOpen={openSixth}
          onClick={() => toggleSixth(!openSixth)}
          showMore
        >
          <DropdownMenu>
            <LinkList>
              <LinkListItem className='left-icon'>
                <Icon className='me-2' icon='it-link'></Icon>
                <span>Azione 1</span>
              </LinkListItem>
              <LinkListItem className='left-icon'>
                <Icon className='me-2' icon='it-mail'></Icon>
                <span>Azione 2</span>
              </LinkListItem>
              <LinkListItem className='left-icon'>
                <Icon className='me-2' icon='it-settings'></Icon>
                <span>Azione 3</span>
              </LinkListItem>
            </LinkList>
          </DropdownMenu>
        </ToolbarItem>
      </Toolbar>
    </div>
  );
}
export const EsempioConDropdownPiccola: Story = {
  render: () => <EsempioConDropdownPiccolaWithHooks />,
  parameters: {
    docs: {
      canvas: { sourceState: "none" },
    },
  },
};

const EsempioVerticaleGrandeWithHooks = () => {
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
          isDropdownOpen={openFirst}
          onClick={() => toggleFirst(!openFirst)}
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
}

export const EsempioVerticaleGrande: Story = {
  render: () => <EsempioVerticaleGrandeWithHooks />,
  parameters: {
    docs: {
      canvas: { sourceState: "none" },
    },
  },
};

const EsempioVerticaleMediaWithHooks = () => {
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
          isDropdownOpen={openFirst}
          onClick={() => toggleFirst(!openFirst)}
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
}

export const EsempioVerticaleMedia: Story = {
  render: () => <EsempioVerticaleMediaWithHooks />,
  parameters: {
    docs: {
      canvas: { sourceState: "none" },
    },
  },
};

const EsempioVerticalePiccolaWithHooks = () => {
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
          isDropdownOpen={openFirst}
          onClick={() => toggleFirst(!openFirst)}
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
        <ToolbarItem label='preferiti' iconName='it-star-outline' />
        <ToolbarItem label='download' iconName='it-download' disabled />
      </Toolbar>
    </div>
  );
}

export const EsempioVerticalePiccola: Story = {
  render: () => <EsempioVerticalePiccolaWithHooks />,
  parameters: {
    docs: {
      canvas: { sourceState: "none" },
    },
  },
};
