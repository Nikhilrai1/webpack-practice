console.log("Hello from customreact.js");

function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        console.log("prop", prop)
        if (prop === "children") continue;
        if (prop === "style") {
            const style = reactElement.props[prop];
            let styles = ``;
            for (const styleProp in style) {
                styles += `${styleProp}: ${style[styleProp]}; `
            }
            console.log("styles", styles)
            domElement.style = styles;
        }
        else {
            domElement.setAttribute(prop, reactElement.props[prop]);
        }
    }

    container.appendChild(domElement);
}



const aElement = {
    type: "a",
    props: {
        href: "https://www.google.com",
        target: "_blank",
        style: {
            color: "red",
            "font-size": "30px",
            "background-color": "lightblue",
        }
    },
    children: "Click me to visit google",
};

const pElement = {
    type: "p",
    props: {
        style: {
            color: "red",
            "font-size": "30px",
            "background-color": "orange",
            margin: "50px",
        }
    },
    children: "I am a paragraph",
};

const mainContainer = document.querySelector("body");

customRender(aElement, mainContainer)
customRender(pElement, mainContainer)

