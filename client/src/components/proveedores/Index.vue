<template>
  <v-layout column>
    <v-flex xs12>
      <panel title="Proveedores">
        <v-btn
          slot="action"
          @click="navigateTo({name: 'RegistrarProveedor'})"
          class="light-blue darken-1"
          medium absolute right middle fab>
          <v-icon>add</v-icon>
        </v-btn>

        <v-data-table
          v-bind:headers="headers"
          v-bind:items="items"
          v-bind:search="search"
          v-bind:pagination.sync="pagination"
          hide-actions
          light
          class="elevation-4"
        >
          <template slot="headerCell" slot-scope="props">
            <v-tooltip bottom>
              <span slot="activator">
                {{ props.header.text }}
              </span>
              <span>
                {{ props.header.text }}
              </span>
            </v-tooltip>
          </template>
          <template slot="items" slot-scope="props">
            <td>{{ props.item.idCoo }}</td>
            <td>{{ props.item.nombre }}</td>
            <td class="text-xs-right">{{ props.item.tipoProveedor }}</td>
            <td class="text-xs-right">{{ props.item.localidad }}</td>
            <td class="text-xs-right">{{ props.item.email }}</td>
            <td class="text-xs-right">{{ props.item.tel1 }}</td>
            <td class="text-xs-right">
              <v-btn
                @click="navigateTo({
                  name: 'detallesProveedor',
                  params: {
                    idPro: props.item.idPro
                  }
                })"
                small fab>
                <v-icon>description</v-icon>
              </v-btn>
              <v-btn
                @click="navigateTo({
                  name: 'editarProveedor',
                  params: {
                    idPro: props.item.idPro
                  }
                })"
                small fab>
                <v-icon>edit</v-icon>
              </v-btn>
              <v-btn
                @click="eliminar(props.item.idPro)"
                small fab>
                <v-icon>delete</v-icon>
              </v-btn>
            </td>
          </template>
        </v-data-table>
        <div class="text-xs-center pt-2">
          <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
        </div>
      </panel>

      <v-dialog v-model="details" max-width="700px">

      </v-dialog>

    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import ProveedoresServices from '@/services/Proveedores'

export default {
  components: {
    Panel
  },
  data () {
    return {
      search: '',
      details: false,
      pagination: {},
      selected: [],
      usuario: {},
      headers: [
        { text: 'Coordinador', value: 'coordinador', align: 'left' },
        { text: 'Nombre', value: 'nombre', align: 'left' },
        { text: 'Tipo', value: 'tipoProveedor' },
        { text: 'Localidad', value: 'localidad', align: 'center' },
        { text: 'Email', value: 'email', align: 'center' },
        { text: 'Telefono', value: 'telefono', align: 'center' },
        { text: '',
          value: 'actions',
          sortable: false,
          align: 'right'
        }
      ],
      items: this.items
    }
  },
  async mounted () {
    this.items = (await ProveedoresServices.index()).data
  },
  computed: {
    pages () {
      return this.pagination.rowsPerPage ? Math.ceil(this.items.length / this.pagination.rowsPerPage) : 0
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    async eliminar (idGer) {
      try {
        await ProveedoresServices.delete(idGer)
        this.$router.push({
          name: 'gerencias'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
</style>
