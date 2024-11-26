import{j as c}from"./jsx-runtime-CkxqCPlQ.js";import{r as e}from"./index-DJO9vBfz.js";const _={count:!0,suffix:""},D=1e3,j=o=>{const C=o.count?0:o.statistic,[u,p]=e.useState(C),a=e.useRef(null),s=e.useRef(null),t={..._,...o},F=e.useMemo(()=>`${u}${t.suffix}`,[u]);return e.useEffect(()=>{if(!t.count)return;const m=d=>{console.log("counting"),a.current||(a.current=d);const f=d-a.current,l=D;if(f<l){const W=Math.min(Math.floor(f/l*t.statistic),t.statistic);p(W),s.current=requestAnimationFrame(m)}else p(t.statistic)};return s.current=requestAnimationFrame(m),()=>{s.current&&cancelAnimationFrame(s.current)}},[t.statistic]),c.jsxs("div",{className:"flex flex-col items-center",children:[c.jsx("h3",{children:F}),c.jsx("div",{children:t.description})]})};j.__docgenInfo={description:"",methods:[],displayName:"KeyStatistic",props:{statistic:{required:!0,tsType:{name:"number"},description:""},suffix:{required:!1,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},countDelay:{required:!1,tsType:{name:"number"},description:""},count:{required:!1,tsType:{name:"boolean"},description:""}}};const A={component:j},r={args:{statistic:100,description:"Resellers"}},n={args:{statistic:50,description:"Employees",suffix:"+"}},i={args:{statistic:100,description:"Happiness",suffix:"%",count:!1}};var x,g,h;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    statistic: 100,
    description: "Resellers"
  }
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,S,T;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    statistic: 50,
    description: "Employees",
    suffix: "+"
  }
}`,...(T=(S=n.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var q,E,R;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    statistic: 100,
    description: "Happiness",
    suffix: "%",
    count: false
  }
}`,...(R=(E=i.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const I=["Default","WithSurfix","WithoutCounting"];export{r as Default,n as WithSurfix,i as WithoutCounting,I as __namedExportsOrder,A as default};
