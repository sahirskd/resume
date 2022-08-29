# Create and publish personal portfolio in seconds 🚀

Non technical personal? and want to create your portfolio and publish to the internet? Use [Resume App](https://sahirskd.github.io/resume/demo.html) and fill up the form with the details that you want to see in your resume and hit Create Portfolio button, and that is it you will be redirected to your published portfolio. Now you can share the your published portfolio URL to anyone in the world.

In the image below click on Create Now button
[![Embed your YouTube video](https://raw.githubusercontent.com/sahirskd/resume/main/docs/Screenshot_1.jpg)](https://sahirskd.github.io/resume/demo.html)

In the image below fill up the given form and hit Create Portfolio, and done.
[![Embed your YouTube video](https://raw.githubusercontent.com/sahirskd/resume/main/docs/Screenshot_2.jpg)](https://sahirskd.github.io/resume/demo.html)

# Overview video (Optional)

Here's a short video that explains the project and how it uses Redis:

[Insert your own video here, and remove the one below]

[![Embed your YouTube video](https://i.ytimg.com/vi/vyxdC1qK4NE/maxresdefault.jpg)](https://www.youtube.com/watch?v=vyxdC1qK4NE)

## How it works

### How the data is stored:

- Everytime a user submits a portfolio form, the data gets converted into an object and sent to the Redis Database
  - All fields of the object are as follows:
    - `userName`: eg. sahirsk
    - `fullName`: eg. Sahir khan
    - `image`: eg. base64
    - `designation`: eg. Web developer
    - `about`: eg. Self learned developer
    - `address`: eg. address
    - `phone`: eg. +919999888899
    - `socialLinks`: eg. [Links]
    - `resumeLink`: eg. Link
    - `skills`: eg. [HTML, CSS, JS]
    - `experience`: eg. [{compay: "Demo 1", description: "demo description"}]
    - `education`: eg. [{degree: "Demo 1", description: "demo description"}]

### How the data is accessed:

- To get the list of all portfolios created `(Method: GET)`:

  - `https://[your-domain]/portfolio/port-all`

- To search for username using a keyword in the database, it will return true if exist and false if doesn't `(Method: GET)`:

  - `https://[your-domain]/portfolio/search/{sahirskd}`

- To delete a particular portfolio using it's entityId `(Method: DELETE)`:

  - `https://[your-domain]/portfolio/{entityId}`

- To get a particular portfolio by the username `(Method: GET)`:

  - `https://[your-domain]/portfolio/{userName}`

## How to run it locally?

[Make sure you test this with a fresh clone of your repo, these instructions will be used to judge your app.]

### Prerequisites

[Fill out with any prerequisites (e.g. Node, Docker, etc.). Specify minimum versions]

### Local installation

[Insert instructions for local installation]

## Deployment

To make deploys work, you need to create free account on [Redis Cloud](https://redis.info/try-free-dev-to)

### Google Cloud Run

[Insert Run on Google button](https://cloud.google.com/blog/products/serverless/introducing-cloud-run-button-click-to-deploy-your-git-repos-to-google-cloud)

### Heroku

[Insert Deploy on Heroku button](https://devcenter.heroku.com/articles/heroku-button)

### Netlify

[Insert Deploy on Netlify button](https://www.netlify.com/blog/2016/11/29/introducing-the-deploy-to-netlify-button/)

### Vercel

[Insert Deploy on Vercel button](https://vercel.com/docs/deploy-button)

## More Information about Redis Stack

Here some resources to help you quickly get started using Redis Stack. If you still have questions, feel free to ask them in the [Redis Discord](https://discord.gg/redis) or on [Twitter](https://twitter.com/redisinc).

### Getting Started

1. Sign up for a [free Redis Cloud account using this link](https://redis.info/try-free-dev-to) and use the [Redis Stack database in the cloud](https://developer.redis.com/create/rediscloud).
1. Based on the language/framework you want to use, you will find the following client libraries:
   - [Redis OM .NET (C#)](https://github.com/redis/redis-om-dotnet)
     - Watch this [getting started video](https://www.youtube.com/watch?v=ZHPXKrJCYNA)
     - Follow this [getting started guide](https://redis.io/docs/stack/get-started/tutorials/stack-dotnet/)
   - [Redis OM Node (JS)](https://github.com/redis/redis-om-node)
     - Watch this [getting started video](https://www.youtube.com/watch?v=KUfufrwpBkM)
     - Follow this [getting started guide](https://redis.io/docs/stack/get-started/tutorials/stack-node/)
   - [Redis OM Python](https://github.com/redis/redis-om-python)
     - Watch this [getting started video](https://www.youtube.com/watch?v=PPT1FElAS84)
     - Follow this [getting started guide](https://redis.io/docs/stack/get-started/tutorials/stack-python/)
   - [Redis OM Spring (Java)](https://github.com/redis/redis-om-spring)
     - Watch this [getting started video](https://www.youtube.com/watch?v=YhQX8pHy3hk)
     - Follow this [getting started guide](https://redis.io/docs/stack/get-started/tutorials/stack-spring/)

The above videos and guides should be enough to get you started in your desired language/framework. From there you can expand and develop your app. Use the resources below to help guide you further:

1. [Developer Hub](https://redis.info/devhub) - The main developer page for Redis, where you can find information on building using Redis with sample projects, guides, and tutorials.
1. [Redis Stack getting started page](https://redis.io/docs/stack/) - Lists all the Redis Stack features. From there you can find relevant docs and tutorials for all the capabilities of Redis Stack.
1. [Redis Rediscover](https://redis.com/rediscover/) - Provides use-cases for Redis as well as real-world examples and educational material
1. [RedisInsight - Desktop GUI tool](https://redis.info/redisinsight) - Use this to connect to Redis to visually see the data. It also has a CLI inside it that lets you send Redis CLI commands. It also has a profiler so you can see commands that are run on your Redis instance in real-time
1. Youtube Videos
   - [Official Redis Youtube channel](https://redis.info/youtube)
   - [Redis Stack videos](https://www.youtube.com/watch?v=LaiQFZ5bXaM&list=PL83Wfqi-zYZFIQyTMUU6X7rPW2kVV-Ppb) - Help you get started modeling data, using Redis OM, and exploring Redis Stack
   - [Redis Stack Real-Time Stock App](https://www.youtube.com/watch?v=mUNFvyrsl8Q) from Ahmad Bazzi
   - [Build a Fullstack Next.js app](https://www.youtube.com/watch?v=DOIWQddRD5M) with Fireship.io
   - [Microservices with Redis Course](https://www.youtube.com/watch?v=Cy9fAvsXGZA) by Scalable Scripts on freeCodeCamp
