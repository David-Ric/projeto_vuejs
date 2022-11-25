<template>
    
    <div id="nav" >
        <router-link to="/">
            <img src="../../../public/assets/logo.png" id="logo">
        </router-link>
        <div class="links-nav">
            <router-link class="link" to="/">Home</router-link>
            <router-link v-if="nivel == 1 || nivel == 2 || nivel == 3" class="link" to="/principal">Principal</router-link>
            <router-link  v-if="nivel == 2 || nivel == 3" class="link" to="/financeiro">Financeiro</router-link>
            <router-link v-if=" nivel == 3" class="link" to="/admin">Administrativo</router-link>
        </div>
        <div v-if="nivel>0" class="d-flex">
            <h3 id="fotouse">{{user}}</h3>
            <img style="width:40px;margin-left:5px ;"  src="../../../public/assets/carrouselHome/HOME-TALLOS-2-11-2.png"/>
        </div>
        
        <router-link to="/login">
            <button v-if="logado !=1" id="button-entrar">Entrar</button>
        </router-link>
        <button  @click="submitGetUser" v-if="logado == 1" id="button-sair">Sair</button>
          
    </div>
    
</template>
<script>
export default {
 name: "Navbar",
 data(){
    return{
        user:{},
        nivel:{},
        logado:{},
    }

 },
 methods:{
    getUser(){
        let usuario = localStorage.getItem('user');
        let pathuser = usuario.split('"')
        this.user = pathuser[1];
        this.logado = localStorage.getItem('logado');
        this.nivel = localStorage.getItem('nivel');
    },
    submitGetUser(){
      localStorage.clear(); 
      this.$router.push('/');
      localStorage.setItem('nivel',0);
      nivel = 0
      this.getUser()
    }
 },
 created(){
    this.getUser()
    console.log('1',nivel)
    nivel = 0
 }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&display=swap');
#nav{
    justify-content:space-between;
    background-color: #fff;
    padding: 15px 220px 17px 180px ;
    font-family: 'Poppins', sans-serif;
    display: flex;
    font-size: 15px;
    text-decoration: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}
.link{
    text-decoration: none;
    font-size: 16px;
    margin-right: 30px;
}

#button-entrar{
    float: right;
    background-color:#ff7364 ;
    text-decoration: none;
    padding: 8px 30px;
    border-radius: 50px;
    border: none;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #fff;
}
#button-entrar:hover{
    background-color:#3639a4 ;
}

#button-sair{
    float: right;
    background-color:#3639a4 ;
    text-decoration: none;
    padding: 8px 30px;
    border-radius: 50px;
    border: none;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #fff;
}
#button-sair:hover{
    background-color:#ff7364 ;
   
}

#logo{
    float: left;
    width: 150px;
}
.links-nav{
    width: 500px;
    padding-top: 9px;
    padding-left: 30px;
}
#fotouse{
    font-family: 'Poppins', sans-serif; 
    margin-right: 5px;
    margin-top: 3px;
    font-weight: bold;
    font-size: 25px;
    max-width: 210px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;      
}
</style>
