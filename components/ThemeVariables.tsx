import { THEME } from '@/lib/theme';
import { useColorScheme } from 'nativewind';
import { vars } from 'nativewind';
import { View } from 'react-native';
import type { ReactNode } from 'react';

function extractHslValue(hslString: string): string {
  // Extract the HSL values from strings like "hsl(0 0% 100%)" or "hsl(71.23,70.95%,52.75%)"
  const match = hslString.match(/hsl\(([^)]+)\)/);
  if (!match) return hslString;
  return match[1];
}

export function ThemeVariables({ children }: { children: ReactNode }) {
  const { colorScheme } = useColorScheme();
  const theme = THEME[colorScheme ?? 'light'];

  return (
    <View
      style={vars({
        '--background': extractHslValue(theme.background),
        '--foreground': extractHslValue(theme.foreground),
        '--card': extractHslValue(theme.card),
        '--card-foreground': extractHslValue(theme.cardForeground),
        '--popover': extractHslValue(theme.popover),
        '--popover-foreground': extractHslValue(theme.popoverForeground),
        '--primary': extractHslValue(theme.primary),
        '--primary-foreground': extractHslValue(theme.primaryForeground),
        '--secondary': extractHslValue(theme.secondary),
        '--secondary-foreground': extractHslValue(theme.secondaryForeground),
        '--muted': extractHslValue(theme.muted),
        '--muted-foreground': extractHslValue(theme.mutedForeground),
        '--accent': extractHslValue(theme.accent),
        '--accent-foreground': extractHslValue(theme.accentForeground),
        '--destructive': extractHslValue(theme.destructive),
        '--border': extractHslValue(theme.border),
        '--input': extractHslValue(theme.input),
        '--ring': extractHslValue(theme.ring),
        '--radius': theme.radius,
      })}
      className="flex-1"
    >
      {children}
    </View>
  );
}
