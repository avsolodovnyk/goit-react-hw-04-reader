import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from '../Controls';
import Counter from '../Counter';
import Publication from '../Publication';

export default class Reader extends Component {
  static propTypes = {
    history: PropTypes.shape().isRequired,
    location: PropTypes.shape().isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        text: PropTypes.string,
      }),
    ).isRequired,
  };

  componentDidMount() {
    const { items, location } = this.props;
    const curPos = Number(new URLSearchParams(location.search).get('item'));
    const { history } = this.props;
    if (!curPos || curPos < 1 || curPos > items.length) {
      history.push(`/`);
    }
  }

  handleNext = () => {
    this.props.history.push({
      ...this.props.location,
      search: `item=${Number(
        new URLSearchParams(this.props.location.search).get('item'),
      ) + 1}`,
    });
  };

  handleBack = () => {
    this.props.history.push({
      ...this.props.location,
      search: `item=${Number(
        new URLSearchParams(this.props.location.search).get('item'),
      ) - 1}`,
    });
  };

  render() {
    const { items, location } = this.props;
    const curPos = Number(new URLSearchParams(location.search).get('item'));
    const currentItem = items[curPos - 1];

    return (
      <>
        {currentItem && (
          <Controls
            curPos={curPos}
            totalPub={items.length}
            onNextClick={this.handleNext}
            onPrevClick={this.handleBack}
          />
        )}
        {currentItem && <Counter curPos={curPos} totalPub={items.length} />}
        {currentItem && <Publication currentItem={currentItem} />}
      </>
    );
  }
}
