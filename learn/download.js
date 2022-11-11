const fs = require("fs");
const download = require("download");
const dayjs = require("dayjs");

const data = new Map();

const details = {
  "FG-MivwdjdXANbZDRqLpf": {
    url: "https://api2.mubu.com/v3/document_image/367a2609-a7f7-45f3-8f01-dcb41eef00bc-88453.jpg",
    resourceId: "",
    width: 200,
    height: 200,
  },
  vBwlPGozraebGl5ZggK5s: {
    url: "https://api2.mubu.com/v3/document_image/6af41f1a-d375-4fe9-9a87-9e2e9761bc94-88453.jpg",
    resourceId: "",
    width: 200,
    height: 200,
  },
  "kpQ56ckSsSChQbuFreKl-": {
    url: "https://api2.mubu.com/v3/document_image/6074a450-d142-43dd-b6dd-18f0390d0dd6-88453.jpg",
    resourceId: "",
    width: 200,
    height: 200,
  },
  BFC0xuNbqkLn4AIrUymyI: {
    url: "https://api2.mubu.com/v3/document_image/dfce6b66-6497-4074-b369-306655d19197-88453.jpg",
    resourceId: "",
    width: 200,
    height: 200,
  },
  Lxjl5tLK9pRkDDhaoNKpu: {
    url: "https://api2.mubu.com/v3/document_image/b03a0657-50ba-4c5d-8b2d-7897f7e20356-88453.jpg",
    resourceId: "",
    width: 200,
    height: 200,
  },
  AKRrVCtrsrE64zcbaoKK5: {
    url: "https://api2.mubu.com/v3/document_image/dffe6965-c54b-4e40-8cb6-47106a7ac7ff-884531.jpg",
    resourceId: "",
    width: 200,
    height: 200,
  },
  AKRrVCtrsrE64zcbaoKK4: {
    url: "https://api2.mubu.com/v3/document_image/dffe6965-c54b-4e40-8cb6-47106a7ac7ff-88453.jpg",
    resourceId: "",
    width: 200,
    height: 200,
  },
};

const keys = Object.keys(details);
console.log(data);

// downloadImg(keys);

console.log("Finished");

async function downloadImg(keys) {
  for (const key of keys) {
    try {
      const url = details[key].url;
      await download(url, "dist");
    } catch (error) {
      console.log(error.message);
      continue;
    }
  }
}

console.log(dayjs().format("YYYY-MM-DD"));

const getWidthHeight = (source) => {
  const sizeRegExp = {
    width: /width:\s?\d+px;?/,
    height: /height:\s?\d+px;?/,
  };
  const getSize = (value, taget) =>
    value
      .split(taget + ":")
      .reverse()[0]
      .trim()
      .replace(/px;?/, "");
  const res = { width: 0, height: 0 };

  const widthMatch = source.match(sizeRegExp.width);
  const heightMatch = source.match(sizeRegExp.height);

  if (widthMatch) {
    res.width = Number(getSize(widthMatch[0], "width"));
  }
  if (heightMatch) {
    res.height = Number(getSize(heightMatch[0], "height"));
  }

  return res;
};

console.log(getWidthHeight("height:999px;"));

const htmlData = {
  div: [
    {
      div: [
        { span: "幕布是免费的吗？", "@_class": "content mm-editor" },
        {
          ul: {
            li: [
              {
                div: [
                  {
                    div: { "@_class": "bullet-dot" },
                    "@_class": "bullet",
                  },
                  {
                    span: "幕布账户注册是免费的，可以使用幕布的所有核心功能",
                    "@_class": "content mm-editor",
                  },
                ],
                "@_class": "node",
              },
              {
                div: [
                  {
                    div: { "@_class": "bullet-dot" },
                    "@_class": "bullet",
                  },
                  {
                    span: "同时, 我们为有更多功能需求的用户提供了订阅制的高级版账户，每月仅需 9 元，更多详情请查看",
                    a: {
                      span: {
                        "#text": "https://mubu.com/about/pro",
                        "@_class": "content-link-text",
                      },
                      "@_class": "content-link",
                      "@_target": "_blank",
                      "@_spellcheck": "false",
                      "@_rel": "noreferrer",
                      "@_href": "https://mubu.com/about/pro",
                    },
                    "@_class": "content mm-editor",
                  },
                ],
                "@_class": "node",
              },
            ],
            "@_class": "node-list",
          },
          "@_class": "children",
        },
      ],
      "@_class": "node drill-node",
    },
    {
      span: "以上内容整理于",
      a: {
        "#text": "幕布文档",
        "@_target": "_blank",
        "@_class": "publish-link",
        "@_href": "https://mubu.com?s=export-pdf",
      },
      "@_class": "publish",
    },
  ],
};

const findChildren = (node) => {
  console.log("node", node);
  if (node[node.length - 1].ul) {
    return node[node.length - 1].ul?.li;
  }

  const node2 = node.find((item) => Array.isArray(item.div));
  console.log("node2", node2);
  return findChildren(node2.div);
};

const children = findChildren(htmlData.div);
console.log("children", children);
