import { NgModule } from "@angular/core";
import { AppModule } from '../app.module';
import { CommonModule } from "@angular/common";
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations:[
        ContadorComponent
    ],
    exports:[
        ContadorComponent
    ],
    imports:[
        CommonModule
    ]
})
export class ContadorModule{


} 