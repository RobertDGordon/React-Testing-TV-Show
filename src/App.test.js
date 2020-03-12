import React from 'react';
import { render, fireEvent, waitForElement, wait } from '@testing-library/react'
import App from './App';
import { fetchShow as mockFetchShow }from './api/fetchShow'

jest.mock('./api/fetchShow');

const shows = {
    data: ['1', '2', '3']
}

test('app component fetches show and renders it', async () => {
    // console.log('missiins', missions)
    mockFetchShow.mockResolvedValueOnce(shows);
  
    const { getByText, queryAllByTestId } = render(<App/>);
  
    const button = getByText(/select a season/i);
  
    fireEvent.click(button);
  
    getByText(/season 1/i);
    await wait();
    expect(queryAllByTestId("show")).toHaveLength(0);
  });