import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HeroComponent } from "../hero-component/hero.component";
import { VillianComponent } from "../villian-component/villian.component";
import { AppComponent } from "../app.component";


export const appRoutes: Routes = [
    { path: '', component: HeroComponent },
    { path: 'heroes', component: HeroComponent },
    { path: 'villians', component: VillianComponent },
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}