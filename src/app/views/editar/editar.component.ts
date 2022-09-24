import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'
import { DatosI } from 'src/app/modelos/datos.interface';
import { DatosInt } from 'src/app/modelos/datoInte.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private activerouter: ActivatedRoute, private router: Router, private api:ApiService) { }

  infoDatos:DatosInt;

  editarForm = new FormGroup({
    userId: new FormControl(''),
    id : new FormControl(''),
    title : new FormControl(''),
    body : new FormControl(''),
    

  });

  ngOnInit(): void {

    let datoId = this.activerouter.snapshot.paramMap.get('id')  ;
    let token = this.getToken() ;
    this.api.getDatosEdit(datoId).subscribe(data =>{
      this.infoDatos = data [0];
      this.editarForm.setValue({

        'userId': this.infoDatos.UserId,
        'id': this.infoDatos.Id,
        'title' : this.infoDatos.Title,
        'body' : this.infoDatos.Body,
      });  
    }) 
  }

  getToken(){

    return localStorage.getItem('token');

  }

  postForm(form:DatosInt){

    this.api.putDatos(form).subscribe( data => {
      console.log(data)


    })
 
  }
}
