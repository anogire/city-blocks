import ReactDOM from "react-dom";

export const Portal = ({ children }: { children: React.ReactNode; }): React.ReactPortal => {
  const element = document.getElementById("overlay") || document.createElement("div");

  return ReactDOM.createPortal(children, element);    
}