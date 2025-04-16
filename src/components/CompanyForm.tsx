
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type CompanyFormProps = {
  companyName: string;
  setCompanyName: (name: string) => void;
  onSubmit: () => void;
};

const CompanyForm: React.FC<CompanyFormProps> = ({
  companyName,
  setCompanyName,
  onSubmit
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (companyName.trim()) {
      onSubmit();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-white rounded-modern-lg shadow-modern animate-fade-in">
      <h2 className="text-3xl font-bold mb-6 text-center text-brand-600">
        Análise de Maturidade LGPD
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label 
            htmlFor="companyName" 
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Nome da empresa
          </Label>
          <Input
            id="companyName"
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full focus-modern"
            placeholder="Digite o nome da empresa"
            required
          />
        </div>
        <Button 
          type="submit" 
          className="w-full bg-brand-500 hover:bg-brand-600 transition-colors duration-300 focus-modern"
        >
          Iniciar Avaliação
        </Button>
      </form>
    </div>
  );
};

export default CompanyForm;
