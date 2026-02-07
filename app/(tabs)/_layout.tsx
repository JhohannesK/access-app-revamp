import React from 'react';
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { SendIcon } from 'lucide-react-native';
import { Icon } from '@/components/ui/icon';

const TabLayout = () => {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="home">
        <NativeTabs.Trigger.Icon sf={{ default: 'house', selected: 'house.fill' }} md="home" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="scan">
        <NativeTabs.Trigger.Icon sf="qrcode" md="qr_code" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="transfer">
        <NativeTabs.Trigger.Icon src={<Icon as={SendIcon} className="text-input" size={20} />}  />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="explore">
        <NativeTabs.Trigger.Icon sf="square.grid.2x2" md="explore" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
};

export default TabLayout;
