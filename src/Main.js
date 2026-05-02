import HomeView from "./Views/HomeView";
// import SenseView from "./Views/SenseView";
import ToolkitView from "./Views/ToolkitView";
import FloatingBar from "./FloatingBar";
import Toast from "./Toast";
import SOSModal from "./SOSModal";
import { SENSES } from "./DummyData/dummyData";
import "./styles.css";

export default function Main({
  view,
  setView,
  toolkit,
  selectedCount,
  sosOpen,
  setSOSOpen,
}) {
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
