import { gql, useQuery } from "@apollo/client";
import { Popover } from '@headlessui/react'
import { GetLessons } from "./GetLessons";


const GET_CATEGORIES_LESSONS_QUERY = gql`
  query MyQuery {
    challenges {
      name
      id
    }
  }
`

interface GetCategoriesLessonsQueryResponse {
  challenges: {
    id: string;
    name: string;
    map: Function;
  }
}

export function Categories() {
  const { data } = useQuery<GetCategoriesLessonsQueryResponse>(GET_CATEGORIES_LESSONS_QUERY);
  console.log(data);
  
  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.challenges.map((category: any) => {
          return (
            <Popover className="relative">
            <Popover.Button>{category.name}</Popover.Button>
      
            <Popover.Panel>
              <GetLessons categoryType={ category.name } />
            </Popover.Panel>
          </Popover>
          )
        })}
      </div>
    </aside>
  );
}
