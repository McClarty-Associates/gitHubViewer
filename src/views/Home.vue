<template>
  <div>
    <h1>Code 42 Coding exercise</h1>
    <h2>My post mortem</h2>
    <p>
      The assignment was to make a single page app that uses the github api to pull information of some known users.
      Then display that information in a modern Javascript library. I chose to learn and implement a vue single page app.
      At my last job we used backbone for the last five years, but that has fallen out of favor so rather than implement
      something old I experimented with Vue.js. I will probably work with it some more, but I als have plans to
      experiement with react.js and angular.
    </p>
    <p>
      After I implemented a small proof of concept with dummy data I went to the <a href="https://developer.github.com/">github api page</a>
      only to discover that the new version 4 of the api was using GraphQL. I had heard GraphQL was the next big thing in apis,
      so I decided to learn it instead of trying to pull from the older and more restful version 3 of the api. In hind-sight
      this may have been a mistake.
    </p>
    <p>
      I was able to quickly get up to speed on how to use GraphQL and extract most if not all the data I needed to complete
      the assigment in on query:
      <pre>
query members($currentCompany: String!) {
  organization(login: $currentCompany) {
    members(first:10){
      nodes{
        ...UserInfo
      }
    }
  }
}
fragment Repo on Repository{
  name
  homepageUrl
  projectsUrl
}

fragment UserInfo on User{
  name
  id
  email
  avatarUrl
  repositories(first:100){
    nodes{
      ...Repo
    }
  }
  location
  email
  createdAt
  organizations(first:10){
    nodes{
      avatarUrl
      name
    }
  }
}
</pre>
    I set my query variables to a few different companies to make sure I could handle a variety of data sources:
    <pre>
      { "currentCompany": "code42" }
      { "currentCompany": "facebook" }
    </pre>
    GitHub has <a href="https://developer.github.com/v4/explorer/">a nice little sandbox to test my GraphQL queies against</a>
    so I felt pretty confident going into my next phase of moving to live data.
    </p>
    <p>
      Unfortunately I was never able to get live data piping through my site. I could not get the permissions to work, but
      even when I tried to set up my own company on github so I could test agaist a token I generated myself, it still
      failed. it seems that the vue libraries for GraphQl when you don't own the server are still a little rough around
      the edges. If I had more time I would probably go back and use axios to made some restful calls against the version
      3 of the api. or maybe see if I can have my server ack as a buffer that I could make requests against.
    </p>
    <p>
      Using the data I pulled from the sandbox I was able to display
      <ol>
        <li>their github image</li>
        <li>their repos</li>
        <li>their reported location</li>
        <li>their public email</li>
        <li>the day their github account was created</li>
        <li>I diplayed the organisations they belong to as an image to the right. (if they had more than one I would
          display it but for the two developers there was not need)</li>
        <li>GraphQL did not make it easy to discover which repositories they have comited to, or how many comits they have
          done in the last year. So I did not do thouse to bonus tasks.</li>
        <li> I was able to do a few unit tests, but there is always room to add more tests. Vue seems to offer some good
          test coverage tools I was to check out in more detail.</li>
        <li>I used the bulma style framework, it was very light and recommended where I was learning vue.</li>
        <li>back button works, and what was harder to get along the same line was the hot linking to work "/user/MDQ6VXNlcjM2MTUwODI="</li>
        <li>doing a loading state is part of the graph libraries I was exploring, but they are in use due to the authentication issue I saw</li>

      </ol>
    </p>
    <p>If you haven't already please take a minute to explore the couple code 42 people who were visible to me, they are listed on the top left.</p>
    <h3>Original Assignment</h3>
    <dd>
      <span class="is-bold">Web Engineer exercise</span>
      <p>Create a single page application using a modern JavaScript library or framework. Examples include
        but are not limited to: React, Ember.js, Vue.js. In addition, leverage an HTTP client library, such as
      jQuery.ajax, github/fetch, or what's included within your framework.
      For this single page app, create a sidebar and main content areas. This is a typical master-detail
        view application.</p>

      <p>In the sidebar, list each member of the Code42 organization using the public Github API.
      When you click on a member in the sidebar, the main content area should populate with that
        person's information. For each person, show the following relevant information from their profile.</p>
      <ol>
        <li>√Their Github image</li>
        <li>√A list of their repos</li>
        <li>√Their public location</li>
        <li>√Their public email</li>
        <li>√Their join date</li>
      </ol>
      <p>Extra credit: Additional details for each Code42 Member</p>
      <ol>
        <li>Their total number of contributions in the last year</li>
        <li>√The organizations to which they belong</li>
        <li>A list of repos they have contributed to</li>
        <li>Well-styled: feel free to use a css library including bootstrap, material design, foundation or a similar style framework.</li>
        <li>√The back button works</li>
        <li>The sidebar and main content views could have loading states while data is being fetched from the server</li>
        <li>Tests</li>
      </ol>
    </dd>
  </div>
</template>
