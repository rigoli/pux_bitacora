<template>
  <v-layout column>
    <v-flex xs8 offset-xs2>
      <Panel title="Editar Proveedor">
          <form
            name="puxBitacora-userReg"
            autocomplete="off">
            <v-text-field
              label="Coordinador"
              v-model="proveedor.idCoo"
            ></v-text-field>
            <br>
            <v-text-field
              label="Nombre"
              v-model="proveedor.nombre"
            ></v-text-field>
            <br>
            <v-text-field
              label="Razón Social"
              v-model="proveedor.razonSocial"
            ></v-text-field>
            <br>
            <v-text-field
              label="Tipo"
              v-model="proveedor.tipoProveedor"
            ></v-text-field>
            <br>
            <v-text-field
              label="Domicilio"
              v-model="proveedor.domicilio"
            ></v-text-field>
            <br>
            <v-text-field
              label="Entre Calles"
              multi-line
              v-model="proveedor.entreCalles"
            ></v-text-field>
            <br>
            <v-text-field
              label="Localidad"
              v-model="proveedor.localidad"
            ></v-text-field>
            <br>
            <v-text-field
              label="Municipio"
              v-model="proveedor.municipio"
            ></v-text-field>
            <br>
            <v-text-field
              label="Estado"
              v-model="proveedor.estado"
            ></v-text-field>
            <br>
            <v-text-field
              label="Codigo Postal"
              v-model="proveedor.codigopostal"
            ></v-text-field>
            <br>
            <v-text-field
              label="Telefono 1"
              v-model="proveedor.tel1"
            ></v-text-field>
            <br>
            <v-text-field
              label="Telefono 2"
              v-model="proveedor.tel2"
            ></v-text-field>
            <br>
            <v-text-field
              label="Telefono 3"
              v-model="proveedor.tel3"
            ></v-text-field>
            <br>
            <v-text-field
              label="Email"
              v-model="proveedor.email"
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
            Guardar
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
      proveedor: '',
      idCoo: '',
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
  async mounted () {
    const idPro = this.$store.state.route.params.idPro
    this.proveedor = await (ProveedoresServices.show(idPro))
    this.proveedor = this.proveedor.data
  },
  methods: {
    async guardar () {
      this.error = null
      const idPro = this.$store.state.route.params.idPro
      try {
        await ProveedoresServices.put({
          idPro: idPro,
          idCoo: this.proveedor.idCoo,
          nombre: this.proveedor.nombre,
          razonSocial: this.proveedor.razonSocial,
          tipoProveedor: this.proveedor.tipoProveedor,
          domicilio: this.proveedor.domicilio,
          entreCalles: this.proveedor.entreCalles,
          localidad: this.proveedor.localidad,
          municipio: this.proveedor.municipio,
          estado: this.proveedor.estado,
          codigoPostal: this.proveedor.codigopostal,
          tel1: this.proveedor.tel1,
          tel2: this.proveedor.tel2,
          tel3: this.proveedor.tel3,
          email: this.proveedor.email
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
