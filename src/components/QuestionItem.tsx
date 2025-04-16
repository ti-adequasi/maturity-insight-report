
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Question } from "@/data/questions";

type QuestionItemProps = {
  question: Question;
  value: number;
  onChange: (questionId: string, value: number) => void;
};

const defaultMaturityLabels = [
  'Não implementado',
  'Implementação inicial',
  'Implementação parcial',
  'Implementação avançada',
  'Implementação completa'
];

const QuestionItem: React.FC<QuestionItemProps> = ({ 
  question, 
  value, 
  onChange 
}) => {
  const handleChange = (value: string) => {
    console.log(`QuestionItem handleChange triggered for ${question.id} with value: ${value}`); // Log de depuração
    onChange(question.id, parseInt(value));
  };

  const labels = question.options || defaultMaturityLabels;

  return (
    <div className="p-4 bg-white rounded-lg shadow mb-4 transition-all hover:shadow-md">
      <div className="mb-3">
        <h3 className="text-base font-medium">{question.text}</h3>
      </div>
      
      <RadioGroup 
        value={value ? value.toString() : undefined} 
        onValueChange={handleChange}
        className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4"
      >
        {[1, 2, 3, 4, 5].map((rating) => (
          // Separated RadioGroupItem and Label structure
          <Label 
            key={rating}
            htmlFor={`${question.id}-${rating}`}
            className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer w-full h-full text-center transition-colors data-[state=checked]:bg-primary/10 data-[state=checked]:border-4"
          >
            <RadioGroupItem 
              value={rating.toString()} 
              id={`${question.id}-${rating}`} 
              className="peer"
            />
            <span className="font-bold text-lg mb-1">{rating}</span>
            <span className="text-xs text-muted-foreground">{labels[rating - 1]}</span>
          </Label>
        ))}
      </RadioGroup>
    </div>
  );
};

export default QuestionItem;
