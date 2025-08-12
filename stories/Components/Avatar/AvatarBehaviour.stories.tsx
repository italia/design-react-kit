import { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { AvatarContainer, AvatarIcon, AvatarPresence, AvatarStatus, AvatarWrapper, Icon } from "../../../src";

const meta: Meta<typeof AvatarContainer> = {
    title: "Documentazione/Componenti/Avatar/Behavior",
    component: AvatarIcon,
};

export default meta;

type Story = StoryObj<typeof AvatarIcon>;

export const UserPresence: Story = {
    render: () => (
        <div>
            <AvatarContainer>
                <AvatarWrapper>
                    <AvatarIcon size="xl">
                        <img src="https://randomuser.me/api/portraits/men/43.jpg" alt="Mario Rossi" />
                        <AvatarPresence presence="active">
                            <span className="visually-hidden">Presenza:attivo</span>
                        </AvatarPresence>
                    </AvatarIcon>
                </AvatarWrapper>
                <AvatarWrapper>
                    <AvatarIcon size="xl">
                        <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Luisa Neri" />
                        <AvatarPresence presence="busy">
                            <Icon color="white" icon="it-minus" />
                            <span className="visually-hidden">Presenza: non disponibile</span>
                        </AvatarPresence>
                    </AvatarIcon>
                </AvatarWrapper>
                <AvatarWrapper>
                    <AvatarIcon size="xl">
                        <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Gioacchino Romani" />
                        <AvatarPresence presence="hidden">
                            <span className="visually-hidden">Presenza: invisible</span>
                        </AvatarPresence>
                    </AvatarIcon>
                </AvatarWrapper>
            </AvatarContainer>
            <AvatarContainer>
                <AvatarWrapper>
                    <AvatarIcon size="md">
                        <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Ludovica Galli" />
                        <AvatarPresence presence="busy">
                            <Icon color="white" icon="it-minus" />
                            <span className="visually-hidden">Presenza: non disponibile</span>
                        </AvatarPresence>
                    </AvatarIcon>
                </AvatarWrapper>
                <AvatarWrapper>
                    <AvatarIcon size="lg">
                        <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Ludovica Galli" />
                        <AvatarPresence presence="busy">
                            <Icon color="white" icon="it-minus" />
                            <span className="visually-hidden">Presenza: non disponibile</span>
                        </AvatarPresence>
                    </AvatarIcon>
                </AvatarWrapper>
                <AvatarWrapper>
                    <AvatarIcon size="xl">
                        <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Ludovica Galli" />
                        <AvatarPresence presence="busy">
                            <Icon color="white" icon="it-minus" />
                            <span className="visually-hidden">Presenza: non disponibile</span>
                        </AvatarPresence>
                    </AvatarIcon>
                </AvatarWrapper>
                <AvatarWrapper>
                    <AvatarIcon size="xxl">
                        <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Ludovica Galli" />
                        <AvatarPresence presence="busy">
                            <Icon color="white" icon="it-minus" />
                            <span className="visually-hidden">Presenza: non disponibile</span>
                        </AvatarPresence>
                    </AvatarIcon>
                </AvatarWrapper>
            </AvatarContainer>
        </div>
    ),
};

export const UserStatus: Story = {
    render: () => (
        <div>
            <AvatarContainer>
                <AvatarWrapper>
                    <AvatarIcon size="xl">
                        <img src="https://randomuser.me/api/portraits/men/43.jpg" alt="Mario Rossi" />
                        <AvatarStatus status="approved">
                            <Icon color="white" icon="it-check" />
                            <span className="visually-hidden">Stato: approvato</span>
                        </AvatarStatus>
                    </AvatarIcon>
                </AvatarWrapper>
                <AvatarWrapper>
                    <AvatarIcon size="xl">
                        <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Luisa Neri" />
                        <AvatarStatus status="declined">
                            <Icon color="white" icon="it-close" />
                            <span className="visually-hidden">Stato: respinto</span>
                        </AvatarStatus>
                    </AvatarIcon>
                </AvatarWrapper>
                <AvatarWrapper>
                    <AvatarIcon size="xl">
                        <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Gioacchino Romani" />
                        <AvatarStatus status="notify">
                            <span className="visually-hidden">Testa notifica</span>
                        </AvatarStatus>
                    </AvatarIcon>
                </AvatarWrapper>
            </AvatarContainer>
            <AvatarContainer>
                <AvatarWrapper>
                    <AvatarIcon size="md">
                        <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Ludovica Galli" />
                        <AvatarStatus status="approved">
                            <Icon color="white" icon="it-check" />
                            <span className="visually-hidden">Stato: approvato</span>
                        </AvatarStatus>
                    </AvatarIcon>
                </AvatarWrapper>
                <AvatarWrapper>
                    <AvatarIcon size="lg">
                        <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Ludovica Galli" />
                        <AvatarStatus status="declined">
                            <Icon color="white" icon="it-close" />
                            <span className="visually-hidden">Stato: respinto</span>
                        </AvatarStatus>
                    </AvatarIcon>
                </AvatarWrapper>
                <AvatarWrapper>
                    <AvatarIcon size="xl">
                        <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Ludovica Galli" />
                        <AvatarStatus status="approved">
                            <Icon color="white" icon="it-check" />
                            <span className="visually-hidden">Stato: approvato</span>
                        </AvatarStatus>
                    </AvatarIcon>
                </AvatarWrapper>
                <AvatarWrapper>
                    <AvatarIcon size="xxl">
                        <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Ludovica Galli" />
                        <AvatarStatus status="declined">
                            <Icon color="white" icon="it-close" />
                            <span className="visually-hidden">Stato: approvato</span>
                        </AvatarStatus>
                    </AvatarIcon>
                </AvatarWrapper>
            </AvatarContainer>
        </div>
    ),
};
