
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import CompanyForm from "@/components/CompanyForm";
import QuestionnaireSection from "@/components/QuestionnaireSection";
import MaturityReport from "@/components/MaturityReport";
import { segments } from "@/data/questions";
import { calculateSegmentScore, SegmentScore } from "@/utils/calculateMaturity";
import { ArrowRight } from "lucide-react";

type Step = "companyInfo" | "questionnaire" | "results";

const Index = () => {
  const [step, setStep] = useState<Step>("companyInfo");
  const [companyName, setCompanyName] = useState("");
  const [activeSegmentIndex, setActiveSegmentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [segmentScores, setSegmentScores] = useState<SegmentScore[]>([]);

  const handleStartQuestionnaire = () => {
    setStep("questionnaire");
  };

  const handleAnswerChange = (questionId: string, value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleNextSegment = () => {
    const currentSegment = segments[activeSegmentIndex];
    const score = calculateSegmentScore(currentSegment, answers);
    
    setSegmentScores((prev) => {
      const existing = prev.findIndex((s) => s.segmentId === score.segmentId);
      if (existing !== -1) {
        const updated = [...prev];
        updated[existing] = score;
        return updated;
      }
      return [...prev, score];
    });

    if (activeSegmentIndex < segments.length - 1) {
      setActiveSegmentIndex(activeSegmentIndex + 1);
      window.scrollTo(0, 0);
    } else {
      setStep("results");
    }
  };

  const handlePrevSegment = () => {
    if (activeSegmentIndex > 0) {
      setActiveSegmentIndex(activeSegmentIndex - 1);
      window.scrollTo(0, 0);
    }
  };

  const resetAssessment = () => {
    setStep("companyInfo");
    setCompanyName("");
    setActiveSegmentIndex(0);
    setAnswers({});
    setSegmentScores([]);
  };

  const isCurrentSegmentComplete = () => {
    const currentSegment = segments[activeSegmentIndex];
    const questionIds = currentSegment.questions.map((q) => q.id);
    
    return questionIds.every((id) => answers[id] && answers[id] > 0);
  };

  const renderStepContent = () => {
    switch (step) {
      case "companyInfo":
        return (
          <CompanyForm 
            companyName={companyName}
            setCompanyName={setCompanyName}
            onSubmit={handleStartQuestionnaire}
          />
        );
        
      case "questionnaire":
        const currentSegment = segments[activeSegmentIndex];
        const progress = ((activeSegmentIndex + 1) / segments.length) * 100;
        
        return (
          <div className="max-w-3xl mx-auto px-4">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">
                  Progresso: {activeSegmentIndex + 1} de {segments.length}
                </span>
                <span className="text-sm font-medium">{Math.round(progress)}%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-full rounded-full bg-primary transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            
            <QuestionnaireSection
              segment={currentSegment}
              answers={answers}
              onAnswerChange={handleAnswerChange}
            />
            
            <div className="flex justify-between mt-6 mb-10">
              <Button 
                variant="outline" 
                onClick={handlePrevSegment}
                disabled={activeSegmentIndex === 0}
              >
                Anterior
              </Button>
              
              <Button 
                onClick={handleNextSegment}
                disabled={!isCurrentSegmentComplete()}
              >
                {activeSegmentIndex < segments.length - 1 ? (
                  <>
                    Próximo <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  "Ver Resultados"
                )}
              </Button>
            </div>
          </div>
        );
        
      case "results":
        return (
          <MaturityReport
            companyName={companyName}
            segmentScores={segmentScores}
            onReset={resetAssessment}
          />
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="container">
        {renderStepContent()}
      </div>
    </div>
  );
};

export default Index;
