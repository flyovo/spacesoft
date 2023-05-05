import { create } from 'zustand';

import { persistMiddleware } from './middlewares';
import type { CurrentUserState } from './types';

const initialState = {
  currentUser: undefined,
};

export const useCurrentUserStore = create<CurrentUserState>()(
  persistMiddleware((set) => initialState),
);

export const useCurrentUser = () =>
  useCurrentUserStore(({ currentUser }) => currentUser);
