import { Text, View } from 'react-native';
import { Icon } from '../ui/icon';
import { CheckCircleIcon } from 'lucide-react-native';
import { Button } from '../ui/button';
import { Dialog, DialogContent } from '../ui/dialog';

interface TransferSuccessProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onDownloadReceipt: () => void;
  onContinueBanking: () => void;
  amount: string;
  recipientName: string;
}

export function TransferSuccess({
  open,
  onOpenChange,
  amount,
  recipientName,
  onDownloadReceipt,
  onContinueBanking,
}: TransferSuccessProps) {
  const handleContinue = () => {
    onOpenChange(false);
    onContinueBanking();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="bg-white border-0 rounded-2xl p-6 max-w-sm [&>*:last-child]:opacity-0 [&>*:last-child]:pointer-events-none"
        overlayClassName="bg-black"
      >
        <View className="items-center">
          {/* Success Icon */}
          <View className="mb-6">
            <View className="mb-4 h-16 w-16 items-center justify-center rounded-full bg-black">
              <Icon as={CheckCircleIcon} className="text-white" size={40} />
            </View>
          </View>

          {/* Confirmation Message */}
          <View className="mb-8 items-center">
            <Text className="text-center text-base leading-6">
              <Text className="text-muted-foreground">You sent </Text>
              <Text className="font-bold text-primary">{amount}</Text>
              <Text className="text-foreground"> to {recipientName}</Text>
            </Text>
          </View>

          {/* Action Buttons */}
          <View className="w-full gap-3">
            {/* Continue Banking Button - Primary (Lime Green) */}
            <Button
              onPress={handleContinue}
              className="w-full rounded-lg"
              style={{ backgroundColor: '#A3E635' }}
            >
              <Text className="font-bold text-black">Continue Banking</Text>
            </Button>

            {/* Download Receipt Button - Secondary (Dark Green/Black) */}
            <Button
              variant="ghost"
              onPress={onDownloadReceipt}
              className="w-full rounded-lg"
              style={{ backgroundColor: '#166534' }}
            >
              <Text className="font-bold text-white">Download Receipt</Text>
            </Button>
          </View>
        </View>
      </DialogContent>
    </Dialog>
  );
}

