export type Theme = {
  theme?: 'light' | 'dark';
};

export type TownLabels = {
  townName: string;
  townTagLine: string;
};

export type PageProps = Theme & TownLabels;
