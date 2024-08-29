<template>

  <h1>TEST</h1>

  <nav>
    <router-link to="/">Accueil</router-link> |
    <router-link to="/connexion">Connexion</router-link> |
    <router-link to="/liste-utilisateur">Liste des utilisateurs</router-link> |
    <router-link to="/enregistrer-utilisateur">Enregistrer un nouveau utilisateurs</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
