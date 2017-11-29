<template>
  <v-layout column>
    <v-flex xs8 offset-xs2>
      <Panel title="Editar Coordinador">
          <form
            name="puxBitacora-userReg"
            autocomplete="off">
            <v-text-field
              label="Gerencia"
              v-model="coordinador.idGer"
            ></v-text-field>
            <br>
            <v-text-field
              label="Nombre"
              v-model="coordinador.coordinadorNombre"
            ></v-text-field>
            <br>
            <v-text-field
              label="Apellidos"
              v-model="coordinador.coordinadorApellidos"
            ></v-text-field>
            <br>
            <v-text-field
              label="Direccion"
              multi-line
              v-model="coordinador.direccion"
            ></v-text-field>
            <br>
            <v-text-field
              label="Localidad"
              v-model="coordinador.localidad"
            ></v-text-field>
            <br>
            <v-text-field
              label="Municipio"
              v-model="coordinador.municipio"
            ></v-text-field>
            <br>
            <v-text-field
              label="Estado"
              v-model="coordinador.estado"
            ></v-text-field>
            <br>
            <v-text-field
              label="Codigo Postal"
              v-model="coordinador.codigopostal"
            ></v-text-field>
            <br>
            <v-text-field
              label="Telefono 1"
              v-model="coordinador.tel1"
            ></v-text-field>
            <br>
            <v-text-field
              label="Telefono 2"
              v-model="coordinador.tel2"
            ></v-text-field>
            <br>
            <v-text-field
              label="Telefono 3"
              v-model="coordinador.tel3"
            ></v-text-field>
            <br>
            <v-text-field
              label="Email"
              v-model="coordinador.email"
            ></v-text-field>
            <br>
          </form>
          <br>
          <div class="error" v-html="error" />
          <br>
          <v-btn
            dark
            class="light-blue lighten-3"
            @click="guardar">
            Registrar
          </v-btn>
       </Panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import CoordinadoresServices from '@/services/Coordinadores'
export default {
  data () {
    return {
      coordinador: '',
      direccion: '',
      localidad: '',
      municipio: '',
      estado: '',
      codigopostal: '',
      tel1: '',
      tel2: '',
      tel3: '',
      email: '',
      error: null
    }
  },
  async mounted () {
    const idCoo = this.$store.state.route.params.idCoo
    this.coordinador = await (CoordinadoresServices.show(idCoo))
    this.coordinador = this.coordinador.data
  },
  methods: {
    async guardar () {
      this.error = null
      const idCoo = this.$store.state.route.params.idCoo

      try {
        await CoordinadoresServices.put({
          idCoo: idCoo,
          idGer: this.coordinador.idGer,
          coordinadorNombre: this.coordinador.coordinadorNombre,
          coordinadorApellidos: this.coordinador.coordinadorApellidos,
          direccion: this.coordinador.direccion,
          localidad: this.coordinador.localidad,
          municipio: this.coordinador.municipio,
          estado: this.coordinador.estado,
          codigopostal: this.coordinador.codigopostal,
          tel1: this.coordinador.tel1,
          tel2: this.coordinador.tel2,
          tel3: this.coordinador.tel3,
          email: this.coordinador.email
        })
        this.$router.push({
          name: 'coordinadores'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.error {
  color: black;
}
</style>
