import React from 'react'
import {
  AvatarIcon,
  AvatarContainer,
  AvatarStatus,
  AvatarWrapper,
  Icon
} from '../../src'

const UserStatus = () => {
  return (
    <div>
      <AvatarContainer>
        <AvatarWrapper>
          <AvatarIcon size="xl">
            <img
              src="https://randomuser.me/api/portraits/men/43.jpg"
              alt="Mario Rossi"
            />
            <AvatarStatus status="approved">
              <Icon color="white" icon="it-check" />
              <span className="sr-only">Stato: approvato</span>
            </AvatarStatus>
          </AvatarIcon>
        </AvatarWrapper>
        <AvatarWrapper>
          <AvatarIcon size="xl">
            <img
              src="https://randomuser.me/api/portraits/women/41.jpg"
              alt="Luisa Neri"
            />
            <AvatarStatus status="declined">
              <Icon color="white" icon="it-close" />
              <span className="sr-only">Stato: respinto</span>
            </AvatarStatus>
          </AvatarIcon>
        </AvatarWrapper>
        <AvatarWrapper>
          <AvatarIcon size="xl">
            <img
              src="https://randomuser.me/api/portraits/men/33.jpg"
              alt="Gioacchino Romani"
            />
            <AvatarStatus status="notify">
              <span className="sr-only">Testa notifica</span>
            </AvatarStatus>
          </AvatarIcon>
        </AvatarWrapper>
      </AvatarContainer>
      <AvatarContainer>
        <AvatarWrapper>
          <AvatarIcon size="md">
            <img
              src="https://randomuser.me/api/portraits/women/32.jpg"
              alt="Ludovica Galli"
            />
            <AvatarStatus status="approved">
              <Icon color="white" icon="it-check" />
              <span className="sr-only">Stato: approvato</span>
            </AvatarStatus>
          </AvatarIcon>
        </AvatarWrapper>
        <AvatarWrapper>
          <AvatarIcon size="lg">
            <img
              src="https://randomuser.me/api/portraits/women/32.jpg"
              alt="Ludovica Galli"
            />
            <AvatarStatus status="declined">
              <Icon color="white" icon="it-close" />
              <span className="sr-only">Stato: respinto</span>
            </AvatarStatus>
          </AvatarIcon>
        </AvatarWrapper>
        <AvatarWrapper>
          <AvatarIcon size="xl">
            <img
              src="https://randomuser.me/api/portraits/women/32.jpg"
              alt="Ludovica Galli"
            />
            <AvatarStatus status="approved">
              <Icon color="white" icon="it-check" />
              <span className="sr-only">Stato: approvato</span>
            </AvatarStatus>
          </AvatarIcon>
        </AvatarWrapper>
        <AvatarWrapper>
          <AvatarIcon size="xxl">
            <img
              src="https://randomuser.me/api/portraits/women/32.jpg"
              alt="Ludovica Galli"
            />
            <AvatarStatus status="declined">
              <Icon color="white" icon="it-close" />
              <span className="sr-only">Stato: approvato</span>
            </AvatarStatus>
          </AvatarIcon>
        </AvatarWrapper>
      </AvatarContainer>
    </div>
  )
}

export default UserStatus
