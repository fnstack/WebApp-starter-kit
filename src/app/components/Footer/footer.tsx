import * as React from 'react';

interface FooterProps {
  className?: string;
  style?: React.CSSProperties;
}

/**
 * The Footer component
 *
 * @returns Footer as react stateless component
 */
const Footer: React.StatelessComponent<FooterProps> = props => {
  return (
    <footer className="app-footer" {...props}>
      &copy; 2018, <a href="http://github.com/hse-inc">HSE Inc</a>
    </footer>
  );
};

export { Footer };
