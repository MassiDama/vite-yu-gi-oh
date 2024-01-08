<script>
export default {
    name: "AppHeader"
}
</script>

<template>

    <header>
        <div class="logo">
            <img src="../../public/logo.jpg" alt="Logo">
        </div>
        <h1>Yu-Gi-Oh</h1>
    </header>
  
</template>

<style lang="scss" scoped>

header {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    padding: 20px;


    .logo {
        width: 150px;

        img {
            width: 100%;
        }
    }

    h1 {
        font-size: 50px;
        margin-left: 10px;
    }
}



</style>
