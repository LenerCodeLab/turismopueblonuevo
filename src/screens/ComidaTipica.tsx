import { useEffect } from "react";
import ComidaTipica from "../components/ComidaTipica";

export default function ComidaTipicaScreen() {
     useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
      }, []); // Se ejecuta solo cuando el componente se monta (ideal para navegación)
    
  return <ComidaTipica />;
}
