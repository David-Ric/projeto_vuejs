<template>
  <div>
    <div class="modal show fade" 
    id="exampleModal" tabindex="-1" 
    role="dialog" style="display:block" v-if="visible">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="header">
        <h1 class="title-modal">Solicite Demonstração</h1>
        <button type="button" class="close" data-dismiss="modal" @click="visible = false">
          <span aria-hidden="true">X</span>
        </button>
      </div>
      <div class="modal-body">
        
       <div class="base-inputs">
        <div>
            <p class="label-input">Nome</p>
            <input type="text" class="input-modal" placeholder="Nome">
        </div>
        <div>
            <p class="label-input">E-mail</p>
            <input type="text" class="input-modal" placeholder="E-mail">
        </div>
        
       </div>
       <div class="base-inputs">
        <div>
            <p class="label-input">Empresa</p>
            <input type="text" class="input-modal" placeholder="Empresa">
        </div>
        <div>
            <p class="label-input">Website</p>
            <input type="text" class="input-modal" placeholder="Website">
        </div>
        
       </div>
       <div class="base-inputs">
        <div>
            <p class="label-input">Telefone</p>
            <input type="text" class="input-modal" placeholder="Telefone">
        </div>
        <div>
            <p class="label-input">Qual seu cargo</p>
            <select type="text" class="input-modal" placeholder="---">
                <option value="10">---</option>
                <option value="1">Diretor/C-Level/Sócio/Proprietário</option>
                <option value="1">Gerente/Coordenador</option>
                <option value="1">Supervisor/Consultor</option>
                <option value="1">Analista</option>
                <option value="1">Vendedor</option>
            </select>
        </div>
        
       </div>
       <div class="base-inputs">
        <div>
            <p class="label-input">Quantos atendentes você possui focados no digital?</p>
            <select type="text" class="input-modal" placeholder="---">
                <option value="10">---</option>
                <option value="1">Acima de 20</option>
                <option value="1">14 a 20</option>
                <option value="1">8 a 14</option>
                <option value="1">4 a 7</option>
                <option value="1">1 a 3</option>
            </select>
        </div>
        <div>
            <p class="label-input">Em média quantos clientes seu time atende por dia no digital?</p>
            <select type="text" class="input-modal" placeholder="---">
                <option value="10">---</option>
                <option value="1">Abaixo de 10</option>
                <option value="1">Entre 10 a 20</option>
                <option value="1">Entre 21 e 40</option>
                <option value="1">Entre 41 e 70</option>
                <option value="1">Entre 71 e 100</option>
                <option value="1">Acima de 100</option>
            </select>
        </div>
        
       </div>
       <div class="base-inputs">
        <div class="end-input">
            <p class="label-input">Qual seu principal objetivo com a TALLOS?</p>
            <select type="text" class="input-modal" placeholder="---">
                <option value="10">---</option>
                <option value="1">Aumentar as vendas através do WhatsApp e mídias socias</option>
                <option value="1">Aumentar a satisfação do cliente</option>
                <option value="1">Automatizar vendas e atendimento</option>
                <option value="1">Quero acompanhar e gerenciar a jordada de compra do meu cliente</option>
                
            </select>
        </div>
        <div>
            
        </div>
        
       </div>
       <div class="d-flex">
        <input class="check-modal" type="checkBox"><p class="text-check">Aceito e concordo com os termos de uso. Prometemos não encher sua caixa de mensagens com e-mails aleatórios</p>
       </div>
       
      </div>
      <div class="m">
        
        <button type="button" class="btn btn-primary enviar" @click="visible = false">ENVIAR</button>
      </div>
    </div>
   
  </div>
  
</div>
<div class="modal-backdrop fade show" v-if="visible"></div>
  </div>
</template>

<script>
 export default {
    data(){
        return {
            visible: false
        }
    },
    created (){
        this.$root.$on('open-modal',() =>{this.visible = true})
    }
 }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&display=swap');
.close{
    background-color:#ff7364 ;
    border: none;
    float: right;
    border-radius: 50%;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #fff;
    padding-top: 2px;
    padding-bottom: 3px;
    padding-left: 12px;
    padding-right: 13px;
    border: none;

}
.modal-content{
    background-color: #099ECE;
    width: 887.99px;
    height: 664.55 !important;
    padding: 18px;
    margin-top: -25px;
    margin-left: -35% !important;
    font-family: 'Poppins', sans-serif;

}
.enviar{
    background-color:#ff7364 ;
    border: none;
    float: right;
    border-radius: 50px;
    font-size: 14px;
    padding: 10px 30px;
}
.input-modal{
    width: 396.01px;
    height: 50px;
    border-radius: 25px;
    border: none;
    padding-left:12px ;
    padding-right:12px ;
}
.input-modal:active, .input-modal:focus{
    border: none;
}
.modal-body{
    padding: 0;
}
.label-input{
    margin-bottom: 5px;
    color: #fff;
    font-size: 15px;
    width: 380px;
    text-align: justify;
}
.title-modal{
    font-family: 'Poppins', sans-serif;
    font-size: 22px;
    color: #fff;
    text-align: center;
    width: 820px;
    padding-left:10px ;
}
.header{
    display: flex;
}
.base-inputs{
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
}
.end-input{
    margin-right: 390px;
}
.text-check{
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    margin-bottom: 10px;
}
.check-modal{
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    width: 20px;
    height: 20px;
}
</style>