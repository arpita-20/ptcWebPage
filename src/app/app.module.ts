import { NodeserviceService } from './nodeservice.service';
import { ThirdtopComponent } from './thirdtop/thirdtop.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { PrimeIcons} from 'primeng/api';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TopComponent } from './top/top.component';
import { SecondtopComponent } from './secondtop/secondtop.component';
import { ButtonModule } from 'primeng/button';
import { CardModule, } from 'primeng/card';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DividerModule} from "primeng/divider";
import { SplitterModule } from "primeng/splitter";
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import {MatDividerModule} from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import { ThirdtopoptionalComponent } from './thirdtopoptional/thirdtopoptional.component';
import { FieldsetModule, } from 'primeng/fieldset';
import {TreeModule} from 'primeng/tree';
import {MatTableModule} from '@angular/material/table';
// import {RouterModule} from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TopComponent,
    SecondtopComponent,
    ThirdtopComponent,
    ThirdtopoptionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // PrimeIcons,
    FormsModule,
    CardModule,
    ButtonModule,
    DividerModule,
    SplitterModule,
    ScrollPanelModule,
    PanelModule,
    ToastModule,
    MenuModule,
    RippleModule,
    MatDividerModule,
    BrowserAnimationsModule,
    AccordionModule,
    FieldsetModule,
    TreeModule,
    MatTableModule,
    // HttpClient,
    // HttpClientModule,
    // RouterModule
    
  ],
  providers: [NodeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
