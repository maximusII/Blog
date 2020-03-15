# Blog
Blog - is a simple blog-app example, where you can keep yourself up to date with latest posts, create and add your own post, and find out more about any post by following a link.

# Functionality
Blog have Latest Posts page (/ route)
Blog have Post page (/posts/:postId route)
Blog have Create Post page (/posts/new route)
User is able to create a new post (on page /posts/new)

# Installation
Clone Github repository https://github.com/maximusII/Blog.git

Browse to Blog directory

Then you can run the app with: npm install; npm run dev

Now you can access the app by navigating to http://localhost:3000

# Technical Details
Code has been written with TypeScript

ESLint and Prettier were setup for code linting

Application supports SSR. Next.js was used for this purpose, because it supports SSR out of the box.

User interface is built with styled-components

React hooks are used everywhere instead of class-based components

Network request handled with axios

Application deployed to free hosting for review https://blog-eight-orpin.now.sh/

