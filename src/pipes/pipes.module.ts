import { NgModule } from '@angular/core';
import { FireDatePipe } from './fire-date/fire-date';
import { FileSizePipe } from './file-size/file-size';
import { SafePipe } from './safe/safe';
@NgModule({
	declarations: [FireDatePipe,
    FileSizePipe,
    SafePipe],
	imports: [],
	exports: [FireDatePipe,
    FileSizePipe,
    SafePipe]
})
export class PipesModule {}
