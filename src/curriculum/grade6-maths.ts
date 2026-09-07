import type { CurriculumVersion, LearningObjective } from './types';

export const grade6MathsCurriculumVersion: CurriculumVersion = {
  id: 'dbe-maths-grade6-atp-2026',
  authority: 'DBE',
  programme: 'ATP',
  grade: 6,
  year: 2026,
  sourceTitle: 'Annual Teaching Plan: Mathematics: Grade 6'
};

// Seed structure only. Production content will be expanded from the latest
// official ATP after each curriculum source is verified and versioned.
export const grade6MathsObjectives: LearningObjective[] = [
  {
    id: 'g6-maths-t1-whole-numbers',
    curriculumVersionId: grade6MathsCurriculumVersion.id,
    subject: 'mathematics',
    term: 1,
    strand: 'Numbers, Operations and Relationships',
    topic: 'Whole Numbers',
    skill: 'Represent and compare large whole numbers',
    statement: 'Count, order, compare and represent whole numbers in the Grade 6 range using place value.'
  },
  {
    id: 'g6-maths-t1-rounding',
    curriculumVersionId: grade6MathsCurriculumVersion.id,
    subject: 'mathematics',
    term: 1,
    strand: 'Numbers, Operations and Relationships',
    topic: 'Whole Numbers',
    skill: 'Round whole numbers',
    statement: 'Round whole numbers to the nearest 5, 10, 100 and 1 000 and use estimation in calculations.'
  },
  {
    id: 'g6-maths-t2-fractions',
    curriculumVersionId: grade6MathsCurriculumVersion.id,
    subject: 'mathematics',
    term: 2,
    strand: 'Numbers, Operations and Relationships',
    topic: 'Common Fractions',
    skill: 'Compare and calculate with fractions',
    statement: 'Compare and order common fractions and solve addition and subtraction problems with appropriate denominators.'
  },
  {
    id: 'g6-maths-t2-decimals',
    curriculumVersionId: grade6MathsCurriculumVersion.id,
    subject: 'mathematics',
    term: 2,
    strand: 'Numbers, Operations and Relationships',
    topic: 'Decimal Fractions',
    skill: 'Work with decimal fractions',
    statement: 'Compare, order, add and subtract decimal fractions to two decimal places and connect decimals with fractions and percentages.'
  },
  {
    id: 'g6-maths-t3-area',
    curriculumVersionId: grade6MathsCurriculumVersion.id,
    subject: 'mathematics',
    term: 3,
    strand: 'Space and Shape',
    topic: 'Area, Perimeter and Volume',
    skill: 'Calculate area and perimeter',
    statement: 'Determine perimeter and area of squares and rectangles and investigate the relationship between dimensions and area.'
  }
];
