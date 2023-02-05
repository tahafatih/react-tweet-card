# react-tweet-card

[![NPM](https://img.shields.io/npm/v/react-tweet-card.svg)](https://www.npmjs.com/package/react-tweet-card)

A Tweet Card component you can use easily in your React projects. It doesn't rely on the Twitter API but instead lets you feed in all information about the tweet you're displaying. This way you can create cards for fictional tweets or tweets that have been deleted.

[:bird: Demo and documentation](https://zorapeteri.github.io/react-tweet-card)

<img width="500" src="https://user-images.githubusercontent.com/52820291/216845902-e4a499a9-adb2-45d0-b11d-aa31ea9c79ab.png">

---

## Installation

```bash
npm i react-tweet-card
# or
yarn add react-tweet-card
```

## Features

- Responsive component
- Component scales to fit inside any container
- Light, dim and dark themes
- Dark mode preference support
- Gradient and blurred container styles
- styled-components and emotion support
- TypeScript support
- Support for verified and protected Twitter accounts
- Support for @mentions in tweet
- Support for links in tweet
- Support for hashtags in tweet
- Display number of replies, retweets and likes

## Server-side rendering

`react-tweet-card` can only be rendered on the client side as it loads its CSS directly into the DOM.
To make it work with SSR, try importing the package dynamically.

## Design credits

Component layout is based on [Tweety by Ashwin G](https://www.figma.com/community/file/1028255898372668126)
