const React = require("react");
const { render, unmountComponentAtNode } = require("react-dom");
const { act } = require("react-dom/test-utils");
const { TextInput } = require(".");

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
  act(() => {
    render(
      (
        <TextInput
          label="inputLabel"   
          id="inputId"
          onChange={() => undefined}
          value="inputValue"
        />
      ), 
      container
    );  
  });  

  expect(container.textContent).toBe("Hey, stranger");
});


