/**
 * Import custom element definitions. Custom elements will be registered automatically.
 */
import "@vscode-elements/elements/dist/vscode-button";
import "@vscode-elements/elements/dist/vscode-tabs";
import "@vscode-elements/elements/dist/vscode-tab-header";
import "@vscode-elements/elements/dist/vscode-tab-panel";

import { useEffect, useRef } from "react";
import { VscodeTabs } from "@vscode-elements/elements/dist/vscode-tabs";
import { VscTabsSelectEvent } from "@vscode-elements/elements/dist/vscode-tabs/vscode-tabs";

import "./Demo.css";
import Clock from "./Clock";

function Demo() {
  const tabRef = useRef<VscodeTabs>(null);

  useEffect(() => {
    const tabs = tabRef.current;

    const selectHandler = (ev: VscTabsSelectEvent) => {
      console.log(ev);
    };

    if (tabs) {
      tabs.addEventListener("vsc-tabs-select", selectHandler);
    }

    return () => {
      if (tabs) {
        tabs.removeEventListener("vsc-tabs-select", selectHandler);
      }
    };
  }, []);

  // The used web components are registered as valid HTML elements in the global.d.ts
  // The CSS theme variables are defined in the index.html
  return (
    <div className="Demo">
      <vscode-tabs panel ref={tabRef} class="tabs">
        <vscode-tab-header>Lorem</vscode-tab-header>
        <vscode-tab-panel>
          <Clock />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </vscode-tab-panel>
        <vscode-tab-header>Ipsum</vscode-tab-header>
        <vscode-tab-panel>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </vscode-tab-panel>
      </vscode-tabs>
      <div className="buttons">
        <vscode-button>Primary button</vscode-button>
        <vscode-button secondary>Secondary button</vscode-button>
      </div>
    </div>
  );
}

export default Demo;
