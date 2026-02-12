import { Icon } from '@/components/ui/icon';
import { NativeOnlyAnimatedView } from '@/components/ui/native-only-animated-view';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { selection } from '@/lib/haptics';
import { GlassView } from 'expo-glass-effect';
import {
  Content as DropdownMenuContent,
  Item as DropdownMenuItem,
  Overlay as DropdownMenuOverlay,
  Portal as DropdownMenuPortal,
  Root as DropdownMenuRoot,
  Separator as DropdownMenuSeparator,
  Trigger as DropdownMenuTrigger,
} from '@rn-primitives/dropdown-menu';
import { UserIcon, SettingsIcon, LogOutIcon } from 'lucide-react-native';
import { Platform, Pressable, View } from 'react-native';
import { FadeOut, SlideInDown } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ProfileMenuProps {
  /** Avatar content - initials, image, etc. */
  children: React.ReactNode;
  onProfile?: () => void;
  onSettings?: () => void;
  onSignOut: () => void;
  /** Optional class for the trigger wrapper */
  triggerClassName?: string;
}

export function ProfileMenu({
  children,
  onProfile,
  onSettings,
  onSignOut,
  triggerClassName,
}: ProfileMenuProps) {
  const insets = useSafeAreaInsets();

  const handleOpenChange = (open: boolean) => {
    if (open) selection();
  };

  const handleItemPress = (fn?: () => void) => () => {
    selection();
    fn?.();
  };

  return (
    <DropdownMenuRoot onOpenChange={handleOpenChange}>
      <DropdownMenuTrigger asChild>
        <Pressable
          className={cn('active:opacity-80', triggerClassName)}
          accessible
          accessibilityLabel="Open profile menu"
          accessibilityRole="button"
          accessibilityHint="Opens menu with profile options">
          {children}
        </Pressable>
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <DropdownMenuOverlay
          closeOnPress
          className="absolute inset-0 bg-black/25"
          style={Platform.OS === 'ios' ? undefined : { backgroundColor: 'rgba(0,0,0,0.25)' }}
        />
        <DropdownMenuContent
          side="bottom"
          sideOffset={8}
          align="start"
          avoidCollisions
          insets={{ top: insets.top, bottom: insets.bottom }}
          className={cn(
            'min-w-[200px] overflow-hidden rounded-xl border border-white/20 shadow-lg shadow-black/20',
            Platform.select({
              web: 'bg-white/80 backdrop-blur-xl duration-150 animate-in fade-in-95 zoom-in-95',
            })
          )}
          asChild>
          <NativeOnlyAnimatedView
            entering={SlideInDown.springify().damping(18).stiffness(180)}
            exiting={FadeOut.duration(100)}>
            {Platform.OS === 'ios' ? (
              <GlassView
                style={{ minWidth: 200, paddingVertical: 4, borderRadius: 12, overflow: 'hidden' }}
                glassEffectStyle="regular">
                <View className="absolute inset-0 bg-white/20" pointerEvents="none" />
                <View className="py-1">
                  {onProfile && (
                    <DropdownMenuItem
                      onPress={handleItemPress(onProfile)}
                      className="flex-row items-center gap-3 px-4 py-2.5 active:bg-white/20">
                      <Icon as={UserIcon} className="text-muted-foreground" size={20} />
                      <Text className="text-foreground">Profile</Text>
                    </DropdownMenuItem>
                  )}
                  {onSettings && (
                    <DropdownMenuItem
                      onPress={handleItemPress(onSettings)}
                      className="flex-row items-center gap-3 px-4 py-2.5 active:bg-white/20">
                      <Icon as={SettingsIcon} className="text-muted-foreground" size={20} />
                      <Text className="text-foreground">Settings</Text>
                    </DropdownMenuItem>
                  )}
                  {(onProfile || onSettings) && <DropdownMenuSeparator className="my-1" />}
                  <DropdownMenuItem
                    onPress={handleItemPress(onSignOut)}
                    className="flex-row items-center gap-3 px-4 py-2.5 active:bg-destructive/20">
                    <Icon as={LogOutIcon} className="text-destructive" size={20} />
                    <Text className="font-medium text-destructive">Sign out</Text>
                  </DropdownMenuItem>
                </View>
              </GlassView>
            ) : (
              <View className="min-w-[200px] overflow-hidden rounded-xl border border-white/30 bg-white/95 py-1">
                {onProfile && (
                  <DropdownMenuItem
                    onPress={handleItemPress(onProfile)}
                    className="flex-row items-center gap-3 px-4 py-2.5 active:bg-black/5">
                    <Icon as={UserIcon} className="text-muted-foreground" size={20} />
                    <Text className="text-foreground">Profile</Text>
                  </DropdownMenuItem>
                )}
                {onSettings && (
                  <DropdownMenuItem
                    onPress={handleItemPress(onSettings)}
                    className="flex-row items-center gap-3 px-4 py-2.5 active:bg-black/5">
                    <Icon as={SettingsIcon} className="text-muted-foreground" size={20} />
                    <Text className="text-foreground">Settings</Text>
                  </DropdownMenuItem>
                )}
                {(onProfile || onSettings) && <DropdownMenuSeparator className="my-1" />}
                <DropdownMenuItem
                  onPress={handleItemPress(onSignOut)}
                  className="flex-row items-center gap-3 px-4 py-2.5 active:bg-destructive/10">
                  <Icon as={LogOutIcon} className="text-destructive" size={20} />
                  <Text className="font-medium text-destructive">Sign out</Text>
                </DropdownMenuItem>
              </View>
            )}
          </NativeOnlyAnimatedView>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenuRoot>
  );
}
