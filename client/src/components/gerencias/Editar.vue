<template>
  <v-layout column>
    <v-flex xs8 offset-xs2>
      <Panel title="Editar Gerencia">
          <form
            name="puxBitacora-userReg"
            autocomplete="off">
            <v-text-field
              label="Nombre"
              v-model="gerente.gerenteNombre"
            ></v-text-field>
            <br>
            <v-text-field
              label="Apellidos"
              v-model="gerente.gerenteApellidos"
            ></v-text-field>
            <br>
            <v-text-field
              label="Direccion"
              multi-line
              v-model="gerente.direccion"
            ></v-text-field>
            <br>
            <v-text-field
              label="Localidad"
              v-model="gerente.localidad"
            ></v-text-field>
            <br>
            <v-text-field
              label="Municipio"
              v-model="gerente.municipio"
            ></v-text-field>
            <br>
            <v-text-field
              label="Estado"
              v-model="gerente.estado"
            ></v-text-field>
            <br>
            <v-text-field
              label="Codigo Postal"
              v-model="gerente.codigopostal"
            ></v-text-field>
            <br>
            <v-text-field
              label="Telefono 1"
              v-model="gerente.tel1"
            ></v-text-field>
            <br>
            <v-text-field
              label="Telefono 2"
              v-model="gerente.tel2"
            ></v-text-field>
            <br>
            <v-text-field
              label="Telefono 3"
              v-model="gerente.tel3"
            ></v-text-field>
            <br>
            <v-text-field
              label="Email"
              v-model="gerente.email"
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
import GerenciasServices from '@/services/Gerencias'
export default {
  data () {
    return {
      gerente: '',
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
    const idGer = this.$store.state.route.params.idGer
    this.gerente = await (GerenciasServices.show(idGer))
    this.gerente = this.gerente.data
  },
  methods: {
    async guardar () {
      this.error = null
      const idGer = this.$store.state.route.params.idGer
      try {
        await GerenciasServices.put({
          idGer: idGer,
          gerenteNombre: this.gerente.gerenteNombre,
          gerenteApellidos: this.gerente.gerenteApellidos,
          direccion: this.gerente.direccion,
          localidad: this.gerente.localidad,
          municipio: this.gerente.municipio,
          estado: this.gerente.estado,
          codigopostal: this.gerente.codigopostal,
          tel1: this.gerente.tel1,
          tel2: this.gerente.tel2,
          tel3: this.gerente.tel3,
          email: this.gerente.email
        })
        this.$router.push({
          name: 'gerencias'
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
