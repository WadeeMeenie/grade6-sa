import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, Pressable, View } from 'react-native';
import { colors, radius, spacing, typography } from '../../src/design-system/theme';
import { grade6MathsObjectives } from '../../src/curriculum/grade6-maths';

const termLabels = ['Term 1', 'Term 2', 'Term 3', 'Term 4'];

export default function MathematicsScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Pressable onPress={() => router.back()} style={styles.back}><Ionicons name="arrow-back" size={22} color={colors.ink} /><Text style={styles.backText}>Curriculum</Text></Pressable>
      <Text style={styles.eyebrow}>MATHEMATICS</Text>
      <Text style={styles.title}>Build your number sense.</Text>
      <Text style={styles.subtitle}>Work through the learning sequence, one skill at a time.</Text>
      {termLabels.map((term, termIndex) => {
        const items = grade6MathsObjectives.filter((item) => item.term === termIndex + 1);
        return <View key={term} style={styles.termSection}>
          <View style={styles.termHeader}><Text style={styles.heading}>{term}</Text><Text style={styles.count}>{items.length} skills</Text></View>
          {items.map((item, index) => <Pressable key={item.id} style={styles.skillCard} onPress={() => router.push({ pathname: '/lesson/[id]', params: { id: item.id } })}>
            <View style={styles.number}><Text style={styles.numberText}>{index + 1}</Text></View>
            <View style={{ flex: 1 }}><Text style={styles.skillTitle}>{item.topic}</Text><Text style={styles.skillDescription}>{item.skill} · {item.statement}</Text></View>
            <Ionicons name="chevron-forward" size={20} color={colors.muted} />
          </Pressable>)}
        </View>;
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.canvas }, content: { padding: spacing.xl, paddingBottom: 48 },
  back: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: spacing.xl }, backText: { ...typography.body, color: colors.ink, fontWeight: '700' },
  eyebrow: { ...typography.caption, color: colors.primary, letterSpacing: 1.5 }, title: { ...typography.title, color: colors.ink, marginTop: 6 }, subtitle: { ...typography.body, color: colors.muted, marginTop: spacing.sm, marginBottom: spacing.xl },
  termSection: { marginBottom: spacing.xl }, termHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.md }, heading: { ...typography.heading, color: colors.ink }, count: { ...typography.caption, color: colors.muted },
  skillCard: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, padding: spacing.lg, marginBottom: spacing.sm }, number: { width: 38, height: 38, borderRadius: 12, backgroundColor: colors.primarySoft, alignItems: 'center', justifyContent: 'center' }, numberText: { color: colors.primary, fontWeight: '800' },
  skillTitle: { ...typography.body, color: colors.ink, fontWeight: '800' }, skillDescription: { ...typography.caption, color: colors.muted, marginTop: 3, lineHeight: 19 },
});
