import React from 'react';
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { THEME } from '@/lib/theme';

const TabLayout = () => {
  return (
    <NativeTabs
      backgroundColor={THEME.light.background}
      badgeBackgroundColor={THEME.light.primary}
      labelVisibilityMode="unlabeled"
      disableTransparentOnScrollEdge
      badgeTextColor={THEME.light.background}>
      <NativeTabs.Trigger name="home">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: 'house', selected: 'house.fill' }}
          md="home"
          selectedColor={THEME.light.primary}
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="scan">
        <NativeTabs.Trigger.Label>Scan</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="qrcode" md="qr_code" selectedColor={THEME.light.primary} />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="transfer">
        <NativeTabs.Trigger.Label>Transfer</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require('@/assets/images/Send.png')}
          selectedColor={THEME.light.primary}
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="explore">
        <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf="square.grid.2x2"
          md="explore"
          selectedColor={THEME.light.primary}
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
};

export default TabLayout;
