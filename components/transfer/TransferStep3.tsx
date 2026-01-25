import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { View, ScrollView } from 'react-native';
import { ProgressIndicator } from './ProgressIndicator';
import { Icon } from '@/components/ui/icon';
import { ArrowUpIcon } from 'lucide-react-native';

type TransferStep3Props = {
  fromAccount: string;
  toAccount: string;
  transferAmount: string;
  eLevy: string;
  totalTransfer: string;
  onConfirm: () => void;
  onCancel: () => void;
};


export function TransferStep3({
  fromAccount,
  toAccount,
  transferAmount,
  eLevy,
  totalTransfer,
  onConfirm,
  onCancel,
}: TransferStep3Props) {
  return (
    <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
      <View className="flex-1 px-4 py-6">
        <ProgressIndicator currentStep={3} totalSteps={3} />

        <View className="mb-6 items-center">
          <View className="mb-4 h-24 w-24 items-center justify-center rounded-full bg-primary">
            <Icon as={ArrowUpIcon} className="text-input" size={48} />
          </View>

          <Text className="mb-1 text-sm text-muted-foreground">Total transfer</Text>
          <Text className="text-4xl font-bold text-foreground font-manrope">{totalTransfer}</Text>
        </View>

        <View className="mb-8">
          <Text className="mb-4 text-lg font-semibold text-foreground">
            Transfer detail
          </Text>

          <View className="gap-3">
            <DetailRow label="From" value={fromAccount} />
            <DetailRow label="To" value={toAccount} />
            <DetailRow label="Transfer" value={transferAmount} />
            <DetailRow label="E-levy" value={eLevy} />
            <View className="mt-2 border-t border-border pt-3">
              <DetailRow label="Total transfer" value={totalTransfer} isBold />
            </View>
          </View>
        </View>

        <View className="gap-3">
          <Button onPress={onConfirm} className="w-full">
            <Text className="font-bold text-input">Confirm</Text>
          </Button>

          <Button variant="ghost" onPress={onCancel} className="w-full">
            <Text className="font-medium text-foreground">Cancel</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

type DetailRowProps = {
  label: string;
  value: string;
  isBold?: boolean;
};

export function DetailRow({ label, value, isBold }: DetailRowProps) {
  return (
    <View className="flex-row justify-between">
      <Text className={isBold ? 'font-semibold text-foreground' : 'text-muted-foreground'}>
        {label}
      </Text>
      <Text className={isBold ? 'font-bold text-foreground' : 'font-medium text-foreground'}>
        {value}
      </Text>
    </View>
  );
}
