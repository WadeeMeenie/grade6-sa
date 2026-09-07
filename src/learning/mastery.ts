export type MasteryState = {
  objectiveId: string;
  mastery: number;
  attempts: number;
  correctAttempts: number;
  lastScore: number;
};

export function applyPracticeResult(
  state: MasteryState,
  score: number,
  masteryDelta: number,
): MasteryState {
  return {
    ...state,
    mastery: Math.max(0, Math.min(100, state.mastery + masteryDelta)),
    attempts: state.attempts + 1,
    correctAttempts: state.correctAttempts + (score >= 80 ? 1 : 0),
    lastScore: score,
  };
}

export function masteryLabel(mastery: number): 'Starting' | 'Developing' | 'Secure' | 'Mastered' {
  if (mastery >= 90) return 'Mastered';
  if (mastery >= 70) return 'Secure';
  if (mastery >= 40) return 'Developing';
  return 'Starting';
}
