import Slider from '../../../components/home/Slider.vue';
import { required } from 'vuelidate/lib/validators';
import swal from 'sweetalert';
import LoginService from '@/services/LoginService';

export default {
  components:{
    Slider,
},
  name: 'LoginComponent',
  data() {
    return {
      loginForm:{
        email: null,
        password: null,
      },
      isSubmitted: false,
    };
  },
  validations: {
           loginForm: {
           email: { required },
           password: { required },
         },
       },
  methods:{
    loginSubmitUserForm() {},
    
    async submitLoginUser() {
      try {
        this.isSubmitted = true;

        this.$v.$touch();
        if (this.$v.$invalid) {
          swal({
            title: 'Oops!',
            text: 'Você precisa incluir todos os campos obrigatórios!',
            icon: 'error',
          });
          return;
        }

        await LoginService.loginUser(this.loginForm);
        this.$router.push('/principal');
      } catch (error) {
        swal({
          title: 'Oops!',
          text: 'Tem algo errado aqui, verifique seu email e senha!',
          icon: 'error',
        });
      }
    },
  },
};