import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, Pressable, View } from 'react-native';
import { colors, radius, spacing, typography } from '../../src/design-system/theme';
import { grade6MathsObjectives } from '../../src/curriculum/grade6-maths';

const subjects = [
  { id: 'maths', title: 'Mathematics', icon: 'calculator-outline' as const, progress: 18, tone: colors.primary },
  { id: 'languages', title: 'Languages', icon: 'book-outline' as const, progress: 8, tone: colors.accent },
  { id: 'nst', title: 'Natural Sciences & Technology', icon: 'flask-outline' as const, progress: 0, tone: colors.success },
  { id: 'social', title: 'Social Sciences', icon: 'globe-outline' as const, progress: 0, tone: '#8B5CF6' },
  { id: 'life', title: 'Life Skills', icon: 'heart-outline' as const, progress: 0, tone: colors.danger },
];

export default function CurriculumScreen() {
  const mathsTerm = grade6MathsObjectives.filter((item) => item.term === 1);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Text style={styles.eyebrow}>GRADE 6</Text>
      <Text style={styles.title}>Your curriculum</Text>
      <Text style={styles.subtitle}>Choose a subject, then work from topic to skill to mastery.</Text>
      <View style={styles.termRow}><View style={styles.termBadge}><Text style={styles.termBadgeText}>TERM 1</Text></View><Text style={styles.termText}>CAPS-aligned learning path</Text></View>
      <View style={styles.sectionHeader}><Text style={styles.heading}>Subjects</Text><Text style={styles.caption}>5 areas</Text></View>
      {subjects.map((subject) => (
        <Pressable key={subject.id} style={styles.subjectCard} onPress={() => subject.id === 'maths' && router.push('/curriculum/mathematics')}>
          <View style={[styles.iconBox, { backgroundColor: `${subject.tone}18` }]}><Ionicons name={subject.icon} size={25} color={subject.tone} /></View>
          <View style={styles.subjectBody}><Text style={styles.subjectTitle}>{subject.title}</Text><View style={styles.progressTrack}><View style={[styles.progressFill, { width: `${Math.max(subject.progress, 3)}%`, backgroundColor: subject.tone }]} /></View><Text style={styles.progressText}>{subject.progress}% started</Text></View>
          <Ionicons name="chevron-forward" size={20} color={colors.muted} />
        </Pressable>
      ))}
      <View style={styles.callout}><Ionicons name="sparkles-outline" size={22} color={colors.primary} /><View style={{ flex: 1 }}><Text style={styles.calloutTitle}>Built for mastery</Text><Text style={styles.calloutText}>{mathsTerm.length} Mathematics learning objectives are seeded for Term 1. Finish a skill before moving on.</Text></View></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.canvas }, content: { padding: spacing.xl, paddingBottom: 48 },
  eyebrow: { ...typography.caption, color: colors.primary, letterSpacing: 1.5, marginBottom: spacing.sm }, title: { ...typography.title, color: colors.ink },
  subtitle: { ...typography.body, color: colors.muted, marginTop: spacing.sm, marginBottom: spacing.lg }, termRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginBottom: spacing.xl },
  termBadge: { backgroundColor: colors.ink, borderRadius: radius.pill, paddingHorizontal: 12, paddingVertical: 7 }, termBadgeText: { color: colors.surface, fontSize: 12, fontWeight: '800' }, termText: { ...typography.caption, color: colors.muted },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.md }, heading: { ...typography.heading, color: colors.ink }, caption: { ...typography.caption, color: colors.muted },
  subjectCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.surface, borderRadius: radius.md, padding: spacing.lg, marginBottom: spacing.md, borderWidth: 1, borderColor: colors.border },
  iconBox: { width: 52, height: 52, borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginRight: spacing.md }, subjectBody: { flex: 1, marginRight: spacing.md }, subjectTitle: { ...typography.body, color: colors.ink, fontWeight: '800', marginBottom: spacing.sm },
  progressTrack: { height: 7, borderRadius: radius.pill, backgroundColor: colors.border, overflow: 'hidden' }, progressFill: { height: '100%', borderRadius: radius.pill }, progressText: { ...typography.caption, color: colors.muted, marginTop: 6 },
  callout: { flexDirection: 'row', gap: spacing.md, backgroundColor: colors.primarySoft, borderRadius: radius.md, padding: spacing.lg, marginTop: spacing.md }, calloutTitle: { ...typography.body, color: colors.ink, fontWeight: '800' }, calloutText: { ...typography.caption, color: colors.muted, marginTop: 4, lineHeight: 20 },
});
