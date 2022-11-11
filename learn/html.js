const content = `
<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta content="IE=edge" http-equiv="X-UA-Compatible" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta content="width=device-width, initial-scale=1, maximum-scale=1" name="viewport" />
        <title>欢迎使用幕布</title>
        
        <style>
          html {
            margin: 0;
            padding: 0;
          }

          @font-face {
  font-family: 'mm-iconfont';
  src: url('data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAAVcAA0AAAAADSAAAAUHAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP0ZGVE0cGh4GVgCCShEICo0IigYLGAABNgIkAx4EIAWFLAd0G58KyI7S1LBNkiTFr/P/+6Z638ziLBkIQ8wrsxwEKUmBA4Dwlfarxzy8f+PP7b21ZXFa6IFleXg1a60AqO3LF3jX79fq2xMRxM/jDd1CpYX3FxcP1SqJuY6YNU3FUiQ2jtU11Up8H/EkAATA3TXpGgA83rt/vfLZBDABYQCGcAKRAAxAFXRBBnayKwD+gZ+nPyqFBjBygXL/DlvTIWjwo3cVuK8s9Sl++AEEEjlOjElBk3hilJIMpUKKY21LyxouyaqeWOQjuRrUI+IKdQAY7d9DwI5a04k3MIQFzgG2AOwIKjVqJIrYTsbHABOn6EE+VdOSA1gHO0CS9GBxkMQUvqKqmhP23oxVltyoYu+7Facuv129xJ6zAUpuNJw/Noer8zbl/7HRtyFEqCv9mw2LZ3VXCfF7ULGQwXk1E0zFkant5pHX+SO069xIZQFP7GuSunhzT+uPuaGY8wjz93lhNH9+VyPuCPieEDFvrGZaKEn8By0/Xn3v0RVHUmC89ZOhDlh3jGjeou4WwZ4VRP5wFNIcni96pNDC/qa/zwFLw/qDuH+eGGTtvRnLltyoYu67FceX3+5qwVyZ4I0Xa9BhhYiSnsziTU5ZezSSLTiSYq47FsUXHwcvFjNkwu3NBXzMKiJ/15BtsMQ1xgy5e7/7/fvd7t3pcudO16737nWjDd3v3u16ULnTY0/s1yP0/Scmui+Y0HDii4p2hF3JmehUsiKsiv/3cSrHVX6R/IJJdzYQ9r9pP26TdOc/zP6LnbKg9ZkfiIwv+XOzYQe94qkIvdk05Kn/lyMsmm8KPh98KGQVX3h25WBxRS+vXRVyjG6mfDgvpohyqM+M8zOu6OX0K63v9aXZ8EOl+hM99FbLkGeTpl4Nig85BNS98ahbdCwAz502byvV8h3Wg/UjvlpDaulHWXJ45xmpkR+vfH/c0lR+U6qRDFPFMasTvr+qVeUxFMVUJpGYeohQqEP2nPx5SKO4ooVwruVuCjlnklU9Hy5kSay6LNeiYqv7PjU71+oQWCgHdmB+QcB1t5V7+623sbeXXsGLgy+EbAxegxZ1XtyouW5Ld5F9q9GtCZ11Z2HDJg27dS5c0djIMyrvwL1Elbgmbkv3nTmpbTx5a58ZEeHlIiJmhEeUCw87OCNCZSJMkqK4nWJa+E70KviUNnlpz8pnolu0atLWPDd5Ye+6N0Latm/RSb7VtNuTc6v4gwfcUq568CBa6AgAAAnf3mlYOr2/U+eHZkg41F2gtCyzuA+AhmkRcXiKqLkGv0G0LKl6EWquoiXD9ua35Kvrb/DSahlAIBNQhmOQZyAoDJUTmoihl4lRjTZxhnkgcQ+BzH1GFGkwk5AdnosNwXEIHFUdQBaAiYRpZGJsHhMXZjJI3FUgc8+Bwv1kErqFfbIhLWZBaGw410AjbdshEgwyzrnAYKW8POuMJEDcicMjIvxjg+tAiRK5pAole26Fi4FOXHlGKTbQcPjt4uTbTV5w7sY13AgFgxNUVE4FuIWzBBXLVegDmsd7+xlrL3oZYbQ8lXKUI3lyPYaTxhIJmrG5rmK9vlSCoflfKeQabKRy8CCw7YjReZVGjvRc/8Gn3vEiLOr74PlAfv+1Q9VSHs/l6Tm/nMFjJuLiPNHTGI9vR5xALUQwYDyIsGDESSKZFFJJI908y2iXWzJq0Cj5RDdOO6nFE954+YIpXx1UcFoaLx+TN/EhpYPVt1cBAA==') format('woff2'),
      url('data:application/font-woff;charset=utf-8;base64,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') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

.mm-iconfont::before {
  font-family: 'mm-iconfont', sans-serif !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

          .mention[data-type='1']::before,
          .mention[data-type='3']::before,
          .mention[data-type='8']::before,
          .mention[data-type='11']::before,
          .mention[data-type='12']::before,
          .mention[data-type='15']::before,
          .mention[data-type='16']::before {
            content: '\e62f';
            display: inline-block;
            vertical-align: middle;
            margin-top: -4px;
            font-size: inherit;
          }
          .mention[data-type='3']::before {
            content: '\e62c';
          }
          .mention[data-type='8']::before {
            content: '\e62d';
          }
          .mention[data-type='11']::before {
            content: '\e62b';
          }
          .mention[data-type='12']::before {
            content: '\e62a';
          }
          .mention[data-type='15']::before {
            content: '\e62e';
          }
          .mention[data-type='22']::before {
            content: '\e602';
          }

          body {
            margin: 50px 20px;
            padding: 0;
            color: #333;
            font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'PingFang SC',
                  Helvetica, Arial, 'Microsoft YaHei', 微软雅黑, 黑体, Heiti, sans-serif,
                  SimSun, 宋体, serif,
                  'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
          }

          body.narrow {
            max-width: 790px;
            margin-left: auto;
            margin-right: auto;
            padding-left: 20px;
            padding-right: 20px;
          }

          .title {
            min-height: 40px;
            padding-left: 10px;
            padding-bottom: 24px;
            margin-bottom: 20px;
            line-height: 40px;
            font-size: 26px;
            font-weight: 500;
            border-bottom: 1px solid #e5e6e8;
          }

          .node-list {
            margin: 0 0 0 28px;
            padding: 0;
            list-style: none;
          }

          .node {
            position: relative;
          }

          .node.drill-node > .content {
            margin-bottom: 15px;
            font-size: 20px;
            line-height: 28px;
          }

          .node.drill-node > .note {
            margin-bottom: 10px;
          }

          .content {
            min-height: 24px;
            padding-top: 2px;
            padding-bottom: 3px;
            line-height: 24px;
            font-size: 16px;
          }

          .note {
            position: relative;
            padding-bottom: 2px;
            line-height: 22px;
            font-size: 14px;
            color: #888;
            white-space: pre-wrap;
          }

          .content > *,
          .note > * {
            padding-top: 2px;
            padding-bottom: 2px;
          }

          .note:empty {
            padding-bottom: 0;
          }

          .node.finished .content,
          .node.finished .note {
            opacity: 0.5;
          }

          .node.finished > .content {
            text-decoration: line-through;
          }

          .heading1 > .content {
            min-height: 34px;
            line-height: 34px;
            font-size: 24px;
            font-weight: 500;
          }

          .heading2 > .content {
            min-height: 30px;
            line-height: 30px;
            font-size: 21px;
            font-weight: 500;
          }

          .heading3 > .content {
            min-height: 27px;
            line-height: 27px;
            font-size: 19px;
            font-weight: 500;
          }

          .mention {
            padding-left: 2px;
            padding-right: 2px;
            color: #5856d5;
            word-break: break-all;
            text-decoration: none;
          }

          .content-link {
            color: unset;
            opacity: 0.6;
            word-break: break-all;
          }

          .tag {
            text-decoration: underline;
            opacity: 0.6;
          }

          .bold {
            font-weight: bold;
          }

          .italic {
            font-style: italic;
          }

          .underline {
            text-decoration: underline;
          }

          .content .highlight-red,
          .highlight-red > .content > * {
            background-color: #fbbfbc;
          }

          .content .highlight-yellow,
          .highlight-yellow > .content > * {
            background-color: #f8e6ab;
          }

          .content .highlight-blue,
          .highlight-blue > .content > * {
            background-color: #bacefd;
          }

          .content .highlight-cyan,
          .highlight-cyan > .content > * {
            background-color: #a9efe6;
          }

          .content .highlight-pink,
          .highlight-pink > .content > * {
            background-color: #fdddef;
          }

          .content .highlight-olive,
          .highlight-olive > .content > * {
            background-color: #bbbfc4;
          }

          .content .highlight-grey,
          .highlight-grey > .content > * {
            background-color: #bbbfc4;
          }

          .text-color-red {
            color: #dc2d1e;
          }

          .text-color-yellow {
            color: #ffaf38;
          }

          .text-color-green {
            color: #75c940;
          }

          .text-color-blue {
            color: #3da8f5;
          }

          .text-color-purple {
            color: #797ec9;
          }

          .bullet {
            position: absolute;
            left: -25px;
            top: 5px;
            width: 18px;
            height: 18px;
            border-radius: 9px;
          }

          .node.collapsed > .bullet {
            background-color: #dee0e3;
          }

          .heading1 > .bullet {
            top: 10px;
          }

          .heading2 > .bullet {
            top: 8px;
          }

          .heading3 > .bullet {
            top: 6px;
          }

          .bullet-dot {
            position: absolute;
            left: 6px;
            top: 6px;
            width: 6px;
            height: 6px;
            background-color: rgb(100, 106, 115);
            border-radius: 3px;
          }

          .image-list {
            position: relative;
            margin: 0;
            padding: 0;
            list-style: none;
          }

          .image-item {
            padding-top: 2px;
            padding-bottom: 8px;
          }

          .image {
            display: block;
            max-width: 100%;
          }

          .children {
            position: relative;
          }

          .note::before,
          .image-list::before,
          .children::before {
            content: "";
            position: absolute;
            top: 0;
            left: -17px;
            width: 1px;
            height: 100%;
            background-color: #dee0e3;
          }

          .node.drill-node > .note::before,
          .node.drill-node > .image-list::before,
          .node.drill-node > .children::before,
          body.noline .note::before,
          body.noline .image-list::before,
          body.noline .children::before {
            display: none;
          }

          .node.drill-node > .note,
          .node.drill-node > .content,
          .node.drill-node > .image-list,
          .node.drill-node > .children {
            margin-left: 10px;
          }

          body.noline .node-list {
            margin-right: 20px;
          }

          .publish {
            margin-top: 20px;
            text-align: center;
            font-size: 13px;
            color: #666;
          }

          .publish-link {
            color: #4694FF;
          }

          .node .mention.mm-iconfont::before {
            content: '\e601';
          }

          .node .mention.mm-iconfont {
             color: #5856d5;
          }

          @media print {
            body {
              margin-top: 0;
              margin-bottom: 0;
            }
          }

          @page {
            margin-left: 0.25in;
            margin-right: 0.25in;
            margin-top: 0.5in;
            margin-bottom: 0.5in;
          }
        </style>
      </head>
      <body >
        <div class="title">欢迎使用幕布</div>
        <ul class="node-list">
    <li class="node heading3">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>关于幕布</span></div>
    
    
    <div class="children"><ul class="node-list">
    <li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>幕布是什么？</span></div>
    
    
    <div class="children"><ul class="node-list">
    <li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>幕布是一款以</span><span class="bold">层级折叠式文字</span><span>来整理内容的</span><span class="bold">大纲文档工具</span><span>，用更高效的方式和更清晰的结构来记录笔记、管理任务、制定计划等，同时支持</span><span class="bold">一键生成思维导图</span></div>
    
    
    
  </li>
  </ul></div>
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>我能用幕布做什么？</span></div>
    
    
    <div class="children"><ul class="node-list">
    <li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>幕布可以是一个传统的文档工具，用来做读书笔记、会议记录和内容创作等</span></div>
    
    
    
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>幕布也可以是一个清单工具，管理你的待办事项、购物清单等</span></div>
    
    
    
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>幕布还是一个思维导图工具，方便地进行思维整理</span></div>
    
    
    
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span class=" text-color-blue">你对生活有多认真，你的幕布就有多强大</span></div>
    
    
    
  </li>
  </ul></div>
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>幕布是免费的吗？</span></div>
    
    
    <div class="children"><ul class="node-list">
    <li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>幕布账户注册是免费的，可以使用幕布的所有核心功能</span></div>
    
    
    
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>同时, 我们为有更多功能需求的用户提供了订阅制的高级版账户，每月仅需 9 元，更多详情请查看 </span><a class="content-link" target="_blank" spellcheck="false" rel="noreferrer" href="https://mubu.com/about/pro"><span class="content-link-text">https://mubu.com/about/pro</span></a></div>
    
    
    
  </li>
  </ul></div>
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>在哪些平台可以使用幕布？</span></div>
    
    
    <div class="children"><ul class="node-list">
    <li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>网页版：</span><a class="content-link" target="_blank" spellcheck="false" rel="noreferrer" href="http://mubu.com/"><span class="content-link-text">mubu.com</span></a></div>
    
    
    
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>iOS &amp; Android 手机 App：</span><a class="content-link" target="_blank" spellcheck="false" rel="noreferrer" href="https://mubu.com/app-dl"><span class="content-link-text">https://mubu.com/app-dl</span></a></div>
    
    
    
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>PC &amp; Mac 桌面版：</span><a class="content-link" target="_blank" spellcheck="false" rel="noreferrer" href="https://mubu.com/apps"><span class="content-link-text">https://mubu.com/apps</span></a></div>
    
    
    
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>你还可以在幕布的微信公众号「幕布」里直接使用幕布</span></div>
    
    
    
  </li>
  </ul></div>
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ></div>
    
    
    
  </li>
  </ul></div>
  </li>
<li class="node heading3">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>幕布快速上手指南</span></div>
    
    
    <div class="children"><ul class="node-list">
    <li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>新建文档</span></div>
    
    
    <div class="children"><ul class="node-list">
    <li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span class=" text-color-red">网页版 &amp; 桌面版</span></div>
    
    
    <div class="children"><ul class="node-list">
    <li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>点击文档列表页面左上角的「新建」按钮即可</span></div>
    <ul class="image-list">
    <li class="image-item">
    <img
      src="https://api2.mubu.com/v3/document_image/367a2609-a7f7-45f3-8f01-dcb41eef00bc-88453.jpg"
      
      crossorigin="anonymous"
      class="image"
    />
  </li>
  </ul>
    
    
  </li>
  </ul></div>
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span class=" text-color-green">手机 App</span></div>
    
    
    <div class="children"><ul class="node-list">
    <li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>点击文档列表页面右下角的「加号」按钮即可</span></div>
    <ul class="image-list">
    <li class="image-item">
    <img
      src="https://api2.mubu.com/v3/document_image/6af41f1a-d375-4fe9-9a87-9e2e9761bc94-88453.jpg"
      
      crossorigin="anonymous"
      class="image"
    />
  </li>
  </ul>
    
    
  </li>
  </ul></div>
  </li>
  </ul></div>
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>文档编辑</span></div>
    
    
    <div class="children"><ul class="node-list">
    <li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span class=" text-color-red">网页版 &amp; 桌面版</span></div>
    
    
    <div class="children"><ul class="node-list">
    <li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>如你所见，幕布的界面简洁大方，只要记住</span><span class="bold"> Enter（即回车）、 Tab 两个键和一个圆点 </span><span>即可</span></div>
    <ul class="image-list">
    <li class="image-item">
    <img
      src="https://api2.mubu.com/v3/document_image/6074a450-d142-43dd-b6dd-18f0390d0dd6-88453.jpg"
      style="width: 506px;"
      crossorigin="anonymous"
      class="image"
    />
  </li>
  </ul>
    
    <div class="children"><ul class="node-list">
    <li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span class="bold">两个按键</span></div>
    
    
    <div class="children"><ul class="node-list">
    <li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>使用「Enter」创建新的主题</span></div>
    
    
    
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>使用「Tab」缩进一级</span></div>
    
    <div class="note mm-editor"><span>注：文档的第一行不能缩进</span></div>
    
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>使用「Shift+Tab」提升一级</span></div>
    
    
    
  </li>
  </ul></div>
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span class="bold">一个圆点</span></div>
    
    
    <div class="children"><ul class="node-list">
    <li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>点击圆点可进入主题</span></div>
    
    
    
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>按住圆点可拖动调整主题位置</span></div>
    
    
    
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>鼠标移动到小圆点上，会出现功能菜单</span></div>
    <ul class="image-list">
    <li class="image-item">
    <img
      src="https://api2.mubu.com/v3/document_image/5ac2d8f9-55a2-4c8e-9356-645e5312c2b2-88453.jpg"
      style="width: 275px;"
      crossorigin="anonymous"
      class="image"
    />
  </li>
  </ul>
    
    
  </li>
  </ul></div>
  </li>
  </ul></div>
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>其它操作全在</span><span class="bold">顶栏按钮</span><span>和</span><span class="bold">快捷键</span><span>里</span></div>
    <ul class="image-list">
    <li class="image-item">
    <img
      src="https://api2.mubu.com/v3/document_image/dfce6b66-6497-4074-b369-306655d19197-88453.jpg"
      
      crossorigin="anonymous"
      class="image"
    />
  </li>
  </ul>
    
    
  </li>
  </ul></div>
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span class=" text-color-green">手机 App</span></div>
    
    
    <div class="children"><ul class="node-list">
    <li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>手机上的全部操作由四部分组成</span></div>
    <ul class="image-list">
    <li class="image-item">
    <img
      src="https://api2.mubu.com/v3/document_image/b03a0657-50ba-4c5d-8b2d-7897f7e20356-88453.jpg"
      style="width: 403px;"
      crossorigin="anonymous"
      class="image"
    />
  </li>
  </ul>
    <div class="note mm-editor"><span>如果设备屏幕尺寸较小，工具栏显示不全，按住左滑即可</span></div>
    <div class="children"><ul class="node-list">
    <li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span class="bold">「换行」</span><span>新建主题，输入文字</span></div>
    
    
    
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span class="bold">工具栏</span><span>操作依次是</span></div>
    
    
    <div class="children"><ul class="node-list">
    <li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>缩进一级</span></div>
    
    
    
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>提升一级</span></div>
    
    
    
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>字体样式</span></div>
    
    
    
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>删除主题</span></div>
    
    
    
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>插入图片</span></div>
    
    
    
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>编辑描述</span></div>
    
    
    
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>完成/激活</span></div>
    
    
    
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>展开/收缩</span></div>
    
    
    
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>收回键盘</span></div>
    
    
    
  </li>
  </ul></div>
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span class="bold">小圆点</span><span>操作</span></div>
    
    
    <div class="children"><ul class="node-list">
    <li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>点击圆点可进入主题</span></div>
    
    
    
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>按住圆点可拖动调整主题位置</span></div>
    
    
    
  </li>
  </ul></div>
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span class="bold">顶栏按钮</span><span>操作</span></div>
    
    
    
  </li>
  </ul></div>
  </li>
  </ul></div>
  </li>
  </ul></div>
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>思维导图</span></div>
    
    
    <div class="children"><ul class="node-list">
    <li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>编辑好文档后，在页面右上角点击按钮即可转换</span></div>
    <ul class="image-list">
    <li class="image-item">
    <img
      src="https://api2.mubu.com/v3/document_image/dffe6965-c54b-4e40-8cb6-47106a7ac7ff-88453.jpg"
      style="width: 96px;"
      crossorigin="anonymous"
      class="image"
    />
  </li>
  </ul>
    
    
  </li>
  </ul></div>
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>文档分享</span></div>
    
    
    <div class="children"><ul class="node-list">
    <li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>你可以将你的文档以</span><span class="bold">网页</span><span>的形式分享给你的好友</span></div>
    
    
    
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>在右上角开启分享，将</span><span class="bold">链接</span><span>发给你的好友即可</span></div>
    
    
    
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>他们可以</span><span class="bold">浏览</span><span>你的文档，也可以</span><span class="bold">保存</span><span>到自己的幕布中</span></div>
    
    
    
  </li>
  </ul></div>
  </li>
  </ul></div>
  </li>
<li class="node heading3">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>还有问题？</span></div>
    
    
    <div class="children"><ul class="node-list">
    <li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>你可以访问幕布帮助中心查阅解决方案：</span><a class="content-link" target="_blank" spellcheck="false" rel="noreferrer" href="https://mubu.com/help"><span class="content-link-text">https://mubu.com/help</span></a></div>
    
    
    
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>幕布使用手册：</span><a class="content-link" target="_blank" spellcheck="false" rel="noreferrer" href="https://mubu.com/asset/html/book/index.html"><span class="content-link-text">https://mubu.com/asset/html/book/index.html</span></a><span> </span></div>
    
    
    
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>或是直接联系我们</span></div>
    
    
    <div class="children"><ul class="node-list">
    <li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>工作时间可通过软件内的「反馈建议」咨询在线客服</span></div>
    
    <div class="note mm-editor"><span>此项为高级版功能</span></div>
    
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>邮箱：team@mubu.com</span></div>
    
    
    
  </li>
<li class="node">
    <div class="bullet">
    <div class="bullet-dot"></div>
  </div>
    <div class="content mm-editor" ><span>微信公众号（搜索幕布或 mubuio）留言</span></div>
    <ul class="image-list">
    <li class="image-item">
    <img
      src="https://api2.mubu.com/v3/document_image/88744a61-89be-4afa-9eeb-bc16cf5652af-88453.jpg"
      
      crossorigin="anonymous"
      class="image"
    />
  </li>
  </ul>
    
    
  </li>
  </ul></div>
  </li>
  </ul></div>
  </li>
  </ul>
        <div class="publish">
        <span>以上内容整理于</span>
        <a target="_blank" class="publish-link" href="https://mubu.com?s=export-pdf">
          幕布文档
        </a>
      </div>
  </body>
    </html>

`;

module.exports = {
  content,
};
