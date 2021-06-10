import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
  documentForm: FormGroup;
  constructor() {
    this.documentForm = new FormGroup({
      header: new FormControl('', Validators.required),
      points: new FormControl('', Validators.required),
      img: new FormControl('')
    });
  }
  url:any
  selctedImg(event) {
    //  let selectedImg = event.target.value;
    if (event.target.files) {
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = event => {
         this.url = event.target.result
      }
    }
    return false;
  }
  filenames: any;
  onSubmit() {
    console.log(this.filenames)
    console.log(this.documentForm.value)
    let obj =[]
    obj.push(this.documentForm.value) 
    obj.forEach((item,index) => {

    this.downloads(item.header, this.filenames+'.' +'docx');
    })
  }
  downloads(text, filename) {
    var blob = new Blob([text], {
      type:
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    });
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
  }
 
}
