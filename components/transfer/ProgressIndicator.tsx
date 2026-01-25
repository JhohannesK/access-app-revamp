import { cn } from '@/lib/utils';
import { View } from 'react-native';
import { Text } from '@/components/ui/text';

type ProgressIndicatorProps = {
  currentStep: number;
  totalSteps: number;
};

/**
 * ProgressIndicator - Visual representation of multi-step progress
 * 
 * Shows horizontal bars where filled bars represent completed steps.
 * The current step is highlighted with a wider bar.
 */
export function ProgressIndicator({ currentStep, totalSteps }: ProgressIndicatorProps) {
  return (
    <View className="mb-4">
      <Text className="mb-3 text-sm font-bold text-primary font-manrope">
        Step {currentStep} of {totalSteps}
      </Text>
      <View className="flex-row gap-2">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <View
              key={stepNumber}
              className={cn(
                'h-1 flex-1 rounded-full',
                isCompleted || isCurrent
                  ? 'bg-primary'
                  : 'bg-muted'
              )}
              style={{
                // Current step gets slightly wider for emphasis
                flex: isCurrent ? 1.2 : 1,
              }}
            />
          );
        })}
      </View>
    </View>
  );
}
