import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreUiModule } from 'app/core-ui/core-ui.module';

import { OverviewListingsComponent } from './overview-listings.component';

describe('OverviewListingsComponent', () => {
  let component: OverviewListingsComponent;
  let fixture: ComponentFixture<OverviewListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OverviewListingsComponent
      ],
      imports: [
        BrowserAnimationsModule,
        CoreUiModule.forRoot()
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});