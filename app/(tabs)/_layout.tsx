import React from 'react';
import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';

const TabLayout = () => {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Icon sf="house.fill" drawable="btn_star" />
        <Label>Home</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="scan">
        <Icon sf="qrcode" drawable="custom_android_drawable" />
        <Label>Scan</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="transfer">
        <Icon sf="arrow.left.arrow.right" drawable="custom_android_drawable" />
        <Label>Transfer</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="explore">
        <Icon sf="square.grid.2x2" drawable="custom_android_drawable" />
        <Label>Explore</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
};

export default TabLayout;
