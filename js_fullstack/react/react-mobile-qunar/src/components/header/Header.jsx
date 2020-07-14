import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

export default function Header(props) {
  const { title } = props;
  return (
    <div className="header">
      <div className="header-back">
        {/* 矢量图 */}
        <svg width="42" height="42">
          {/* 折线 */}
          <polyline 
          points="25,13 16,21 25,29"
          stroke="#fff"
          strokeWidth="2"
          fill="none" 
          />
        </svg>
      </div>
  <div className="header-title">{title}</div>
    </div>
  )
  
}
Header.propTypes = {
  title: PropTypes.string.isRequired
}