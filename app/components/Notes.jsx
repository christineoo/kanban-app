import React from 'react';
import Note from './Note.jsx';

export default class Notes extends React.Component {
  render() {
    const notes = this.props.items;
    // We are setting the context (`this`) of `this.renderNote` to `this`
    // explicitly! Alternatively we could use a property initializer here,
    // but this will work as well while being compatible with hot loading.
    return <ul className="notes">{notes.map(this.renderNote, this)}</ul>;
  }

  renderNote(note) {
    return (
      <li className="note" key={note.id}>
        <Note
          task={note.task}
          onEdit={this.props.onEdit.bind(null, note.id)} />
      </li>
    );
  }

}
