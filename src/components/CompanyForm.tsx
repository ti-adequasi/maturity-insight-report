
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
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Análise de Maturidade LGPD
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <Label htmlFor="companyName" className="block mb-2 text-sm font-medium">
            Nome da empresa
          </Label>
          <Input
            id="companyName"
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full"
            placeholder="Digite o nome da empresa"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Iniciar Avaliação
        </Button>
      </form>
    </div>
  );
};

export default CompanyForm;
