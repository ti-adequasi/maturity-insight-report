
import { MaturityLevel, Segment } from "../data/questions";

export type SegmentScore = {
  segmentId: string;
  title: string;
  icon: string;
  color: string;
  average: number;
  maturityLevel: MaturityLevel;
};

export const calculateMaturityLevel = (score: number): MaturityLevel => {
  if (score >= 4.6) return "Ideal";
  if (score >= 4.1) return "Avançado";
  if (score >= 3.1) return "Intermediário";
  if (score >= 2.1) return "Básico";
  return "Iniciante";
};

export const calculateSegmentScore = (
  segment: Segment,
  answers: Record<string, number>
): SegmentScore => {
  const questionIds = segment.questions.map(q => q.id);
  let sum = 0;
  let count = 0;

  questionIds.forEach(id => {
    if (answers[id]) {
      sum += answers[id];
      count++;
    }
  });

  const average = count > 0 ? parseFloat((sum / count).toFixed(1)) : 0;
  
  return {
    segmentId: segment.id,
    title: segment.title,
    icon: segment.icon,
    color: segment.color,
    average,
    maturityLevel: calculateMaturityLevel(average)
  };
};

export const calculateOverallMaturity = (
  segmentScores: SegmentScore[]
): { score: number; level: MaturityLevel } => {
  const sum = segmentScores.reduce((acc, segment) => acc + segment.average, 0);
  const average = parseFloat((sum / segmentScores.length).toFixed(1));
  
  return {
    score: average,
    level: calculateMaturityLevel(average)
  };
};
