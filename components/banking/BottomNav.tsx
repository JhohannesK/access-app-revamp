import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { HomeIcon, QrCodeIcon, ArrowLeftRightIcon, Grid3x3Icon } from 'lucide-react-native';
import { Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type NavItem = {
  icon: typeof HomeIcon;
  label: string;
  active?: boolean;
  onPress?: () => void;
};

type BottomNavProps = {
  items: NavItem[];
};

export function BottomNav({ items }: BottomNavProps) {
  const insets = useSafeAreaInsets();
  
  return (
    <View className="border-t border-border bg-white" style={{ paddingBottom: insets.bottom }}>
      <View className="flex-row items-center justify-around px-4 py-3">
        {items.map((item, index) => (
          <Pressable
            key={index}
            onPress={item.onPress}
            className="items-center gap-1">
            <Icon
              as={item.icon}
              className={item.active ? 'text-primary' : 'text-muted-foreground'}
              size={24}
            />
            <Text
              className={`text-xs ${item.active ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
              {item.label}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
