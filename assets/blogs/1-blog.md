# Title
Netlify and Heroku Free Deployment and Domain linking

# Meta Image
https://raw.githubusercontent.com/kdhttps/generator/master/assets/blog-1-tech-stack.png

# Meta URL
https://kdhttps.com

# Meta Description
Technology Stack for Blog site with Netlify and Heroku free deployment and free domain linking

# Meta Title
Netlify and Heroku Free Deployment and Domain linking

# Meta Keywords
angular #mongodb #node #heroku #netlify #free #domainlinking


# Content
<img class="text-center img-fluid" src="https://raw.githubusercontent.com/kdhttps/generator/master/assets/blog-1-tech-stack.png" alt="mean netlify heroky why?" />

Everyone knows that Netlify and Heroku has a free plan where you can deploy your application. My main idea behind this blog is **Free deployment and linking with a custom domain** so that **web traffic will keep remain on your domain**. In case your user increase, you can buy dedicated servers.

## Terminology

- Custom Domain: The domain which you buy from a domain provider e.g. [Godaddy.com](godaddy.com).

## Technology Stack on [https://kdhttps.com](https://kdhttps.com)

- Angular: You can use any SPA e.g. React, Vue.
- [Scully](https://scully.io/) - Angular Static Site Generator. There are many options available for Vue and React.
- Node
- Mongo
- Express

## Problems :face_with_monocle:

So below are the problems which I faced:

1. [Heroku](https://heroku.com) allows you to deploy the full dynamic site but **for custom domain linking you have to buy a paid plan.**
1. [Netlify](https://netlify.com) allows you to deploy the [JAM Stack](https://jamstack.org/). In short, It allows us to deploy the static HTML. You can only use High-Level Languages(Node, PHP, Ruby, etc...) to build your project. **You can not deploy your server(e.g. Node JS) application on Netlify.**

## Solution :star_struck:

Solution is simple:

1. Deploy Backend Node Application on Heroku
2. Deploy Frontend Angular Scully Application on Netlify
3. I used Heroku to write my blogs, store it in MongoDB, and display blogs on Netlify Frontend Application.
4. Like domain with Netlify, So that Web traffic always on your domain.

## Images

For resources, assets and images. I am using GitHub so that less space on Heroku and Netlify. 

## Conclusion

By the great combination of Heroku and Netlify, you can freely deploy your applications, you just need to buy a domain. This technology stack and deployment techniques will help you understand about software deployment and CI/CD, where you don't pay any money and credit card for the whole implementation. I'll write furthermore blogs about how to deploy applications on Heroku and Netlify with Domain Linking.


