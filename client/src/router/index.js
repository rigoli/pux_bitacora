import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import DashBoard from '@/components/DashBoard'

import RegistrarUsuario from '@/components/users/Registrar'
import Login from '@/components/users/Login'
import Usuarios from '@/components/users/Index'

import Gerencias from '@/components/gerencias/Index'
import RegistrarGerencia from '@/components/gerencias/Registrar'
import EditarGerencia from '@/components/gerencias/Editar'
import DetallesGerencia from '@/components/gerencias/Detalles'

import Coordinadores from '@/components/coordinadores/Index'
import RegistrarCoordinador from '@/components/coordinadores/Registrar'
import EditarCoordinador from '@/components/coordinadores/Editar'
import DetallesCoordinador from '@/components/coordinadores/Detalles'

import Proveedores from '@/components/proveedores/Index'
import RegistrarProveedor from '@/components/proveedores/Registrar'
import EditarProveedor from '@/components/proveedores/Editar'
import DetallesProveedor from '@/components/proveedores/Detalles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: Usuarios
    },
    {
      path: '/usuarios/registrar',
      name: 'RegistrarUsuario',
      component: RegistrarUsuario
    },
    {
      path: '/gerencias',
      name: 'gerencias',
      component: Gerencias
    },
    {
      path: '/gerencia/registrar',
      name: 'RegistrarGerencia',
      component: RegistrarGerencia
    },
    {
      path: '/gerencia/:idGer/editar',
      name: 'editarGerencia',
      component: EditarGerencia
    },
    {
      path: '/gerencia/:idGer',
      name: 'detallesGerencia',
      component: DetallesGerencia
    },
    {
      path: '/coordinadores',
      name: 'coordinadores',
      component: Coordinadores
    },
    {
      path: '/coordinador/registrar',
      name: 'RegistrarCoordinador',
      component: RegistrarCoordinador
    },
    {
      path: '/coordinador/:idCoo/editar',
      name: 'editarCoordinador',
      component: EditarCoordinador
    },
    {
      path: '/coordinador/:idCoo',
      name: 'detallesCoordinador',
      component: DetallesCoordinador
    },
    {
      path: '/proveedores',
      name: 'proveedores',
      component: Proveedores
    },
    {
      path: '/proveedor/registrar',
      name: 'RegistrarProveedor',
      component: RegistrarProveedor
    },
    {
      path: '/proveedor/:idPro/editar',
      name: 'editarProveedor',
      component: EditarProveedor
    },
    {
      path: '/proveedor/:idPro',
      name: 'detallesProveedor',
      component: DetallesProveedor
    }
  ]
})
