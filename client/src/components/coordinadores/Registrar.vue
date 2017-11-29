<template>
  <v-layout column>
    <v-flex xs8 offset-xs2>
      <Panel title="Registrar Cordinador">
          <form
            name="puxBitacora-userReg"
            autocomplete="off">
            <v-text-field
              label="Gerencia"
              v-model="gerencia"
            ></v-text-field>
            <br>
            <v-text-field
              label="Nombre"
              v-model="nombre"
            ></v-text-field>
            <br>
            <v-text-field
              label="Apellidos"
              v-model="apellidos"
            ></v-text-field>
            <br>
            <v-text-field
              label="Direccion"
              multi-line
              v-model="direccion"
            ></v-text-field>
            <br>
            <v-text-field
              label="Localidad"
              v-model="localidad"
            ></v-text-field>
            <br>
            <v-text-field
              label="Municipio"
              v-model="municipio"
            ></v-text-field>
            <br>
            <v-text-field
              label="Estado"
              v-model="estado"
            ></v-text-field>
            <br>
            <v-text-field
              label="Codigo Postal"
              v-model="codigopostal"
            ></v-text-field>
            <br>
            <v-text-field
              label="Telefono 1"
              v-model="tel1"
            ></v-text-field>
            <br>
            <v-text-field
              label="Telefono 2"
              v-model="tel2"
            ></v-text-field>
            <br>
            <v-text-field
              label="Telefono 3"
              v-model="tel3"
            ></v-text-field>
            <br>
            <v-text-field
              label="Email"
              v-model="email"
            ></v-text-field>
            <br>
          </form>
          <br>
          <div class="error" v-html="error" />
          <br>
          <v-btn
            dark
            class="light-blue lighten-3"
            @click="registrar">
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
      gerencia: '',
      nombre: '',
      apellidos: '',
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
  methods: {
    async registrar () {
      try {
        await CoordinadoresServices.post({
          idGer: this.gerencia,
          coordinadorNombre: this.nombre,
          coordinadorApellidos: this.apellidos,
          direccion: this.direccion,
          localidad: this.localidad,
          municipio: this.municipio,
          estado: this.estado,
          codigopostal: this.codigopostal,
          tel1: this.tel1,
          tel2: this.tel2,
          tel3: this.tel3,
          email: this.email
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
