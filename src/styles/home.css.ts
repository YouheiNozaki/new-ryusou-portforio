import { style } from '@vanilla-extract/css';
import { color } from './theme';

export const HomePageStyle = {
  card: style({
    borderBottom: `solid 1px ${color.cyan[200]}`,
  }),
  cardLink: style({
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: color.gray[900],
  }),
  more: style({
    margin: '20px auto',
    width: '10%',
  }),
};
