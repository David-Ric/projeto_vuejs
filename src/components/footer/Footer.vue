<template>
    <div id="footerTallos">
        <buntton class="button-consultor-footer" @click="$root.$emit('open-modal')">Fale com um Consultor</buntton>
    
    </div>
</template>
<script>
export default {
 name: "FooterTallos"
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&display=swap');
#footerTallos{
    
   background-image: url("../../../public/assets/footer.png");
   background-repeat: no-repeat;
   background-size: cover;
   
    height: 1000px;
    margin-top: 10px ;
    padding-top: 160px;
    padding-left: 130px;
    
}
.button-consultor-footer{
    background-color: #FF7B46;
    padding: 8px 30px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: aliceblue;
    margin-left: 39%;
    cursor: pointer;  
}

</style>