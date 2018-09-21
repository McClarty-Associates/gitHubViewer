<template>
  <div>
    <app-header></app-header>
    <div class="column is-one-fifth">
      <ul v-for="(user, name) in users" v-bind:key="user.id">
        <li>user.name</li>
      </ul>
    </div>
    <section class="main-section section">
      <div class="container content">
        <router-view></router-view>
      </div>

    </section>
    <app-footer></app-footer>
  </div>

</template>

<script>
  import AppHeader from './AppHeader.vue'
  import AppFooter from './AppFooter.vue'

  export default {
    components: {
      'app-header': AppHeader,
      'app-footer': AppFooter
    },
    data () {
      return {
        'data': {
          'organization': {
            'members': {
              'pageInfo': {
                'endCursor': 'Y3Vyc29yOnYyOpHOAG_SsQ==',
                'startCursor': 'Y3Vyc29yOnYyOpHOADcpag=='
              },
              'edges': [
                {
                  'node': {
                    'avatarUrl': 'https://avatars3.githubusercontent.com/u/3615082?v=4',
                    'name': 'Andy Moravec',
                    'repositories': {
                      'edges': [
                        {
                          'node': {
                            'url': 'https://github.com/amoravec/iSynaptic.Commons',
                            'name': 'iSynaptic.Commons'
                          }
                        },
                        {
                          'node': {
                            'url': 'https://github.com/amoravec/wix3',
                            'name': 'wix3'
                          }
                        },
                        {
                          'node': {
                            'url': 'https://github.com/amoravec/SignalR',
                            'name': 'SignalR'
                          }
                        },
                        {
                          'node': {
                            'url': 'https://github.com/amoravec/jshint',
                            'name': 'jshint'
                          }
                        },
                        {
                          'node': {
                            'url': 'https://github.com/amoravec/jetty.project',
                            'name': 'jetty.project'
                          }
                        },
                        {
                          'node': {
                            'url': 'https://github.com/amoravec/WackoPicko',
                            'name': 'WackoPicko'
                          }
                        },
                        {
                          'node': {
                            'url': 'https://github.com/amoravec/electron',
                            'name': 'electron'
                          }
                        },
                        {
                          'node': {
                            'url': 'https://github.com/amoravec/owasp-esapi-onlyencryptedproperties',
                            'name': 'owasp-esapi-onlyencryptedproperties'
                          }
                        },
                        {
                          'node': {
                            'url': 'https://github.com/amoravec/Splunk',
                            'name': 'Splunk'
                          }
                        },
                        {
                          'node': {
                            'url': 'https://github.com/amoravec/ios-samples',
                            'name': 'ios-samples'
                          }
                        }
                      ]
                    },
                    'location': 'Hugo, MN',
                    'email': 'andrew.moravec@gmail.com',
                    'createdAt': '2013-02-17T03:06:09Z'
                  }
                },
                {
                  'node': {
                    'avatarUrl': 'https://avatars1.githubusercontent.com/u/7328433?v=4',
                    'name': 'Simon Diep',
                    'repositories': {
                      'edges': [
                        {
                          'node': {
                            'url': 'https://github.com/sworded/task-list',
                            'name': 'task-list'
                          }
                        },
                        {
                          'node': {
                            'url': 'https://github.com/simondiep/jquery-php-task-list',
                            'name': 'jquery-php-task-list'
                          }
                        },
                        {
                          'node': {
                            'url': 'https://github.com/simondiep/simondiep.github.io',
                            'name': 'simondiep.github.io'
                          }
                        },
                        {
                          'node': {
                            'url': 'https://github.com/simondiep/snowflake-animation-js',
                            'name': 'snowflake-animation-js'
                          }
                        },
                        {
                          'node': {
                            'url': 'https://github.com/simondiep/node-express-mongo-login-starter',
                            'name': 'node-express-mongo-login-starter'
                          }
                        },
                        {
                          'node': {
                            'url': 'https://github.com/simondiep/FreeCodeCamp',
                            'name': 'FreeCodeCamp'
                          }
                        },
                        {
                          'node': {
                            'url': 'https://github.com/simondiep/es6-classes-example',
                            'name': 'es6-classes-example'
                          }
                        },
                        {
                          'node': {
                            'url': 'https://github.com/simondiep/es6-canvas-snake',
                            'name': 'es6-canvas-snake'
                          }
                        },
                        {
                          'node': {
                            'url': 'https://github.com/simondiep/node-multiplayer-snake',
                            'name': 'node-multiplayer-snake'
                          }
                        },
                        {
                          'node': {
                            'url': 'https://github.com/simondiep/guice-simple-example',
                            'name': 'guice-simple-example'
                          }
                        }
                      ]
                    },
                    'location': 'Minnesota',
                    'email': '',
                    'createdAt': '2014-04-17T15:48:13Z'
                  }
                }
              ]
            },
            'teams': {
              'edges': []
            }
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '~bulma';

  .columns{
    flex-wrap:wrap;
  }
</style>