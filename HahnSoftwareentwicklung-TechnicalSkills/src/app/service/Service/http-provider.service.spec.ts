import { TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr/toastr/toastr.module';

import { HttpProviderService } from './http-provider.service';

describe('HttpProviderService', () => {
  let service: HttpProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ToastrModule.forRoot() // added this works for me
      ],
    });
    service = TestBed.inject(HttpProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
