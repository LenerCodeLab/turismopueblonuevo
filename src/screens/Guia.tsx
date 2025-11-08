import "react-pdf/dist/Page/AnnotationLayer.css";
import guia from "../../public/guia.pdf";

export default function Guia() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        paddingTop: 120,
        padding: 50,
      }}
    >
      <embed src={guia} type="application/pdf" width="100%" height="700px" />
    </div>
  );
}
