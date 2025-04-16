
import React from "react";
import QuestionItem from "./QuestionItem";
import { Segment } from "@/data/questions";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type QuestionnaireSectionProps = {
  segment: Segment;
  answers: Record<string, number>;
  onAnswerChange: (questionId: string, value: number) => void;
};

const QuestionnaireSection: React.FC<QuestionnaireSectionProps> = ({
  segment,
  answers,
  onAnswerChange
}) => {
  return (
    <Card className="mb-8 border-t-4" style={{ borderTopColor: `var(--${segment.color})` }}>
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-2">
          <span className="text-2xl" aria-hidden="true">{segment.icon}</span>
          <h2 className="text-xl font-bold">{segment.title}</h2>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          {segment.questions.length} perguntas • Avalie de 1 (muito baixo) a 5 (muito alto)
        </p>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-2 px-4">
          <div className="text-xs font-medium">Pergunta</div>
          <div className="text-xs font-medium flex space-x-6 sm:space-x-10">
            <span>Nível de Implementação</span>
          </div>
        </div>
        {segment.questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            value={answers[question.id] || 0}
            onChange={onAnswerChange}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default QuestionnaireSection;
