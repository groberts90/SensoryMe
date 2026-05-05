import HomeView from "./Views/HomeView";
// import SenseView from "./Views/SenseView";
import ToolkitView from "./Views/ToolkitView";
import FloatingBar from "./FloatingBar";
import Toast from "./Toast";
import SOSModal from "./SOSModal";
import { SENSES } from "./DummyData/dummyData";
import "./styles.css";
import useLocalStorage from "./hooks/useLocalStorage";
import { useContext } from "react";

export default function Main({
  view,
  setView,
  toolkit,
  selectedCount,
  sosOpen,
  setSOSOpen,
}) {
  const storage = useLocalStorage('username', '');
  
  return (
    <>
      <main className="main">
        {view === "home" && <HomeView senses={SENSES} />}

        {view === "sense" && <SenseView />}

        {view === "toolkit" && <ToolkitView toolkit={toolkit} />}
      </main>

      <FloatingBar
        count={selectedCount}
        // onViewToolkit={() => setView("toolkit")}
      />
      <Toast />
      <SOSModal open={sosOpen} onClose={() => setSOSOpen(false)} />
    </>
  );
}
