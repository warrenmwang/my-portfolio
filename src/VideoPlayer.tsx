import React from 'react';

interface VideoPlayerProps {
  youtubeUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ youtubeUrl }) => {
  let embedUrl: string;

  if (youtubeUrl.includes('/shorts/')) {
    // Extract the video ID for YouTube Shorts
    const videoId = youtubeUrl.split('/shorts/')[1];
    embedUrl = `https://www.youtube.com/embed/${videoId}`;
  } else {
    // Extract the video ID from the standard YouTube URL
    const videoId = youtubeUrl.split('v=')[1].split('&')[0];
    embedUrl = `https://www.youtube.com/embed/${videoId}`;
  }

  return (
    <div className="video-player">
      <iframe
        width="560"
        height="315"
        src={embedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube Video"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;