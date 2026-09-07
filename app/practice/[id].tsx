import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing, typography } from '../../src/design-system/theme';
import { grade6MathsObjectives } from '../../src/curriculum/grade6-maths';
import { grade6MathsPractice, gradePractice, type QuestionAttempt } from '../../src/learning/practice';

export default function PracticeScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const objective = grade6MathsObjectives.find((item) => item.id === id);
  const questions = useMemo(() => {
    if (!objective) return [];
    const focused = grade6MathsPractice.filter((question) => question.objectiveId === objective.id);
    return focused.length >= 2 ? focused : grade6MathsPractice;
  }, [objective]);

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [attempts, setAttempts] = useState<QuestionAttempt[]>([]);
  const [finished, setFinished] = useState(false);

  const question = questions[index];
  const correct = question ? selected === question.answer : false;
  const result = finished ? gradePractice(questions, attempts) : null;

  if (!objective || !question) {
    return (
      <View style={styles.resultContent}>
        <Text style={styles.resultTitle}>Practice unavailable</Text>
        <Text style={styles.resultSummary}>This lesson does not have practice questions yet.</Text>
        <Pressable onPress={() => router.back()} style={styles.next}>
          <Text style={styles.nextText}>Back to lesson</Text>
        </Pressable>
      </View>
    );
  }

  function choose(answer: string) {
    if (selected) return;
    setSelected(answer);
  }

  function continuePractice() {
    if (!selected) return;
    const nextAttempts = [...attempts, { questionId: question.id, answer: selected, correct }];
    if (index === questions.length - 1) {
      setAttempts(nextAttempts);
      setFinished(true);
      return;
    }
    setAttempts(nextAttempts);
    setSelected(null);
    setIndex((current) => current + 1);
  }

  if (finished && result) {
    return (
      <View style={styles.screen}>
        <View style={styles.resultContent}>
          <View style={styles.resultIcon}><Ionicons name="checkmark" size={38} color={colors.success} /></View>
          <Text style={styles.resultEyebrow}>PRACTICE COMPLETE</Text>
          <Text style={styles.resultTitle}>{result.percentage}%</Text>
          <Text style={styles.resultSummary}>{result.correct} of {result.total} answers correct</Text>
          <View style={styles.resultCard}>
            <Text style={styles.resultCardTitle}>{result.percentage >= 80 ? 'Strong progress' : 'Keep practising'}</Text>
            <Text style={styles.resultCardText}>
              {result.percentage >= 80
                ? `You earned +${result.masteryDelta}% mastery for this skill.`
                : 'Review the explanation, then practise this skill again.'}
            </Text>
          </View>
          <Pressable onPress={() => router.back()} style={styles.next}>
            <Text style={styles.nextText}>Back to lesson</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}><Ionicons name="close" size={25} color={colors.ink} /></Pressable>
        <Text style={styles.headerTitle}>Practice</Text>
        <Text style={styles.counter}>{index + 1} / {questions.length}</Text>
      </View>
      <View style={styles.progress}><View style={[styles.progressFill, { width: `${((index + 1) / questions.length) * 100}%` }]} /></View>

      <View style={styles.content}>
        <Text style={styles.eyebrow}>CHECK YOUR THINKING</Text>
        <Text style={styles.topic}>{objective.skill}</Text>
        <View style={styles.questionCard}>
          <Text style={styles.question}>{question.prompt}</Text>
          <Text style={styles.hint}>Choose the best answer.</Text>
        </View>

        {question.options?.map((answer) => (
          <Pressable
            key={answer}
            onPress={() => choose(answer)}
            style={[styles.option, selected === answer && (answer === question.answer ? styles.correct : styles.incorrect)]}
          >
            <Text style={styles.optionText}>{answer}</Text>
            {selected === answer && <Ionicons name={answer === question.answer ? 'checkmark-circle' : 'close-circle'} size={22} color={answer === question.answer ? colors.success : colors.danger} />}
          </Pressable>
        ))}

        {selected && (
          <View style={[styles.feedback, correct ? styles.feedbackCorrect : styles.feedbackWrong]}>
            <Text style={styles.feedbackTitle}>{correct ? 'Nice work!' : 'Not quite yet.'}</Text>
            <Text style={styles.feedbackText}>{question.explanation}</Text>
          </View>
        )}
      </View>

      <View style={styles.footer}>
        <Pressable disabled={!selected} onPress={continuePractice} style={[styles.next, !selected && styles.nextDisabled]}>
          <Text style={styles.nextText}>{index === questions.length - 1 ? 'See results' : 'Continue'}</Text>
          <Ionicons name="arrow-forward" size={20} color={colors.surface} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.canvas },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: spacing.xl, paddingBottom: spacing.md },
  headerTitle: { ...typography.heading, color: colors.ink },
  counter: { ...typography.caption, color: colors.muted },
  progress: { height: 5, backgroundColor: colors.border },
  progressFill: { height: '100%', backgroundColor: colors.primary },
  content: { flex: 1, padding: spacing.xl },
  eyebrow: { ...typography.caption, color: colors.primary, letterSpacing: 1.2 },
  topic: { ...typography.body, color: colors.muted, marginTop: 4 },
  questionCard: { backgroundColor: colors.surface, borderRadius: radius.lg, borderWidth: 1, borderColor: colors.border, padding: spacing.xl, marginTop: spacing.xl, marginBottom: spacing.md },
  question: { fontSize: 24, lineHeight: 31, fontWeight: '800', color: colors.ink },
  hint: { ...typography.caption, color: colors.muted, marginTop: spacing.md },
  option: { minHeight: 56, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, paddingHorizontal: spacing.lg, marginBottom: spacing.sm, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  optionText: { ...typography.body, color: colors.ink, fontWeight: '700' },
  correct: { borderColor: colors.success, backgroundColor: '#E8F7F4' },
  incorrect: { borderColor: colors.danger, backgroundColor: '#FDEDEA' },
  feedback: { borderRadius: radius.md, padding: spacing.lg, marginTop: spacing.sm },
  feedbackCorrect: { backgroundColor: '#E8F7F4' },
  feedbackWrong: { backgroundColor: '#FDEDEA' },
  feedbackTitle: { ...typography.body, color: colors.ink, fontWeight: '800' },
  feedbackText: { ...typography.caption, color: colors.muted, marginTop: 4, lineHeight: 20 },
  footer: { padding: spacing.xl, paddingTop: spacing.sm },
  next: { minHeight: 56, borderRadius: radius.md, backgroundColor: colors.primary, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8, paddingHorizontal: spacing.xl },
  nextDisabled: { opacity: 0.4 },
  nextText: { color: colors.surface, fontSize: 16, fontWeight: '800' },
  resultContent: { flex: 1, padding: spacing.xl, justifyContent: 'center' },
  resultIcon: { width: 72, height: 72, borderRadius: radius.pill, backgroundColor: '#E8F7F4', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginBottom: spacing.xl },
  resultEyebrow: { ...typography.caption, color: colors.primary, letterSpacing: 1.2, textAlign: 'center' },
  resultTitle: { fontSize: 56, lineHeight: 64, fontWeight: '900', color: colors.ink, textAlign: 'center', marginTop: spacing.sm },
  resultSummary: { ...typography.body, color: colors.muted, textAlign: 'center', marginTop: spacing.sm },
  resultCard: { backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, borderRadius: radius.lg, padding: spacing.xl, marginVertical: spacing.xl },
  resultCardTitle: { ...typography.heading, color: colors.ink },
  resultCardText: { ...typography.body, color: colors.muted, marginTop: spacing.sm },
});
