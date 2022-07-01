import { gql, useQuery } from "@apollo/client";
import { Key } from "react";
import { Lesson } from "./Lesson";

const GET_LESSONS_QUERY = gql`
 query GetLessonsByCategory ($category: String) {
  lessons(
    orderBy: availableAt_ASC
    stage: PUBLISHED
    where: {AND: {challenge: {name: $category}}}
  ) {
    id
    title
    slug
    lessonType
    availableAt
  }
}
`

interface GetLessonsQueryResponse {
  lessons: {
    id: string;
    title: string;
    availableAt: string;
    lessonType: 'live' | 'class';
    map: Function;
  }
}

interface GetLessonsProps {
  categoryType: string;
}

export function GetLessons(props: GetLessonsProps) {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY, {
    variables: {
      category: props.categoryType
    }
  });

  return (
      <div className="flex flex-col gap-8 mb-4">
        {data?.lessons.map((lesson: { id: Key | null | undefined; title: string; slug: string; availableAt: string | number | Date; lessonType: 'live' | 'class'; }) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          )
        })}
      </div>
  );
}
