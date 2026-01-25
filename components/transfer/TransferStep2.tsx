import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { View, ScrollView } from 'react-native';
import { ProgressIndicator } from './ProgressIndicator';
import { DetailRow } from './TransferStep3';

type TransferStep2Props = {
  accountNumber: string;
  amount: string;
  purpose: string;
  onEdit: () => void;
  onContinue: () => void;
};


export function TransferStep2({
  accountNumber,
  amount,
  purpose,
  onEdit,
  onContinue,
}: TransferStep2Props) {
  return (
    <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
      <View className="flex-1 px-4 py-6">
        <ProgressIndicator currentStep={2} totalSteps={3} />

        <View className="mb-8">
          <Text className="mb-4 text-lg font-semibold text-foreground">
            Review Transfer Details
          </Text>

          <View className="gap-3">
            <DetailRow label="Account Number" value={accountNumber} />
            <DetailRow label="Amount" value={amount} />
            <DetailRow label="Purpose" value={purpose} />
          </View>
        </View>

        <View className="gap-3">
          <Button onPress={onContinue} className="w-full">
            <Text className="font-bold text-input">Continue</Text>
          </Button>

          <Button variant="outline" onPress={onEdit} className="w-full">
            <Text className="font-bold text-input">Edit</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
