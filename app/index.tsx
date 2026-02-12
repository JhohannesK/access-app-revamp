import { Redirect } from 'expo-router';
import { useAuthStore } from '@/stores/auth';

/**
 * Root index — redirects based on auth state.
 * Auth → app; Unauth → sign-in.
 */
export default function Index() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  if (isAuthenticated) {
    return <Redirect href="/(tabs)/home" />;
  }
  return <Redirect href="/(auth)/sign-in" />;
}