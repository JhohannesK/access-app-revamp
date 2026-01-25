import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { CreditCardIcon, WifiIcon } from 'lucide-react-native';
import { View } from 'react-native';
import { Image } from 'expo-image';
import { AccessLogoSvg } from './AccessLogoSvg';

const LOGO_IMAGE = require('../../assets/images/logo.png');

type BankCardProps = {
  cardNumber: string;
  cardholderName: string;
  bankLogo?: React.ReactNode;
};

export function BankCard({ cardNumber, cardholderName, bankLogo }: BankCardProps) {
  const formatCardNumber = (num: string) => {
    return num.replace(/(\d{4})/g, '$1 ').trim();
  };

  return (
    <View className="mx-4 mb-6 overflow-hidden rounded-2xl bg-card shadow-lg">
      {/* Card Background with Diagonal Stripe */}
      <View className="relative h-52">
        {/* Diagonal Stripe */}

        {/* Subtle diagonal stripes pattern */}
        <View className="absolute inset-0 opacity-[0.03]">
          {Array.from({ length: 8 }).map((_, i) => (
            <View
              key={i}
              className="absolute h-full w-px bg-card-foreground"
              style={{
                left: `${i * 12.5}%`,
                transform: [{ rotate: '45deg' }],
              }}
            />
          ))}
        </View>

        {/* Card Content */}
        <View className="relative h-full p-5">
          {/* Top Row: Logo and Contactless */}
          <View className="mb-8 flex-row items-center justify-between">
            {bankLogo || (
              <View className="flex-row items-center gap-2">
                <Image
                  source={LOGO_IMAGE}
                  style={{ width: 32, height: 32 }}
                  contentFit="contain"
                  transition={200}
                />
                <AccessLogoSvg width={80} height={15} color="#060CD2" />
              </View>
            )}
            <Icon as={WifiIcon} className="text-card-foreground" size={24} />
          </View>

          {/* Chip */}
          <View className="mb-4 h-8 w-10 rounded-sm bg-yellow-500" />

          {/* Card Number */}
          <View className="mb-4">
            <Text className="text-xl font-semibold tracking-wider text-card-foreground">
              {formatCardNumber(cardNumber)}
            </Text>
          </View>

          {/* Cardholder Name */}
          <View className="mb-2">
            <Text className="text-sm font-medium uppercase tracking-wide text-card-foreground">
              {cardholderName}
            </Text>
          </View>

          {/* Visa Logo */}
          <View className="absolute bottom-5 right-5">
            <Text className="text-lg font-bold text-card-foreground">VISA</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
