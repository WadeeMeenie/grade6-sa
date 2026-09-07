import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, radii, spacing, typography } from '@/src/design-system/theme';

const subjects = [
  { name: 'Mathematics', progress: 32, symbol: 'M' },
  { name: 'Languages', progress: 18, symbol: 'L' },
  { name: 'Natural Sciences', progress: 12, symbol: 'S' },
  { name: 'Social Sciences', progress: 8, symbol: 'G' }
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.eyebrow}>GRADE 6 SA</Text>
            <Text style={styles.title}>Ready to learn?</Text>
          </View>
          <View style={styles.avatar} accessibilityLabel="Learner profile">
            <Text style={styles.avatarText}>W</Text>
          </View>
        </View>

        <View style={styles.goalCard}>
          <View style={styles.goalCopy}>
            <Text style={styles.goalLabel}>TODAY'S GOAL</Text>
            <Text style={styles.goalTitle}>Keep your learning streak going.</Text>
            <Text style={styles.goalBody}>15 minutes · 1 lesson · 5 practice questions</Text>
          </View>
          <View style={styles.progressRing}>
            <Text style={styles.progressValue}>40%</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Continue learning</Text>
        <View style={styles.lessonCard}>
          <View style={styles.lessonBadge}><Text style={styles.lessonBadgeText}>M</Text></View>
          <View style={styles.lessonCopy}>
            <Text style={styles.lessonSubject}>MATHEMATICS · TERM 1</Text>
            <Text style={styles.lessonTitle}>Place value & large numbers</Text>
            <Text style={styles.lessonMeta}>Next: rounding to 1 000</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </View>

        <View style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Your subjects</Text>
          <Text style={styles.link}>View all</Text>
        </View>

        {subjects.map((subject) => (
          <View style={styles.subjectCard} key={subject.name}>
            <View style={styles.subjectIcon}><Text style={styles.subjectIconText}>{subject.symbol}</Text></View>
            <View style={styles.subjectCopy}>
              <Text style={styles.subjectName}>{subject.name}</Text>
              <Text style={styles.subjectMeta}>{subject.progress}% mastered</Text>
              <View style={styles.track}>
                <View style={[styles.fill, { width: `${subject.progress}%` }]} />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.canvas },
  content: { padding: spacing.xl, gap: spacing.lg, paddingBottom: 48 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  eyebrow: { color: colors.primary, fontSize: typography.caption, fontWeight: '800', letterSpacing: 1.4 },
  title: { color: colors.ink, fontSize: typography.title, fontWeight: '800', marginTop: 4 },
  avatar: { width: 46, height: 46, borderRadius: 23, backgroundColor: colors.primarySoft, alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: colors.primary, fontWeight: '800', fontSize: 18 },
  goalCard: { backgroundColor: colors.primary, borderRadius: radii.lg, padding: spacing.xl, flexDirection: 'row', alignItems: 'center', gap: spacing.lg },
  goalCopy: { flex: 1, gap: 6 },
  goalLabel: { color: '#CBE9DE', fontSize: typography.caption, fontWeight: '800', letterSpacing: 1 },
  goalTitle: { color: '#FFFFFF', fontSize: typography.heading, fontWeight: '800', lineHeight: 26 },
  goalBody: { color: '#E4F5EE', fontSize: typography.small, lineHeight: 20 },
  progressRing: { width: 72, height: 72, borderRadius: 36, borderWidth: 6, borderColor: colors.accent, alignItems: 'center', justifyContent: 'center' },
  progressValue: { color: '#FFFFFF', fontSize: 14, fontWeight: '800' },
  sectionTitle: { color: colors.ink, fontSize: typography.heading, fontWeight: '800' },
  lessonCard: { backgroundColor: colors.surface, borderRadius: radii.md, padding: spacing.lg, flexDirection: 'row', alignItems: 'center', gap: spacing.md, borderWidth: 1, borderColor: colors.border },
  lessonBadge: { width: 48, height: 48, borderRadius: 14, backgroundColor: colors.accentSoft, alignItems: 'center', justifyContent: 'center' },
  lessonBadgeText: { color: colors.ink, fontWeight: '900', fontSize: 20 },
  lessonCopy: { flex: 1, gap: 3 },
  lessonSubject: { color: colors.primary, fontSize: 11, fontWeight: '800', letterSpacing: 0.7 },
  lessonTitle: { color: colors.ink, fontSize: typography.body, fontWeight: '800' },
  lessonMeta: { color: colors.muted, fontSize: typography.small },
  chevron: { color: colors.primary, fontSize: 30, fontWeight: '300' },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: spacing.sm },
  link: { color: colors.primary, fontWeight: '700', fontSize: typography.small },
  subjectCard: { backgroundColor: colors.surface, borderRadius: radii.md, padding: spacing.lg, flexDirection: 'row', gap: spacing.md, borderWidth: 1, borderColor: colors.border },
  subjectIcon: { width: 44, height: 44, borderRadius: 13, backgroundColor: colors.primarySoft, alignItems: 'center', justifyContent: 'center' },
  subjectIconText: { color: colors.primary, fontWeight: '900', fontSize: 17 },
  subjectCopy: { flex: 1, gap: 4 },
  subjectName: { color: colors.ink, fontSize: typography.body, fontWeight: '800' },
  subjectMeta: { color: colors.muted, fontSize: typography.caption },
  track: { height: 6, backgroundColor: '#E8EEE9', borderRadius: 3, overflow: 'hidden', marginTop: 3 },
  fill: { height: '100%', backgroundColor: colors.primary, borderRadius: 3 }
});
