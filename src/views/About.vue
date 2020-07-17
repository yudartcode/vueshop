<template id="app">
  <v-app>
    <v-list shaped>
      <template v-for="(item, index) in teams">
        <v-list-item :key="`team-`+index">
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-app>
</template>
<script>
export default {
  el: 'app',
  data: () => ({
    teams: [
      { name: 'L Yuda Rahmani Karnaen', avatar: 'https://yudartcode.github.io/img/Yuda-Avatar.jpg' },
      { name: 'Agung Eka Saputra', avatar: 'https://yudartcode.github.io/img/Yuda-Avatar.jpg' },
      { name: 'Gilang Restu Alam', avatar: 'https://yudartcode.github.io/img/Yuda-Avatar.jpg' },
      { name: 'Farasut Widodo Malik', avatar: 'https://yudartcode.github.io/img/Yuda-Avatar.jpg' },
      { name: 'Iling Abi Wiraguna', avatar: 'https://yudartcode.github.io/img/Yuda-Avatar.jpg' },
    ]
  })
};
</script>