import React from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';

import './Navigation';

const IMG_PATH = 'face.jpeg';

const Sean = () => {

  return (
    <Link to="/" className="avatar">
      <Avatar src={IMG_PATH} size={40} round />
    </Link>
  )
}

export default Sean;