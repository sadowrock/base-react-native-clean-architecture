import { Middleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const timingMiddleware: Middleware = (_store) => (next) => (action: unknown) => {
  const start = Date.now();
  const result = next(action);
  const end = Date.now();
  const actionType = (action as { type?: string }).type || 'Unknown Action';
  console.log(`Action ${actionType} took ${end - start}ms`);
  return result;
};

export const middlewares = [
  logger,
  timingMiddleware,
];
