import { Component } from '@angular/core';

@Component({
  selector: 'app-easy-writer-service',
  templateUrl: './easy-writer-service.component.html',
  styleUrls: ['./easy-writer-service.component.css']
})
export class EasyWriterServiceComponent {
  show: string = '1';
  show1: string = '1';
  show2: string = '2';
  show3: string = '3';
  show4: string = '4';
  show5: string = '5';
  show6: string = '6';

  showData1() {
    this.show = this.show1;
  }

  showData2() {
    this.show = this.show2;
  }

  showData3() {
    this.show = this.show3;
  }

  showData4() {
    this.show = this.show4;
  }

  showData5() {
    this.show = this.show5;
  }

  showData6() {
    this.show = this.show6;
  }
}
