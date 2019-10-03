import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {bindable} from 'aurelia-framework';
import {Op} from 'op';

@inject(EventAggregator)
export class Result {
    // public message:ICalculator;
    // public result: number;
    // public render: string;
    // constructor(private event: EventAggregator) {}

    // public attached() {
    //     this.event.subscribe('calculate', (calc) => {
    //         this.onGetInput(calc);
    //     })
    //     this.render = "Rendering";
    // }

    // private onGetInput(input) {
    //     this.message = input;
    //     this.result = +input.num1 + +input.num2
    //     this.event.publish('result', this.result);
    // }

    @bindable public num1: string;
    @bindable public num2: string;
    @bindable public operation: string;
    @bindable public items: any[];
    public result: number;
    public note: string;

    num1Changed(newValue: string) {
        this.calcRes();
    };

    num2Changed(newValue: string) {
        this.calcRes();
    };

    itemsChanged(newValue: any[]) {}

    operationChanged(newValue: string) {
        this.calcRes();
    }

    private calcRes() {
        if (!this.num1 || !this.num2) {
            this.result = null;
            return;
        }

        if (this.num2 === "0" && this.operation === Op.divide) {
            this.note = "You cant divide by zero";
            this.result = null;
            return;
        }

        switch (this.operation) {
            case Op.add:
                this.result = +this.num1 + +this.num2;
                break;

            case Op.subtract:
            this.result = +this.num1 - +this.num2;
            break;

            case Op.multiple:
            this.result = +this.num1 * +this.num2;
            break;

            case Op.divide:
            this.result = +this.num1 / +this.num2;
            break;

            default:
                this.note = "Invalid operation";
                break;
        }

        this.note = "";
    }
}