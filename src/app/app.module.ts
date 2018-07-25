import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavComponent } from './nav/nav.component';
import { MyswiperComponent } from './myswiper/myswiper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    NavComponent,
    MyswiperComponent
  ],
  imports: [
    BrowserModule,
    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule
  ],
  /** 配置 ng-zorro-antd 国际化 **/
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
