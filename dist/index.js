var P=Object.defineProperty;var M=e=>P(e,"__esModule",{value:!0});var E=(e,t)=>{for(var n in t)P(e,n,{get:t[n],enumerable:!0})};M(exports);E(exports,{rules:()=>K});var h={additionalProperties:!1,properties:{orderedKeys:{type:"array"}},type:"object"};function g(e){return(t,n)=>{if(e){let p=e.includes(t),o=e.includes(n);if(p&&!o)return!0;if(!p&&o)return!1;if(p&&o)return e.indexOf(t)<=e.indexOf(n)}return t.toLowerCase()<=n.toLowerCase()}}function f(e,t,n){return p=>{let o=[];if(!(t==null?void 0:t.node))return o;let r=n.getSourceCode();return F(r,o,p,e,t.node),o}}function F(e,t,n,p,o){let r=S(p),a=k(p),l=S(o),y=k(o);if(!!a!=!!y){if(a){let s={end:e.getIndexFromLoc(a.loc.end),start:e.getIndexFromLoc(a.loc.start)};r.end=Math.max(r.end,s.end);let i=e.getLastToken(o);if(!i)return;let d=e.getIndexFromLoc(i.loc.end),c=e.text.slice(r.start,s.start),u=e.text.slice(s.end,r.end),m=e.text.slice(l.start,d),T=e.text.slice(d,l.end);t.push(n.replaceTextRange([s.end,r.end],T)),t.push(n.replaceTextRange([r.start,s.start],m)),t.push(n.replaceTextRange([d,l.end],u)),t.push(n.replaceTextRange([l.start,d],c))}else if(y){let s={end:e.getIndexFromLoc(y.loc.end),start:e.getIndexFromLoc(y.loc.start)};l.end=Math.max(l.end,s.end);let i=e.getLastToken(p);if(!i)return;let d=e.getIndexFromLoc(i.loc.end),c=e.text.slice(r.start,d),u=e.text.slice(d,r.end),m=e.text.slice(l.start,s.start),T=e.text.slice(s.end,l.end);t.push(n.replaceTextRange([d,r.end],T)),t.push(n.replaceTextRange([r.start,d],m)),t.push(n.replaceTextRange([s.end,l.end],u)),t.push(n.replaceTextRange([l.start,s.start],c))}}else{let s=e.text.slice(r.start,r.end),i=e.text.slice(l.start,l.end);t.push(n.replaceTextRange([r.start,r.end],i)),t.push(n.replaceTextRange([l.start,l.end],s))}function S(s){var T,R;let i=e.getTokenAfter(s);i&&i.type==="Punctuator"&&i.value===","&&(i=e.getTokenAfter(i));let d=e.getTokenBefore(s);if(!d||!i)throw Error("eslint-plugin-sort-keys-custom-order: Error while swapping properties");let c={end:(T=e.getLastToken(s))==null?void 0:T.loc.end,start:(R=e.getFirstToken(s))==null?void 0:R.loc.start};if(!c.start||!c.end)throw Error("eslint-plugin-sort-keys-custom-order: Error while swapping properties");let u;d.loc.end.line===c.start.line?u=e.getIndexFromLoc(c.start):u=e.lineStartIndices[d.loc.end.line];let m;return i.loc.start.line===c.end.line?m=e.getIndexFromLoc(c.end):m=e.lineStartIndices[s.loc.end.line],{end:m,start:u}}function k(s){let i=e.getTokenAfter(s);if(i&&i.type==="Punctuator"&&i.value===",")return i}}function x(e){switch(e.key.type){case"Literal":return String(e.key.value);case"TemplateLiteral":if(e.key.expressions.length===0&&e.key.quasis.length===1)return e.key.quasis[0].value.cooked||void 0;break;case"Identifier":if(!e.computed)return e.key.name;break}}function N(e){var p;let t,n=g((p=e.options[0])==null?void 0:p.orderedKeys);return{ObjectExpression(){t={name:void 0,node:void 0,upper:t}},"ObjectExpression:exit"(){!t||(t=t.upper)},ObjectPattern(){t={name:void 0,node:void 0,upper:t}},"ObjectPattern:exit"(){!t||(t=t.upper)},Property(o){if(!t)return;let r={name:t.name,node:t.node,upper:t},a=x(o);if(a&&(t.name=a,t.node=o||r.node),!(!r.name||!a)&&!n(r.name,a)){if(!o.key.loc)return;e.report({data:{prevName:r.name,thisName:a},fix:f(o,r,e),loc:o.key.loc,messageId:"object-keys-error",node:o})}}}}var A={docs:{category:"Stylistic Issues",description:"Require object keys to be sorted with custom order",recommended:!1,url:"https://github.com/hugoattal/eslint-plugin-sort-keys-custom-order"},fixable:"code",messages:{"object-keys-error":"Expected object keys to be in correct order. '{{thisName}}' should be before '{{prevName}}'."},schema:[h],type:"suggestion"},j={create:N,meta:A},I=j;var b={additionalProperties:!1,properties:{orderedKeys:{type:"array"}},type:"object"};function O(e){var p;let t,n=g((p=e.options[0])==null?void 0:p.orderedKeys);return{TSInterfaceDeclaration(){t={name:void 0,node:void 0,upper:t}},"TSInterfaceDeclaration:exit"(){!t||(t=t.upper)},TSPropertySignature(o){if(!t)return;let r={name:t.name,node:t.node,upper:t},a=x(o);if(a&&(t.name=a,t.node=o||r.node),!(!r.name||!a)&&!n(r.name,a)){if(!o.key.loc)return;e.report({data:{prevName:r.name,thisName:a},fix:f(o,r,e),loc:o.key.loc,messageId:"type-keys-error",node:o})}},TSTypeLiteral(){t={name:void 0,node:void 0,upper:t}},"TSTypeLiteral:exit"(){!t||(t=t.upper)}}}var w={docs:{category:"Stylistic Issues",description:"Require type keys to be sorted with custom order",recommended:!1,url:"https://github.com/hugoattal/eslint-plugin-sort-keys-custom-order"},fixable:"code",messages:{"type-keys-error":"Expected type keys to be in correct order. '{{thisName}}' should be before '{{prevName}}'."},schema:[b],type:"suggestion"},v={create:O,meta:w},L=v;var K={"object-keys":I,"type-keys":L};0&&(module.exports={rules});
