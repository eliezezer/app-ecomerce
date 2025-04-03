import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { ProductListComponent } from './components/producto/product-list/product-list.component';

export const routes: Routes = [
    {
        path:'admin',component:LayoutComponent,children:[
            {path:'product-list',component:ProductListComponent}
        ]
    }
];
