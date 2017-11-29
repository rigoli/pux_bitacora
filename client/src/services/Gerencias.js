import Api from '@/services/Api'

export default {
  index () {
    return Api().get('gerencias')
  },
  show (gerencia) {
    return Api().get(`gerencia/${gerencia}`)
  },
  post (gerencia) {
    return Api().post('gerencia', gerencia)
  },
  put (gerencia) {
    return Api().put(`gerencia/${gerencia.idGer}`, gerencia)
  },
  delete (idGer) {
    return Api().delete(`gerencia/${idGer}`)
  }
}
