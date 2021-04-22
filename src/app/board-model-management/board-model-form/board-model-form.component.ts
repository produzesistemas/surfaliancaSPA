import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BoardModel } from 'src/app/_models/board-model-model';
import { BoardModelService } from 'src/app/_services/board-model.service';
import { ToastrService } from 'ngx-toastr';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { forkJoin } from 'rxjs';
import { FilterDefaultModel } from 'src/app/_models/filter-default-model';
import { ShaperService } from '../../_services/shaper.service';
import { TailService } from '../../_services/tail.service';
import { LaminationService } from '../../_services/lamination.service';
import { ConstructionService } from '../../_services/construction.service';
import { FinSystemService } from '../../_services/fin-system.service';
import { BoardTypeService } from '../../_services/board-type.service';
import { BottomService } from '../../_services/bottom.service';

@Component({
  selector: 'app-board-model-form',
  templateUrl: './board-model-form.component.html'
})
export class BoardModelFormComponent implements OnInit {
  formAdd: FormGroup;
  submitted = false;
  public boardModel: BoardModel = new BoardModel();
  selectedItems = [];
  tails = [];
  shapers = [];
  laminations = [];
  constructions = [];
  fins = [];
  boardsType = [];
  bottoms = [];
  dropdownSettings: IDropdownSettings = {};
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private shaperService: ShaperService,
    private tailService: TailService,
    private laminationService: LaminationService,
    private constructionService: ConstructionService,
    private finSystemService: FinSystemService,
    private boardTypeService: BoardTypeService,
    private bottomService: BottomService,
    private route: ActivatedRoute,
    private boardModelService: BoardModelService
  ) { }

  get q() { return this.formAdd.controls; }

  ngOnInit() {
    this.formAdd = this.formBuilder.group({
      id: [0],
      name: ['', [Validators.required]],
      tails: ['', [Validators.required]],
      shapers: ['', [Validators.required]],
      laminations: ['', [Validators.required]],
      constructions: ['', [Validators.required]],
      fins: ['', [Validators.required]],
      boardsType: ['', [Validators.required]],
      bottoms: ['', [Validators.required]],
      valor: ['', [Validators.required]],
    });

    this.route.params.subscribe(params => {
      if (params.id > 0) {
        this.boardModel.id = Number(params.id);
      } 
    });

    this.selectedItems = [
      // { item_id: 3, item_text: 'Pune' },
      // { item_id: 4, item_text: 'Navsari' }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Marque todos',
      unSelectAllText: 'Desmarque todos',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    const filter: FilterDefaultModel = new FilterDefaultModel();
    filter.name = '';
    forkJoin(
      this.tailService.getByFilter(filter),
      this.shaperService.getByFilter(filter),
      this.laminationService.getByFilter(filter),
      this.constructionService.getByFilter(filter),
      this.finSystemService.getByFilter(filter),
      this.boardTypeService.getByFilter(filter),
      this.bottomService.getByFilter(filter)
    )
      .subscribe(result => {
        this.tails = result[0];
        this.shapers = result[1];
        this.laminations = result[2];
        this.constructions = result[3];
        this.fins = result[4];
        this.boardsType = result[5];
        this.bottoms = result[6];
        if (this.boardModel.id > 0) {
          this.load();
        }
      });
  }

  load() {
      this.boardModelService.getById(this.boardModel.id).subscribe(boardmodel => {
        this.boardModel = boardmodel;
        this.setControls(this.boardModel);
      });
  }

  setControls(item: BoardModel) {
    this.formAdd.controls.id.setValue(item.id);
    this.formAdd.controls.name.setValue(item.name);
  }

  onSave() {
    this.submitted = true;
    if (this.formAdd.invalid) {
      return;
    }
    const model = new BoardModel(this.formAdd.value);
    this.boardModelService.save(model).subscribe(result => {
      this.toastr.success('Registro efetuado com sucesso!');
      this.router.navigate(['/board-model']);
    });
  }

  onCancel() {
    this.router.navigate(['/board-model']);
  }

  onItemSelectTails(item: any) {
    console.log(item);
  }
  onSelectAllTails(items: any) {
    console.log(items);
  }

  onItemSelectConstructions(item: any) {
    console.log(item);
  }
  onSelectAllConstructions(items: any) {
    console.log(items);
  }

  onItemSelectShapers(item: any) {
    console.log(item);
  }
  onSelectAllShapers(items: any) {
    console.log(items);
  }

  onItemSelectLaminations(item: any) {
    console.log(item);
  }
  onSelectAllLaminations(items: any) {
    console.log(items);
  }

  onItemSelectFins(item: any) {
    console.log(item);
  }
  onSelectAllFins(items: any) {
    console.log(items);
  }

  onItemSelectBoardTypes(item: any) {
    console.log(item);
  }
  onSelectAllBoardTypes(items: any) {
    console.log(items);
  }

}

