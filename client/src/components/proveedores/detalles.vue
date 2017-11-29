<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media class="imgfilter" :src="require('../../assets/gerencia.jpg')" height="150px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ gerente.gerenteNombre }} {{ gerente.gerenteApellidos }}</h3>
            <!-- <span class="grey--text">Telefonos: {{ gerente.tel1 }} - {{ gerente.tel2 }} - {{ gerente.tel3 }}</span><br> -->
            <span class="grey--text">Telefonos: <div v-if="gerente.tel1 !== null">{{ gerente.tel1 }}</div> <div v-if="gerente.tel2 !== null"> {{ gerente.tel2 }}</div> <div v-if="gerente.tel3 !== null">{{ gerente.tel3 }}</div></span><br>
            <span>{{ gerente.localidad }}</span><br>
            <span>{{ gerente.municipio }}, {{ gerente.estado }}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange"
            @click="navigateTo({
              name: 'gerencias'
            })"
          >Ver Todos</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import ProveedoresServices from '@/services/Proveedores'
export default {
  data () {
    return {
      gerente: '',
      idPro: this.$store.state.route.params.idPro
    }
  },
  async mounted () {
    const idPro = this.$store.state.route.params.idPro
    this.proveedor = await (ProveedoresServices.show(idPro))
    this.proveedor = this.proveedor.data
  },
  components: {
    Panel
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.imgfilter {
  -webkit-filter: blur(2px);
  filter: blur(2px);
}
</style>
