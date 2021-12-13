(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+D9X":function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return d})),n.d(e,"default",(function(){return j}));var l=n("Fcif"),b=n("+I+c"),i=(n("mXGw"),n("/FXl")),r=n("TjRS"),c=n("UPKk"),a=n("ydU0"),o=n("ZFoC"),u=(n("aD51"),["components"]),d={};void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"props.mdx"}});var O={_frontmatter:d},s=r.a;function j(t){var e,n=t.components,j=Object(b.a)(t,u);return Object(i.b)(s,Object(l.a)({},O,j,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"props"},"Props"),Object(i.b)("table",{style:{fontSize:"14px"}},Object(i.b)("thead",null,Object(i.b)("tr",null,Object(i.b)("th",null,"Name"),Object(i.b)("th",null,"Description"),Object(i.b)("th",null,"Type"),Object(i.b)("th",null,"Default value"),Object(i.b)("th",null,"Required/Optional"))),Object(i.b)("tbody",null,Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("a",{href:"/intro#tweet-author-options"},"author")),Object(i.b)("td",null,"Information about the author user of the tweet"),Object(i.b)("td",null,"{ name, username, image, isVerified?, isProtected? }"),Object(i.b)("td",null),Object(i.b)("td",null,"Required")),Object(i.b)("tr",null,Object(i.b)("td",null,"  - name"),Object(i.b)("td",null,"Name of the author"),Object(i.b)("td",null,"string"),Object(i.b)("td",null),Object(i.b)("td",null,"Required")),Object(i.b)("tr",null,Object(i.b)("td",null,"  - username"),Object(i.b)("td",null,"Twitter handle of the author"),Object(i.b)("td",null,"string"),Object(i.b)("td",null),Object(i.b)("td",null,"Required")),Object(i.b)("tr",null,Object(i.b)("td",null,"  - image"),Object(i.b)("td",null,"URL to the profile picture of the author"),Object(i.b)("td",null,"string"),Object(i.b)("td",null),Object(i.b)("td",null,"Required")),Object(i.b)("tr",null,Object(i.b)("td",null,"  - isVerified"),Object(i.b)("td",null,"Indicates whether the author is verified"),Object(i.b)("td",null,"boolean"),Object(i.b)("td",null,"false"),Object(i.b)("td",null,"Optional")),Object(i.b)("tr",null,Object(i.b)("td",null,"  - isProtected"),Object(i.b)("td",null,"Indicates whether the author's account is protected/private"),Object(i.b)("td",null,"boolean"),Object(i.b)("td",null,"false"),Object(i.b)("td",null,"Optional")),Object(i.b)("tr",null,Object(i.b)("td",null,"tweet"),Object(i.b)("td",null,"The text of the tweet itself"),Object(i.b)("td",null,"string"),Object(i.b)("td",null),Object(i.b)("td",null,"Required")),Object(i.b)("tr",null,Object(i.b)("td",null,"time"),Object(i.b)("td",null,"Time of tweeting. If passed in as a Date object, it will be formatted as it is on Twitter"),Object(i.b)("td",null,"Date | string"),Object(i.b)("td",null),Object(i.b)("td",null,"Required")),Object(i.b)("tr",null,Object(i.b)("td",null,"source"),Object(i.b)("td",null,'The source application for the tweet (e.g. "Twitter for iPhone")'),Object(i.b)("td",null,"string"),Object(i.b)("td",null),Object(i.b)("td",null,"Required")),Object(i.b)("tr",null,Object(i.b)("td",null,"permalink"),Object(i.b)("td",null,"The URL for the tweet (or anything, it's up to you). Clicking the twitter logo or the time of tweeting on the card will take you to this URL."),Object(i.b)("td",null,"string"),Object(i.b)("td",null),Object(i.b)("td",null,"Optional")),Object(i.b)("tr",null,Object(i.b)("td",null,"clickableProfileLink"),Object(i.b)("td",null,"Creates a clickable visual effect on the name and profile picture of the author. If turned on, clicking these elements will open the user's profile on Twitter."),Object(i.b)("td",null,"boolean"),Object(i.b)("td",null,"false"),Object(i.b)("td",null,"Optional")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("a",{href:"/styling#themes"},"theme")),Object(i.b)("td",null,"The theme setting for the card"),Object(i.b)("td",null,'"light" | "dim" | "dark"'),Object(i.b)("td",null,'"light"'),Object(i.b)("td",null,"Optional")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("a",{href:"/styling#colors"},"colors")),Object(i.b)("td",null,"Gives you the option to override the colors used in the card"),Object(i.b)("td",null,"{ primary, secondary, accent, background }"),Object(i.b)("td",null,"{}"),Object(i.b)("td",null,"Optional")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("a",{href:"/styling#gradient-background"},"gradientBackground")),Object(i.b)("td",null,"Sets the card's background to gradient"),Object(i.b)("td",null,"boolean"),Object(i.b)("td",null,"false"),Object(i.b)("td",null,"Optional")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("a",{href:"/styling#blurred-background"},"blurredBackground")),Object(i.b)("td",null,"Sets the card's background to blurred"),Object(i.b)("td",null,"boolean"),Object(i.b)("td",null,"false"),Object(i.b)("td",null,"Optional")),Object(i.b)("tr",null,Object(i.b)("td",null,"fitInsideContainer"),Object(i.b)("td",null,"Scales the contents of the card to perfectly fit inside its parent container. Only works if the element is capable of overflowing on the page."),Object(i.b)("td",null,"boolean"),Object(i.b)("td",null,"false"),Object(i.b)("td",null,"Optional")))),Object(i.b)("p",null,"Try them out on this playground:"),Object(i.b)(o.c,{__position:1,__code:"<OutsideContainer>\n  <ParentContainer>\n    <TweetCard\n      author={{\n        name: 'dan mentos',\n        username: 'DanMentos',\n        image:\n          'https://pbs.twimg.com/profile_images/548378022768701441/2zz0Vk61_400x400.png',\n        isVerified: false,\n        isProtected: false,\n      }}\n      tweet={`[introducing girlfriend to my family]\n                  me: this is my girlfriend janine\n                  janine: hi\n                  wife: what the fuck`}\n      time={new Date(2016, 7, 11, 6, 14)} // try a string instead!\n      source=\"TweetDeck\"\n      permalink=\"https://twitter.com/DanMentos/status/763589479055495168\"\n      theme=\"light\"\n      colors={{}}\n      gradientBackground={false}\n      blurredBackground={false}\n      clickableProfileLink={false}\n      fitInsideContainer={false}\n    />\n  </ParentContainer>\n</OutsideContainer>",__scope:(e={props:j,DefaultLayout:r.a,TweetCard:c.a,OutsideContainer:a.a,ParentContainer:a.b,Playground:o.c},e.DefaultLayout=r.a,e._frontmatter=d,e),mdxType:"Playground"},Object(i.b)(a.a,{mdxType:"OutsideContainer"},Object(i.b)(a.b,{mdxType:"ParentContainer"},Object(i.b)(c.a,{author:{name:"dan mentos",username:"DanMentos",image:"https://pbs.twimg.com/profile_images/548378022768701441/2zz0Vk61_400x400.png",isVerified:!1,isProtected:!1},tweet:"[introducing girlfriend to my family]\n                    me: this is my girlfriend janine\n                    janine: hi\n                    wife: what the fuck",time:new Date(2016,7,11,6,14),source:"TweetDeck",permalink:"https://twitter.com/DanMentos/status/763589479055495168",theme:"light",colors:{},gradientBackground:!1,blurredBackground:!1,clickableProfileLink:!1,fitInsideContainer:!1,mdxType:"TweetCard"})))))}void 0!==j&&j&&j===Object(j)&&Object.isExtensible(j)&&!j.hasOwnProperty("__filemeta")&&Object.defineProperty(j,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"props.mdx"}}),j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---props-mdx-c25c123f5894c41de83c.js.map