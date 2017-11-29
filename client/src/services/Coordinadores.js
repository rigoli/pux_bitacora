import Api from '@/services/Api'

export default {
  index () {
    return Api().get('coordinadores')
  },
  show (coordinador) {
    return Api().get(`coordinador/${coordinador}`)
  },
  post (coordinador) {
    return Api().post('coordinador', coordinador)
  },
  put (coordinador) {
    return Api().put(`coordinador/${coordinador.idCoo}`, coordinador)
  },
  delete (idCoo) {
    return Api().delete(`coordinador/${idCoo}`)
  }
}
