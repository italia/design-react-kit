import React, { useRef } from 'react';
import {
  AvatarIcon,
  AvatarContainer,
  AvatarWrapper,
  AvatarExtraText,
  UncontrolledTooltip,
  Icon,
  AvatarPresence, AvatarStatus, LinkList, LinkListItem, AvatarGroupContainer, Dropdown, DropdownToggle, DropdownMenu
} from "../../src";

export default {
  title: 'Componenti/Avatar'
};

export const AvatarWithImage = () => (
  <AvatarContainer>
    <AvatarIcon size='xs'>
      <img src='https://randomuser.me/api/portraits/men/46.jpg' alt='Mario Rossi' />
    </AvatarIcon>
    <AvatarIcon size='sm'>
      <img src='https://randomuser.me/api/portraits/women/44.jpg' alt='Luisa Neri' />
    </AvatarIcon>
    <AvatarIcon>
      <img src='https://randomuser.me/api/portraits/men/43.jpg' alt='Gioacchino Romani'></img>
    </AvatarIcon>
    <AvatarIcon size='lg'>
      <img src='https://randomuser.me/api/portraits/women/41.jpg' alt='Anna Barbieri' />
    </AvatarIcon>
    <AvatarIcon size='xl'>
      <img src='https://randomuser.me/api/portraits/men/33.jpg' alt='Carlo Poli' />
    </AvatarIcon>
    <AvatarIcon size='xxl'>
      <img src='https://randomuser.me/api/portraits/women/24.jpg' alt='Giovanna Ferrero' />
    </AvatarIcon>
  </AvatarContainer>
);

AvatarWithImage.storyName = 'Avatar with image';

export const AvatarWithText = () => (
  <AvatarContainer>
    <AvatarIcon size='xs'>
      <p aria-hidden='true'>M</p>
      <span className='visually-hidden'>Mario Rossi</span>
    </AvatarIcon>
    <AvatarIcon color='primary' size='sm'>
      <p aria-hidden='true'>M</p>
      <span className='visually-hidden'>Mario Rossi</span>
    </AvatarIcon>
    <AvatarIcon color='secondary'>
      <p aria-hidden='true'>MR</p>
      <span className='visually-hidden'>Mario Rossi</span>
    </AvatarIcon>
    <AvatarIcon color='green' size='lg'>
      <p aria-hidden='true'>MR</p>
      <span className='visually-hidden'>Mario Rossi</span>
    </AvatarIcon>
    <AvatarIcon color='orange' size='xl'>
      <p aria-hidden='true'>MR</p>
      <span className='visually-hidden'>Mario Rossi</span>
    </AvatarIcon>
    <AvatarIcon color='red' size='xxl'>
      <p aria-hidden='true'>MR</p>
      <span className='visually-hidden'>Mario Rossi</span>
    </AvatarIcon>
  </AvatarContainer>
);

AvatarWithText.storyName = 'Avatar with text';

export const AvatarWithIcon = () => (
  <AvatarContainer>
    <AvatarIcon size='xs'>
      <Icon icon='it-search' />
    </AvatarIcon>
    <AvatarIcon size='sm'>
      <Icon icon='it-search' />
    </AvatarIcon>
    <AvatarIcon>
      <Icon icon='it-search' />
    </AvatarIcon>
    <AvatarIcon size='lg'>
      <Icon icon='it-search' />
    </AvatarIcon>
    <AvatarIcon size='xl'>
      <Icon icon='it-search' />
    </AvatarIcon>
    <AvatarIcon size='xxl'>
      <Icon icon='it-search' />
    </AvatarIcon>
  </AvatarContainer>
);

AvatarWithIcon.storyName = 'Avatar with icon';

export const AvatarLink = () => (
  <AvatarContainer>
    <AvatarIcon size='xl' href='#'>
      <img src='https://randomuser.me/api/portraits/women/41.jpg' alt='Anna Barbieri'></img>
    </AvatarIcon>
    <AvatarIcon size='xl' color='red' href='#'>
      <p aria-hidden='true'>MR</p>
      <span className='visually-hidden'>Mario Rossi</span>
    </AvatarIcon>
    <AvatarIcon size='xl'>
      <Icon icon='it-search' onClick={() => console.log('Click')} />
    </AvatarIcon>
  </AvatarContainer>
);

