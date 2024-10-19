import { Routes } from "@angular/router";

export const fullContent : Routes = [
  {
    path: 'authentication',
    loadChildren: () => import('../../components/authentication/authentication.routes')
  }
]
