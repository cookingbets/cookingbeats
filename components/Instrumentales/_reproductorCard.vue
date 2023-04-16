<template>
    <div>
        
    </div>
</template>
<script>
export default{
    name: 'reproductorCard',
    components: {
        [process.client && 'VuePlyr']: () => import('vue-plyr'),
    },
    data(){
        return{

        }
    },
    
}
</script>