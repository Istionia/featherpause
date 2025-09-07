import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { supabase } from '@/src/services/supabase';

type AuthUser = {
  id: string;
  email?: string;
} | null;

type AuthContextValue = {
  isSignedIn: boolean;
  user: AuthUser;
  loading: boolean;
  error?: string;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  clearError: () => void;
};

export const AuthContext = createContext<AuthContextValue>({
  isSignedIn: false,
  user: null,
  loading: true,
  error: undefined,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async signIn() {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async signUp() {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async signOut() {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async resetPassword() {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  clearError() {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>(undefined);

  const refreshSession = useCallback(async () => {
    const { data } = await supabase.auth.getSession();
    if (data.session?.user) {
      setUser({ id: data.session.user.id, email: data.session.user.email ?? undefined });
    } else {
      setUser(null);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    refreshSession();
    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser({ id: session.user.id, email: session.user.email ?? undefined });
      } else {
        setUser(null);
      }
    });
    return () => subscription.subscription.unsubscribe();
  }, [refreshSession]);

  const signIn = useCallback(async (email: string, password: string) => {
    setError(undefined);
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    if (signInError) {
      setError(signInError.message);
      throw signInError;
    }
  }, []);

  const signUp = useCallback(async (email: string, password: string) => {
    setError(undefined);
    const { error: signUpError } = await supabase.auth.signUp({ email, password });
    if (signUpError) {
      setError(signUpError.message);
      throw signUpError;
    }
  }, []);

  const signOut = useCallback(async () => {
    setError(undefined);
    const { error: signOutError } = await supabase.auth.signOut();
    if (signOutError) {
      setError(signOutError.message);
      throw signOutError;
    }
  }, []);

  const resetPassword = useCallback(async (email: string) => {
    setError(undefined);
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'https://example.com/reset',
    });
    if (resetError) {
      setError(resetError.message);
      throw resetError;
    }
  }, []);

  const clearError = useCallback(() => setError(undefined), []);

  const value = useMemo<AuthContextValue>(
    () => ({
      isSignedIn: !!user,
      user,
      loading,
      error,
      signIn,
      signUp,
      signOut,
      resetPassword,
      clearError,
    }),
    [user, loading, error, signIn, signUp, signOut, resetPassword, clearError]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};


