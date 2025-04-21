import React from 'react';
import { render } from '@testing-library/react';
import EventList from '../components/EventList';


describe('<EventList /> component', () => {
    let EventListComponent;
    beforeEach(() => {
        EventListComponent = render(<EventList />);
    })
    test('has element with list role', () => {
        expect(EventListComponent.queryByRole('list')).toBeInTheDocument();
    });

    test('render the correct number of events', () => {
        EventListComponent.rerender(<EventList events={
            [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
        } />);
        expect(EventListComponent.getAllByRole("listitem")).toHaveLength(4);
    });
});