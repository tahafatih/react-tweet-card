(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+D9X":function(t,e,l){"use strict";l.r(e),l.d(e,"_frontmatter",(function(){return d})),l.d(e,"default",(function(){return s}));var n=l("Fcif"),b=l("+I+c"),c=(l("mXGw"),l("/FXl")),r=l("TjRS"),i=l("UPKk"),u=l("ydU0"),o=l("ZFoC"),a=(l("aD51"),["components"]),d={};void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"props.mdx"}});var O={_frontmatter:d},j=r.a;function s(t){var e,l=t.components,s=Object(b.a)(t,a);return Object(c.b)(j,Object(n.a)({},O,s,{components:l,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"props"},"Props"),Object(c.b)("table",{style:{fontSize:"14px"}},Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"Name"),Object(c.b)("th",null,"Description"),Object(c.b)("th",null,"Type"),Object(c.b)("th",null,"Default value"),Object(c.b)("th",null,"Required/Optional"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("a",{href:"/intro#tweet-author-options"},"author")),Object(c.b)("td",null,"Information about the author user of the tweet"),Object(c.b)("td",null,"{ name, username, image, isVerified?, isProtected? }"),Object(c.b)("td",null),Object(c.b)("td",null,"Required")),Object(c.b)("tr",null,Object(c.b)("td",null,"  - name"),Object(c.b)("td",null,"Name of the author"),Object(c.b)("td",null,"string"),Object(c.b)("td",null),Object(c.b)("td",null,"Required")),Object(c.b)("tr",null,Object(c.b)("td",null,"  - username"),Object(c.b)("td",null,"Twitter handle of the author"),Object(c.b)("td",null,"string"),Object(c.b)("td",null),Object(c.b)("td",null,"Required")),Object(c.b)("tr",null,Object(c.b)("td",null,"  - image"),Object(c.b)("td",null,"URL to the profile picture of the author"),Object(c.b)("td",null,"string"),Object(c.b)("td",null),Object(c.b)("td",null,"Required")),Object(c.b)("tr",null,Object(c.b)("td",null,"  - isVerified"),Object(c.b)("td",null,"Indicates whether the author is verified"),Object(c.b)("td",null,"boolean"),Object(c.b)("td",null,"false"),Object(c.b)("td",null,"Optional")),Object(c.b)("tr",null,Object(c.b)("td",null,"  - isProtected"),Object(c.b)("td",null,"Indicates whether the author's account is protected/private"),Object(c.b)("td",null,"boolean"),Object(c.b)("td",null,"false"),Object(c.b)("td",null,"Optional")),Object(c.b)("tr",null,Object(c.b)("td",null,"tweet"),Object(c.b)("td",null,"The text of the tweet itself"),Object(c.b)("td",null,"string"),Object(c.b)("td",null),Object(c.b)("td",null,"Required")),Object(c.b)("tr",null,Object(c.b)("td",null,"time"),Object(c.b)("td",null,"Time of tweeting. If passed in as a Date object, it will be formatted as it is on Twitter"),Object(c.b)("td",null,"Date | string"),Object(c.b)("td",null),Object(c.b)("td",null,"Required")),Object(c.b)("tr",null,Object(c.b)("td",null,"source"),Object(c.b)("td",null,'The source application for the tweet (e.g. "Twitter for iPhone")'),Object(c.b)("td",null,"string"),Object(c.b)("td",null),Object(c.b)("td",null,"Required")),Object(c.b)("tr",null,Object(c.b)("td",null,"permalink"),Object(c.b)("td",null,"The URL for the tweet (or anything, it's up to you). Clicking the twitter logo or the time of tweeting on the card will take you to this URL."),Object(c.b)("td",null,"string"),Object(c.b)("td",null),Object(c.b)("td",null,"Optional")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("a",{href:"/intro#displaying-engagement"},"engagement")),Object(c.b)("td",null,"The number of engagements (replies, RTs, likes) the tweet has received"),Object(c.b)("td",null,"{ replies?, retweets?, likes? }"),Object(c.b)("td",null),Object(c.b)("td",null,"Optional")),Object(c.b)("tr",null,Object(c.b)("td",null,"  - replies"),Object(c.b)("td",null,"Number of replies"),Object(c.b)("td",null,"number"),Object(c.b)("td",null,"0"),Object(c.b)("td",null,"Optional")),Object(c.b)("tr",null,Object(c.b)("td",null,"  - retweets"),Object(c.b)("td",null,"Number of retweets"),Object(c.b)("td",null,"number"),Object(c.b)("td",null,"0"),Object(c.b)("td",null,"Optional")),Object(c.b)("tr",null,Object(c.b)("td",null,"  - likes"),Object(c.b)("td",null,"Number of likes"),Object(c.b)("td",null,"number"),Object(c.b)("td",null,"0"),Object(c.b)("td",null,"Optional")),Object(c.b)("tr",null,Object(c.b)("td",null,"clickableProfileLink"),Object(c.b)("td",null,"Creates a clickable visual effect on the name and profile picture of the author. If turned on, clicking these elements will open the user's profile on Twitter."),Object(c.b)("td",null,"boolean"),Object(c.b)("td",null,"false"),Object(c.b)("td",null,"Optional")),Object(c.b)("tr",null,Object(c.b)("td",null,"showDetails"),Object(c.b)("td",null,"Controls wheter the time and source of the tweet should be displayed"),Object(c.b)("td",null,"boolean"),Object(c.b)("td",null,"true"),Object(c.b)("td",null,"Optional")),Object(c.b)("tr",null,Object(c.b)("td",null,"showEngagement"),Object(c.b)("td",null,"Controls wheter the engagements of the tweet should be displayed"),Object(c.b)("td",null,"boolean"),Object(c.b)("td",null,"true"),Object(c.b)("td",null,"Optional")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("a",{href:"/styling#themes"},"theme")),Object(c.b)("td",null,"The theme setting for the card"),Object(c.b)("td",null,'"light" | "dim" | "dark"'),Object(c.b)("td",null,'"light"'),Object(c.b)("td",null,"Optional")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("a",{href:"/styling#colors"},"colors")),Object(c.b)("td",null,"Gives you the option to override the colors used in the card"),Object(c.b)("td",null,"{ primary, secondary, accent, background }"),Object(c.b)("td",null,"{}"),Object(c.b)("td",null,"Optional")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("a",{href:"/styling#gradient-background"},"gradientBackground")),Object(c.b)("td",null,"Sets the card's background to gradient"),Object(c.b)("td",null,"boolean"),Object(c.b)("td",null,"false"),Object(c.b)("td",null,"Optional")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("a",{href:"/styling#blurred-background"},"blurredBackground")),Object(c.b)("td",null,"Sets the card's background to blurred"),Object(c.b)("td",null,"boolean"),Object(c.b)("td",null,"false"),Object(c.b)("td",null,"Optional")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("a",{href:"/intro#using-emojis"},"emojis")),Object(c.b)("td",null,"If true, engagement icons will be replaced with emoji characters"),Object(c.b)("td",null,"boolean"),Object(c.b)("td",null,"false"),Object(c.b)("td",null,"Optional")),Object(c.b)("tr",null,Object(c.b)("td",null,"fitInsideContainer"),Object(c.b)("td",null,"Scales the contents of the card to perfectly fit inside its parent container. Only works if the element is capable of overflowing on the page."),Object(c.b)("td",null,"boolean"),Object(c.b)("td",null,"false"),Object(c.b)("td",null,"Optional")))),Object(c.b)("p",null,"Try them out on this playground:"),Object(c.b)(o.c,{__position:1,__code:"<OutsideContainer>\n  <ParentContainer>\n    <TweetCard\n      author={{\n        name: 'dan mentos',\n        username: 'DanMentos',\n        image:\n          'https://pbs.twimg.com/profile_images/548378022768701441/2zz0Vk61_400x400.png',\n        isVerified: false,\n        isProtected: false,\n      }}\n      tweet={`[introducing girlfriend to my family]\n                  me: this is my girlfriend janine\n                  janine: hi\n                  wife: what the fuck`}\n      time={new Date(2016, 7, 11, 6, 14)} // try a string instead!\n      source=\"TweetDeck\"\n      permalink=\"https://twitter.com/DanMentos/status/763589479055495168\"\n      theme=\"light\"\n      colors={{}}\n      gradientBackground={false}\n      blurredBackground={false}\n      clickableProfileLink={false}\n      fitInsideContainer={false}\n    />\n  </ParentContainer>\n</OutsideContainer>",__scope:(e={props:s,DefaultLayout:r.a,TweetCard:i.a,OutsideContainer:u.a,ParentContainer:u.b,Playground:o.c},e.DefaultLayout=r.a,e._frontmatter=d,e),mdxType:"Playground"},Object(c.b)(u.a,{mdxType:"OutsideContainer"},Object(c.b)(u.b,{mdxType:"ParentContainer"},Object(c.b)(i.a,{author:{name:"dan mentos",username:"DanMentos",image:"https://pbs.twimg.com/profile_images/548378022768701441/2zz0Vk61_400x400.png",isVerified:!1,isProtected:!1},tweet:"[introducing girlfriend to my family]\n                    me: this is my girlfriend janine\n                    janine: hi\n                    wife: what the fuck",time:new Date(2016,7,11,6,14),source:"TweetDeck",permalink:"https://twitter.com/DanMentos/status/763589479055495168",theme:"light",colors:{},gradientBackground:!1,blurredBackground:!1,clickableProfileLink:!1,fitInsideContainer:!1,mdxType:"TweetCard"})))))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"props.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---props-mdx-dd85f03a1eb59df837a6.js.map