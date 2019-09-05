import React from 'react';
import { connect } from 'react-redux';

 class SongList extends React.Component {
   render () {
     console.log(this.props);
    return (
      <div>
        Song List 
      </div>
    )}
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
}

//connect returns function and second () invokes function that was called
export default connect(mapStateToProps)(SongList);