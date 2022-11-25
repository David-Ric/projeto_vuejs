import swal from 'sweetalert';
import Api from './Api';

export default {
  
  async registerNewUser(newUser) {
    try {
      const response = await Api().post('auth/register', newUser);
      const { token } = response.data;
      if (token) {
        localStorage.setItem('jwt', token);
        localStorage.setItem("user", JSON.stringify(newUser.name));
        localStorage.setItem("nivel", JSON.stringify(newUser.nivel));
        localStorage.setItem('logado', 1);
        swal({
          title: 'Excelente!',
          text: 'Usuário(a) cadastrado(a) com sucesso!',
          icon: 'success',
        });
      }
    } catch (error) {
      console.log('resposta',response.data)
      swal({
        title: 'Oops!',
        text: 'Alguma coisa deu errado aqui!',
        icon: 'error',
      });
      this.$router.push('/register');
    }
  },
};