AvatarLink.storyName = 'Avatar link';

export const AvatarLinkWithTooltip = () => {
  const withImageRef = useRef(null);
  const withTextRef = useRef(null);
  const withIconRef = useRef(null);
  return (
    <AvatarContainer>
      <AvatarIcon size='xl' href='#' innerRef={withImageRef}>
        <UncontrolledTooltip placement='left' target={withImageRef}>
          Anna Barbieri
          <br />
          <i>Administrator</i>
        </UncontrolledTooltip>
        <img src='https://randomuser.me/api/portraits/women/41.jpg' alt='Anna Barbieri'></img>
      </AvatarIcon>
      <AvatarIcon size='xl' color='red' href='#' innerRef={withTextRef}>
        <UncontrolledTooltip placement='top' target={withTextRef}>
          Mario Rossi
          <br />
          <i>Editor</i>
        </UncontrolledTooltip>
        <p aria-hidden='true'>MR</p>
        <span className='visually-hidden'>Mario Rossi</span>
      </AvatarIcon>
      <AvatarIcon size='xl' href='#' innerRef={withIconRef}>
        <Icon icon='it-search' />
        <UncontrolledTooltip placement='right' target={withIconRef}>
          Search
          <br />
          <i>News Archive</i>
        </UncontrolledTooltip>
      </AvatarIcon>
    </AvatarContainer>
  );
};

AvatarLinkWithTooltip.storyName = 'Avatar link with Tooltip';

export const AvatarWithAdditionalText = () => {
  return (
    <AvatarContainer>
      <AvatarWrapper extra='text'>
        <AvatarIcon size='xl'>
          <img src='https://randomuser.me/api/portraits/men/33.jpg' alt='Mario Rossi' />
        </AvatarIcon>
        <AvatarExtraText>
          <h4>
            <a href='#'>Mario Rossi</a>
          </h4>
          <time dateTime='2018-09-15'>15 Set 2018</time>
        </AvatarExtraText>
      </AvatarWrapper>
      <AvatarWrapper extra='text'>
        <AvatarIcon size='xl'>
          <img src='https://randomuser.me/api/portraits/women/33.jpg' alt='Guilia Neri' />
        </AvatarIcon>
        <AvatarExtraText>
          <h4>Guilia Neri</h4>
          <p>Lorem ipsum dolor</p>
        </AvatarExtraText>
      </AvatarWrapper>
      <AvatarWrapper extra='text'>
        <AvatarIcon size='xl'>
          <img src='https://randomuser.me/api/portraits/men/15.jpg' alt='Michele Dotti' />
        </AvatarIcon>
        <AvatarExtraText>
          <h4>
            <a href='#'>Micehele Dotti</a>
          </h4>
          <time dateTime='2018-09-15'>15 Mag 2018</time>
        </AvatarExtraText>
      </AvatarWrapper>
    </AvatarContainer>
  );
};

AvatarWithAdditionalText.storyName = 'Avatar with additional text';


