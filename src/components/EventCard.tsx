// import { MapPin } from "lucide-react";

// interface Event {
//   day: string;
//   month: number;
//   title: string;
//   color: string;
// }

// interface EventCardProps {
//   event: Event;
// }

// export default function EventCard({ event }: EventCardProps) {
//   const getColorClasses = (color: string) => {
//     const colors: Record<
//       string,
//       { bg: string; border: string; text: string; date: string }
//     > = {
//       pink: {
//         bg: "bg-pink-50",
//         border: "border-pink-300",
//         text: "text-pink-900",
//         date: "bg-pink-500",
//       },
//       cyan: {
//         bg: "bg-cyan-50",
//         border: "border-cyan-300",
//         text: "text-cyan-900",
//         date: "bg-cyan-500",
//       },
//       orange: {
//         bg: "bg-orange-50",
//         border: "border-orange-300",
//         text: "text-orange-900",
//         date: "bg-orange-500",
//       },
//       red: {
//         bg: "bg-red-50",
//         border: "border-red-300",
//         text: "text-red-900",
//         date: "bg-red-500",
//       },
//       blue: {
//         bg: "bg-blue-50",
//         border: "border-blue-300",
//         text: "text-blue-900",
//         date: "bg-blue-500",
//       },
//       yellow: {
//         bg: "bg-yellow-50",
//         border: "border-yellow-300",
//         text: "text-yellow-900",
//         date: "bg-yellow-500",
//       },
//       green: {
//         bg: "bg-green-50",
//         border: "border-green-300",
//         text: "text-green-900",
//         date: "bg-green-500",
//       },
//       teal: {
//         bg: "bg-teal-50",
//         border: "border-teal-300",
//         text: "text-teal-900",
//         date: "bg-teal-500",
//       },
//     };

//     return colors[color] || colors.teal;
//   };

//   const colorClasses = getColorClasses(event.color);

//   return (
//     <div
//       className={`${colorClasses.bg} border-2 ${colorClasses.border} rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer group`}
//     >
//       <div
//         className={`${colorClasses.date} text-white px-4 py-3 flex items-center justify-between`}
//       >
//         <span className="text-2xl font-bold">{event.day}</span>
//         <MapPin className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
//       </div>

//       <div className="p-4">
//         <h4
//           className={`${colorClasses.text} font-semibold text-base leading-snug min-h-[3rem] flex items-center`}
//         >
//           {event.title}
//         </h4>
//       </div>
//     </div>
//   );
// }

import { MapPin, ChevronRight } from "lucide-react";

interface Event {
  day: string;
  month: number;
  title: string;
  color: string;
  image: string;
  description: string;
}

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const getColorClasses = (color: string) => {
    const colors: Record<
      string,
      {
        bg: string;
        border: string;
        text: string;
        date: string;
        gradient: string;
      }
    > = {
      pink: {
        bg: "bg-pink-50",
        border: "border-pink-200",
        text: "text-pink-900",
        date: "bg-gradient-to-br from-pink-500 to-pink-600",
        gradient: "from-pink-500/20 to-pink-600/20",
      },
      cyan: {
        bg: "bg-cyan-50",
        border: "border-cyan-200",
        text: "text-cyan-900",
        date: "bg-gradient-to-br from-cyan-500 to-cyan-600",
        gradient: "from-cyan-500/20 to-cyan-600/20",
      },
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-200",
        text: "text-orange-900",
        date: "bg-gradient-to-br from-orange-500 to-orange-600",
        gradient: "from-orange-500/20 to-orange-600/20",
      },
      red: {
        bg: "bg-red-50",
        border: "border-red-200",
        text: "text-red-900",
        date: "bg-gradient-to-br from-red-500 to-red-600",
        gradient: "from-red-500/20 to-red-600/20",
      },
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-900",
        date: "bg-gradient-to-br from-blue-500 to-blue-600",
        gradient: "from-blue-500/20 to-blue-600/20",
      },
      yellow: {
        bg: "bg-yellow-50",
        border: "border-yellow-200",
        text: "text-yellow-900",
        date: "bg-gradient-to-br from-yellow-500 to-yellow-600",
        gradient: "from-yellow-500/20 to-yellow-600/20",
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        text: "text-green-900",
        date: "bg-gradient-to-br from-green-500 to-green-600",
        gradient: "from-green-500/20 to-green-600/20",
      },
      teal: {
        bg: "bg-teal-50",
        border: "border-teal-200",
        text: "text-teal-900",
        date: "bg-gradient-to-br from-teal-500 to-teal-600",
        gradient: "from-teal-500/20 to-teal-600/20",
      },
    };

    return colors[color] || colors.teal;
  };

  const colorClasses = getColorClasses(event.color);

  return (
    <div
      className={`group relative h-96 rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer`}
    >
      <img
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE61cJz8xnLWbDFkx0QkhW3Gk7Fxhb08RuLw&s"
        }
        alt={event.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 opacity-60 group-hover:opacity-75 transition-opacity duration-500" />

      <div
        className={`absolute inset-0 bg-gradient-to-br ${colorClasses.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <div className="flex justify-between items-start">
          <div
            className={`${colorClasses.date} text-white px-4 py-2 rounded-lg font-bold text-2xl`}
          >
            {event.day}
          </div>
          <MapPin className="w-5 h-5 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
        </div>

        <div className="space-y-3">
          <h3 className="text-white font-bold text-xl leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
            {event.title}
          </h3>
          <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
            {event.description}
          </p>
          <div className="flex items-center gap-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <span>Más información</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
