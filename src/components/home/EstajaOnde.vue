<template>
    <div id="estejaonde">
    <buntton class="button-consultoresteja" @click="$root.$emit('open-modal')">FALE COM UM CONSULTOR</buntton>

    
    <modal>
        
    </modal>

 


    </div>
</template>
<script>
export default {
 name: "EstejaOnde"
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&display=swap');
#estejaonde{
    
   background-image: url("../../../public/assets/home2.png");
   background-repeat: no-repeat;
  background-size: cover;
   
    height: 430px;
    margin-top: 50px ;
    padding-top: 300px;
    padding-left: 130px;
    
}
.button-consultoresteja{
    background-color: #08bb00;
    padding: 8px 30px;
    border-radius: 50px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: aliceblue;
    margin-left: 520px;
    cursor: pointer;  
}
.button-consultoresteja:hover{
    background-color:#FF6E02;
    padding: 8px 30px;
    font-size: 16px;
    margin-left: 515px;
}
</style>