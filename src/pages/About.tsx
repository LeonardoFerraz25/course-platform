import { ArrowSquareOut, EnvelopeSimple, GithubLogo, LinkedinLogo } from "phosphor-react";
import { Header } from "../components/Header";

export function About() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <div className="h-40 flex items-center justify-center gap-12 ml-8 relative">
          <img
            className="h-40 w-40 rounded-full border-2 border-orange-700 absolute left-6"
            src="https://github.com/LeonardoFerraz25.png"
            alt="Leonardo Ferraz"
          />
          <span
            className="text-[40px] block border-b border-orange-700 leading-relaxed font-['Inter'] font-medium"
          >
            Leonardo Ferraz Novaes
          </span>
        </div>
        <section className="mt-6 px-6 text-lg leading-relaxed flex flex-col gap-4">
          <p>
            Olá, sou Leonardo Ferraz, sou Desenvolvedor Front-end e grande amante da tecnologia, sempre em busca de novos conhecimentos e soluções que geram valor e facilitar a vida de muitas pessoas. 
          </p>
          <p>
            Se me perguntarem o motivo porque escolhi essa area, provavelmente eu direi que a programação nos faz olhar os problemas de forma diferente, não há um problema que não possa ser resolvido e em cada solução é certo que no fim você aprendeu alguma coisa nova.
          </p>
          <p>
            Sem contar o mundo de possibilidades que essa area trás, pessoas com mentes brilhates, o trablho em equipe programação não é só codigo é comunicação é colaboração !
          </p>
          <p>
            Se esta pensando se deve ou não me chamar para bater um papo, não pense, só me chame, estou aqui para ensinar, aprender, trocar experiências, jogar um game e disponível para qualquer Happy Hour! 
          </p>
        </section>
      </main>
      <section className="flex flex-col items-center justify-center">
        <h2 className="text-[40px] block border-b border-orange-700 leading-relaxed font-['Inter'] font-medium">
          Contatos
        </h2>
        <div className="flex items-center justify-center gap-8 mt-6 h-48">
          <span className="flex items-center gap-2">
            <EnvelopeSimple size={32} weight="light" />
            leonardo.ferrazn@gmail.com
          </span>
          <span className="flex items-center hover:text-orange-700 gap-2">
            <LinkedinLogo size={32} weight="light" />
            <a
              className="flex items-center"
              href="https://www.linkedin.com/in/leonardo-ferraz-149480228/"
              target="_blank"
            >
              Leonardo Ferraz
              <ArrowSquareOut size={18} weight="light" />
            </a>
          </span>
          <span className="flex items-center hover:text-orange-700 gap-2">
            <GithubLogo size={32} weight="light" />
            <a
              className="flex items-center"
              href="https://github.com/LeonardoFerraz25"
              target="_blank"
            >
              LeonardoFerraz25
              <ArrowSquareOut size={18} weight="light" />
            </a>
          </span>
        </div>
      </section>
    </div>
  )
}