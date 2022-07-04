import { CaretRight } from "phosphor-react";
import { Link } from "react-router-dom";
import '../styles/Home.css';

export function Home() {
  return(
    <div className="flex-1 h-[575px] flex flex-col items-center relative">
      <h1 className="mt-6 pb-2 font-['Inter'] font-medium text-4xl border-b border-orange-700">
        Bem vindo ao Prólogo Course
      </h1>
      <p className="mt-4 p-4 text-xl leading-relaxed">
        Se você esta começando no mundo da programação esta no lugar certo ! <br /> Nossa Plataforma conta com aulas desde os primeiros passos, escolha um tema nas categorias ao lado e suba o nivel como desenvolvedor !
      </p>
      <div className="img-home w-[400px] h-full" />
      <div className="w-full flex items-center justify-between mt-6 p-6 absolute bottom-0">
        <div className="flex items-center gap-4">
          <img
            className="h-16 w-16 rounded-full border-2 border-orange-700"
            src="https://github.com/LeonardoFerraz25.png"
            alt="Leonardo Ferraz"
          />
          <div className="leading-relaxed">
            <span
              className="font-bold text-2xl block"
            >
              Leonardo Ferraz
            </span>
            <span className="text-gray-200 text-sm block">
              Desenvolvedor Front-end
            </span>
          </div>
        </div>
        
        <Link 
          to="/about"
          className="p-4 text-sm border border-orange-700 text-orange-700 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-orange-700 hover:text-gray-900 transition-colors"
        >
          Sobre mim
          <span>
          <CaretRight size={20} />
          </span>
        </Link>
      </div>
    </div>
  )
} 