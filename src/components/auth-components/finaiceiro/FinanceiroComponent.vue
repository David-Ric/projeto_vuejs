<template>
    
      <div>
        <Navbar /> 
        <div class="container">
          <h1 class="dash-title">Dashboard</h1>
        </div>
        
        <div id="grafico">
         
          <div class="graphic">
            <h5>Vendas por vendedor - Nov 2022</h5>
          </div>
          
        </div>
    <modal></modal>
        <FooterTallos/> 
    </div>
  </template>
  
  <script src="./Financeiro.js">

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
  #grafico{
   background-image: url("../../../../public/assets/finaiceiro.png");
   background-repeat: no-repeat;
   background-size: cover;
    height: 500px;
    margin-top: 20px ;
    padding-top: 30px;
    padding-left: 160px;
}
.graphic{
  margin-top: 42px;
  margin-left: 400px;
  background-image: url("../../../../public/assets/graphic.png");
   background-repeat: no-repeat;
   background-size: cover;
  width: 700px;
  height: 375px;
  box-shadow: 10px 10px 40px #b9b9ba;
  padding-top: 3px;
  padding-left: 8px;
}
  </style>