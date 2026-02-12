import { Platform } from 'react-native';
import * as Haptics from 'expo-haptics';

const isIOS = Platform.OS === 'ios';

/** Light tap (selection). Use for tab/button taps. */
export function selection() {
  if (isIOS) Haptics.selectionAsync();
}

/** Light impact. Use for secondary actions (back, edit, cancel). */
export function light() {
  if (isIOS) Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
}

/** Medium impact. Use for primary actions (continue, next step). */
export function medium() {
  if (isIOS) Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
}

/** Success notification. Use for confirm / success. */
export function success() {
  if (isIOS) Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
}
