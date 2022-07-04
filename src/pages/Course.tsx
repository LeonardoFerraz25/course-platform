import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Categories } from "../components/Categories";
import { Video } from "../components/Video";
import { gql, useQuery } from "@apollo/client";
import { Home } from "../components/Home";

const GET_LESSON_BY_SLUG_QUERY = gql`
query GetLessonBySlug ($slug: String) {
  lesson(where: {slug: $slug}) {
    availableAt
  }
}
`
interface AvailableAtResponse {
  lesson : {
    availableAt: Date;
  }
}

export function Course() {
  const { slug } = useParams<{slug: string}>();
  const { data } = useQuery<AvailableAtResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: slug
    }
  });

  if (!data) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        { slug 
          ? <Video lessonSlug={slug} availableAt={ new Date(data.lesson.availableAt) } />
          : <Home />}
        <Categories />
      </main>
    </div>
  );
}
