import { CaretDoubleRight } from "phosphor-react";

export default function AulaEmBreve() {
  return (
    <div className="h-80 flex flex-col items-center gap-8 justify-center border">
      <h1>
        Esta aula estará disponivel em Breve...
      </h1>
      <p className="flex items-center">
        Enquanto isso assista o conteudo liberado
        <span>
          <CaretDoubleRight size={32} className="text-orange-700"/>
        </span>
      </p>
    </div>
  )
}