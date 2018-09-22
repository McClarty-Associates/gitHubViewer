<template>
  <div>
    <h1>{{user.name}}</h1>
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img :src="user.avatarUrl"/>
        </p>
      </figure>
      <div class="media-content">
        <div>{{user.location}}</div>
        <div>{{user.email}}</div>
        <div>{{user.createdAt | moment("M/DD/YYYY")}}</div>
      </div>
      <div class="media-right">
        <div class="image is-32x32" v-for="org in user.organizations.nodes" :key="org.id">
          <img :src="org.avatarUrl">
          {{org.name}}
        </div>
      </div>
    </article>
    <div class="content">
      <ul v-for="repo in user.repositories.nodes" :key="repo.id">
        <li>
          <a :href="repo.homepageUrl || repo.projectsUrl ">{{repo.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import _ from "underscore";
import gql from "graphql-tag";

export default {
  name: "User",
  data() {
    {
      gql`
        query members($currentCompany: String!) {
          organization(login: $currentCompany) {
            members(first: 10) {
              nodes {
                ...UserInfo
              }
            }
          }
        }
        fragment Repo on Repository {
          name
          homepageUrl
          projectsUrl
        }

        fragment UserInfo on User {
          name
          id
          email
          avatarUrl
          repositories(first: 100) {
            nodes {
              ...Repo
            }
          }
          location
          email
          createdAt
          organizations(first: 10) {
            nodes {
              avatarUrl
              name
            }
          }
        }
      `;
    }
    this.organization = {
      members: {
        nodes: [
          {
            name: "Andy Moravec",
            id: "MDQ6VXNlcjM2MTUwODI=",
            email: "andrew.moravec@gmail.com",
            avatarUrl: "https://avatars3.githubusercontent.com/u/3615082?v=4",
            repositories: {
              nodes: [
                {
                  name: "iSynaptic.Commons",
                  homepageUrl: "",
                  projectsUrl:
                    "https://github.com/amoravec/iSynaptic.Commons/projects"
                },
                {
                  name: "wix3",
                  homepageUrl: "http://wixtoolset.org/",
                  projectsUrl: "https://github.com/amoravec/wix3/projects"
                },
                {
                  name: "SignalR",
                  homepageUrl: "http://signalr.net",
                  projectsUrl: "https://github.com/amoravec/SignalR/projects"
                },
                {
                  name: "jshint",
                  homepageUrl: "http://jshint.com",
                  projectsUrl: "https://github.com/amoravec/jshint/projects"
                },
                {
                  name: "jetty.project",
                  homepageUrl: "https://www.eclipse.org/jetty",
                  projectsUrl:
                    "https://github.com/amoravec/jetty.project/projects"
                },
                {
                  name: "WackoPicko",
                  homepageUrl: "",
                  projectsUrl: "https://github.com/amoravec/WackoPicko/projects"
                },
                {
                  name: "electron",
                  homepageUrl: "http://electron.atom.io",
                  projectsUrl: "https://github.com/amoravec/electron/projects"
                },
                {
                  name: "owasp-esapi-onlyencryptedproperties",
                  homepageUrl: null,
                  projectsUrl:
                    "https://github.com/amoravec/owasp-esapi-onlyencryptedproperties/projects"
                },
                {
                  name: "Splunk",
                  homepageUrl: null,
                  projectsUrl: "https://github.com/amoravec/Splunk/projects"
                },
                {
                  name: "ios-samples",
                  homepageUrl: "http://xamarin.com/",
                  projectsUrl:
                    "https://github.com/amoravec/ios-samples/projects"
                },
                {
                  name: "bash-git-prompt",
                  homepageUrl: null,
                  projectsUrl:
                    "https://github.com/amoravec/bash-git-prompt/projects"
                },
                {
                  name: "RedisDesktopManager",
                  homepageUrl: "http://redisdesktop.com",
                  projectsUrl:
                    "https://github.com/amoravec/RedisDesktopManager/projects"
                },
                {
                  name: "vault-unsealer",
                  homepageUrl: null,
                  projectsUrl:
                    "https://github.com/code42/vault-unsealer/projects"
                },
                {
                  name: "Gnomes",
                  homepageUrl: null,
                  projectsUrl: "https://github.com/amoravec/Gnomes/projects"
                }
              ]
            },
            location: "Hugo, MN",
            createdAt: "2013-02-17T03:06:09Z",
            organizations: {
              nodes: [
                {
                  avatarUrl:
                    "https://avatars1.githubusercontent.com/u/1091054?v=4",
                  name: "Code42 Software"
                }
              ]
            }
          },
          {
            name: "Simon Diep",
            id: "MDQ6VXNlcjczMjg0MzM=",
            email: "",
            avatarUrl: "https://avatars1.githubusercontent.com/u/7328433?v=4",
            repositories: {
              nodes: [
                {
                  name: "task-list",
                  homepageUrl: null,
                  projectsUrl: "https://github.com/sworded/task-list/projects"
                },
                {
                  name: "jquery-php-task-list",
                  homepageUrl: "",
                  projectsUrl:
                    "https://github.com/simondiep/jquery-php-task-list/projects"
                },
                {
                  name: "simondiep.github.io",
                  homepageUrl: "https://simondiep.github.io/",
                  projectsUrl:
                    "https://github.com/simondiep/simondiep.github.io/projects"
                },
                {
                  name: "snowflake-animation-js",
                  homepageUrl: null,
                  projectsUrl:
                    "https://github.com/simondiep/snowflake-animation-js/projects"
                },
                {
                  name: "node-express-mongo-login-starter",
                  homepageUrl: null,
                  projectsUrl:
                    "https://github.com/simondiep/node-express-mongo-login-starter/projects"
                },
                {
                  name: "FreeCodeCamp",
                  homepageUrl: "",
                  projectsUrl:
                    "https://github.com/simondiep/FreeCodeCamp/projects"
                },
                {
                  name: "es6-classes-example",
                  homepageUrl: "",
                  projectsUrl:
                    "https://github.com/simondiep/es6-classes-example/projects"
                },
                {
                  name: "es6-canvas-snake",
                  homepageUrl: null,
                  projectsUrl:
                    "https://github.com/simondiep/es6-canvas-snake/projects"
                },
                {
                  name: "node-multiplayer-snake",
                  homepageUrl: "https://node-multiplayer-snake.herokuapp.com/",
                  projectsUrl:
                    "https://github.com/simondiep/node-multiplayer-snake/projects"
                },
                {
                  name: "guice-simple-example",
                  homepageUrl: null,
                  projectsUrl:
                    "https://github.com/simondiep/guice-simple-example/projects"
                },
                {
                  name: "koa-boilerplate",
                  homepageUrl: "",
                  projectsUrl:
                    "https://github.com/simondiep/koa-boilerplate/projects"
                },
                {
                  name: "minimal-react-example",
                  homepageUrl: "",
                  projectsUrl:
                    "https://github.com/simondiep/minimal-react-example/projects"
                },
                {
                  name: "react-webpack-typescript-boilerplate",
                  homepageUrl: "",
                  projectsUrl:
                    "https://github.com/simondiep/react-webpack-typescript-boilerplate/projects"
                },
                {
                  name: "simple-css-transition-example",
                  homepageUrl: null,
                  projectsUrl:
                    "https://github.com/simondiep/simple-css-transition-example/projects"
                },
                {
                  name: "deepmerge",
                  homepageUrl: "",
                  projectsUrl: "https://github.com/simondiep/deepmerge/projects"
                },
                {
                  name: "html-text-to-react",
                  homepageUrl: "",
                  projectsUrl:
                    "https://github.com/code42/html-text-to-react/projects"
                },
                {
                  name: "selenium-docker-mocha-example",
                  homepageUrl: null,
                  projectsUrl:
                    "https://github.com/simondiep/selenium-docker-mocha-example/projects"
                },
                {
                  name: "sliding-robots",
                  homepageUrl: "https://simondiep.github.io/sliding-robots/",
                  projectsUrl:
                    "https://github.com/simondiep/sliding-robots/projects"
                },
                {
                  name: "dodge-the-balls",
                  homepageUrl:
                    "https://simondiep.github.io/dodge-the-balls/index.html",
                  projectsUrl:
                    "https://github.com/simondiep/dodge-the-balls/projects"
                },
                {
                  name: "awscurl",
                  homepageUrl: "",
                  projectsUrl: "https://github.com/simondiep/awscurl/projects"
                },
                {
                  name: "name-picker",
                  homepageUrl: "https://simondiep.github.io/name-picker/",
                  projectsUrl:
                    "https://github.com/simondiep/name-picker/projects"
                },
                {
                  name: "infinite-runner",
                  homepageUrl:
                    "https://simondiep.github.io/infinite-runner/infinite-runner.html",
                  projectsUrl:
                    "https://github.com/simondiep/infinite-runner/projects"
                },
                {
                  name: "space-shooter",
                  homepageUrl: "https://simondiep.github.io/space-shooter/",
                  projectsUrl:
                    "https://github.com/simondiep/space-shooter/projects"
                },
                {
                  name: "ragdoll-demo-p2-physics-engine",
                  homepageUrl:
                    "https://simondiep.github.io/ragdoll-demo-p2-physics-engine/",
                  projectsUrl:
                    "https://github.com/simondiep/ragdoll-demo-p2-physics-engine/projects"
                },
                {
                  name: "ragdoll-demo-matterjs",
                  homepageUrl:
                    "https://simondiep.github.io/ragdoll-demo-matterjs/",
                  projectsUrl:
                    "https://github.com/simondiep/ragdoll-demo-matterjs/projects"
                },
                {
                  name: "p2.js",
                  homepageUrl: "",
                  projectsUrl: "https://github.com/simondiep/p2.js/projects"
                },
                {
                  name: "unity-hello-world",
                  homepageUrl:
                    "https://simondiep.github.io/unity-hello-world/hello-world-webgl-build/",
                  projectsUrl:
                    "https://github.com/simondiep/unity-hello-world/projects"
                },
                {
                  name: "pernyblom.github.io",
                  homepageUrl: null,
                  projectsUrl:
                    "https://github.com/simondiep/pernyblom.github.io/projects"
                },
                {
                  name: "beat-em-up",
                  homepageUrl: "https://simondiep.github.io/beat-em-up/",
                  projectsUrl:
                    "https://github.com/simondiep/beat-em-up/projects"
                },
                {
                  name: "3d-grid",
                  homepageUrl: "https://simondiep.github.io/3d-grid/",
                  projectsUrl: "https://github.com/simondiep/3d-grid/projects"
                },
                {
                  name: "github-project-showcase",
                  homepageUrl:
                    "https://simondiep.github.io/github-project-showcase/",
                  projectsUrl:
                    "https://github.com/simondiep/github-project-showcase/projects"
                }
              ]
            },
            location: "Minnesota",
            createdAt: "2014-04-17T15:48:13Z",
            organizations: {
              nodes: [
                {
                  avatarUrl:
                    "https://avatars1.githubusercontent.com/u/1091054?v=4",
                  name: "Code42 Software"
                }
              ]
            }
          }
        ]
      }
    };
    return {
      user:
        this.$route.params.user ||
        _.where(this.organization.members.nodes, {
          id: this.$route.params.id
        })[0]
    };
  },
  computed: {},
  watch: {
    $route(to, from) {
      if (to !== from) {
        this.user = to.params.user;
      }
    }
  }
};
</script>

<style scoped>
</style>
