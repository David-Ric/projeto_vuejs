import VueJwtDecode from 'vue-jwt-decode';
import Navbar from '@/components/navbar/Navbar.vue';
import FooterTallos from '@/components/footer/Footer.vue';
import Modal from '../../../components/home/Modal.vue';
import Api from '../../../services/Api';
import swal from 'sweetalert';

export default {
  components:{
    Navbar,
    FooterTallos,
    Modal,
    
  },
  
  name: 'AdminComponent',


  data() {
    return {
      permiss:{},
      clientes:[],
      name:null,
      
    };
  },
 
  methods:{
    
    getLoga(){
      this.permiss = localStorage.getItem('nivel');
      if(this.permiss==0 || this.permiss==1 || this.permiss==2 ){
        this.$router.push('/');
        console.log("TALLOS SHOW")
      }else{
        
      }
    },
    async getUsuario() {
      try {
        const response = await Api().get('admin/users');
        this.clientes = response.data 
      } catch (error) {
       // console.log('resposta',response.data)
         swal({
          title: 'Poxaa!',
           text: 'Nenhum usuario cadastrado!',
           icon: 'error',
         });  
      }
    },
    async submiteditUser(editId,nivel) {
       try {
         const response = await Api().put(`admin/users/${editId}`,nivel);
         this.getUsuario()
         swal({
          title: 'Huhulll!',
           text: 'Usuário editado com sucesso!',
           icon: 'success',
         });
       } catch (error) {
        
       }
    },

    async submitdeletUser(id) {
      try {
        const response = await Api().delete(`admin/users/${id}`);
        this.getUsuario()
        swal({
          title: 'Huhulll!',
           text: 'Usuário excluido com sucesso!',
           icon: 'success',
         });  
      } catch (error) {
      
      }
    },

  },
  created(){
    this.getLoga()
    this.getUsuario()
 }
};