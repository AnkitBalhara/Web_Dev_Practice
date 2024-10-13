let reactElement = {
    type: "a",
    props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click to Visit",
};

function customRender(reactElement,mainContainer){
let container = document.createElement(reactElement.type);
container.innerHTML = reactElement.children;
for (const prop in reactElement.props) {
    if (prop === "children") continue;
    container.setAttribute(prop, reactElement.props[prop]);
}
root.appendChild(container);
}

const root = document.getElementById("root");

customRender(reactElement,root)