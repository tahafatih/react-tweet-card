(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{jC3z:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return w}));var a=n("Fcif"),i=n("+I+c"),r=(n("mXGw"),n("/FXl")),o=n("TjRS"),s=n("UPKk"),d=n("yORZ"),p=n("nKz2"),m=n("ZFoC"),h=n("D9Iw"),c=(n("aD51"),["components"]),l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"intro.mdx"}});var u={_frontmatter:l},b=o.a;function w(e){var t,n,w,g=e.components,f=Object(i.a)(e,c);return Object(r.b)(b,Object(a.a)({},u,f,{components:g,mdxType:"MDXLayout"}),Object(r.b)(d.a,{mdxType:"ThemeHandler"}),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)(h.a,{className:"bash",mdxType:"Code"},"npm i react-tweet-card\n# or\nyarn add react-tweet-card"),Object(r.b)("h2",{id:"basic-setup"},"Basic setup"),Object(r.b)("p",null,"Here's how to set up a tweet card with basic information:"),Object(r.b)(m.c,{__position:2,__code:"<Container>\n  <TweetCard\n    author={{\n      name: 'randy',\n      username: 'randyfactory',\n      image:\n        'https://pbs.twimg.com/profile_images/1382083582752096262/xrx0PO8Z_400x400.jpg',\n    }}\n    tweet={`how was “philosopher” ever a job lmao like was socrates sippin wine on a balcony somewhere drunkenly slurring shit like “to find urself, think for urself” with a crowd cheering underneath him like fuck yes socrates another banger this man will not miss`}\n    time={new Date(2021, 2, 2, 21, 3)}\n    source=\"Twitter for iPhone\"\n    permalink=\"https://twitter.com/randyfactory/status/1366841622495961091\" // optional\n    fitInsideContainer\n  />\n</Container>",__scope:(t={props:f,DefaultLayout:o.a,TweetCard:s.a,ThemeHandler:d.a,Container:p.a,Playground:m.c,Code:h.a},t.DefaultLayout=o.a,t._frontmatter=l,t),mdxType:"Playground"},Object(r.b)(p.a,{mdxType:"Container"},Object(r.b)(s.a,{author:{name:"randy",username:"randyfactory",image:"https://pbs.twimg.com/profile_images/1382083582752096262/xrx0PO8Z_400x400.jpg"},tweet:"how was “philosopher” ever a job lmao like was socrates sippin wine on a balcony somewhere drunkenly slurring shit like “to find urself, think for urself” with a crowd cheering underneath him like fuck yes socrates another banger this man will not miss",time:new Date(2021,2,2,21,3),source:"Twitter for iPhone",permalink:"https://twitter.com/randyfactory/status/1366841622495961091",fitInsideContainer:!0,mdxType:"TweetCard"}))),Object(r.b)("h2",{id:"tweet-author-options"},"Tweet author options"),Object(r.b)("p",null,"You can specify that the author of the tweet you're displaying in the card is either verified or protected (private).\nThe verified badge will show next to the user's name for verified users, and the padlock icon for protected users.\nTo add these properties, add ",Object(r.b)("inlineCode",{parentName:"p"},"isVerified: true")," or ",Object(r.b)("inlineCode",{parentName:"p"},"isProtected: true")," to the ",Object(r.b)("inlineCode",{parentName:"p"},"author")," prop.\nYou can also use ",Object(r.b)("inlineCode",{parentName:"p"},"isGovernment")," or ",Object(r.b)("inlineCode",{parentName:"p"},"isBusiness")," alongside ",Object(r.b)("inlineCode",{parentName:"p"},"isVerified"),"."),Object(r.b)(m.c,{__position:3,__code:"<Container>\n  <TweetCard\n    author={{\n      name: 'hatsune mitski (zeph)',\n      username: 'zephanijong',\n      image:\n        'https://pbs.twimg.com/profile_images/1605512789107286016/keR9YPE2_400x400.jpg',\n      isVerified: true, // try replacing this with \"isProtected\"\n    }}\n    tweet={`if she's your girl why does she follow me on spotify`}\n    time={new Date(2022, 9, 10, 0, 52)}\n    source=\"Twitter for iPhone\"\n    permalink=\"https://twitter.com/zephanijong/status/1579243456869781505\"\n    fitInsideContainer\n  />\n</Container>",__scope:(n={props:f,DefaultLayout:o.a,TweetCard:s.a,ThemeHandler:d.a,Container:p.a,Playground:m.c,Code:h.a},n.DefaultLayout=o.a,n._frontmatter=l,n),mdxType:"Playground"},Object(r.b)(p.a,{mdxType:"Container"},Object(r.b)(s.a,{author:{name:"hatsune mitski (zeph)",username:"zephanijong",image:"https://pbs.twimg.com/profile_images/1605512789107286016/keR9YPE2_400x400.jpg",isVerified:!0},tweet:"if she's your girl why does she follow me on spotify",time:new Date(2022,9,10,0,52),source:"Twitter for iPhone",permalink:"https://twitter.com/zephanijong/status/1579243456869781505",fitInsideContainer:!0,mdxType:"TweetCard"}))),Object(r.b)("h2",{id:"displaying-engagement"},"Displaying engagement"),Object(r.b)("p",null,"You can use the ",Object(r.b)("inlineCode",{parentName:"p"},"engagements")," prop on the component to display the number of replies, retweets and likes a tweet has received.\nThe layout can look a bit overwhelming when both the tweet's details (time and source) and the engagements are displayed, so you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"showDetails")," and ",Object(r.b)("inlineCode",{parentName:"p"},"showEngagement")," props to control the layout.\nBoth props are set to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," by default."),Object(r.b)("h3",{id:"using-emojis"},"Using emojis"),Object(r.b)("p",null,"Setting the ",Object(r.b)("inlineCode",{parentName:"p"},"emojis")," prop to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," will make the component use emoji characters for the engagement visuals instead of the icons used by Twitter."),Object(r.b)(m.c,{__position:4,__code:"<Container>\n  <TweetCard\n    engagement={{\n      replies: 206,\n      retweets: 17600,\n      likes: 128200,\n    }}\n    emojis={false} // try setting this to true 👀\n    showDetails={false} // try setting this to true 😬\n    author={{\n      name: 'Ethan Hardy',\n      username: 'ethanhardy',\n      image:\n        'https://pbs.twimg.com/profile_images/1579548555131424775/PgoOLvU7_400x400.jpg',\n    }}\n    tweet={`You say that it's fucked that gingerbread men live in gingerbread houses, but to a gingerbread person, gingerbread is as inscrutable and fundamental as carbon. The people and homes are no more alike than humans are to diamonds. Only we, their gods and creators, can see the horror`}\n    time={new Date(2021, 11, 21, 14, 6)}\n    source=\"Twitter for iPhone\"\n    permalink=\"https://twitter.com/ethanhardy/status/1473278732676837382\"\n    fitInsideContainer\n  />\n</Container>",__scope:(w={props:f,DefaultLayout:o.a,TweetCard:s.a,ThemeHandler:d.a,Container:p.a,Playground:m.c,Code:h.a},w.DefaultLayout=o.a,w._frontmatter=l,w),mdxType:"Playground"},Object(r.b)(p.a,{mdxType:"Container"},Object(r.b)(s.a,{engagement:{replies:206,retweets:17600,likes:128200},emojis:!1,showDetails:!1,author:{name:"Ethan Hardy",username:"ethanhardy",image:"https://pbs.twimg.com/profile_images/1579548555131424775/PgoOLvU7_400x400.jpg"},tweet:"You say that it's fucked that gingerbread men live in gingerbread houses, but to a gingerbread person, gingerbread is as inscrutable and fundamental as carbon. The people and homes are no more alike than humans are to diamonds. Only we, their gods and creators, can see the horror",time:new Date(2021,11,21,14,6),source:"Twitter for iPhone",permalink:"https://twitter.com/ethanhardy/status/1473278732676837382",fitInsideContainer:!0,mdxType:"TweetCard"}))),Object(r.b)("h2",{id:"server-side-rendering"},"Server-side rendering"),Object(r.b)("p",null,"React Tweet Card can only be rendered on the client side as it loads its CSS directly into the DOM. To make it work with SSR, try importing the package dynamically."))}void 0!==w&&w&&w===Object(w)&&Object.isExtensible(w)&&!w.hasOwnProperty("__filemeta")&&Object.defineProperty(w,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"intro.mdx"}}),w.isMDXComponent=!0}}]);
//# sourceMappingURL=component---intro-mdx-8f6531f1f83a1a3b1326.js.map