export const UserPresence = () => {
  return (
    <div>
      <AvatarContainer>
        <AvatarWrapper>
          <AvatarIcon size='xl'>
            <img src='https://randomuser.me/api/portraits/men/43.jpg' alt='Mario Rossi' />
            <AvatarPresence presence='active'>
              <span className='visually-hidden'>Presenza:attivo</span>
            </AvatarPresence>
          </AvatarIcon>
        </AvatarWrapper>
        <AvatarWrapper>
          <AvatarIcon size='xl'>
            <img src='https://randomuser.me/api/portraits/women/41.jpg' alt='Luisa Neri' />
            <AvatarPresence presence='busy'>
              <Icon color='white' icon='it-minus' />
              <span className='visually-hidden'>Presenza: non disponibile</span>
            </AvatarPresence>
          </AvatarIcon>
        </AvatarWrapper>
        <AvatarWrapper>
          <AvatarIcon size='xl'>
            <img src='https://randomuser.me/api/portraits/men/33.jpg' alt='Gioacchino Romani' />
            <AvatarPresence presence='hidden'>
              <span className='visually-hidden'>Presenza: invisible</span>
            </AvatarPresence>
          </AvatarIcon>
        </AvatarWrapper>
      </AvatarContainer>
      <AvatarContainer>
        <AvatarWrapper>
          <AvatarIcon size='md'>
            <img src='https://randomuser.me/api/portraits/women/32.jpg' alt='Ludovica Galli' />
            <AvatarPresence presence='busy'>
              <Icon color='white' icon='it-minus' />
              <span className='visually-hidden'>Presenza: non disponibile</span>
            </AvatarPresence>
          </AvatarIcon>
        </AvatarWrapper>
        <AvatarWrapper>
          <AvatarIcon size='lg'>
            <img src='https://randomuser.me/api/portraits/women/32.jpg' alt='Ludovica Galli' />
            <AvatarPresence presence='busy'>
              <Icon color='white' icon='it-minus' />
              <span className='visually-hidden'>Presenza: non disponibile</span>
            </AvatarPresence>
          </AvatarIcon>
        </AvatarWrapper>
        <AvatarWrapper>
          <AvatarIcon size='xl'>
            <img src='https://randomuser.me/api/portraits/women/32.jpg' alt='Ludovica Galli' />
            <AvatarPresence presence='busy'>
              <Icon color='white' icon='it-minus' />
              <span className='visually-hidden'>Presenza: non disponibile</span>
            </AvatarPresence>
          </AvatarIcon>
        </AvatarWrapper>
        <AvatarWrapper>
          <AvatarIcon size='xxl'>
            <img src='https://randomuser.me/api/portraits/women/32.jpg' alt='Ludovica Galli' />
            <AvatarPresence presence='busy'>
              <Icon color='white' icon='it-minus' />
              <span className='visually-hidden'>Presenza: non disponibile</span>
            </AvatarPresence>
          </AvatarIcon>
        </AvatarWrapper>
      </AvatarContainer>
    </div>
  );
};

export const UserStatus = () => {
  return (
    <div>
      <AvatarContainer>
        <AvatarWrapper>
          <AvatarIcon size='xl'>
            <img src='https://randomuser.me/api/portraits/men/43.jpg' alt='Mario Rossi' />
            <AvatarStatus status='approved'>
              <Icon color='white' icon='it-check' />
              <span className='visually-hidden'>Stato: approvato</span>
            </AvatarStatus>
          </AvatarIcon>
        </AvatarWrapper>
        <AvatarWrapper>
          <AvatarIcon size='xl'>
            <img src='https://randomuser.me/api/portraits/women/41.jpg' alt='Luisa Neri' />
            <AvatarStatus status='declined'>
              <Icon color='white' icon='it-close' />
              <span className='visually-hidden'>Stato: respinto</span>
            </AvatarStatus>
          </AvatarIcon>
        </AvatarWrapper>
        <AvatarWrapper>
          <AvatarIcon size='xl'>
            <img src='https://randomuser.me/api/portraits/men/33.jpg' alt='Gioacchino Romani' />
            <AvatarStatus status='notify'>
              <span className='visually-hidden'>Testa notifica</span>
            </AvatarStatus>
          </AvatarIcon>
        </AvatarWrapper>
      </AvatarContainer>
      <AvatarContainer>
        <AvatarWrapper>
          <AvatarIcon size='md'>
            <img src='https://randomuser.me/api/portraits/women/32.jpg' alt='Ludovica Galli' />
            <AvatarStatus status='approved'>
              <Icon color='white' icon='it-check' />
              <span className='visually-hidden'>Stato: approvato</span>
            </AvatarStatus>
          </AvatarIcon>
        </AvatarWrapper>
        <AvatarWrapper>
          <AvatarIcon size='lg'>
            <img src='https://randomuser.me/api/portraits/women/32.jpg' alt='Ludovica Galli' />
            <AvatarStatus status='declined'>
              <Icon color='white' icon='it-close' />
              <span className='visually-hidden'>Stato: respinto</span>
            </AvatarStatus>
          </AvatarIcon>
        </AvatarWrapper>
        <AvatarWrapper>
          <AvatarIcon size='xl'>
            <img src='https://randomuser.me/api/portraits/women/32.jpg' alt='Ludovica Galli' />
            <AvatarStatus status='approved'>
              <Icon color='white' icon='it-check' />
              <span className='visually-hidden'>Stato: approvato</span>
            </AvatarStatus>
          </AvatarIcon>
        </AvatarWrapper>
        <AvatarWrapper>
          <AvatarIcon size='xxl'>
            <img src='https://randomuser.me/api/portraits/women/32.jpg' alt='Ludovica Galli' />
            <AvatarStatus status='declined'>
              <Icon color='white' icon='it-close' />
              <span className='visually-hidden'>Stato: approvato</span>
            </AvatarStatus>
          </AvatarIcon>
        </AvatarWrapper>
      </AvatarContainer>
    </div>
  );
};


