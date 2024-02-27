import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EhomeComponent } from './ehome/ehome.component';
import { IhomeComponent } from './ihome/ihome.component';
import { PhomeComponent } from './phome/phome.component';
import { MpostsComponent } from './mposts/mposts.component';
import { FadvisorComponent } from './fadvisor/fadvisor.component';
import { RinquiryComponent } from './rinquiry/rinquiry.component';
import { ApplyipComponent } from './applyip/applyip.component';
import { FentrepreneurComponent } from './fentrepreneur/fentrepreneur.component';
import { Fentrepreneur2Component } from './fentrepreneur2/fentrepreneur2.component';
import { SetupgoalsComponent } from './setupgoals/setupgoals.component';
import { MpostsiComponent } from './mpostsi/mpostsi.component';
import { MpostspComponent } from './mpostsp/mpostsp.component';
import { TradeComponent } from './trade/trade.component';
import { MtradeComponent } from './mtrade/mtrade.component';
import { VtradeComponent } from './vtrade/vtrade.component';
import { BprofileComponent } from './bprofile/bprofile.component';
import { VbprofileComponent } from './vbprofile/vbprofile.component';
import { UprofileComponent } from './uprofile/uprofile.component';
import { VuprofileComponent } from './vuprofile/vuprofile.component';
import { BookrawComponent } from './bookraw/bookraw.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'signup', component:SignupComponent},
    {path:'ehome', component:EhomeComponent},
    {path:'ihome', component:IhomeComponent},
    {path:'phome', component:PhomeComponent},
    {path:'mpost', component:MpostsComponent},
    {path:'fadvisor', component:FadvisorComponent},
    {path:'rinquiry', component:RinquiryComponent},
    {path:'aip', component:ApplyipComponent},
    {path:'ae', component:FentrepreneurComponent},
    {path:'ae2', component:Fentrepreneur2Component},
    {path:'setg', component:SetupgoalsComponent},
    {path:'mposti', component:MpostsiComponent},
    {path:'mpostp', component:MpostspComponent},
    {path:'trade', component:TradeComponent},
    {path:'mtrade', component:MtradeComponent},
    {path:'vtrade', component:VtradeComponent},
    {path:'bpro', component:BprofileComponent},
    {path:'vbpro', component:VbprofileComponent},
    {path:'upro', component:UprofileComponent},
    {path:'vupro', component:VuprofileComponent},
    {path:'braw', component:BookrawComponent},

];
