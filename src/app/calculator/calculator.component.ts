import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html'
})
export class CalculatorComponent implements OnInit {
  optionControl = new FormControl('0');
  Input1:any;
  Input2:any;
  showValue:any;
    constructor(private _formBuilder: FormBuilder, private calc:CalculatorService) { 
   
  }

  ngOnInit(): void {
    
  }

  Calculate()
  {
   var body = {
      a:this.Input1,
      b:this.Input2
    }
    this.calc.calculate(this.optionControl.value, body).subscribe(
      {
        next:(data)=>
        {
          this.showValue = data;
            console.log(data)
        }, 
        error:(error)=>
        {

        }
      }
    )

  }

}
