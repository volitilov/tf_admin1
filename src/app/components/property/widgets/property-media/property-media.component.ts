import { Component } from '@angular/core';
import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-property-media',
  standalone: true,
  imports: [DropzoneModule],
  templateUrl: './property-media.component.html',
  styleUrls: ['./property-media.component.scss']
})
export class PropertyMediaComponent {

  public text = '<i class="fas fa-cloud-upload-alt"></i><h6 class="f-w-700 mb-0">Drop files here or click to upload.</h6>';
  public imageConfig: DropzoneConfigInterface = {
    clickable: true,
    url: 'https://httpbin.org/post',
    acceptedFiles: 'image/*',
    addRemoveLinks: true,
    parallelUploads: 1,
  };

  onUploadError(args: any): void {
    console.log("onUploadError:", args);
  }

  onUploadSuccess(args: any): void {
    console.log("onUploadSuccess:", args);
  }
}
