import React from 'react';
import styles from '../List/List.scss';

import PropTypes from 'prop-types';
import Column from '../Column/Column';
class List extends React.Component {
  state = {
    columns: this.props.columns || [],
  }
  static propTypes = {
    title: PropTypes.node,
    image: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
  }

  render() {
    const { columns, title, image, } = this.props;
    return (<section className={styles.component}>

      <div className={styles.columns}>
        {this.state.columns.map(({ key, ...columnProps }) => (
          <Column key={key} {...columnProps} />
        ))}
      </div>
    </section>
    )
  }
}

export default List;
