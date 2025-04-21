import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';

export const routes: Routes = [
    {path: '', component: AppComponent}, // Ruta por defecto
    {path: 'empleados', component: EmpleadosComponent}, // Ruta para el componente Empleados
    
];
