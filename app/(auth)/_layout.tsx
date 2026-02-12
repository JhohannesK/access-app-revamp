import { Stack } from 'expo-router';

/**
 * Auth stack — access controlled by Stack.Protected in root layout.
 */
export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="sign-in" />
    </Stack>
  );
}
