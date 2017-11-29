import Api from '@/services/Api'

export default {
  index () {
    return Api().get('proveedores')
  },
  show (proveedor) {
    return Api().get(`proveedor/${proveedor}`)
  },
  post (proveedor) {
    return Api().post('proveedor', proveedor)
  },
  put (proveedor) {
    return Api().put(`proveedor/${proveedor.idPro}`, proveedor)
  },
  delete (idPro) {
    return Api().delete(`proveedor/${idPro}`)
  }
}
