<template>
  <v-layout column>
    <v-flex xs8 offset-xs2>
      <Panel title="Registrar Proveedor">
          <form
            name="puxBitacora-userReg"
            autocomplete="off">
            <v-text-field
              label="Coordinador"
              v-model="coordiandor"
            ></v-text-field>
            <br>
            <v-text-field
              label="Nombre"
              v-model="nombre"
            ></v-text-field>
            <br>
            <v-text-field
              label="Razón Social"
              v-model="razonSocial"
            ></v-text-field>
            <br>
            <v-text-field
              label="Tipo"
              v-model="tipoProveedor"
            ></v-text-field>
            <br>
            <v-text-field
              label="Domicilio"
              v-model="domicilio"
            ></v-text-field>
            <br>
            <v-text-field
              label="Entre Calles"
              multi-line
              v-model="entreCalles"
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
import ProveedoresServices from '@/services/Proveedores'
export default {
  data () {
    return {
      nombre: '',
      razonSocial: '',
      tipoProveedor: '',
      domicilio: '',
      entreCalles: '',
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
        await ProveedoresServices.post({
          idCoo: this.coordinador,
          nombre: this.nombre,
          razonSocial: this.razonSocial,
          tipoProveedor: this.tipoProveedor,
          domicilio: this.domicilio,
          entreCalles: this.entreCalles,
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
          name: 'proveedores'
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
