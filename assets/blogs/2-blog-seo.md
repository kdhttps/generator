# Title
SEO(Search engine Optimization) Tips and Tricks with SPA(Single Page Application)

# Meta URL
https://kdhttps.com

# Meta Description
SEO(Search engine Optimization) Tips and Tricks, which you have to added into your blog or content website for good SEO.

# Meta title
SEO(Search engine Optimization) Tips and Tricks with SPA(Single Page Application)

# Meta keywords
#seo #spa #tip

# Content
Before starting work on Blog or any content site. You should have to `do some research on whether your application is support or good for SEO`.

For example: I am using Angular [Scully](https://scully.io/) which is an angular static site generator. The problem which I faced with the `only angular is SEO` because it has `not completely render HTML`. Whenever crawler scrap your website. It `failed to find out meta tags`. 

The solution is you have to use `Server Side Rendering` or `Static Site Generator`. There are many options available for every SPA(Angular, Vue, and React).

## Tips

### 1. Register your domain to google search console

Search Console tools and reports help you measure your site's Search traffic and performance, fix issues, and make your site shine in Google Search results.

- Open Link [https://search.google.com/search-console/welcome](https://search.google.com/search-console/welcome)
- Add your domain in `URL prefix`
- Verify your ownership
- Choose the `HTML Tag` verify technique which I think easy.
- Done

### 2. SEO Tips to Choose the Best title for your Blog 

[Ubersuggest](https://chrome.google.com/webstore/detail/ubersuggest/nmpgaoofmjlimabncmnmnopjabbflegf?hl=en) tool which use to check `trend` and `volume search about the topic`.  You can easily `install the extension` and just `search on google`. It will show you `details on the right side of the page`. 

Update your `<title></title>` tag with your `title` which is really important. The title `should not be the same` across whole the website.

This is the best SEO Tips and Tricks which helps you to find out the correct title for your content or blog.

For example:
```
Just type in google search `SEO Tips`. it will show you the number of times search this words in google search engine.

Also Update Title. 
<title>SEO(Search engine Optimization) Tips and Tricks with SPA(Single Page Application) | kdhttps.com</title>
```

### 3. Blog link should contain the title

For example:
```
https://kdhttps.com
/blog/5ee2712859b3e92fd51ef705
/The%20Idea%20summary%20behind%20Netlify%20and%20Heroku%20Free%20Deployment%20and%20Domain%20linking
```

You can see the link has my blog title which just helps google to improve SEO.

### 4. Blog heading should contain your title for Good SEO

Blog heading means the heading tags(h1, h2, ...., h6). It should contain your title with some description. Like just take on of my blog example.

### 5. Metatags 

This is the most important part. The metatags which should be on your page. These are the tags that are generally scrapping by the crawler(google, twitter crawler).

`og:image` and `twitter:image` should have a `full path of the image`, otherwise the crawler will fail to show the image on your social site.

For example:
```
<meta property="og:type" content="website">
<meta name="description" content="The Idea behind Technology Stack for Blog site with Netlify and Heroku free deployment and free domain linking">
<meta property="og:image" content="https://raw.githubusercontent.com/kdhttps/generator/master/assets/blog-1-tech-stack.png">
<meta property="og:title" content="The Idea summary behind Netlify and Heroku Free Deployment and Domain linking">
<meta property="og:url" content="https://kdhttps.com">
<meta property="og:description" content="The Idea behind Technology Stack for Blog site with Netlify and Heroku free deployment and free domain linking">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://raw.githubusercontent.com/kdhttps/generator/master/assets/blog-1-tech-stack.png">
<meta name="twitter:title" content="The Idea summary behind Netlify and Heroku Free Deployment and Domain linking">
<meta name="twitter:url" content="https://kdhttps.com">
<meta name="twitter:description" content="The Idea behind Technology Stack for Blog site with Netlify and Heroku free deployment and free domain linking">
<meta name="twitter:site" content="@kdhttps">
<meta name="twitter:creator" content="@kdhttps">
```

### 6. Image

You should have to `add at least one image` in your blog and don't forgot to add `alt` attribute with values. Sometimes we search only for images and users may click on images and google will redirect user to your website.

For Example:
```
<img class="text-center img-fluid" src="https://raw.githubusercontent.com/kdhttps/generator/master/assets/blog-1-tech-stack.png" alt="The Idea summary behind Netlify and Heroku Free Deployment and Domain linking" />
```

### 7. Repeat your title in your content

At least repeat 2-3 times your title in your blogs. It is best google directly highlight this content. But make sure it is looks and sound goods otherwise users may not like it.

For example:
```
You can see, I've repeat `SEO`, `Tips` and `Tricks` words.
```
