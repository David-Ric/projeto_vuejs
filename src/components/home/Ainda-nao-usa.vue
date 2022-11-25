<template>
    <div v-if="barfixe" id="ainda-nao-usa">
        <buntton class="button-consultor-footer">Fale com um Consultor</buntton>
    
    </div>
    <div v-else id="ainda-nao-usa-false">
        <buntton class="button-consultor-footer">Fale com um Consultor</buntton>
    
    </div>
</template>
<script>

export default {
 name: "AindaNao",
 data(){
    return{
        barfixe: false

    }
   

 }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&display=swap');
#ainda-nao-usa{
  
   background-image: url("../../../public/assets/barrafixa.png");
   background-repeat: no-repeat;
   background-size: cover;
   
    height: 90px;
    margin-top: 10px ;
    padding-top: 16px;
    padding-left: 130px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-origin: 0;
    
}
#ainda-nao-usa-false{
  
  background-image: url("../../../public/assets/barrafixa.png");
  background-repeat: no-repeat;
  background-size: cover;
  
   height: 90px;
   margin-top: 10px ;
   padding-top: 16px;
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