export const AvatarSmallList = () => {
  return (
    <LinkList avatar>
      <LinkListItem href='#'>
        <AvatarIcon size='sm'>
          <img src='https://randomuser.me/api/portraits/men/43.jpg' alt='Mario Rossi' />
        </AvatarIcon>
        <span>Mario Rossi</span>
      </LinkListItem>
      <LinkListItem href='#'>
        <AvatarIcon size='sm' color='orange'>
          <p aria-hidden='true'>A</p>
        </AvatarIcon>
        <span>Arianna Gallo</span>
      </LinkListItem>
      <LinkListItem>
        <AvatarIcon size='sm' color='red'>
          <p aria-hidden='true'>S</p>
        </AvatarIcon>
        <span>Sara Ghione</span>
      </LinkListItem>
      <LinkListItem>
        <AvatarIcon size='sm'>
          <Icon icon='it-user' />
        </AvatarIcon>
        <span>Antonio Esposito</span>
      </LinkListItem>
    </LinkList>
  );
};

export const AvatarMediaList = () => {
  return (
    <LinkList avatar>
      <LinkListItem href='#'>
        <AvatarIcon size='md'>
          <img src='https://randomuser.me/api/portraits/men/43.jpg' alt='Mario Rossi' />
        </AvatarIcon>
        <span>Mario Rossi</span>
      </LinkListItem>
      <LinkListItem href='#'>
        <AvatarIcon size='md' color='green'>
          <p aria-hidden='true'>AG</p>
        </AvatarIcon>
        <span>Arianna Gallo</span>
      </LinkListItem>
      <LinkListItem>
        <AvatarIcon size='md' color='primary'>
          <p aria-hidden='true'>S</p>
        </AvatarIcon>
        <span>Sara Ghione</span>
      </LinkListItem>
      <LinkListItem>
        <AvatarIcon size='md'>
          <Icon icon='it-user' />
        </AvatarIcon>
        <span>Antonio Esposito</span>
      </LinkListItem>
    </LinkList>
  );
};


