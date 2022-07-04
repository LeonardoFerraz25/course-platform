import { CaretDoubleRight } from "phosphor-react";
import '../styles/embreve.css'

export default function AulaEmBreve() {
  return (
    <div className="flex flex-col items-center gap-8 justify-center section-breve">
      <h1 className="mt-6 font-['Inter'] font-medium embreve">
        Esta aula estará disponivel em Breve...
      </h1>
      <p className="flex items-center mb-6 pb-2 border-b">
        Enquanto isso assista o conteudo liberado
        <span>
          <CaretDoubleRight size={32} className="text-orange-700"/>
        </span>
      </p>
    </div>
  )
}