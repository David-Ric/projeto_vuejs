import store from '@/store';
import swal from 'sweetalert';
import Api from './Api';

export default{
    async loginUser(user){
        try{
            const response = await Api().post('auth/login', user);
      const { token } = response.data;
      localStorage.setItem('jwt', token);
      localStorage.setItem("user", JSON.stringify(response.data.user.name));
      localStorage.setItem("nivel", JSON.stringify(response.data.user.nivel));
      localStorage.setItem('logado', 1);
    //  this.$store.commit('setJwt',token)
    //   thid.$router.push('/principal')
 //   console.log('token',$store,state.jwt)
      if (token) {

        swal({
          title: 'Excelente!',
          text: 'Usuário(a) logado(a) com sucesso!',
          icon: 'success',
        });
      }

        }
        catch(error){
            swal({
                title: 'Oops!',
                text: 'Erro ao logar no sistema!',
                icon: 'error',
              });
              thid.$router.push('/login')
        }

    },
    created(){
     this.$store.commit('setJwt',token)
   }
};