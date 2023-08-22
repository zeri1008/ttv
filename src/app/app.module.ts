import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { RightBarComponent } from './right-bar/right-bar.component';
import { TtvSidebarComponent } from './ttv-sidebar/ttv-sidebar.component';
import { TtvScriptComponent } from './ttv-script/ttv-script.component';
import { KeywordVideoComponent } from './keyword-video/keyword-video.component';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // SidebarComponent,
    // RightBarComponent,
    // TtvSidebarComponent,
    // TtvScriptComponent,
    // KeywordVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

