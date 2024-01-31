import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Variety } from 'src/app/models/variety';
import { VarietyService } from 'src/app/service/variety.service';

@Component({
  selector: 'app-variety',
  templateUrl: './variety.component.html',
  styleUrls: ['./variety.component.css']
})
export class VarietyComponent  implements OnInit{


  varietys: Variety[]=[];
  varietyForm!: FormGroup;  
  editForm =false ;
  constructor(private fb:FormBuilder,private varietyService: VarietyService) { }
  visible: boolean = false;
  isEditing : boolean = false
  
  toggleModal() {
    this.visible = !this.visible;
  }
  
  closeModal() {
    this.visible = false;
    this.isEditing = false;
    this.varietyForm.reset();
  }
  

  ngOnInit(): void {
    this.getVarietys();
    this.varietyForm = this.fb.group({
      // idVariety: ['', [Validators.required]],
      varietyName: ['', [Validators.required]],
      varietyValue: ['', [Validators.required]],
      quantity: ['', [Validators.required]],

      });
  }

  getVarietys(){
     this.varietyService.get().subscribe( {
      next: data => {
          this.varietys = data;
          console.log(data);
      },
      error: err => console.log(err)}
    );
  }
  editVariety(variety: Variety) {
    this.selectedVarietyId=variety.idVariety
    this.isEditing = true;
    this.varietyForm.patchValue({
      varietyName: variety.varietyName,
      varietyValue : variety.varietyValue,
      quantity:variety.quantity
    });
    this.toggleModal();
  }


  // addVariety(){
  //   let Variety:Variety = this.varietyForm.value;
  //   this.varietyService.create(Variety).subscribe({
  //     next:data=>{
  //       alert(JSON.stringify(data));
  //     }, error:error=>{
  //       console.log(error);
  //     }
  //   })
  // }

  addVariety() {
    console.log('Form is valid:', this.varietyForm.valid);
    if (this.varietyForm.valid) {
      const newVariety: Variety = {
        idVariety: 0, // Set a temporary value or handle it on the server
        varietyName: this.varietyForm.value.varietyName,
        varietyValue: this.varietyForm.value.varietyValue,
        quantity : this.varietyForm.value.quantity
      };

      this.varietyService.create(newVariety).subscribe(
        (addedVariety) => {
          this.varietys.push(addedVariety);
          // Reset the form after adding the category
          this.varietyForm.reset();
          this.closeModal();
          console.log(addedVariety)
        },
        (error) => {
          console.error('Error adding variety:', error);
        }
      );
    }
  }

  deleteVariety(id: number) {
    if (id !== undefined) {
      this.varietyService.delete(id).subscribe(() => {
        this.varietys = this.varietys.filter(variety => variety.idVariety !== id);
      });
    }}


selectedVarietyId: number | null = null; 

updateVariety() {
  console.log("string", this.selectedVarietyId, this.varietyForm.value, this.varietys)
  if (this.selectedVarietyId) {
    this.varietyService.update(this.selectedVarietyId, this.varietyForm.value).subscribe(
      (res) => {
        console.log('API Response:', res);
        const idx = this.varietys.findIndex((variety)=>{
          return variety.idVariety== res.idVariety
        })  
        this.varietys[idx]=res
        this.varietyForm.reset();
        this.closeModal(); 
      },
      (error) => {
        console.error('Error updating category:', error);
      }
    );
  }
}

}
