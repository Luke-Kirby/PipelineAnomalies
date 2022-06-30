// Side bar menu list items:
export interface sideBarNavList {
  label: string;
  path: string;
}

export const SideBarItems: sideBarNavList[] = [
  { label: 'Corrosion', path: '/corrosion' },
  { label: 'Milling Anomaly', path: '/milling' },
  { label: 'Girth Weld Anomaly', path: '/girthweldanomaly' },
  { label: 'Dent', path: '/dent' },
  { label: 'Lamination', path: '/lamination' },
  { label: 'Crack', path: '/crack' },
  { label: 'Buckle', path: '/buckle' },
  { label: 'Illegal Tap', path: '/illegaltap' },
];
