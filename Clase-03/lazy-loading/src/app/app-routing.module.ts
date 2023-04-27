import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'clientes',
    loadChildren: () =>
      import('./clientes/clientes.module').then((m) => m.ClientesModule),
  },
  {
    path: 'input-output',
    loadChildren: () =>
      import('./input-output/input-output.module').then(
        (m) => m.InputOutputModule
      ),
  },
  { path: 'directivas', loadChildren: () => import('./directivas/directivas.module').then(m => m.DirectivasModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
