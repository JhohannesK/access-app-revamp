// // import { Icon } from '@/components/ui/icon';
// import { Text } from '@/components/ui/text';
// import { HomeIcon, QrCodeIcon, ArrowLeftRightIcon, Grid3x3Icon } from 'lucide-react-native';
// import { Pressable, View } from 'react-native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';

// type NavItem = {
//   icon: typeof HomeIcon;
//   label: string;
//   active?: boolean;
//   onPress?: () => void;
// };

// type BottomNavProps = {
//   items: NavItem[];
// };

// const BOTTOM_NAV_HEIGHT = 60;

// export function BottomNav({ items }: BottomNavProps) {
//   const insets = useSafeAreaInsets();
//   const totalHeight = BOTTOM_NAV_HEIGHT + insets.bottom;
  
//   return (
//     <NativeTabs 
//       // className="absolute bottom-0 left-0 right-0 border-t border-border bg-white"
//       // style={{ 
//       //   paddingBottom: insets.bottom,
//       //   height: totalHeight,
//       // }}
//     >
//         {items.map((item, index) => (
//           <NativeTabs.Trigger
//             key={index}
//             name={item.label}
//            >
//             <Label>{item.label}</Label>
//             <Icon
//               sf={'gear'}
//               drawable="custom_settings_drawable"
//               // className={item.active ? 'text-primary' : 'text-muted-foreground'}
//               // size={24}
//             />
//             <Text
//               className={`text-xs ${item.active ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
//               {item.label}
//             </Text>
//           </NativeTabs.Trigger>
//         ))}
//     </NativeTabs>
//   );
// }
