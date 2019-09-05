import React from 'react';
import { connect } from 'react-redux';

 class SongList extends React.Component {
   render () {
    return (
      <div>
        Song List 
      </div>
    )}
}
//connect returns function and second () invokes function that was called
export default connect()(SongList);