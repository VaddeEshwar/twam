import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClientAddingComponent } from './client-adding.component';
import { ClientAddingModule } from './client-adding.module';

describe('ClientAddingComponent', () => {
  let component: ClientAddingComponent;
  let fixture: ComponentFixture<ClientAddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ClientAddingModule,
        RouterTestingModule,
        BrowserAnimationsModule,
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
