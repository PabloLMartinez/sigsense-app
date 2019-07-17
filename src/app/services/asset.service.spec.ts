import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AssetService } from './asset.service';

describe('Asset Service:', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssetService],
      imports: [HttpClientTestingModule]
    });

    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };

    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
  });

  describe(':', () => {

    function setup() {
      const assetService = TestBed.get(AssetService);
      const httpTestingController = TestBed.get(HttpTestingController);
      return { assetService, httpTestingController };
    }

    // it('should call getAllAssets function', () => {
    //   const { assetService, httpTestingController } = setup();
    //   const mockData = {
    //     items: [
    //       'item'
    //     ],
    //     limit: 0,
    //     links: {
    //       base: 'baseUrl',
    //       href: 'hrefUrl',
    //       next: 'nextUrl',
    //       previous: 'previousUrl'
    //     },
    //     size: 0,
    //     start: 0
    //   };
    //   assetService.getAllAssets(77).subscribe(data => {
    //     expect(data.mapData).toEqual(mockData);
    //   });
    //
    //   const req = httpTestingController.expectOne('/companies/77/assets');
    //
    //   expect(req.request.method).toBe('GET');
    //
    //   req.flush({
    //     mapData: mockData
    //   });
    // });

    afterEach(() => {
      const { httpTestingController } = setup();
      httpTestingController.verify();
    });
  });
});
