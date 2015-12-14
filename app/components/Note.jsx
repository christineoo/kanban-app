import React from 'react';

export default class Note extends React.Component {
  render () {
    {/* props is a data structure that's passed to a component from outside */}
    return <div>{this.props.task}</div>;
  }
}
