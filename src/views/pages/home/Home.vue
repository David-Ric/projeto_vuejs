<template>
    <div>
        <Navbar /> 
        <Modal/>
        <Plataforma/>
        <div class="banner-empresas"></div>
        <EstejaOnde/>
        
        <FooterTallos/> 
    </div>
  </template>
  
  <script>
  import Plataforma from '@/components/home/Plataforma.vue';
  import Navbar from '@/components/navbar/Navbar.vue';
  import FooterTallos from '@/components/footer/Footer.vue';
  import AindaNao from '@/components/home/Ainda-nao-usa.vue';
  import Modal from '../../../components/home/Modal.vue';
  import EstejaOnde from '../../../components/home/EstajaOnde.vue'

  export default {
    components:{
    Navbar,
    Modal,
    Plataforma,
    AindaNao,
    EstejaOnde,
    FooterTallos,
}

  }
</script>
  
  <style src="" scoped>
  .banner-empresas{
    margin-top: 30px;
    margin-bottom: 30px;
    height: 80px;
    background-image: url("../../../../public/assets/bannerempresas.png");
   background-repeat: no-repeat;
   background-size: cover;
   
  }

</style>