const styles = `
 code,
 code[class*='language-'],
 pre[class*='language-'] {
   color: #333;
   text-align: left;
   white-space: pre;
   word-spacing: normal;
   tab-size: 4;
   hyphens: none;
   font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;
   line-height: 1.4;
   direction: ltr;
   cursor: text;
 }

 pre[class*='language-'] {
   overflow: auto;
   margin: 1em 0;
   padding: 1.2em;
   border-radius: 3px;
   font-size: 85%;
 }

 p code,
 li code,
 table code {
   margin: 0;
   border-radius: 3px;
   padding: 0.2em 0;
   font-size: 85%;
 }
 p code:before, p code:after,
 li code:before,
 li code:after,
 table code:before,
 table code:after {
   letter-spacing: -0.2em;
   content: "00a0";
 }

 code,
 :not(pre) > code[class*='language-'],
 pre[class*='language-'] {
   background: #f7f7f7;
 }

 :not(pre) > code[class*='language-'] {
   padding: 0.1em;
   border-radius: 0.3em;
 }

 .token.comment, .token.prolog, .token.doctype, .token.cdata {
   color: #969896;
 }
 .token.punctuation, .token.string, .token.atrule, .token.attr-value {
   color: #183691;
 }
 .token.property, .token.tag {
   color: #63a35c;
 }
 .token.boolean, .token.number {
   color: #0086b3;
 }
 .token.selector, .token.attr-name, .token.attr-value .punctuation:first-child, .token.keyword, .token.regex, .token.important {
   color: #a71d5d;
 }
 .token.operator, .token.entity, .token.url, .language-css .token.string {
   color: #a71d5d;
 }
 .token.entity {
   cursor: help;
 }

 .namespace {
   opacity: 0.7;
 }
`

export default styles
