<script>
export default {
    name: "SingleCard",
    props:{
        info: Object
    }
}
</script>

<template>
    <div class="img-item">
        <img :src="info.card_images[0].image_url" :alt="info.name">
    </div>
    <div class="title-item">
        {{ info.name }}
    </div>
    <div class="type-item">
        {{ info.archetype }}
    </div>
</template>

<style lang="scss" scoped>

.img-item {
    width: 100%;
    

    img {
        width: 100%;
        padding-bottom: 10px;
    }
}

.title-item {
    padding-bottom: 10px;
    color: white;
}

</style>