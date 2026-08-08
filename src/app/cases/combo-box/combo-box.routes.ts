import { Routes } from "@angular/router";
import { UsageComponent } from "../combo-box/usage/usage.component";
import { NonEditableComponent } from "./non-editable/non-editable.component";
import { UsingDecoratorsComponent } from "./using-decorators/using-decorators.component";


export const routes:Routes=[
    {
        path:'',
        pathMatch:'full',
        redirectTo:'usage'
    },
    {
        path:'usage',
        component:UsageComponent
    },
    {
        path:'non-editable',
        component:NonEditableComponent
    },
    {
        path:'using-decorators',
        component:UsingDecoratorsComponent
    }
]