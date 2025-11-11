import { useEffect } from "react";
import Calendar from "../components/Calendar";

export default function Calendario() {
  useEffect(() => {
     window.scrollTo({ top: 0, left: 0 });
   }, []); // Se ejecuta solo cuando el componente se monta (ideal para navegación)
 
  return(
 <Calendar />
  )
 
}
