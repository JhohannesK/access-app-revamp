import { KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';

export default function KeyboardAwareView({
  children,
  keyboardVerticalOffset = 0,
}: {
  children: React.ReactNode;
  keyboardVerticalOffset?: number;
}) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={keyboardVerticalOffset}
      className="flex-1">
      {children}
    </KeyboardAvoidingView>
  );
}
