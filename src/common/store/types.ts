import type { User } from '../types';

type Options = {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
};

export interface SecuirtyActions {
  loginWithEmail: (
    email: string,
    password: string,
    options?: Options,
  ) => Promise<void>;
  logout: (options?: Options) => void;
}

export interface SecurityState {
  accessToken: string | undefined;
}

export type CurrentUser = Omit<User, 'accessToken'>;

export interface CurrentUserState {
  currentUser: CurrentUser | undefined;
}
