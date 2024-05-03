import {ReactElement} from 'react';

export type Currency = {
  symbol: string;
  name: string;
  fiat: string;
  image: ReactElement;
};
