const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { content } = require("./html");

const dom = new JSDOM(content);
const document = dom.window.document;
const bodyEl = document.body;
console.log(bodyEl.childNodes.length);

Array.from(bodyEl.childNodes).forEach((node) => {
  console.log(node);
});

function getBodyContent(source) {
  const result = [];

  const filterContent = (source) => {
    const children = source.childNodes;
    const isArray = (nodelists) => Array.isArray(Array.from(nodelists));

    if (isArray(children)) {
      for (let index = 0; index < children.length; index++) {
        const node = children[index];
        console.log("nodeindex", node.nodeValue);
        if (node.nodeName === "#text") {
          const value = node.nodeValue.trim();
          if (value) {
            result.push(value);
          }
        }
        if (isArray(node.childNodes)) {
          filterContent(node);
        }
      }
    }
  };

  filterContent(source);

  return result;
}

// const res = getBodyContent(bodyEl);

// console.log("res", res);

function converter(dom) {
  if (dom.nodeType === 3 && !dom.nodeValue.trim()) {
    return dom.nodeValue;
  }
  if (dom.nodeType === 9) {
    dom = dom.documentElement;
  }
  const obj = {};
  obj.nodeType = dom.nodeType;
  if (dom.nodeType === 1) {
    obj.tagName = dom.tagName;
    obj.attributes = []; // Array.from(obj.attributes) gives us a lot of things we don't want
    for (let i = 0, len = dom.attributes.length; i < len; ++i) {
      const attr = dom.attributes[i];
      obj.attributes.push({ name: attr.name, value: attr.value });
    }
    obj.children = [];
    for (let child = dom.firstChild; child; child = child.nextSibling) {
      obj.children.push(converter(child));
    }
  } else {
    if (!dom.nodeValue.trim()) {
      obj.nodeValue = dom.nodeValue;
    }
  }
  return obj;
}
const json = JSON.stringify(converter(bodyEl, null, 2));
console.log(json);
