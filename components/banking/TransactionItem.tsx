import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react-native';
import { View } from 'react-native';

type TransactionType = 'sent' | 'received' | 'payment';

type TransactionItemProps = {
  type: TransactionType;
  description: string;
  date: string;
  amount?: string;
  balance: string;
  amountColor?: 'green' | 'orange';
};

const TRANSACTION_CONFIG: Record<TransactionType, { icon: typeof ArrowUpIcon; bgColor: string }> = {
  sent: { icon: ArrowDownIcon, bgColor: 'bg-primary' },
  received: { icon: ArrowUpIcon, bgColor: 'bg-primary' },
  payment: { icon: ArrowUpIcon, bgColor: 'bg-primary' },
};

export function TransactionItem({
  type,
  description,
  date,
  amount,
  balance,
  amountColor = 'green',
}: TransactionItemProps) {
  const config = TRANSACTION_CONFIG[type];
  const IconComponent = config.icon;
  const showAmount = amount !== undefined;

  return (
    <View className="flex-row items-center gap-3 px-4 py-4">
      {/* Icon Circle */}
      <View className={`h-12 w-12 items-center justify-center rounded-full ${config.bgColor}`}>
        <Icon as={IconComponent} className="text-input" size={20} />
      </View>

      {/* Transaction Details */}
      <View className="flex-1">
        <Text className="mb-1 font-medium text-foreground">{description}</Text>
        <Text className="mb-1 text-xs text-muted-foreground">{date}</Text>
        <Text className="text-xs text-muted-foreground">Balance: {balance}</Text>
      </View>

      {/* Amount */}
      {showAmount && (
        <Text
          className={`text-base font-semibold ${
            amountColor === 'green' ? 'text-green-600' : 'text-orange-600'
          }`}>
          {amount}
        </Text>
      )}
    </View>
  );
}
