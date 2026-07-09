import { HelloWorld } from "./HelloWorld"
import { createRoot } from "react-dom/client";

// const helloWorldReactVDOM = HelloWorld()
// createRoot(document.getElementById('root')!)
//     .render(helloWorldReactVDOM)

createRoot(document.getElementById('root')!)
    .render(<HelloWorld />)

