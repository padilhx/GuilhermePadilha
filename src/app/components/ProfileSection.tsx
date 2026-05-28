import { MapPin, Laptop } from 'lucide-react';

export default function ProfileSection() {
  return (
    <div className="flex flex-col items-center text-center space-y-6 w-full">
      <div className="relative w-40 h-40 mx-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-portfolio-gradient-from to-portfolio-gradient-to rounded-2xl blur-lg opacity-20" />
        <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-portfolio-card-from to-portfolio-image-bg border border-portfolio-border overflow-hidden">
          <img
            src="/eunova.jpeg"
            alt="Guilherme Padilha"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-portfolio-accent rounded-lg flex items-center justify-center border-2 border-portfolio-bg text-portfolio-bg">
          <Laptop className="w-4 h-4" />
        </div>
      </div>

      <div className="space-y-2 w-full">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-portfolio-fg via-portfolio-fg to-portfolio-muted bg-clip-text text-transparent">
          Guilherme Padilha
        </h1>
        <p className="text-portfolio-accent font-semibold">Desenvolvedor FullStack</p>
      </div>

      <div className="flex items-center justify-center gap-2 text-portfolio-muted font-medium">
        <MapPin className="w-4 h-4 shrink-0" />
        <span className="text-sm">Curitiba - Paraná, Brasil</span>
      </div>

      <div className="space-y-2 pt-4 border-t border-portfolio-border w-full">
        <div className="text-sm">
          <span className="text-portfolio-subtle">Email:</span>
          <span className="text-portfolio-fg ml-2 font-medium block sm:inline mt-1 sm:mt-0">
            guilhermepjobins@hotmail.com
          </span>
        </div>
        <div className="text-sm">
          <span className="text-portfolio-subtle">Telefone:</span>
          <span className="text-portfolio-fg ml-2 font-medium">(41) 995483984</span>
        </div>
      </div>
    </div>
  );
}
