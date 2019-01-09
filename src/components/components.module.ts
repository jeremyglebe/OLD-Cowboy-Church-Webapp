import { NgModule } from '@angular/core';
import { GalleryImageComponent } from './gallery-image/gallery-image';
import { FileUploadComponent } from './file-upload/file-upload';
import { RecordingComponent } from './recording/recording';
@NgModule({
	declarations: [GalleryImageComponent,
    FileUploadComponent,
    RecordingComponent],
	imports: [],
	exports: [GalleryImageComponent,
    FileUploadComponent,
    RecordingComponent]
})
export class ComponentsModule {}
