import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, radius, spacing, typography } from '@/src/design-system/theme';

const subjects = [
  { name: 'Mathematics', progress: 18, icon: 'calculator-outline' as const },
  { name: 'Languages', progress: 8, icon: 'book-outline' as const },
  { name: 'Natural Sciences & Technology', progress: 0, icon: 'flask-outline' as const },
  { name: 'Social Sciences', progress: 0, icon: 'globe-outline' as const },
];

export default function HomeScreen() {
  return <SafeAreaView style={styles.safe}>
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.header}><View><Text style={styles.eyebrow}>GRADE 6 SA</Text><Text style={styles.title}>Ready to learn?</Text></View><View style={styles.avatar}><Text style={styles.avatarText}>W</Text></View></View>
      <View style={styles.goalCard}><View style={styles.goalCopy}><Text style={styles.goalLabel}>TODAY'S GOAL</Text><Text style={styles.goalTitle}>Keep your learning streak going.</Text><Text style={styles.goalBody}>15 minutes · 1 lesson · 5 practice questions</Text></View><View style={styles.progressRing}><Text style={styles.progressValue}>40%</Text></View></View>
      <Text style={styles.sectionTitle}>Continue learning</Text>
      <Pressable style={styles.lessonCard} onPress={() => router.push('/curriculum/mathematics')}><View style={styles.lessonBadge}><Ionicons name="calculator-outline" size={23} color={colors.primary} /></View><View style={styles.lessonCopy}><Text style={styles.lessonSubject}>MATHEMATICS · TERM 1</Text><Text style={styles.lessonTitle}>Place value & large numbers</Text><Text style={styles.lessonMeta}>Continue your curriculum</Text></View><Ionicons name="chevron-forward" size={22} color={colors.primary} /></Pressable>
      <View style={styles.rowBetween}><Text style={styles.sectionTitle}>Your subjects</Text><Pressable onPress={() => router.push('/curriculum')}><Text style={styles.link}>View all</Text></Pressable></View>
      {subjects.map((subject) => <Pressable key={subject.name} style={styles.subjectCard} onPress={() => subject.name === 'Mathematics' && router.push('/curriculum/mathematics')}><View style={styles.subjectIcon}><Ionicons name={subject.icon} size={21} color={colors.primary} /></View><View style={styles.subjectCopy}><Text style={styles.subjectName}>{subject.name}</Text><Text style={styles.subjectMeta}>{subject.progress}% mastered</Text><View style={styles.track}><View style={[styles.fill, { width: `${Math.max(subject.progress, 2)}%` }]} /></View></View></Pressable>)}
    </ScrollView>
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.canvas }, content: { padding: spacing.xl, gap: spacing.lg, paddingBottom: 48 }, header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  eyebrow: { ...typography.caption, color: colors.primary, letterSpacing: 1.4 }, title: { ...typography.title, color: colors.ink, marginTop: 4 }, avatar: { width: 46, height: 46, borderRadius: 23, backgroundColor: colors.primarySoft, alignItems: 'center', justifyContent: 'center' }, avatarText: { color: colors.primary, fontWeight: '800', fontSize: 18 },
  goalCard: { backgroundColor: colors.primary, borderRadius: radius.lg, padding: spacing.xl, flexDirection: 'row', alignItems: 'center', gap: spacing.lg }, goalCopy: { flex: 1, gap: 6 }, goalLabel: { color: '#DFF3F7', ...typography.caption, letterSpacing: 1 }, goalTitle: { color: colors.surface, ...typography.heading }, goalBody: { color: '#E7F7FA', ...typography.caption }, progressRing: { width: 72, height: 72, borderRadius: 36, borderWidth: 6, borderColor: colors.accent, alignItems: 'center', justifyContent: 'center' }, progressValue: { color: colors.surface, fontSize: 14, fontWeight: '800' },
  sectionTitle: { ...typography.heading, color: colors.ink }, lessonCard: { backgroundColor: colors.surface, borderRadius: radius.md, padding: spacing.lg, flexDirection: 'row', alignItems: 'center', gap: spacing.md, borderWidth: 1, borderColor: colors.border }, lessonBadge: { width: 48, height: 48, borderRadius: 14, backgroundColor: colors.primarySoft, alignItems: 'center', justifyContent: 'center' }, lessonCopy: { flex: 1, gap: 3 }, lessonSubject: { ...typography.caption, color: colors.primary, letterSpacing: 0.7 }, lessonTitle: { ...typography.body, color: colors.ink, fontWeight: '800' }, lessonMeta: { ...typography.caption, color: colors.muted },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: spacing.sm }, link: { color: colors.primary, fontWeight: '700', fontSize: 14 }, subjectCard: { backgroundColor: colors.surface, borderRadius: radius.md, padding: spacing.lg, flexDirection: 'row', gap: spacing.md, borderWidth: 1, borderColor: colors.border }, subjectIcon: { width: 44, height: 44, borderRadius: 13, backgroundColor: colors.primarySoft, alignItems: 'center', justifyContent: 'center' }, subjectCopy: { flex: 1, gap: 4 }, subjectName: { ...typography.body, color: colors.ink, fontWeight: '800' }, subjectMeta: { ...typography.caption, color: colors.muted }, track: { height: 6, backgroundColor: colors.border, borderRadius: 3, overflow: 'hidden', marginTop: 3 }, fill: { height: '100%', backgroundColor: colors.primary, borderRadius: 3 },
});
