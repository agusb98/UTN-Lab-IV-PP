import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Angular Fire
import { AngularFireModule } from '@angular/fire'
import { AngularFireStorageModule } from '@angular/fire/storage'

//Environment
import { environment } from 'src/environments/environment';

//Components
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { PaisTableComponent } from './components/pais/pais-table/pais-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './components/users/user-login/user-login.component';
import { UserRegisterComponent } from './components/users/user-register/user-register.component';
import { WhoAmIComponent } from './components/who-am-i/who-am-i.component';
import { UserLogoutComponent } from './components/users/user-logout/user-logout.component';

//Notifications
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductoAltaComponent } from './components/producto/producto-alta/producto-alta.component';
import { ProductoListadoComponent } from './components/producto/producto-listado/producto-listado.component';
import { ProductoTablaComponent } from './components/producto/producto-tabla/producto-tabla.component';
import { ProductoDetalleComponent } from './components/producto/producto-detalle/producto-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    ProductoListadoComponent,
    ProductoTablaComponent,
    ProductoDetalleComponent,
    NavbarComponent,
    PaisTableComponent,
    UserLoginComponent,
    UserRegisterComponent,
    WhoAmIComponent,
    UserLogoutComponent,
    ProductoAltaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
      preventDuplicates: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
