import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import { colors, radius, spacing, typography } from '../../src/design-system/theme';
import { grade6MathsObjectives } from '../../src/curriculum/grade6-maths';

export default function PracticeScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const objective = grade6MathsObjectives.find((item) => item.id === id) ?? grade6MathsObjectives[0];
  const [selected, setSelected] = useState<string | null>(null);
  const correct = selected === '6 000';

  return <View style={styles.screen}>
    <View style={styles.header}><Pressable onPress={() => router.back()}><Ionicons name="close" size={25} color={colors.ink} /></Pressable><Text style={styles.headerTitle}>Practice</Text><Text style={styles.counter}>1 / 5</Text></View>
    <View style={styles.progress}><View style={styles.progressFill} /></View>
    <View style={styles.content}>
      <Text style={styles.eyebrow}>CHECK YOUR THINKING</Text>
      <Text style={styles.topic}>{objective.skill}</Text>
      <View style={styles.questionCard}><Text style={styles.question}>What is the value of the 6 in 6 482?</Text><Text style={styles.hint}>Choose the best answer.</Text></View>
      {['6 000', '600', '60', '6'].map((answer) => <Pressable key={answer} onPress={() => setSelected(answer)} style={[styles.option, selected === answer && (answer === '6 000' ? styles.correct : styles.incorrect)]}><Text style={styles.optionText}>{answer}</Text>{selected === answer && <Ionicons name={answer === '6 000' ? 'checkmark-circle' : 'close-circle'} size={22} color={answer === '6 000' ? colors.success : colors.danger} />}</Pressable>)}
      {selected && <View style={[styles.feedback, correct ? styles.feedbackCorrect : styles.feedbackWrong]}><Text style={styles.feedbackTitle}>{correct ? 'Nice work!' : 'Not quite yet.'}</Text><Text style={styles.feedbackText}>{correct ? 'The 6 is in the thousands place, so its value is 6 000.' : 'Look at the position of the 6. It is in the thousands place. Try again with that clue.'}</Text></View>}
    </View>
    <View style={styles.footer}><Pressable disabled={!selected} onPress={() => router.back()} style={[styles.next, !selected && styles.nextDisabled]}><Text style={styles.nextText}>Continue</Text><Ionicons name="arrow-forward" size={20} color={colors.surface} /></Pressable></View>
  </View>;
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.canvas }, header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: spacing.xl, paddingBottom: spacing.md }, headerTitle: { ...typography.heading, color: colors.ink }, counter: { ...typography.caption, color: colors.muted },
  progress: { height: 5, backgroundColor: colors.border }, progressFill: { width: '20%', height: '100%', backgroundColor: colors.primary }, content: { flex: 1, padding: spacing.xl }, eyebrow: { ...typography.caption, color: colors.primary, letterSpacing: 1.2 }, topic: { ...typography.body, color: colors.muted, marginTop: 4 }, questionCard: { backgroundColor: colors.surface, borderRadius: radius.lg, borderWidth: 1, borderColor: colors.border, padding: spacing.xl, marginTop: spacing.xl, marginBottom: spacing.md }, question: { fontSize: 24, lineHeight: 31, fontWeight: '800', color: colors.ink }, hint: { ...typography.caption, color: colors.muted, marginTop: spacing.md },
  option: { minHeight: 56, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, paddingHorizontal: spacing.lg, marginBottom: spacing.sm, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }, optionText: { ...typography.body, color: colors.ink, fontWeight: '700' }, correct: { borderColor: colors.success, backgroundColor: '#E8F7F4' }, incorrect: { borderColor: colors.danger, backgroundColor: '#FDEDEA' },
  feedback: { borderRadius: radius.md, padding: spacing.lg, marginTop: spacing.sm }, feedbackCorrect: { backgroundColor: '#E8F7F4' }, feedbackWrong: { backgroundColor: '#FDEDEA' }, feedbackTitle: { ...typography.body, color: colors.ink, fontWeight: '800' }, feedbackText: { ...typography.caption, color: colors.muted, marginTop: 4, lineHeight: 20 },
  footer: { padding: spacing.xl, paddingTop: spacing.sm }, next: { minHeight: 56, borderRadius: radius.md, backgroundColor: colors.primary, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8 }, nextDisabled: { opacity: 0.4 }, nextText: { color: colors.surface, fontSize: 16, fontWeight: '800' },
});
