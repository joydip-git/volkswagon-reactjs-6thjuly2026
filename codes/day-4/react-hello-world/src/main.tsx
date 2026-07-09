import { HelloWorld } from "./HelloWorld"
import { createRoot, type Root } from "react-dom/client";

const root: HTMLElement = document.getElementById('root') as HTMLElement

//createRoot lets you create a root to display React components inside a browser DOM node.
const rootReactElement: Root = createRoot(root)

const helloWorldComponent = HelloWorld()

//root?.appendChild(helloWorldComponent)

//the render() method "translates" React Elements to HTML elements and then push the whole design in existing DOM tree of HTML page
rootReactElement.render(helloWorldComponent)

