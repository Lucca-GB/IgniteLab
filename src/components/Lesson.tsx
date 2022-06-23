//phosphor-react = conseguimos importar alguns icones
import { CheckCircle, Lock } from 'phosphor-react'
//essa lib nos ajuda a lider com datas e formatação
import { isPast, format} from 'date-fns'
//além de nos permitir escolher a lingua
import ptBR from 'date-fns/locale/pt-BR'

interface LessonProps {
     title: string;
     slug: string;
     availableAt: Date;
     type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {

     //ve se a data ja passou ou nao
     //se sim o conteudo ta liberado, se n aparece 'em breve'
     const isLessonAvailable = isPast(props.availableAt);

     //formatamos a data para o seguinte modelo: quarta-feira • 22 de junho • 19h00
     const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
          //configuramos para que esteja no padrão pt-br
          locale: ptBR,
     })

     return (
          <a href="#">
               <span className="text-gray-300">
                    {availableDateFormatted}
               </span>

               <div className="rounded border border-gray-500 p-4 mt-2">
                    <header className="flex items-center justify-between">


                         {isLessonAvailable ? (
                              <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                                   <CheckCircle size={20} />
                                   Conteúdo liberado
                              </span>
                         ) : (
                              <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                                   <Lock size={20} />
                                   Em breve
                              </span>
                         )}


                         <span className="text-xs rounded py-[0125.rem] px-2 text-white border border-green-300 font-bold">
                              {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                         </span>
                    </header>

                    <strong className="text-gray-200 nt-5 block">
                         {props.title}
                    </strong>
               </div>
          </a>
     )
}