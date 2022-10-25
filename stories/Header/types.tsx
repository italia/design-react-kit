export type ThemeType = {
  theme: 'light' | 'dark' | '';
};

export type HeaderSlimProps = ThemeType & {
  isOpen: boolean;
  brandText: string;
};

export type HeaderCenterProps = ThemeType & {
  isSmall: boolean;
  type: 'slim' | 'center' | 'navbar';
};

export type HeaderNavProps = ThemeType & {
  isOpen: boolean;
};

export type HeaderCompleteProps = ThemeType & {
  slimHeaderType: string;
  sticky: boolean;
  iconName: string;
  iconAlt: string;
};

export type HeaderSlimLightProps = HeaderSlimProps & {
  brandText: string;
};

export type CenterHeaderBasicProps = HeaderCenterProps & {
  brandText: string;
};
