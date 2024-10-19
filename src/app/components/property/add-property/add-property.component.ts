import { Component } from '@angular/core';
import { AdditionalFeatures } from '../../../shared/data/data/property/property';
import { PropertyBasicDetailsComponent } from '../widgets/property-basic-details/property-basic-details.component';
import { PropertyAddressDetailsComponent } from '../widgets/property-address-details/property-address-details.component';
import { PropertyMediaComponent } from '../widgets/property-media/property-media.component';

@Component({
  selector: 'app-add-property',
  standalone: true,
  imports:[PropertyBasicDetailsComponent,PropertyAddressDetailsComponent,PropertyMediaComponent],
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})

export class AddPropertyComponent {

  public AdditionalFeatures = AdditionalFeatures;

}
