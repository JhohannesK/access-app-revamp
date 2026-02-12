import { SignInForm } from '@/components/sign-in-form';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function SignInScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-background">
      <ScrollView
        className="flex-1"
        contentContainerClassName="flex-grow justify-center px-4"
        showsVerticalScrollIndicator={false}
        style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
        <SignInForm />
      </ScrollView>
    </View>
  );
}
