import { BankCard } from '@/components/banking/BankCard';
import { QuickActionButton } from '@/components/banking/QuickActionButton';
import { TransactionItem } from '@/components/banking/TransactionItem';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import {
  BellIcon,
  EyeIcon,
  EyeOffIcon,
  Grid3x3Icon,
  SendIcon,
  CoinsIcon,
  PhoneIcon,
} from 'lucide-react-native';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MOCK_DATA = {
  user: {
    name: 'PRINCE P.',
    profileImage: null,
    accountType: 'Savings Acc.',
  },
  balance: '₵19,379.54',
  card: {
    number: '4356399046778292',
    holderName: 'PEPRAH PRINCE',
  },
  transactions: [
    {
      id: '1',
      type: 'sent' as const,
      description: 'Airtime Sent',
      date: 'today',
      amount: '-₵30.00',
      balance: '₵19,379.54',
      amountColor: 'orange' as const,
    },
    {
      id: '2',
      type: 'received' as const,
      description: 'Transfer Received',
      date: 'July, 5',
      amount: '+₵30.00',
      balance: '₵19,409.54',
      amountColor: 'green' as const,
    },
    {
      id: '3',
      type: 'payment' as const,
      description: 'Payment',
      date: 'July, 4',
      balance: '₵19,079.54',
    },
  ],
};

export default function HomeScreen() {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const insets = useSafeAreaInsets();

  const toggleBalanceVisibility = () => {
    setBalanceVisible((prev) => !prev);
  };

  return (
    <View className="flex-1 bg-background">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View className="px-4 pb-4" style={{ paddingTop: insets.top }}>
          <View className="mb-4 flex-row items-center justify-between">
            {/* User Profile */}
            <View className="flex-row items-center gap-3">
              <View className="h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                <Text className="text-lg font-semibold text-primary">PP</Text>
              </View>
              <View>
                <Text className="font-semibold text-foreground">{MOCK_DATA.user.name}</Text>
                <View className="mt-0.5 flex-row items-center gap-2">
                  <View className="rounded bg-yellow-200 px-2 py-0.5">
                    <Text className="text-xs font-medium text-yellow-800">
                      {MOCK_DATA.user.accountType}
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="rounded-full">
              <Icon as={BellIcon} className="text-foreground" size={22} />
            </Button>
          </View>

          {/* Account Balance */}
          <View className="mb-2 flex-row items-center justify-between">
            <View>
              <Text className="text-sm text-muted-foreground">Account Balance</Text>
              <View className="mt-1 flex-row items-center gap-2">
                <Text className="text-2xl font-bold text-foreground">
                  {balanceVisible ? MOCK_DATA.balance : '••••••'}
                </Text>
                <Button
                  variant="ghost"
                  size="icon"
                  onPress={toggleBalanceVisibility}
                  className="h-6 w-6">
                  <Icon
                    as={balanceVisible ? EyeOffIcon : EyeIcon}
                    className="text-muted-foreground"
                    size={18}
                  />
                </Button>
              </View>
            </View>
            <Button className="h-10 w-10 rounded-lg bg-primary">
              <Icon as={SendIcon} className="text-input" size={20} />
            </Button>
          </View>
        </View>

        {/* Bank Card */}
        <BankCard cardNumber={MOCK_DATA.card.number} cardholderName={MOCK_DATA.card.holderName} />

        {/* Quick Actions */}
        <View className="mb-6 flex-row gap-3 px-4">
          <QuickActionButton icon={SendIcon} label="Send" />
          <QuickActionButton icon={Grid3x3Icon} label="Pay bills" />
          <QuickActionButton icon={CoinsIcon} label="Momo" />
          <QuickActionButton icon={PhoneIcon} label="Airtime" />
        </View>

        {/* Transactions Section */}
        <View className="mb-6 bg-secondary pt-5">
          <View className="mb-3 flex-row items-center justify-between px-4">
            <Text className="text-lg font-semibold text-foreground">Transactions</Text>
            <Button variant="ghost" className="h-auto p-0">
              <Text className="text-sm text-primary">See all</Text>
            </Button>
          </View>

          <View className="divide-y divide-border rounded-lg">
            {MOCK_DATA.transactions.map((transaction) => (
              <TransactionItem
                key={transaction.id}
                type={transaction.type}
                description={transaction.description}
                date={transaction.date}
                amount={transaction.amount}
                balance={transaction.balance}
                amountColor={transaction.amountColor}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
