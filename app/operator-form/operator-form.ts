import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-operator-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './operator-form.html',
  styleUrl: './operator-form.css',
})
export class OperatorForm {
  operator = {
    operatorId: '',
    operatorName: '',
    department: '',
    skill: '',
    active: true
  };
  operatorList: any[] = [];

  onSubmit(form: any) {
    this.operatorList.push({ ...this.operator });
    
  }
}

