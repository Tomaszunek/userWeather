import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
 
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
 
import { AlertComponent } from './_directives/index';
import { JwtInterceptorProvider, ErrorInterceptorProvider } from './_helpers/index';
import { AlertService, UserService, WeatherService, LocationService } from './_services/index';
import { HomeComponent } from './home/index';
import { RegisterComponent } from './register/index';
import { EditUserComponent } from './editUser/index';
import { NavbarComponent } from './navbar/index';

 
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        RegisterComponent,
        EditUserComponent,
        NavbarComponent
    ],
    providers: [
        UserService,
        AlertService,
        WeatherService,
        LocationService,
        JwtInterceptorProvider,
        ErrorInterceptorProvider
    ],
    bootstrap: [AppComponent]
})
 
export class AppModule { }
