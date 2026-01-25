import React from 'react';
import { NativeTabs } from 'expo-router/unstable-native-tabs';

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
        <NativeTabs.Trigger.Icon sf="arrow.left.arrow.right" md="arrow_left" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="explore">
        <NativeTabs.Trigger.Icon sf="square.grid.2x2" md="explore" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
};

export default TabLayout;
