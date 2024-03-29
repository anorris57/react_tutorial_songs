import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

 class SongList extends React.Component {
  renderList(){
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button 
            className="ui button primary"
            onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
   render () {
     //console.log(this.props);
    return (
      <div className="ui divided list">
        {this.renderList()}
      </div>
    )}
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
}

//connect returns function and second () invokes function that was called
//connect function take function and passes into store.dispatch method
export default connect(mapStateToProps, { selectSong: selectSong })(SongList);