export const colors = {
  ink: '#14213D',
  muted: '#64748B',
  canvas: '#F7F9FC',
  surface: '#FFFFFF',
  primary: '#176B87',
  primarySoft: '#DFF3F7',
  accent: '#F4A261',
  success: '#2A9D8F',
  warning: '#E9C46A',
  danger: '#E76F51',
  border: '#E2E8F0',
} as const;

export const spacing = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 } as const;
export const radius = { sm: 10, md: 16, lg: 22, pill: 999 } as const;

export const typography = {
  title: { fontSize: 28, lineHeight: 34, fontWeight: '800' as const },
  heading: { fontSize: 20, lineHeight: 26, fontWeight: '700' as const },
  body: { fontSize: 16, lineHeight: 23, fontWeight: '500' as const },
  caption: { fontSize: 13, lineHeight: 18, fontWeight: '600' as const },
};
