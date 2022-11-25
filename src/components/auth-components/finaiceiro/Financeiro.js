import VueJwtDecode from 'vue-jwt-decode';
import Navbar from '@/components/navbar/Navbar.vue';
import FooterTallos from '@/components/footer/Footer.vue';
import Modal from '../../../components/home/Modal.vue';

export default {
  components:{
    Navbar, 
    FooterTallos,
    Modal,
  },
  
  name: 'FinanceiroComponent',

  data() {
    return {
      perm:{},
    };
  },
 
  methods:{
    getLogs(){
      this.perm = localStorage.getItem('nivel');
      if(this.perm==0 || this.perm==1 ){
        this.$router.push('/');
        console.log("TALLOS SHOW")
      }else{
        
      }
    }
  },
  created(){
    this.getLogs()
 }
  
};