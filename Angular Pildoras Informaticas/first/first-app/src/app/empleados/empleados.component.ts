import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-empleados',
    templateUrl: './empleados.component.html',
    imports: [CommonModule, RouterOutlet],
    styleUrls: ['./empleados.component.css']
})


export class EmpleadosComponent {
  empleados: any[] = [
    { nombre: 'Juan', apellido: 'Pérez', edad: 30 },
    { nombre: 'Ana', apellido: 'García', edad: 25 },
    { nombre: 'Luis', apellido: 'Martínez', edad: 35 }
  ];

  agregarEmpleado() {
    this.empleados.push({ nombre: 'Nuevo', apellido: 'Empleado', edad: 20 });
  }

  eliminarEmpleado(index: number) {
    this.empleados.splice(index, 1);
  }
}