import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZoomImageViewerComponent } from './zoom-image-viewer.component';

const routes: Routes = [
    {
        path: '', component: ZoomImageViewerComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ZoomImageViewerRoutingModule {
}
