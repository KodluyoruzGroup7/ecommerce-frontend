import React from 'react';
import styles from './Heading.module.css';
import PropTypes from 'prop-types';

const SectionTitle = ({ children, ...props }) => <h3 {...props}>{children}</h3>;

const CollectionTitle = ({ children, ...props }) => <h2 {...props}>{children}</h2>;

const ItemTitle = ({ children, ...props }) => <h3 {...props}>{children}</h3>;

const ProductTitle = ({ children, ...props }) => <h2  {...props}>{children}</h2>;

const CardTitle = ({ children, ...props }) => <h3  {...props}>{children}</h3>;

const HeadingL = ({ children, ...props }) => <h1 {...props}>{children}</h1>;

const WidgetTitle = ({ children, ...props }) => <h3 {...props}>{children}</h3>;

const Heading = ({ children, centered, capitalize, upperCase, headingFor }) => {

  let Comp;

  if (headingFor === 'section') {
    Comp = SectionTitle
  }
  if (headingFor === 'widget') {
    Comp = WidgetTitle;
  }
  if (headingFor === 'product') {
    Comp = ProductTitle;
  }
  if (headingFor === 'large') {
    Comp = HeadingL;
  }
  if (headingFor === 'item') {
    Comp = ItemTitle;
  }
  if (headingFor === 'collection') {
    Comp = CollectionTitle;
  }
  if (headingFor === 'card') {
    Comp = CardTitle;
  }

  return (
    <Comp className={`${styles[headingFor]} ${capitalize && styles.capitalize} ${upperCase && styles.upperCase} ${centered && styles.centered}`}>
      {children}
    </Comp>
  );
};

Heading.propTypes = {
  centered: PropTypes.bool,
  capitalize: PropTypes.bool,
  upperCase: PropTypes.bool,
  headingFor: PropTypes.oneOf(['widget', 'section', 'item', 'product', "large", 'collection']).isRequired,
  children: PropTypes.node.isRequired
};

Heading.defaultProps = {
  centered: false,
  capitalize: false,
  upperCase: false,
};

export default Heading;
