import { useState } from 'react';
import { Platform, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { GlassView } from 'expo-glass-effect';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { ArrowLeftIcon } from 'lucide-react-native';
import { TransferStep1 } from '@/components/transfer/TransferStep1';
import { TransferStep2 } from '@/components/transfer/TransferStep2';
import { TransferStep3 } from '@/components/transfer/TransferStep3';
import KeyboardAwareView from '@/components/ui/keyboard-aware-view';
import { light, medium, success } from '@/lib/haptics';

/**
 * TransferScreen - Multi-step transfer flow
 *
 * Architecture:
 * 1. State management: Uses React useState to manage step and form data
 * 2. Step navigation: Linear progression (1 -> 2 -> 3) with ability to go back
 * 3. Form validation: Validates inputs before allowing progression
 * 4. Data flow: Form data flows down as props, callbacks flow up for updates
 *
 * Steps:
 * - Step 1: Input form (account number, amount, purpose)
 * - Step 2: Review (allows editing before confirmation)
 * - Step 3: Final confirmation with transfer details
 */
export default function TransferScreen() {
  const insets = useSafeAreaInsets();
  const [currentStep, setCurrentStep] = useState(1);

  // Form state - managed at top level so it persists across steps
  const [formData, setFormData] = useState({
    accountNumber: '',
    amount: '',
    purpose: '',
  });

  const [errors, setErrors] = useState<{
    accountNumber?: string;
    amount?: string;
    purpose?: string;
  }>({});

  /**
   * Validation logic
   *
   * Why here? Centralized validation ensures consistency.
   * We validate before allowing step progression.
   */
  const validateStep1 = (): boolean => {
    const newErrors: typeof errors = {};

    if (!formData.accountNumber.trim()) {
      newErrors.accountNumber = 'Account number is required';
    } else if (formData.accountNumber.trim().length < 10) {
      newErrors.accountNumber = 'Account number must be at least 10 digits';
    }

    if (!formData.amount.trim()) {
      newErrors.amount = 'Amount is required';
    } else {
      const amountNum = parseFloat(formData.amount);
      if (isNaN(amountNum) || amountNum <= 0) {
        newErrors.amount = 'Please enter a valid amount';
      } else if (amountNum > 20000) {
        newErrors.amount = 'Amount exceeds single transaction limit of GHS 20,000';
      }
    }

    if (!formData.purpose.trim()) {
      newErrors.purpose = 'Purpose is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Step navigation handlers
   *
   * These functions handle moving between steps.
   * Validation happens before progression to ensure data integrity.
   */
  const handleStep1Continue = () => {
    if (validateStep1()) {
      medium();
      setCurrentStep(2);
    }
  };

  const handleStep2Continue = () => {
    medium();
    setCurrentStep(3);
  };

  const handleStep2Edit = () => {
    light();
    setCurrentStep(1);
  };

  const calculateTransferDetails = () => {
    const transferAmount = parseFloat(formData.amount) || 0;
    const eLevy = transferAmount * 0.015; // 1.5% e-levy
    const totalTransfer = transferAmount + eLevy;

    return {
      transferAmount: `₵${transferAmount.toFixed(2)}`,
      eLevy: `₵${eLevy.toFixed(2)}`,
      totalTransfer: `₵${totalTransfer.toFixed(2)}`,
    };
  };

  const transferDetails = calculateTransferDetails();

  const handleStep3Confirm = () => {
    success();
    console.log('Transfer confirmed:', formData);
    router.push({
      pathname: '/(tabs)/home',
      params: {
        transferSuccess: 'true',
        amount: transferDetails.transferAmount,
        recipientName: 'Regina Afia Nkum',
      },
    });

    setFormData({
      accountNumber: '',
      amount: '',
      purpose: '',
    });
  };

  const handleStep3Cancel = () => {
    light();
    setCurrentStep(1);
    setFormData({
      accountNumber: '',
      amount: '',
      purpose: '',
    });
    router.back();
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <TransferStep1
            accountNumber={formData.accountNumber}
            amount={formData.amount}
            purpose={formData.purpose}
            onAccountNumberChange={(value) =>
              setFormData((prev) => ({ ...prev, accountNumber: value }))
            }
            onAmountChange={(value) => setFormData((prev) => ({ ...prev, amount: value }))}
            onPurposeChange={(value) => setFormData((prev) => ({ ...prev, purpose: value }))}
            onContinue={handleStep1Continue}
            errors={errors}
          />
        );

      case 2:
        return (
          <TransferStep2
            accountNumber={formData.accountNumber}
            amount={formData.amount}
            purpose={formData.purpose}
            onEdit={handleStep2Edit}
            onContinue={handleStep2Continue}
          />
        );

      case 3:
        return (
          <TransferStep3
            fromAccount="Access. 104900004332"
            toAccount={`GCB. ${formData.accountNumber}`}
            transferAmount={transferDetails.transferAmount}
            eLevy={transferDetails.eLevy}
            totalTransfer={transferDetails.totalTransfer}
            onConfirm={handleStep3Confirm}
            onCancel={handleStep3Cancel}
          />
        );

      default:
        return null;
    }
  };

  return (
    <KeyboardAwareView keyboardVerticalOffset={Platform.OS === 'ios' ? 5 : 0}>
      <View className="flex-1 bg-background" style={{ paddingTop: insets.top }}>
        {Platform.OS === 'ios' ? (
          <GlassView
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
              paddingVertical: 10,
              marginHorizontal: 16,
              marginTop: 8,
              borderRadius: 100,
              width: 60,
            }}
            glassEffectStyle="regular">
            <Button
              variant="ghost"
              size="icon"
              onPress={() => {
                light();
                router.back();
              }}
              className="h-10 w-full">
              <Icon as={ArrowLeftIcon} className="text-input" size={24} />
            </Button>
          </GlassView>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            onPress={() => {
              light();
              router.back();
            }}
            className="h-10 w-10">
            <Icon as={ArrowLeftIcon} className="text-input" size={24} />
          </Button>
        )}

        {renderCurrentStep()}
      </View>
    </KeyboardAwareView>
  );
}
