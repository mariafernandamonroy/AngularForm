import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CryptoComponent } from '../crypto/crypto.component';
import * as CryptoJS from 'crypto-js';
import { EdaService } from '../../services/eda.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {


  constructor(private edaService:EdaService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  [x: string]: any;
  showToast() {
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      text: '¡La información se ha cargado con éxito!',
      icon: 'success',
    });
  }
  archivo: File | null = null;
  checksum: string | null = null;

  codificarArchivo(event: any) {
    this.archivo = event.target.files[0];

    if (this.archivo) {
      const reader = new FileReader();

      reader.onload = () => {
        const contenido = reader.result as string;
        const hash = CryptoJS.SHA256(contenido).toString(CryptoJS.enc.Hex);
        this.checksum = hash;
        console.log(this.checksum);
        this.edaService.addFile(this.checksum).subscribe(data => console.log(data))
      };
      reader.readAsBinaryString(this.archivo);
    }
  }
}
