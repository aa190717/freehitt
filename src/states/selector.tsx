import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';

export const Selector = () => {
  const events: any = useSelector((state: RootState) => {
    return state.event.events;
  });
  return {
    events: events
  };
};
