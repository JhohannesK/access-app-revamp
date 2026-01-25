import { View, Text, TextInput, TextInputProps } from 'react-native'
import React, { forwardRef } from 'react'
import { cn } from '@/lib/utils';
import { Input } from './input';

export interface InputProps extends TextInputProps {
    label?: string;
    error?: string;
    containerClassName?: string;
}



const InputWithLabel = forwardRef<TextInput, InputProps>(
    ({ label, error, className, containerClassName, ...props }, ref) => {
        return (
            <View className={cn('w-full', containerClassName)}>
                {label && (
                    <Text className="mb-2 text-sm font-medium text-foreground">{label}</Text>
                )}
                <Input {...props} ref={ref} />
                {error && (
                    <Text className="mt-1 text-sm text-destructive">{error}</Text>
                )}
            </View>
        );
    }
);

InputWithLabel.displayName = 'InputWithLabel';

export { InputWithLabel };