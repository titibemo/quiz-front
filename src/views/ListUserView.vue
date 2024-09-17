<template>
  <section>

    <h1 class="section-title">Liste des utilisateurs</h1>

      <table>
        <thead>
            <tr>
                <th>Prénom</th>
                <th>Nom</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in userList">
              <td>{{ user.name }}</td>
                <td> {{ user.firstname }}</td>
                <td class="actions">
                  <a class="edit" :href="`http://localhost:8080/modifier-utilisateur/${user.id}`">Modifier l'utilisateur</a>
                  <form :action="`http://localhost:3020/api/users/eraseUser/${user.id}`" method="POST">
                    <button class="delete" type="submit">Effacer l'utilisateur</button>
                  </form>
                </td>
            </tr>
        </tbody>
    </table>

  </section>

</template>

<script setup>
import { ref } from 'vue';


const userList = ref(null)


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  }
};

fetch('http://localhost:3020/api/users/listUsers', options).then(handleFetch);

function handleFetch(response)
{

  if(response.ok)
    {
      response.json()
        .then(data=>{
          userList.value = data;
          console.log("data", userList.value);
        })
        .catch(error=>console.error(error));
    }
    else
    {
        console.error(response.statusText);
    }
  }

</script>

<style scoped>

.section-title{
  text-align: center;
  margin: 15px 0;
}

table {
  width: 90%;
  border-collapse: collapse;
  margin: 0 auto 20px auto;
}
th, td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}
th {
  background-color: #f4f4f4;
}
tr:nth-child(even) {
  background-color: #f9f9f9;
}
.actions {
  text-align: center;
}
.btn {
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
.edit {
  text-decoration: none;
  background-color: orange;
  color: white;
  padding: 5px;
  margin: 5px;
  border-radius: 15px;
}
.delete {
  background-color: #f44336;
  color: white;
  padding: 5px;
  margin: 5px;
  border-radius: 15px;
}
.edit:hover {
  background-color: #45a049;
}
.delete:hover {
  background-color: red;
}
</style>