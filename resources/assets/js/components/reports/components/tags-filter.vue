<template>
    <div class="widget widget-feature-filter mt30">
        <h3 class="widget-title" v-text="lang.panel_title.feature_tags">Feature Tags</h3>
        <div class="filter-btn">
            <router-link class="waves-effect waves-light btn" v-for="tag in tags" :to="getUrl(tag.value)" :class="{active: filter==tag.value}">{{ tag.label }}</router-link>
        </div>
    </div><!--/.widget-->
</template>
<style>
    
</style>
<script>
    export default{
        name: 'TagsFilter',
        data(){
            return{
            }
        },
        methods: {
            /**
             * Generates filter url from tags id
             *
             * @param tagId
             * @returns {string}
             */
            getUrl(tagId) {
                if(tagId=='') return '/reports';
                return '/reports/filter/tags/'+tagId;
            }
        },
        computed: {
            /**
             * Get tags from store
             *
             * @returns {computed.tags|null|Array|*}
             */
            tags() {
                return [{label:'Any',value:''}].concat(this.$store.state.features.tags);
            },
            /**
             * Gets current filter
             */
            filter() {
                if(this.$route.params==null) return '';
                return this.$route.params.value || '';
            }
        }
    }
</script>
