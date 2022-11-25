<template>
    <div id="conteudo">
        <div class="d-flex">
        <div class="sobre-tallos">
            <h1 class="titulo">Pra quem sonha grande...</h1>
            <p class="text-tallos">
                A Tallos, empresa cearense sediada em Maracanaú e responsável por uma das principais plataformas de relacionamento inteligente do país, foi reconhecida com o selo Great Place To Work (GPTW).  Referente ao ano de 2020, a certificação reconhece a qualidade do ambiente de trabalho nas empresas com base nas avaliações e percepções dos seus próprios colaboradores, sendo a principal chancelaria de Gestão de Pessoas em nível mundial.
            </p>
        </div>

         <div class="video">
            <iframe width="540" height="305" src="https://www.youtube.com/embed/T4eBl6UJwdM" title="TALLOS NO RD SUMMIT 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </div>

        </div>
    </div>
</template>
<script>

export default {
 name: "Conteudo",

}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&display=swap');
#conteudo{
   background-image: url("../../public/assets/conteudo.png");
   background-repeat: no-repeat;
   background-size: cover;
    height: 500px;
    margin-top: 20px ;
    padding-top: 30px;
    padding-left: 160px;
}
.titulo{
    font-size: 40px;
    color: beige;
    box-shadow: 20px 10px 40px #131212;
    padding-bottom: 8px;
}
.video{
    margin-left: 30px;
}
 .sobre-tallos{
    width: 500px;

 }
.text-tallos{
    margin-top: 20px;
    font-size:20px;
    background-color: #6f6de0;
    color: rgb(228, 235, 228);
    box-shadow: 10px 10px 40px #0b0986;
    padding: 20px;
    /* padding-bottom: 8px;
    padding-right:10px ;
    padding-left:10px ; */
    text-align: justify;
    }

</style>