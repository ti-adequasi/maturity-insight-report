
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Question } from "@/data/questions";

type QuestionItemProps = {
  question: Question;
  value: number;
  onChange: (questionId: string, value: number) => void;
};

const QuestionItem: React.FC<QuestionItemProps> = ({ 
  question, 
  value, 
  onChange 
}) => {
  const handleChange = (value: string) => {
    onChange(question.id, parseInt(value));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow mb-4 transition-all hover:shadow-md">
      <div className="mb-3">
        <h3 className="text-base font-medium">{question.text}</h3>
      </div>
      
      <RadioGroup 
        value={value ? value.toString() : undefined} 
        onValueChange={handleChange}
        className="flex space-x-1 sm:space-x-2"
      >
        {[1, 2, 3, 4, 5].map((rating) => (
          <div key={rating} className="flex flex-col items-center">
            <div className="flex items-center space-x-1">
              <RadioGroupItem 
                value={rating.toString()} 
                id={`${question.id}-${rating}`} 
                className="text-primary"
              />
              <Label 
                htmlFor={`${question.id}-${rating}`} 
                className="cursor-pointer text-sm"
              >
                {rating}
              </Label>
            </div>
            <span className="text-xs text-gray-500 mt-1 hidden sm:block">
              {rating === 1 && "Muito baixo"}
              {rating === 2 && "Baixo"}
              {rating === 3 && "Médio"}
              {rating === 4 && "Alto"}
              {rating === 5 && "Muito alto"}
            </span>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default QuestionItem;
