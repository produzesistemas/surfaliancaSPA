import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FinSystem } from 'src/app/_models/fin-system-model';
import { FinSystemService } from 'src/app/_services/fin-system.service';
import { ToastrService } from 'ngx-toastr';
import { FinSystemColor } from 'src/app/_models/fin-system-color-model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-fin-system-form',
  templateUrl: './fin-system-form.component.html'
})
export class FinSystemFormComponent implements OnInit {
  formAdd: FormGroup;
  submitted = false;
  public finSystem: FinSystem = new FinSystem();
  hasSelected: any;
  colors: any;
  @ViewChild('selectAll') private selectAll: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private finSystemService: FinSystemService
  ) { }

  get q() { return this.formAdd.controls; }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.finSystem.id = Number(params.id);
    });

    this.formAdd = this.formBuilder.group({
      id: [0],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      details: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(500)]],
    });

    this.load();

  }

  load() {

    if (this.finSystem.id > 0) {
      this.finSystemService.getById(this.finSystem.id).subscribe(result => {
        this.finSystem = result;
        this.formAdd.controls.id.setValue(this.finSystem.id);
        this.formAdd.controls.name.setValue(this.finSystem.name);
        this.formAdd.controls.details.setValue(this.finSystem.details);
        this.finSystem.finSystemColors.forEach(finSystemColor => {
          const find = this.colors.find(x => x.id === finSystemColor.finColorId);
          if (find) {
            find.isSelected = true;
          }
        });
      });
    }


    this.finSystemService.getColors().subscribe(colors => {
      this.colors = colors;
    });
  }

  onSave() {
    this.submitted = true;
    if (this.formAdd.invalid) {
      return;
    }

    if (this.colors.find(x => x.isSelected) === null) {
      return this.toastr.error('Selecione a cor disponível para o sistema!');
    }

    const finSystem = new FinSystem(this.formAdd.value);
    // finSystem.finSystemColors = this.finSystem.finSystemColors;
    // finSystem.finSystemColors = [];
    this.colors.forEach(color => {
      if (color.isSelected) {
        const item = new FinSystemColor();
        item.finColorId = color.id;
        item.finSystemId = finSystem.id;
        finSystem.finSystemColors.push(item);
      }

    });
    this.finSystemService.save(finSystem).subscribe(result => {
      this.toastr.success('Registro efetuado com sucesso!');
      this.router.navigate(['/fin-system']);
    });
  }

  onCancel() {
    this.router.navigate([`/fin-system`]);
  }

  toggleAll() {
    const allEqual: boolean = this.selectAll.nativeElement.checked;
    this.colors.forEach(row => {
      row.isSelected = allEqual;
    });
    this.hasSelected = allEqual;
  }

  toggle(rowData: FinSystemColor) {
    let allEqual = true;
    this.hasSelected = false;
    this.colors.forEach(row => {
      if (row.isSelected) {
        this.hasSelected = true;
      }
      if (rowData.isSelected !== row.isSelected) {
        allEqual = false;
        return false;
      }
    });
    if (allEqual) {
      allEqual = rowData.isSelected;
    }
    this.selectAll.nativeElement.checked = allEqual;
  }

}

