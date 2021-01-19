import { ApiService } from './api.service';
import { of } from 'rxjs';

describe('DataService', () => {
  let apiService: ApiService;
  const httpClient = { 
    get: jest.fn((url = "", options = {}) => of()),
    post: jest.fn((url = "", body = {}, options = {}) => of()),
    put: jest.fn((url = "", body = {}, options = {}) => of()),
    delete: jest.fn((url = "", options = {}) => of()),
  };
  const provide = (mock: any): any => mock;

  beforeEach(() => {
    apiService = new ApiService(provide(httpClient));
  });
 
  it('should be created', () => {
    expect(apiService).toBeTruthy();
  });

  it('get: should return response', () => {
    apiService.get("", {}).subscribe(res => {
      expect(httpClient.get).toBeCalledWith("");
      expect(res).toBeTruthy();
    });
  });

  it('post: should return response', () => {
    apiService.post("", {}).subscribe(res => {
      expect(httpClient.post).toBeCalledWith("");
      expect(res).toBeTruthy();
    });
  });

  it('put: should return response', () => {
    apiService.put("", {}).subscribe(res => {
      expect(httpClient.put).toBeCalledWith("");
      expect(res).toBeTruthy();
    });
  });

  it('delete: should return response', () => {
    apiService.delete("", {}).subscribe(res => {
      expect(httpClient.delete).toBeCalledWith("");
      expect(res).toBeTruthy();
    });
  });
});