import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ListStore } from './list.store';

describe('ListStore', () => {
  let store: ListStore;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ListStore]
    });
    store = TestBed.inject(ListStore);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(store).toBeTruthy();
  });

  it('should load items', (done) => {
    store.items$.subscribe(items => {
      if (items.length) {
        expect(items.length).toBeGreaterThan(0);
        done();
      }
    });
    store.loadItems();
    const req = httpMock.expectOne('/api/items');
    expect(req.request.method).toBe('GET');
    req.flush([
      { id: 1, name: 'Item One', description: 'Description for item one.' }
    ]);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
