import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class App {
  public input: ICalculator;
  public dataFromChield: string;
  public operation: string = '';
  constructor(private event: EventAggregator) {};

  // attached() {

  //   this.event.subscribe('result', (data) => {
  //     this.dataFromChield = data;
  //   });
  // }

  // onSendParams() {
  //   this.event.publish('calculate', this.input);
  // }
}
