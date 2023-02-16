import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plushie',
  templateUrl: './plushie.component.html',
  styleUrls: ['./plushie.component.scss']
})
export class PlushieComponent {

  @Input() name = '';
  @Input() price = 0;

}
