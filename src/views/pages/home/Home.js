import VueJwtDecode from 'vue-jwt-decode';


export default {
  name: 'Home',
  data() {
    return {
     
    };
  },
  methods:{
    getUser(){
        let usuario = localStorage.getItem('user');
        let pathuser = usuario.split('"')
        this.user = pathuser[1];
        this.logado = localStorage.getItem('logado');
        this.nivel = localStorage.getItem('nivel');
    },
    
    },
  created(){
    this.getUser()
    console.log('1',nivel)
    nivel = 0
 }
};