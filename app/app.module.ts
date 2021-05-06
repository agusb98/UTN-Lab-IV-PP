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
import { PeliculaAltaComponent } from './components/peliculas/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './components/peliculas/pelicula-listado/pelicula-listado.component';
import { ActorAltaComponent } from './components/actor/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actor/actor-listado/actor-listado.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PeliculaTablaComponent } from './components/peliculas/pelicula-tabla/pelicula-tabla.component';
import { PeliculaDetalleComponent } from './components/peliculas/pelicula-detalle/pelicula-detalle.component';
import { HttpClientModule } from '@angular/common/http';
import { PaisTableComponent } from './components/pais/pais-table/pais-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActorTablaComponent } from './components/actor/actor-tabla/actor-tabla.component';
import { UserLoginComponent } from './components/users/user-login/user-login.component';
import { UserRegisterComponent } from './components/users/user-register/user-register.component';
import { WhoAmIComponent } from './components/who-am-i/who-am-i.component';
import { UserLogoutComponent } from './components/users/user-logout/user-logout.component';

//Notifications
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    PeliculaDetalleComponent,
    PeliculaListadoComponent,
    PeliculaTablaComponent,
    ActorListadoComponent,
    ActorAltaComponent,
    ActorTablaComponent,
    NavbarComponent,
    PaisTableComponent,
    UserLoginComponent,
    UserRegisterComponent,
    WhoAmIComponent,
    UserLogoutComponent
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
