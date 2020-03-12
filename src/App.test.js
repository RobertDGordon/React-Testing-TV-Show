import React from 'react';
import { render, fireEvent, waitForElement, wait } from '@testing-library/react'
import App from './App';
import { fetchMissions as mockFetchMissions }from './api/fetchMissions'