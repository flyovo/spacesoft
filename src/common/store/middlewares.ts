import { StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const rootMiddleware = <State>(f: StateCreator<State>) => devtools(f);

export const persistMiddleware = <State>(f: StateCreator<State>) =>
  devtools(
    persist(f, {
      name: 'root-storage',
      // 'localStorage' is used
    }),
  );
