import axios from 'axios';
import { create } from 'zustand';

import { useCurrentUserStore } from './currentUserStore';
import { rootMiddleware } from './middlewares';
import type { SecuirtyActions, SecurityState } from './types';

const initialState = {
  accessToken: undefined,
};

export const useSecurityStore = create<SecurityState>()(
  rootMiddleware((set) => initialState),
);

// TODO 타입 추론 수정 필요
export const useAccessToken = () =>
  useSecurityStore(({ accessToken }) => accessToken);

const loginWithEmail = async (email, password, options) => {
  try {
    const {
      status,
      data: { accessToken, accountRole, userName },
    } = await axios.post('/api/login/email', {
      serviceName: 'CRM',
      loginId: email,
      password,
    });

    if (status === 200) {
      useSecurityStore.setState({
        accessToken,
      });

      useCurrentUserStore.setState({
        currentUser: {
          accountRole,
          userName,
        },
      });

      options?.onSuccess();
    }
  } catch (error) {
    options?.onError?.(new Error(error.response?.data.message ?? ''));
  }
};

const logout = async (options) => {
  const accessToken = useSecurityStore.getState().accessToken;

  try {
    const { status } = await axios.post('/api/logout/email', {
      accessToken,
    });

    if (status === 200) {
      useSecurityStore.setState(initialState);

      options?.onSuccess();
    }
  } catch (error) {
    options?.onError?.(new Error(error.response?.data.message ?? ''));
  }
};

export const getSecurityActions: () => SecuirtyActions = () => ({
  loginWithEmail,
  logout,
});

export const getAccessToken = () => useSecurityStore.getState().accessToken;
export const setAccessToken = (accessToken: string | undefined) =>
  useSecurityStore.setState({ accessToken });
