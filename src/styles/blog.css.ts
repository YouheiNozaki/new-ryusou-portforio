import { style } from '@vanilla-extract/css';
import { color } from './theme';

export const BlogPageStyle = {
  blogDescription: style({
    display: 'flex',
    '@media': {
      'screen and (max-width: 720px)': {
        flexDirection: 'column',
      },
    },
  }),
  blogTitle: style({
    color: color.gray[900],
    fontSize: '28px',
  }),
  blogTags: style({
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
  }),
  blogTag: style({
    marginRight: '8px',
    padding: '4px 6px',
    color: color.white,
    backgroundColor: color.blue[300],
    borderRadius: '4px',
  }),
  blogDays: style({
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
  }),
  blogDay: style({
    color: color.gray[900],
    marginRight: '12px',
    padding: '4px',
  }),
  blogDayIcon: style({
    color: color.blue[300],
  }),
  blogContentImg: style({
    width: '80%',
  }),
  blogContentLink: style({
    wordWrap: 'break-word',
  }),
  amazonLink: style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textDecoration: 'none',
    margin: '16px',
    padding: '8px',
    border: `solid 1px ${color.gray[400]}`,
    boxSizing: 'border-box',
    borderRadius: '4px',
    ':hover': {
      boxSizing: 'border-box',
      backgroundColor: color.gray[50],
      opacity: 0.5,
    },
  }),
  amazonLinkDescription: style({
    padding: '8px',
    marginRight: '12px',
  }),
  amazonLinkText: style({
    fontSize: '16px',
    color: color.gray[900],
    fontWeight: 'bold',
  }),
  amazonLinkButton: style({
    padding: '4px',
    borderRadius: '4px',
    color: color.gray[700],
  }),
  amazonLinkImage: style({
    margin: '0 auto',
  }),
  more: style({
    margin: '20px auto',
    width: '10%',
  }),
  h1: style({
    marginTop: '40px',
    padding: '12px',
    color: color.gray[900],
    borderBottom: `solid 3px ${color.blue[500]}`,
  }),
  h2: style({
    marginTop: '40px',
    padding: '4px',
    color: color.gray[900],
    backgroundColor: color.gray[50],
    borderBottom: `solid 3px ${color.gray[500]}`,
  }),
  h3: style({
    marginTop: '40px',
    padding: '4px',
    color: color.gray[900],
    borderBottom: `solid 3px ${color.gray[500]}`,
  }),
  strong: style({
    letterSpacing: '0.05rem',
    lineHeight: '1.7',
    borderBottom: `solid 3px ${color.gray[500]}`,
  }),
  p: style({
    letterSpacing: '0.05rem',
    lineHeight: '1.7',
  }),
};
