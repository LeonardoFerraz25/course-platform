import { DefaultUi, Player, Youtube } from "@vime/react";
import { gql, useQuery } from "@apollo/client";
import { isPast } from 'date-fns';
import { CaretRight, DiscordLogo, FileArrowDown, Image, Lightning } from "phosphor-react";
import '@vime/core/themes/default.css';
import { Breve } from "./Breve";

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug ($slug: String) {
    lesson(where: {slug: $slug}) {
      title
      videoId
      description
      availableAt
      teacher {
        name
        bio
        avatarURL
      }
    }
  }
`

interface GetLessonBySlugResponse {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      name: string;
      bio: string;
      avatarURL: string;
    }
  }
}

interface VideoProps {
  lessonSlug: string;
  availableAt: Date;
}

export function Video(props: VideoProps) {
  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: props.lessonSlug
    }
  });
  const isLessonAvailable = isPast(props.availableAt);
  if (!data) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    )
  }

  return (
    <div className="flex-1">
      {isLessonAvailable
        ? (
          <>
            <div className="bg-black flex justify-center">
              <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                <Player>
                  <Youtube videoId={ data.lesson.videoId }/>
                  <DefaultUi />
                </Player>
              </div>
            </div>
            <div className="p-8 max-w-[1100px] mx-auto">
              <div className="flex items-start gap-16">
                <div className="flex-1">
                  <h1 className="text-2xl font-bold">
                  { data.lesson.title }
                  </h1>
                  <p className="mt-4 text-gray-200 leading-relaxed">
                  { data.lesson.description }
                  </p>
                  <div className="flex items-center gap-4 mt-6">
                    <img
                      className="h-16 w-16 rounded-full border-2 border-orange-700"
                      src={ data.lesson.teacher.avatarURL }
                      alt={ data.lesson.teacher.name }
                    />
                    <div className="leading-relaxed">
                      <strong className="font-bold text-2xl block">
                      { data.lesson.teacher.name }
                      </strong>
                      <span className="text-gray-200 text-sm block">
                      { data.lesson.teacher.bio }
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="p-4 text-sm bg-orange-700 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-orange-600 transition-colors"
                  >
                    <DiscordLogo size={24}/>
                    comunidade do discord
                  </a>
                  <a
                    href="https://github.com/LeonardoFerraz25"
                    target="_blank"
                    className="p-4 text-sm border border-orange-700 text-orange-700 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-orange-700 hover:text-gray-900 transition-colors"
                  >
                    <Lightning size={24}/>
                    Acesse o GitHub
                  </a>
                </div>
              </div>
              <div className="gap-8 mt-20 grid grid-cols-2">
                <a
                href="#"
                target="_blank"
                className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
                >
                  <div className="bg-orange-700 h-full p-6 flex items-center">
                    <FileArrowDown size={40}/>
                  </div>
                  <div className="py-6 leading-relaxed">
                    <strong className="text-2xl">
                      Material complementar
                    </strong>
                    <p className="text-sm text-gray-200 mt-2">
                      Acesse o material complementar para acelerar o seu desenvolvimento
                    </p>
                  </div>
                  <div className="h-full p-6 flex items-center">
                    <CaretRight size={24}/>
                  </div>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
                >
                  <div className="bg-orange-700 h-full p-6 flex items-center">
                    <Image size={40} />
                  </div>
                  <div className="py-6 leading-relaxed">
                    <strong className="text-2xl">
                      Wallpapers exclusivos
                    </strong>
                    <p className="text-sm text-gray-200 mt-2">
                      Baixe Wallpapers exclusivos do pr??logo course e personalize a sua m??quina
                    </p>
                  </div>
                  <div className="h-full p-6 flex items-center">
                    <CaretRight size={24}/>
                  </div>
                </a>
              </div>
            </div>
          </>
        )
        : (
          <Breve />
        )}
    </div>
  );
}
