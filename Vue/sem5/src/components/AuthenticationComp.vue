<template>
    <form v-if="!isAuthenticated" action="#">
        <label for="login">Login</label>
        <input type="text" id="login" v-model="userLogin">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="userPassword">
        <button @click="formCheck">Enter</button>
    </form>
    <h1 v-else>Success!</h1>

</template>

<script>
export default {
  name: 'AuthenticationComp',
  props: {

  },
  data () {
    return {
      isAuthenticated: false,
      userLogin: '',
      userPassword: ''
    }
  },
  methods: {
    formCheck () {
      if (this.userLogin && this.userPassword) {
        this.isAuthenticated = true
      }
    }
  }
}
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
  <!-- Создайте компонент "Аутентификация" (Authentication),
который будет отображать форму входа или сообщение об
успешной аутентификации в зависимости от переданного
пропса isAuthenticated. Используйте директиву v-if для
условного отображения разных элементов в шаблоне
компонента. -->
