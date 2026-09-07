export type QuestionType =
  | 'multiple-choice'
  | 'numeric'
  | 'true-false'
  | 'ordering'
  | 'matching';

export type Difficulty = 'foundation' | 'core' | 'stretch';

export type PracticeQuestion = {
  id: string;
  objectiveId: string;
  type: QuestionType;
  prompt: string;
  options?: string[];
  answer: string;
  explanation: string;
  difficulty: Difficulty;
};

export type QuestionAttempt = {
  questionId: string;
  answer: string;
  correct: boolean;
};

export type PracticeResult = {
  total: number;
  correct: number;
  percentage: number;
  masteryDelta: number;
};

export function gradePractice(
  questions: PracticeQuestion[],
  attempts: QuestionAttempt[],
): PracticeResult {
  const correct = attempts.filter((attempt) => attempt.correct).length;
  const total = questions.length;
  const percentage = total === 0 ? 0 : Math.round((correct / total) * 100);

  const masteryDelta =
    percentage >= 80 ? 10 : percentage >= 60 ? 5 : percentage >= 40 ? 1 : 0;

  return { total, correct, percentage, masteryDelta };
}

export const grade6MathsPractice: PracticeQuestion[] = [
  {
    id: 'g6-t1-place-value-001',
    objectiveId: 'g6-maths-t1-whole-numbers',
    type: 'multiple-choice',
    prompt: 'What is the value of the 6 in 6 482?',
    options: ['6 000', '600', '60', '6'],
    answer: '6 000',
    explanation: 'The 6 is in the thousands place, so its value is 6 000.',
    difficulty: 'foundation',
  },
  {
    id: 'g6-t1-rounding-001',
    objectiveId: 'g6-maths-t1-rounding',
    type: 'multiple-choice',
    prompt: 'Round 6 482 to the nearest 100.',
    options: ['6 400', '6 500', '6 480', '6 000'],
    answer: '6 500',
    explanation: 'The tens digit is 8, so 6 482 rounds up from 6 400 to 6 500.',
    difficulty: 'core',
  },
  {
    id: 'g6-t2-decimals-001',
    objectiveId: 'g6-maths-t2-decimals',
    type: 'multiple-choice',
    prompt: 'Which decimal is greater?',
    options: ['0.4', '0.04', 'They are equal', 'Neither'],
    answer: '0.4',
    explanation: '0.4 is four tenths, while 0.04 is four hundredths. Four tenths is greater.',
    difficulty: 'foundation',
  },
  {
    id: 'g6-t3-area-001',
    objectiveId: 'g6-maths-t3-area',
    type: 'numeric',
    prompt: 'A rectangle is 8 cm long and 3 cm wide. What is its area in cm²?',
    answer: '24',
    explanation: 'Area = length × width = 8 × 3 = 24 cm².',
    difficulty: 'core',
  },
];
