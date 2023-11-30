import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import useFetchDatas from '../api/useFetchData';

describe('useFetchDatas', () => {
  it('fetches data from the API', async () => {
   
    const mockData = { };
    const mockUrl = 'https://fe-task-api.mainstack.io/user';
    const mockAxios = new MockAdapter(axios);
    mockAxios.onGet(mockUrl).reply(200, mockData);


    const { result, waitForNextUpdate } = renderHook(() => useFetchDatas(mockUrl));


    expect(result.current.fetching).toBe(true);
    expect(result.current.data).toBeNull();

    await waitForNextUpdate();

  
    expect(result.current.fetching).toBe(false);
    expect(result.current.data).toEqual(mockData);
  });
});
