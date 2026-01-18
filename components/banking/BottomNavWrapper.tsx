// import { BottomNav } from './BottomNav';
// import { router, usePathname } from 'expo-router';
// import {
//   HomeIcon,
//   QrCodeIcon,
//   ArrowLeftRightIcon,
//   Grid3x3Icon,
// } from 'lucide-react-native';

// const NAV_ITEMS = [
//   { icon: HomeIcon, label: 'Home', path: '/' },
//   { icon: QrCodeIcon, label: 'Scan', path: '/scan' },
//   { icon: ArrowLeftRightIcon, label: 'Transfer', path: '/Transfer' },
//   { icon: Grid3x3Icon, label: 'Explore', path: '/explore' },
// ] as const;

// export function BottomNavWrapper() {
//   const pathname = usePathname();

//   const items = NAV_ITEMS.map((item) => ({
//     ...item,
//     active: pathname === item.path || pathname.startsWith(item.path + '/'),
//     onPress: () => {
//       if (pathname !== item.path) {
//         router.push(item.path as any);
//       }
//     },
//   }));

//   return <BottomNav items={items} />;
// }
