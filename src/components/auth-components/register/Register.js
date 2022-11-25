import swal from 'sweetalert';
import { minLength, required } from 'vuelidate/lib/validators';
import RegisterService from '@/services/RegisterService';
import Slider from '../../../components/home/Slider.vue';
import axios from 'axios';

export default {
  components: {
    Slider,
  },
  name: 'RegisterComponent',
  data() {
    return {
      registerForm: {
        name: null,
        email: null,
        password: null,
        nivel: 1,
      },
      isSubmitted: false,
    };
  },
  validations: {
    registerForm: {
      name: { required },
      email: { required },
      password: { required },
    },
  },
  methods: {
    registerSubmitUserForm() {},
    async submitGetUser(){
      localStorage.clear(); 
      this.$router.push('/');
//  axios.post('http://localhost:3000/auth/register',this.registerForm).then((response)=>{
//   const { token } = response.data;
// const {user} = this.registerForm
//       if (token) {
//         localStorage.setItem('jwt',token);
//         localStorage.setItem("user", JSON.stringify(this.registerForm.name));
//         localStorage.setItem("user", JSON.stringify(this.registerForm.nivel));
//         swal({
//           title: 'Excelente!',
//           text: 'Usuário(a) cadastrado com sucesso!',
//           icon: 'success',
//         });
//       }
//   console.log(response.data);
//  } )
    },

    async submitRegisterUser() {
      try {
        this.isSubmitted = true;

        this.$v.$touch();
        if (this.$v.$invalid) {
          swal({
            title: 'Oops!',
            text: 'Você precisa incluir todos os campos obrigatórios',
            icon: 'error',
          });
          return;
        }

        await RegisterService.registerNewUser(this.registerForm);
        this.$router.push('/principal');
      } catch (error) {
        swal({
          title: 'Oops!',
          text: 'Usuário já cadastrado na base de dados!',
          icon: 'error',
        });
        this.$router.push('/register');
      }
    },
  },
};