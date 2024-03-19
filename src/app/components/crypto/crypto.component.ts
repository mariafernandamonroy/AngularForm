import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-crypto',
  standalone: true,
  imports: [],
  templateUrl: './crypto.component.html',
  styleUrl: './crypto.component.css',
})
export class CryptoComponent {
  archivo: File | null = null;
  checksum: string | null = null;

  calcularChecksum() {
    if (this.archivo) {
      const reader = new FileReader();
      reader.onload = () => {
        const contenido = reader.result as string;
        const hash = CryptoJS.SHA256(contenido).toString(CryptoJS.enc.Hex);
        this.checksum = hash;
      };
      reader.readAsBinaryString(this.archivo);
    }
  }

  manejarCambioArchivo(event: any) {
    this.archivo = event.target.files[0];
    console.log(this.calcularChecksum());
  }
}
