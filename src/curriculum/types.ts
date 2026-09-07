export type CurriculumVersion = {
  id: string;
  authority: 'DBE' | 'WCED';
  programme: 'CAPS' | 'ATP';
  grade: 6;
  year: number;
  sourceTitle: string;
};

export type LearningObjective = {
  id: string;
  curriculumVersionId: string;
  subject: Subject;
  term: 1 | 2 | 3 | 4;
  strand: string;
  topic: string;
  skill: string;
  statement: string;
};

export type Subject =
  | 'mathematics'
  | 'languages'
  | 'natural-sciences-technology'
  | 'social-sciences'
  | 'life-skills';
