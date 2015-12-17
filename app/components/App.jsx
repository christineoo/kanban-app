import AltContainer from 'alt-container';
import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore'

export default class App extends React.Component {

  constructor(props) {
    {/* props wont get set if you dont pass props to super */}
    super(props);
    this.state = NoteStore.getState();
  }
  componentDidMount() {
    NoteStore.listen(this.storeChanged);
  }
  componentWillMount() {
    NoteStore.unlisten(this.storeChanged);
  }
  storeChanged = (state) => {
    // Without a property initializer `this` wouldn't
    // point at the right context (defaults to `undefined` in strict mode).
    this.setState(state);
  }
  render() {
    const notes = this.state.notes;
    return (
      <div>
        <button className="add-note" onClick={this.addNote}>+</button>
          <AltContainer
            stores={[NoteStore]}
            inject={{
              items: () => NoteStore.getState().notes
            }}
          >
          <Notes onEdit={this.editNote} onDelete={this.deleteNote} />
        </AltContainer>
      </div>
    );
  }
  addNote = () => {
    NoteActions.create({task: 'New task'});
    console.log('add note');
  }
  editNote = (id, task) => {
    NoteActions.update({id, task});
    console.log('note edited', id, task);
  }
  deleteNote = (id) => {
    NoteActions.delete(id);
  }
}
