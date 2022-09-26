import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Registration } from './models';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css'],
})
export class RegformComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  form!: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
    });
  }
  @Output()
  onSubmitForm = new Subject<Registration>();

  submitForm() {
    let reg = this.form.value as Registration;
    this.onSubmitForm.next(reg);
    console.info('>>> ', reg);
  }
}
