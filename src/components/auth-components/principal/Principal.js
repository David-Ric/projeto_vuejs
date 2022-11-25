import VueJwtDecode from 'vue-jwt-decode';
import Navbar from '@/components/navbar/Navbar.vue';
import FooterTallos from '@/components/footer/Footer.vue';
import Conteudo from '../../../components/Conteudo.vue';
import Modal from '../../../components/home/Modal.vue';

export default {
  components:{
    Navbar,
    Conteudo,
    FooterTallos,
    Modal,
  },
  
  name: 'PrincipalComponent',

  data() {
    return {
      permissao:{},
    };
  },
 
  methods:{
    getLog(){
      this.permissao = localStorage.getItem('nivel');
     // console.log("TALLOS SHOW aqui", permissao)
      if(this.permissao==0){
        this.$router.push('/');
        console.log("TALLOS SHOW")
      }else{
        
      }
    }
  },
  created(){
    this.getLog()
 }
};