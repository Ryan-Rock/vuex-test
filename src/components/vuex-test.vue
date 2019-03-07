<template>
    <div>
        {{count}}
    <button @click="add">+</button>
    <button @click="reduce">-</button>
     <button @click="addtest">+</button>
     <button @click="mapMutations">mapMutations实现调用</button>
   

    <!-- actions -->
        <div>
            <a href="">{{count}}</a> 
            <button @click="addAction">+</button>
            <button @click="reduceAction">-</button>
        </div>
     </div>
</template>

<script>
import { mapState,mapMutations,mapGetters, mapActions } from 'vuex'
export default {
    data(){
        return {
           
        }
    },
    mounted(){
      
    },
    computed:{
        // count() {
        //     return this.$store.state.count;
        // }
        ...mapState(['count']),
        // count() {
        //   return  this.$store.getters.count;
        // }
        // ...mapGetters(['count'])
    },
    // computed: mapState({
    //     count: state=> state.count
    // }),
    // computed: mapState(['count']),
    // methods:mapMutations(['mapMutations']),
    methods:{
        add(){
            this.$store.commit('add')
        },
        reduce(){
            this.$store.commit('reduce')
        },
        addtest(){
            this.$store.commit('testadd',5)
        },
        ...mapMutations(['mapMutations']),
        ...mapActions(['addAction','reduceAction'])

    }

}
</script>
