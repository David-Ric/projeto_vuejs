<template>

    <div class="conteudo">
      <Slider/>
      <div class="corpo-login">
        <router-link to="/">
            <img src="../../../../public/assets/loglogin.png" id="logologin" v-b-tooltip.hover title="Ir para Home">
        </router-link>
        <form class="formulario" v-on:submit.prevent="loginSubmitUserForm()">
          
          <div class="form-group email">
            
            <label class="labelform" for="">Email</label>
            
            <input 
              type="email" 
              id="email" 
              name="email" 
              class="form-coontrol inputlogin"
              v-model="loginForm.email"
              :class="{
                'is-invalid': isSubmitted && $v.loginForm.email.$error,
              }"
            >
            <div
              v-if="isSubmitted && !$v.loginForm.email.required"
              class="invalid-feedback"
            >
              O campo e-mail é obrigatório!
            </div>
          </div>
          
          <div class="form-group email senha">
            
            <label class="labelform" for="">Senha</label>
            
            <input 
            type="password"
            id="password" 
            name="password"
            class="form-coontrol inputlogin"
            v-model="loginForm.password"
            :class="{
                'is-invalid': isSubmitted && $v.loginForm.password.$error,
              }"
            >
          
            <div
              v-if="isSubmitted && !$v.loginForm.password.required"
              class="invalid-feedback"
            >
              O campo password é obrigatório!
            </div>

          </div>
          
          <div class="buttons-form">

            <button 
            @click="submitLoginUser"
            class="btn-form login"
            >
            LOGIN
          </button>
            

          </div>
          <p class="center register-link">
            Não tem uma conta cadastrada? <router-link to="/register">Cadastre Aqui</router-link>
          </p>
        </form>
        <div>
          
          <a href=" http://api.whatsapp.com/send?1=pt_BR&phone=5585997945570" target="_blak">
            <img src="../../../../public/assets/logosac.png" id="logosac">
          </a>
          
        </div>
        <div>
          <span class="text-negocios">Tallos Negócios Inteligentes © Copyright 2022</span>
        </div>
      </div>
    </div>
  </template>
  
  <script src="./Login.js"></script>
  
  <style src="" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300&family=Poppins:wght@200;300&display=swap');
  .conteudo{
    display: flex;
  }
  .corpo-login{
    align-items: center;
  }
  #logologin{
    margin-top: 60px;
    margin-left: 205px;
  }
  .formulario{
    position: relative;
    margin-left: 85px;
    width: 320px;
    height: 250px;
    margin-top: 30px;
  }
  #logosac{
    margin-top: 20px;
    margin-left: 210px;
    margin-bottom: 40px;
  }

.text-negocios{
  margin-left: 110px;
color: rgb(165, 161, 161);
font-size: 13px;
}
.inputlogin{
  width: 100%;
  height: auto;
    border-radius: 0.1rem;
    outline: initial!important;
    -webkit-box-shadow: initial!important;
    box-shadow: none!important;
    font-size: .8rem;
    padding: 0.7rem 0.75rem 0.65rem 0.75rem;
    line-height: 1.5;
    border: 1px solid #d7d7d7;
    background: #fff;
    color: #212121;
    margin-top: 2px;
}
.inputlogin:active, .inputlogin:focus{
  border: 1px solid #6bb5ff;
}
.labelform{
  position: absolute;
    cursor: text;
    font-size: 80%;
    font-family: 'Nunito', sans-serif;
    opacity: 1;
    top: -0.4em;
    left: 0.75rem;
    z-index: 100;
    line-height: 1;
    padding: 0 5px 5px;
    background-color: #fff;
}
.email{
  position: relative;
}
.senha{
  margin-top: 30px;
}
.buttons-form{
  display: flex;
  margin-top: 30px;
  justify-content: space-around;
}
.btn-form{
  font: 12.8px Nunito, sans-serif;
  color: #fff;
  padding: 12px 41.6px 9.6px;
  border: none;
  border-radius: 50px;
  
}
.login{
  background-color: #009acc;
  border-color: #009acc;
}
.login:hover{
  background-color: #0069d9;
  border-color: #0062cc;
}
.cadastrar{
    padding: 12px 25px 9.6px;
    background-color: #ff7364;
    border-color:#ff7364;
}
.cadastrar:hover{
    background-color: #ed3c29;
    border-color:#ed3c29;
}
.register-link{
margin-top: 20px;
  text-align: center;
  font-size: 15px;
}
  </style>