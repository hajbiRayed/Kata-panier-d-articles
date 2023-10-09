import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./coreModule/not-found/not-found.component";


const routes: Routes = [

  {path: 'cart', loadChildren: () => import('./pannierModule/cart.module').then(m => m.CartModule)},
  {path: '', loadChildren: () => import('./productModule/product.module').then(m => m.ProductModule)},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
