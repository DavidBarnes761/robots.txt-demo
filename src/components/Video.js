import React from 'react'
import Helmet from 'react-helmet'

const Video = ({ videoSrcURL, videoTitle }) => (
  <>
    <Helmet>
      <script src="https://fast.wistia.net/assets/external/E-v1.js" async />
    </Helmet>
    <div className="embed-responsive embed-responsive-16by9 video">
      <iframe
        className="embed-responsive-item"
        src={videoSrcURL}
        title={videoTitle}
        allowTransparency="true"
        frameBorder="0"
        scrolling="no"
        name="wistia_embed"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        oallowfullscreen="true"
        msallowfullscreen="true"
        width="100%"
        height="100%"
      />
    </div>
  </>
)
export default Video
