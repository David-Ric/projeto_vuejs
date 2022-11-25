<template>
    
      <div>
        <Navbar /> 
        <div class="container">
          <h1 class="dash-title">Administrativo</h1>
        </div>
        <div class="responsivo">
        <div class="users">
          
        <h1 class="titulo">Lista de usuários</h1>
        
        <div class="cadastros">
          <div  >
               
            </div>
      
          <table id='tabela' class="table table-dark table-borderless">
            <thead class="head-table">
              <tr>
              <th style="position: sticky" scope="col">Nome:</th>
              <th style="position: sticky" class="nivel-cli" scope="col">Nível:</th>
              <th  style="position: sticky" class="nivel-cli" scope="col">Ações</th>
            </tr>
            </thead>
            <tbody v-for="(name) in clientes" :key="name.id">
              <tr  scope="row">
              <td style="max-width:170px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;" class="conteudo-nome" v-if="name.name !=='Admin Tallos'"> {{ name.name }}</td>
              <td  v-if="name.name !=='Admin Tallos'" class="nivel-cli conteudo">{{name.nivel}}</td>
              <td v-if="name.name !=='Admin Tallos'" class="d-flex acoes conteudos">
              
                <button  
                @click="submitdeletUser(name._id)" 
                class="btn-excluir "
                >
                Excluir
              </button>

                <div class="caixa-niveis">
                  <span>Nivel de acesso</span>
                  <div class="d-flex opcoes">
                    <div class="d-flex">
                      <input  @click="submiteditUser(name._id,{nivel:1})" name="nivel" type="radio" value="1" style="margin-right:5px"/> <span>1</span>
                    </div>
                    <div class="d-flex">
                      <input @click="submiteditUser(name._id,{nivel:2})" name="nivel" type="radio" value="2" style="margin-right:5px"/> <span>2</span>
                    </div>
                    <div class="d-flex">
                      <input @click="submiteditUser(name._id,{nivel:3})" name="nivel" type="radio" value="3" style="margin-right:5px"/> <span>3</span>
                    </div>
                  </div>
                  
                </div>
              </td>
            </tr>
            </tbody>
          </table>
     

        </div>
<modal></modal>
      </div>
    </div>
        <FooterTallos/> 
    </div>
  </template>
  
  <script src="./Admin.js">

  </script>
  
  <style src="" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&display=swap');
  .dash-title{
    margin-top: 80px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 30px;
    box-shadow: 10px 10px 40px #b9b9ba;
    padding: 5px;
    font-weight: bold;
  }
  .users{
    background-image: url("../../../../public/assets//users.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 800px;
    margin-top: 20px ;
    padding-top: 30px;
    padding-left: 160px;
  }
  .titulo{
    font-size: 40px;
    color: beige;
    box-shadow: 20px 10px 40px #131212;
    padding-bottom: 8px;
    padding-left: 20px;
    padding-right: 20px;
    width: 500px;
}
.cadastros{
  margin-top: 20px;
  box-shadow: 20px 10px 40px #131212;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    width: 1000px;
    min-height: 650px;
    height: auto;
    padding-top:20px ;
    color: blue;
    align-items: center;
}
#tabela{
  position: relative;
  padding: 15px;
  border: 2px #131212;
  width: 75%;
  left: right;
  opacity: 0.8;
  font-weight: bold;
  font-size: 18px;
  border:none;
  margin: auto;

}
.nivel-cli{
  text-align: center;
}
.btn-excluir{
  font-weight: bold;
  padding: 2px 20px;
  border-radius: 50px;
  background-color: crimson;
  color: aliceblue;
  margin-right: 80px;
}
.btn-excluir:hover{
  background-color: rgb(119, 21, 40);
}
.acoes{
 border: none;
}
.caixa-niveis{
  text-align: center;
  position: absolute;
  width: 180px;
  float: right;
  right: 0 !important;
  font-size: 13px;
  background-color: #3c3c3e;
  margin-right:15px;
  justify-content: space-around;
}
.opcoes{
  justify-content: space-around;
  padding-bottom: 2px;
}
.conteudo{
  height: 60px;
}
.conteudos{
  height: 60px;
  background-color: #818183;
  
}
.responsivo{
  position: relative;
  height:max-content;
}
.head-table{
  border-bottom: 3px solid #b9b9ba;
}

  </style>