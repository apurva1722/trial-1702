import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';

import { Products } from './components/products/products';
import { Addproduct } from './components/addproduct/addproduct';
import { Deleteproduct } from './components/deleteproduct/deleteproduct';
import { Updateproduct } from './components/updateproduct/updateproduct';

export const routes: Routes = [


    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"home",component:Home},
    {path:"about",component:About},
    {path:"product",component:Products},
     {path:"addproduct",component:Addproduct},
      {path:"deleteproduct",component:Deleteproduct},
      {path:"update",component:Updateproduct}

];
