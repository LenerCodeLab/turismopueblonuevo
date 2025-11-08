import { Calendar as CalendarIcon } from 'lucide-react';
import { events } from '../data/events';
import EventCard from './EventCard';

export default function Calendar() {
  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const eventsByMonth = events.reduce((acc, event) => {
    if (!acc[event.month]) {
      acc[event.month] = [];
    }
    acc[event.month].push(event);
    return acc;
  }, {} as Record<number, typeof events>);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="flex justify-center mb-4">
          <div className="bg-teal-100 rounded-full p-3">
            <CalendarIcon className="w-8 h-8 text-teal-600" />
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Eventos del Año
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explora todas las festividades y celebraciones de Pueblo Nuevo
        </p>
      </div>

      <div className="space-y-16">
        {Object.entries(eventsByMonth).map(([month, monthEvents]) => (
          <div key={month} className="scroll-mt-20">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
                <span className="bg-gradient-to-r from-teal-600 to-teal-500 text-white px-6 py-2 rounded-full">
                  {monthNames[parseInt(month) - 1]}
                </span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {monthEvents
                .sort((a, b) => parseInt(a.day) - parseInt(b.day))
                .map((event, index) => (
                  <EventCard key={index} event={event} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
