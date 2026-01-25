import { View } from 'react-native';
import { Text } from '@/components/ui/text';

type BalanceBoxProps = {
  availableBalance: string;
  dailyLimit: string;
  remaining: string;
};

/**
 * BalanceBox - Displays account balance and transaction limits
 * 
 * Uses a cream/yellow background with white text as shown in the design.
 * The background is a warm amber/yellow tone that provides good contrast
 * with white text while maintaining the design aesthetic.
 */
export function BalanceBox({ availableBalance, dailyLimit, remaining }: BalanceBoxProps) {
  return (
    <View 
      className="mb-6 rounded-xl p-4"
      style={{ backgroundColor: '#F59E0B' }} // Amber background - warm yellow that works with white text
    >
      <View className="mb-3">
        <Text 
          className="mb-1 text-xs font-medium"
          style={{ color: '#FFFFFF' }}
        >
          AVAILABLE BALANCE
        </Text>
        <Text 
          className="text-3xl font-bold"
          style={{ color: '#FFFFFF' }}
        >
          {availableBalance}
        </Text>
      </View>
      
      <View className="flex-row justify-between">
        <View>
          <Text 
            className="text-xs"
            style={{ color: '#FFFFFF' }}
          >
            Daily limit: {dailyLimit}
          </Text>
        </View>
        <View>
          <Text 
            className="text-xs"
            style={{ color: '#FFFFFF' }}
          >
            Remaining: {remaining}
          </Text>
        </View>
      </View>
    </View>
  );
}
