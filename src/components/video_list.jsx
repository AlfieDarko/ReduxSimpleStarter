import React from 'react';
import VideoListItem from './video_list_item';

// if refactoring from function component to class, you would have
//  to change props references from props to this.props
const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default VideoList;
