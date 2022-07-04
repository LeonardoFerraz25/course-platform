import { gql, useQuery } from "@apollo/client";
import { Popover } from '@headlessui/react'
import { CaretDown } from "phosphor-react";
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
  
  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>
      <div className="flex flex-col ">
        {data?.challenges.map((category: any) => {
          return (
            <Popover className="relative">
            <Popover.Button className="rounded border flex items-center bg-gray-900 border-gray-500 p-4 hover:border-orange-700 focus:border-orange-700 focus:outline-none w-full mb-4"
            >
              {category.name}
              <span className="text-orange-700 ml-2">
                <CaretDown size={32} />
              </span>
            </Popover.Button>
      
            <Popover.Panel className="transition-all">
              <GetLessons categoryType={ category.name } />
            </Popover.Panel>
          </Popover>
          )
        })}
      </div>
    </aside>
  );
}
