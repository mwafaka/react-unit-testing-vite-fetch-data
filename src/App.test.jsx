import React from 'react';
import { render, waitFor, screen ,cleanup} from '@testing-library/react';
import App from './App.jsx';
import { expect,afterEach,test } from 'vitest';
/* @testing-library/react" ist eine Bibliothek, 
  die für das Testen von React-Anwendungen verwendet wird.
  Sie bietet eine Reihe von nützlichen Funktionen und Methoden,
  um React-Komponenten zu testen,  */

  /* 
  jsdom ist eine JavaScript-Bibliothek, die eine Browser-ähnliche Umgebung in Node.js bereitstellt, sodass Sie DOM-Manipulationen 
  und -Interaktionen für Tests durchführen können.
  */

/*1- afterEach wird verwendet, um das Komponente nach jedem Test zu entladen,
 um sicherzustellen, dass das DOM zwischen den Tests sauber und isoliert ist. */
 afterEach(cleanup);

 /*2- test wird verwendet, um einen einzelnen Testfall zu definieren,
  der eine bestimmte Funktionalität der Anwendung überprüft.  */
test('The Header should contain Hallo users', async () => {
  render(<App />);
  /* 3- screen": Dies ist ein Hilfsobjekt in Testing Library, das verwendet wird, 
   um auf DOM-Elemente zuzugreifen und mit ihnen zu interagieren. */
  const header = screen.getByText('Hallo Users');
  /* 4- expect Es wird verwendet, um zu überprüfen, 
     ob eine bestimmte Bedingung erfüllt ist und ob das erwartete Verhalten eingetreten ist. */
  expect(header).toBeTruthy();
  
});

test('fetches and renders posts', async () => {
  render(<App />);
  /* 5- waitFor verwendet wird, um auf asynchrone Ereignisse zu warten */
  await waitFor(() => {
    expect(screen.getAllByRole('listitem').length).toBeGreaterThan(0);
  });
});


test('data length should be 10', async () => {
  render(<App />);
  await waitFor(() => {
    /* 6-getAllByRole die verwendet wird, um alle DOM-Elemente zu finden, die eine bestimmte Rolle haben */
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toEqual(10); 
  });
});

test('The name of the first user should be "Leanne Graham"', async () => {
  render(<App />);
  await waitFor(() => {
    const listItems = screen.getAllByRole('listitem');
    const firstUserName = listItems[0].textContent;
    expect(firstUserName).toBe('Leanne Graham');
  });
});


test('The name of the last user should be "Clementina DuBuque"', async () => {
  render(<App />);
  await waitFor(() => {
    const listItems = screen.getAllByRole('listitem');
    const firstUserName = listItems[9].textContent;
    expect(firstUserName).toBe('Clementina DuBuque');
  });
});

test('There should list in the compoenent "', async () => {
  render(<App />);
  await waitFor(() => {
    const ulElement = screen.getByRole('list');
      expect(ulElement).toBeTruthy();
  });
});





