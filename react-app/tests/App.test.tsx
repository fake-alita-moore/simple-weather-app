import React from "react";
import ReactDOM from "react-dom";
import { App } from "../src/app";

describe("App", () => {
  it("should load successfully", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
});
