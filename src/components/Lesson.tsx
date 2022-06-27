//phosphor-react = conseguimos importar alguns icones
import { CheckCircle, Lock } from 'phosphor-react'
//essa lib nos ajuda a lider com datas e formatação
import { isPast, format} from 'date-fns'
//além de nos permitir escolher a lingua
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

interface LessonProps {
     title: string;
     slug: string;
     availableAt: Date;
     type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {

     const { slug } = useParams<{slug: string}>()

     //ve se a data ja passou ou nao
     //se sim o conteudo ta liberado, se n aparece 'em breve'
     const isLessonAvailable = isPast(props.availableAt);

     //formatamos a data para o seguinte modelo: quarta-feira • 22 de junho • 19h00
     const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
          //configuramos para que esteja no padrão pt-br
          locale: ptBR,
     })

     const isActiveLesson = slug === props.slug;

     return (
          <Link to={`/event/lesson/${props.slug}`} className="group">
               <span className="text-gray-300">
                    {availableDateFormatted}
               </span>

               {/* exemplo de como fazer condicionais com o tailwind: */}
               <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', {
                    'bg-green-500' : isActiveLesson,
               })}>
               {/* --- */}
                    <header className="flex items-center justify-between">


                         {isLessonAvailable ? (
                              <span className={classNames('text-sm font-medium flex items-center gap-2', {
                                   'text-white': isActiveLesson,
                                   'text-blue-500' : !isActiveLesson,
                              })}>
                                   <CheckCircle size={20} />
                                   Conteúdo liberado
                              </span>
                         ) : (
                              <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                                   <Lock size={20} />
                                   Em breve
                              </span>
                         )}


                         <span className={classNames('text-xs rounded py-[0125.rem] px-2 text-white border border-green-300 font-bold', {
                              'border-white': isActiveLesson,
                              'border-green-300' : !isActiveLesson,
                         })}>
                              {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                         </span>
                    </header>

                    <strong className={classNames('mt-5 block', {
                         'text-white' : isActiveLesson,
                         'text-gray-200' : !isActiveLesson
                    })}>
                         {props.title}
                    </strong>
               </div>
          </Link>
     )
}