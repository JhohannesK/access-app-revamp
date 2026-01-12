import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import type { LucideIcon } from 'lucide-react-native';
import { View } from 'react-native';

type QuickActionButtonProps = {
  icon: LucideIcon;
  label: string;
  onPress?: () => void;
};

export function QuickActionButton({ icon, label, onPress }: QuickActionButtonProps) {
  return (
    <View className="flex-1 items-center gap-2">
      <Button onPress={onPress} className="h-16 w-16 rounded-full bg-primary" variant="default">
        <Icon as={icon} className="text-input" size={24} />
      </Button>
      <Text className="text-xs text-foreground">{label}</Text>
    </View>
  );
}
