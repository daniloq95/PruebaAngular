import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
import { DatosI } from 'src/app/modelos/datos.interface';
import { DatosInt } from 'src/app/modelos/datoInte.interface';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  datosAp : DatosI[];
  constructor(private api: ApiService, private router: Router ) { }

  ngOnInit() {

    this.api.getDatos(1).subscribe(data =>{
      console.log(data)
      this.datosAp = data;

    })
  }

  editarDato(id){

    this.router.navigate(['editar', id]);

  }
  eliminarDato(form){

  // let datos : DatosI = this.datosAp.values;
  // this.api.deleteDatos(datos).subscribe(data => {
   // console.log(data);

 //  })

 this.router.navigate(['dashboard']);

  }
  nuevoDato(id){

    this.router.navigate(['add']);

  }
}
