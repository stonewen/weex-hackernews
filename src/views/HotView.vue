<template>
    <list class="story-list" @loadmore="loadMoreStories" loadmoreoffset="50">
        <cell append="tree">
            <banner></banner>
        </cell>
        <cell class="story-cell" v-for="story in stories" append="tree">
            <story :story="story"></story>
        </cell>
        <cell class="loading" v-if="loading">
            <text class="loading-text">loading ...</text>
        </cell>
    </list>
</template>

<script>
  import Story from '../components/story.vue'
  import Banner from '../components/banner.vue'

  export default {
    components: { Story, Banner },
    props: {
      type: {
        type: String,
        required: false,
        default: 'top'
      }
    },
    data () {
      return {
        loading: true
      }
    },

    computed: {
      stories () {
        return this.$store.getters.activeItems
      }
    },

    methods: {
      fetchListData () {
        this.loading = true
        this.$store.dispatch('FETCH_LIST_DATA', {
          type: this.type
        }).then(() => {
          this.loading = false
        })
      },
      loadMoreStories () {
        this.loading = true
        this.$store.dispatch('LOAD_MORE_ITEMS').then(() => {
          this.loading = false
        })
      }
    },

    created () {
      if (this.$store.getters.activeItems.length === 0) {
        this.fetchListData()
      }
    }
  }
</script>

<style scoped>
  .story-cell {
    margin-bottom: 3px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #DDDDDD;
    background-color: #FFFFFF;
  }
  .loading {
    width: 750px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loading-text {
    margin: auto;
    text-align: center;
    font-size: 40px;
    color: #BBB;
  }
</style>
