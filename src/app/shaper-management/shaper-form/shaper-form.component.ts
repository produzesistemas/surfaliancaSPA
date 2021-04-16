import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Shaper } from 'src/app/_models/shaper-model';
import { ShaperService } from 'src/app/_services/shaper.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-shaper-form',
  templateUrl: './shaper-form.component.html'
})
export class ShaperFormComponent implements OnInit {
  formAdd: FormGroup;
  submitted = false;
  public shaper: Shaper = new Shaper();
  formFileUpload: FormGroup;
  fileToUpload: File = null;
  @ViewChild('fileUpload') fileUpload: ElementRef;

  uploaded = false;
  logo: any;
  public file: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private shaperService: ShaperService
  ) { }

  get f() { return this.formAdd.controls; }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id > 0) {
        this.shaper.id = Number(params.id);
        this.load();
      }
    });

    this.formAdd = this.formBuilder.group({
      id: [0],
      name: ['', [Validators.required]],
      details: ['', [Validators.required]],
    });

    this.load();

  }

  load() {
    if (this.shaper.id > 0) {
      this.shaperService.getById(this.shaper.id).subscribe(result => {
        this.shaper = result;
        this.formAdd.controls.id.setValue(this.shaper.id);
        this.formAdd.controls.name.setValue(this.shaper.name);
        this.formAdd.controls.details.setValue(this.shaper.details);
        this.logo = environment.urlImagesLojas + this.shaper.imageName;
      });
    }

  }

  onSave() {
    this.submitted = true;
    if (this.formAdd.invalid) {
      return;
    }
    const formData = new FormData();
    this.shaper = new Shaper(this.formAdd.value);
    if ((this.file === undefined) && (this.logo === undefined)){
      this.toastr.error('Selecione uma Foto!');
      return;
    }
    formData.append('shaper', JSON.stringify(this.shaper));
    formData.append('file', this.file);
    this.shaperService.save(formData).subscribe(result => {
      this.toastr.success('Registro efetuado com sucesso!');
      this.router.navigate(['shaper']);
  });
  }

  onCancel() {
    this.router.navigate([`/shaper`]);
  }

  onResetFileChange() {
    this.fileUpload.nativeElement.value = '';
}

  onFileChange(event) {
    const extension = event.target.files[0].name.split('.');
    if ((extension[1] !== 'jpg') && (extension[1] !== 'png')) {
      this.onResetFileChange();
      this.toastr.error('Só é permitido arquivos no formato JPG e PNG');
      return;
    }
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }

}

