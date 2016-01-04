import React from 'react';
import Editable from './Editable.jsx';

export default class Notes extends React.Component {
  render() {
    const notes = this.props.items;
    // We are setting the context (`this`) of `this.renderNote` to `this`
    // explicitly! Alternatively we could use a property initializer here,
    // but this will work as well while being compatible with hot loading.
    return <ul className="notes">{notes.map(this.renderNote, this)}</ul>;
  }

  renderNote = (note) => {
    return (
      <li className="note" key={note.id}>
        <Editable
          value={note.task}
          onEdit={this.props.onEdit.bind(null, note.id)}
          onDelete={this.props.onDelete.bind(null, note.id)} />
      </li>
    );
  }

}
