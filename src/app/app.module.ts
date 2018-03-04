import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
 
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
 
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptorProvider, ErrorInterceptorProvider } from './_helpers/index';
import { AlertService, PsycheService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { NavbarComponent } from './navbar/index';
import { FooterComponent } from './footer/index';

 
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
        LoginComponent,
        RegisterComponent,
        NavbarComponent,
        FooterComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        JwtInterceptorProvider,
        ErrorInterceptorProvider
    ],
    bootstrap: [AppComponent]
})
 
export class AppModule { }
