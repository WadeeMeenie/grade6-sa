import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, Pressable, View } from 'react-native';
import { colors, radius, spacing, typography } from '../../src/design-system/theme';
import { grade6MathsObjectives } from '../../src/curriculum/grade6-maths';

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const objective = grade6MathsObjectives.find((item) => item.id === id) ?? grade6MathsObjectives[0];

  return <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
    <Pressable onPress={() => router.back()} style={styles.back}><Ionicons name="arrow-back" size={22} color={colors.ink} /><Text style={styles.backText}>Back</Text></Pressable>
    <View style={styles.pill}><Text style={styles.pillText}>TERM {objective.term} · {objective.strand}</Text></View>
    <Text style={styles.title}>{objective.topic}</Text>
    <Text style={styles.skill}>{objective.skill}</Text>

    <View style={styles.masteryCard}><View style={styles.masteryTop}><Text style={styles.masteryLabel}>MASTERY</Text><Text style={styles.masteryValue}>0%</Text></View><View style={styles.track}><View style={styles.fill} /></View><Text style={styles.masteryHint}>Complete practice to build mastery.</Text></View>

    <View style={styles.lessonCard}><Text style={styles.section}>Today’s goal</Text><Text style={styles.goal}>{objective.statement}</Text><View style={styles.example}><Text style={styles.exampleLabel}>LEARN</Text><Text style={styles.exampleTitle}>Understand the idea first</Text><Text style={styles.exampleBody}>We will explain the concept with a simple example, then let you try it yourself. Your mistakes will guide the next explanation.</Text></View></View>

    <Pressable style={styles.primaryButton} onPress={() => router.push({ pathname: '/practice/[id]', params: { id: objective.id } })}><Text style={styles.primaryText}>Start practice</Text><Ionicons name="arrow-forward" size={20} color={colors.surface} /></Pressable>
  </ScrollView>;
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.canvas }, content: { padding: spacing.xl, paddingBottom: 48 },
  back: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: spacing.xl }, backText: { ...typography.body, color: colors.ink, fontWeight: '700' },
  pill: { alignSelf: 'flex-start', backgroundColor: colors.primarySoft, borderRadius: radius.pill, paddingHorizontal: 12, paddingVertical: 7 }, pillText: { ...typography.caption, color: colors.primary },
  title: { ...typography.title, color: colors.ink, marginTop: spacing.lg }, skill: { ...typography.body, color: colors.primary, marginTop: spacing.sm, fontWeight: '700' },
  masteryCard: { backgroundColor: colors.ink, borderRadius: radius.lg, padding: spacing.lg, marginTop: spacing.xl }, masteryTop: { flexDirection: 'row', justifyContent: 'space-between' }, masteryLabel: { ...typography.caption, color: '#B8C4D6', letterSpacing: 1.2 }, masteryValue: { ...typography.heading, color: colors.surface }, track: { height: 8, backgroundColor: '#334155', borderRadius: radius.pill, marginTop: spacing.md, overflow: 'hidden' }, fill: { width: '0%', height: '100%', backgroundColor: colors.accent }, masteryHint: { ...typography.caption, color: '#CBD5E1', marginTop: spacing.sm },
  lessonCard: { backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, borderRadius: radius.lg, padding: spacing.xl, marginTop: spacing.lg }, section: { ...typography.caption, color: colors.primary, letterSpacing: 1.1 }, goal: { ...typography.body, color: colors.ink, marginTop: spacing.sm, lineHeight: 25, fontWeight: '700' },
  example: { backgroundColor: colors.canvas, borderRadius: radius.md, padding: spacing.lg, marginTop: spacing.lg }, exampleLabel: { ...typography.caption, color: colors.accent, letterSpacing: 1.1 }, exampleTitle: { ...typography.heading, color: colors.ink, marginTop: 6 }, exampleBody: { ...typography.body, color: colors.muted, marginTop: spacing.sm },
  primaryButton: { minHeight: 56, backgroundColor: colors.primary, borderRadius: radius.md, paddingHorizontal: spacing.xl, marginTop: spacing.lg, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: spacing.sm }, primaryText: { color: colors.surface, fontSize: 16, fontWeight: '800' },
});