export const SmallOverlappingAvatars = () => {
  return (
    <AvatarGroupContainer>
      <li>
        <AvatarIcon size='sm' href='#'>
          <img src='https://randomuser.me/api/portraits/women/12.jpg' alt='Arianna Rossi' />
        </AvatarIcon>
      </li>
      <li>
        <AvatarIcon size='sm' href='#'>
          <img src='https://randomuser.me/api/portraits/men/13.jpg' alt='Giulio Neri' />
        </AvatarIcon>
      </li>
      <li>
        <AvatarIcon size='sm' color='primary' href='#'>
          <p aria-hidden='true'>A</p>
          <span className='visually-hidden'>Andrea Gallo</span>
        </AvatarIcon>
      </li>
      <li>
        <AvatarIcon size='sm' color='secondary' href='#'>
          <p aria-hidden='true'>S</p>
          <span className='visually-hidden'>Sara Ghioni</span>
        </AvatarIcon>
      </li>
      <li>
        <AvatarIcon size='sm' color='green' href='#'>
          <p aria-hidden='true'>T</p>
          <span className='visually-hidden'>Tomasso Sordi</span>
        </AvatarIcon>
      </li>
      <li>
        <AvatarIcon size='sm' color='orange' href='#'>
          <p aria-hidden='true'>B</p>
          <span className='visually-hidden'>Barbera Tosi</span>
        </AvatarIcon>
      </li>
      <li>
        <AvatarIcon size='sm' color='red' href='#'>
          <p aria-hidden='true'>R</p>
          <span className='visually-hidden'>Roberto Milano</span>
        </AvatarIcon>
      </li>
      <li>
        <AvatarIcon size='sm' href='#'>
          <Icon icon='it-search' />
        </AvatarIcon>
      </li>
      <li>
        <AvatarIcon size='sm' color='dropdown'>
          <Dropdown>
            <DropdownToggle id='dropdownMenuLink'>
              <span className='visually-hidden'>Visualizza altri 4 utenti</span>
              <span aria-hidden='true'>+4</span>
            </DropdownToggle>
            <DropdownMenu>
              <LinkList>
                <LinkListItem>
                  <AvatarIcon size='sm'>
                    <img src='https://randomuser.me/api/portraits/men/46.jpg' alt='Mario Rossi' />
                  </AvatarIcon>
                  <span>Mario Rossi</span>
                </LinkListItem>
                <LinkListItem>
                  <AvatarIcon size='sm' color='green'>
                    <p aria-hidden='true'>A</p>
                  </AvatarIcon>
                  <span>Arianna Gello</span>
                </LinkListItem>
                <LinkListItem>
                  <AvatarIcon size='sm' color='primary'>
                    <p aria-hidden='true'>S</p>
                  </AvatarIcon>
                  <span>Sara Ghioni</span>
                </LinkListItem>
                <LinkListItem>
                  <AvatarIcon size='sm'>
                    <Icon icon='it-search' />
                  </AvatarIcon>
                  <span>Antonio Esposito</span>
                </LinkListItem>
              </LinkList>
            </DropdownMenu>
          </Dropdown>
        </AvatarIcon>
      </li>
    </AvatarGroupContainer>
  );
};

export const MediumOverlaidAvatars = () => {
  return (
    <AvatarGroupContainer>
      <li>
        <AvatarIcon size='md' href='#'>
          <img src='https://randomuser.me/api/portraits/women/12.jpg' alt='Arianna Rossi' />
        </AvatarIcon>
      </li>
      <li>
        <AvatarIcon size='md' href='#'>
          <img src='https://randomuser.me/api/portraits/men/13.jpg' alt='Giulio Neri' />
        </AvatarIcon>
      </li>
      <li>
        <AvatarIcon size='md' color='orange' href='#'>
          <p aria-hidden='true'>B</p>
          <span className='visually-hidden'>Barbera Tosi</span>
        </AvatarIcon>
      </li>
      <li>
        <AvatarIcon size='md' color='red' href='#'>
          <p aria-hidden='true'>R</p>
          <span className='visually-hidden'>Roberto Milano</span>
        </AvatarIcon>
      </li>
      <li>
        <AvatarIcon size='md' href='#'>
          <Icon icon='it-search' />
        </AvatarIcon>
      </li>
      <li>
        <AvatarIcon size='md' color='dropdown'>
          <Dropdown>
            <DropdownToggle id='dropdownMenuLink2'>
              <span className='visually-hidden'>Visualizza altri 4 utenti</span>
              <span aria-hidden='true'>+4</span>
            </DropdownToggle>
            <DropdownMenu>
              <LinkList>
                <LinkListItem>
                  <AvatarIcon size='md'>
                    <img src='https://randomuser.me/api/portraits/men/46.jpg' alt='Mario Rossi' />
                  </AvatarIcon>
                  <span>Mario Rossi</span>
                </LinkListItem>
                <LinkListItem>
                  <AvatarIcon size='md' color='green'>
                    <p aria-hidden='true'>A</p>
                  </AvatarIcon>
                  <span>Arianna Gello</span>
                </LinkListItem>
                <LinkListItem>
                  <AvatarIcon size='md' color='primary'>
                    <p aria-hidden='true'>S</p>
                  </AvatarIcon>
                  <span>Sara Ghioni</span>
                </LinkListItem>
                <LinkListItem>
                  <AvatarIcon size='md'>
                    <Icon icon='it-search' />
                  </AvatarIcon>
                  <span>Antonio Esposito</span>
                </LinkListItem>
              </LinkList>
            </DropdownMenu>
          </Dropdown>
        </AvatarIcon>
      </li>
    </AvatarGroupContainer>
  );
};
