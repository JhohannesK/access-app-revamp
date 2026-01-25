import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { View, ScrollView } from 'react-native';
import { ProgressIndicator } from './ProgressIndicator';
import { BalanceBox } from './BalanceBox';
import { InputWithLabel } from '../ui/input-with-label';

type TransferStep1Props = {
  accountNumber: string;
  amount: string;
  purpose: string;
  onAccountNumberChange: (value: string) => void;
  onAmountChange: (value: string) => void;
  onPurposeChange: (value: string) => void;
  onContinue: () => void;
  errors?: {
    accountNumber?: string;
    amount?: string;
    purpose?: string;
  };
};

export function TransferStep1({
  accountNumber,
  amount,
  purpose,
  onAccountNumberChange,
  onAmountChange,
  onPurposeChange,
  onContinue,
  errors,
}: TransferStep1Props) {
  const isFormValid = accountNumber.trim() && amount.trim() && purpose.trim();

  return (
    <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
      <View className="flex-1 px-4 py-6">
        <ProgressIndicator currentStep={1} totalSteps={3} />

        {/* Transaction Limit Notice */}
        <View className="mb-6 rounded-lg bg-muted/50 p-3">
          <Text className="text-xs text-muted-foreground">
            <Text className="font-bold text-input text-xs">NB: </Text>
            Single transaction limit is GHS 20,000.00
          </Text>
        </View>

        {/* Balance Box */}
        <BalanceBox
          availableBalance="₵19,379.54"
          dailyLimit="GHS 50,000"
          remaining="GHS 43,000"
        />

        {/* Input Fields */}
        <View className="gap-4">
          <InputWithLabel
            label="Account Number"
            placeholder="Enter account number"
            value={accountNumber}
            onChangeText={onAccountNumberChange}
            keyboardType="numeric"
            error={errors?.accountNumber}
            autoCapitalize="none"
          />

          <InputWithLabel
            label="Amount"
            placeholder="Enter amount"
            value={amount}
            onChangeText={onAmountChange}
            keyboardType="decimal-pad"
            error={errors?.amount}
          />

          <InputWithLabel
            label="Purpose of transaction"
            placeholder="Enter purpose"
            value={purpose}
            onChangeText={onPurposeChange}
            error={errors?.purpose}
            autoCapitalize="sentences"
          />
        </View>

        {/* Continue Button */}
        <View className="mt-8">
          <Button
            onPress={onContinue}
            disabled={!isFormValid}
            className="w-full text-input"
          >
            <Text className="font-bold text-input">Continue</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
