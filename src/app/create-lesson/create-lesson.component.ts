import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as Cookies from 'cookies-js';

@Component({
  selector: 'app-create-lesson',
  templateUrl: './create-lesson.component.html',
  styleUrls: ['./create-lesson.component.scss']
})
export class CreateLessonComponent implements OnInit {

    private static readonly DEAFT_COOKIE = '';

    form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            description: ['', Validators.required],
            url: ['', Validators.required],
            longDescription: ['']
        });
    }

    ngOnInit() {

        const draft = Cookies.get(CreateLessonComponent.DEAFT_COOKIE);

        if (draft) {
            this.form.setValue(JSON.parse(draft));
        }

        this.form.valueChanges
        .filter(() => this.form.invalid)
        .do(validValue => Cookies.set(
            CreateLessonComponent.DEAFT_COOKIE, JSON.stringify(validValue)
        ))
        .subscribe(console.log);
    }

}
