// Core viewer
import { Viewer, Worker, SpecialZoomLevel } from "@react-pdf-viewer/core";
import "./styles.css";
// Plugins
import filex from "./pdf.pdf";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { toolbarPlugin, ToolbarSlot } from "@react-pdf-viewer/toolbar";
import { ScrollMode } from "@react-pdf-viewer/scroll-mode";
import {
  SelectionMode,
  selectionModePlugin
} from "@react-pdf-viewer/selection-mode";

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// Create new plugin instance
const App = () => {
  const renderToolbar = (Toolbar: (props: ToolbarProps) => ReactElement) => (
    <Toolbar>
      {(slots: ToolbarSlot) => {
        const {
          CurrentPageInput,
          EnterFullScreen,
          GoToNextPage,
          GoToPreviousPage,
          NumberOfPages,
          SwitchScrollMode,
          ShowSearchPopover,
          GoToFirstPage,
          GoToLastPage,
          Zoom,
          SwitchSelectionMode,
          ZoomIn,

          ZoomOut
        } = slots;
        return (
          <div
            style={{
              alignItems: "center",
              display: "flex",
              overflowY: "hidden"
            }}
          >
            {/* <div style={{ padding: "0px 2px" }}>
              <ShowSearchPopover />
            </div> */}
            <div style={{ padding: "0px 2px" }}>
              <ZoomOut />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <Zoom />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <ZoomIn />
            </div>
            <div style={{ padding: "0px 2px", marginLeft: "auto" }}>
              <GoToFirstPage />
            </div>
            <div style={{ padding: "0px 2px", marginLeft: "auto" }}>
              <GoToPreviousPage />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <CurrentPageInput /> / <NumberOfPages />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <GoToNextPage />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <ShowSearchPopover />
            </div>
            <div style={{ padding: "0px 2px", marginLeft: "auto" }}>
              <GoToLastPage />
            </div>
            <div style={{ padding: "0px 2px", marginLeft: "auto" }}>
              <EnterFullScreen />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <SwitchScrollMode mode={ScrollMode.Horizontal} />
            </div>
            {/* <div style={{ padding: "0px 2px" }}>
              <SwitchScrollMode mode={ScrollMode.Vertical} />
            </div> */}
            <div style={{ padding: "0px 2px" }}>
              <SwitchScrollMode mode={ScrollMode.Wrapped} />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <SwitchSelectionMode mode={SelectionMode.Text} />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <SwitchSelectionMode mode={SelectionMode.Hand} />
            </div>
          </div>
        );
      }}
    </Toolbar>
  );

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar,
    toolbarPlugin: {
      scrollModePlugin: {
        scrollMode: ScrollMode.Horizontal
      }
    }
  });

  return (
    <div
      style={{
        overflowX: "hidden",
        boxSizing: "border-box"
      }}
    >
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
        <Viewer
          style={{
            overflow: "hidden"
          }}
          defaultScale={SpecialZoomLevel.ActualSize}
          fileUrl={filex}
          plugins={[defaultLayoutPluginInstance]}
        />
      </Worker>
    </div>
  );
};

export default App;
