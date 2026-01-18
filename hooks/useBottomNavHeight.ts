import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BOTTOM_NAV_HEIGHT = 60;

export function useBottomNavHeight() {
  const insets = useSafeAreaInsets();
  return BOTTOM_NAV_HEIGHT + insets.bottom;
}
