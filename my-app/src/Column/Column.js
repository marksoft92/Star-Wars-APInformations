import React from 'react';
import styles from './Column.scss'
import NavLink from 'react-router-dom';
import PropTypes from 'prop-types';
class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  }
  static propTypes = {

    title: PropTypes.node,
    cards: PropTypes.array,
  }
  render() {
    const { subtitle, title } = this.props;

    return (
      <section className={styles.component}>
        <div className={styles.grid}>
          <h3 className={styles.title}>{title}</h3>
          <h4 className={styles.cards}>{subtitle}
            {this.state.cards.map(({ key, ...cardProps }) => (
              <Column key={key} {...cardProps} />
            ))}
          </h4>
        </div>
      </section>
    )
  }
}

export default Column;
