<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
          <q-btn flat @click="leftDrawerOpen = !leftDrawerOpen" round dense icon="menu" />
        <q-toolbar-title class="absolute-center">
         Coba Dashboard
        </q-toolbar-title>

        <q-btn
       
          to="/pageauth"
          flat
          icon-right="account_circle"
          label="Login"
          class="absolute-right" />

        <!-- <q-btn
          v-else
          @click="logoutUser"
          flat
          icon-right="account_circle"
          label="Logout"
          class="absolute-right" /> -->

      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          :icon="nav.icon"
          :label="nav.label" />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      bordered
      content-class="bg-primary"
    >
       <q-list padding class="rounded-borders text-primary">
         <q-item-section class="q-mt-lg q-mb-lg">
            <q-btn to="/" scatch flat>
            <img src="statics/logo-gpsku.png" width="150" style="padding: 5px;" >
          </q-btn>
          </q-item-section>
        <!-- <q-item-label header>Navigation</q-item-label> -->

        <q-item 
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          class=" text-grey-4"
          exact
          clickable>
          <q-item-section  avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>
        
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import { openURL } from 'quasar'

  export default {
    name: 'MyLayout',
    data () {
      return {
        leftDrawerOpen: false,
        leftDrawerOpen: this.$q.platform.is.desktop,
        navs: [
          {
            label: 'Table',
            icon: 'list',
            to: '/'
          },
          {
            label: 'Lead',
            icon: 'table_chart',
            to: '/homelead'
          },
          {
            label: 'PageCharts',
            icon: 'insert_chart',
            to: '/PageCharts'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  @media screen and (min-width: 768px) {
    .q-footer {
      display: none;
    }
  }
  
  .q-drawer {
    .q-router-link--exact-active {
      color: white !important;
      background: #F2C037
    }
  }
</style>
