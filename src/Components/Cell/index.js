import React from 'react';
import './cell.scss';

export default function Cell({ value: { open, high, low, close, volume } }) {
  return (
    <div className={'cell-container'}>
      <div>{`High: ${high}`}</div>
      <div>{`Low: ${low}`}</div>
      <div>{`Close: ${close}`}</div>
      <div>{`Volume: ${volume}`}</div>
    </div>
  );
}
