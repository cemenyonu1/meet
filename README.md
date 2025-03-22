# Meet
Meet is a social app that allows users to view events happening in their area and beyond. They can also look at the details for the events and decide which events they want to attend.

## Filter events by city.
### User Story
As a user, I should be able to filter events by city so that I can see what events are taking place in that city.

### Scenario 1: When user hasn’t searched for a specific city, show upcoming events from all cities.

Given: User hasn’t searched for any city;
When: The user opens the app;
Then: The user should see a list of upcoming events.

### Scenario 2: User should see a list of suggestions when they search for a city.

Given: The main page is open;
When: User starts typing in the city textbox;
Then: The user should receive a list of cities (suggestions) that match what they’ve typed.

### Scenario 3: User can select a city from the suggested list.

Given: User was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
When: The user selects a city (e.g., “Berlin, Germany”) from the list;
Then: Their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

## Show and hide events details
### User Story
As a user, I should be able to show and hide event details so that I can learn more information about an event and minimize the excess details after so it does not take up screen space.

### Scenario 1: An event element is collapsed by default.
Given: User searched for events;
When: User selects an event they are interested in;
Then: User is viewing the event element.

### Scenario 2: User can expand an event to see details.
Given: User selected an event;
When: User clicks on an element to expand it;
Then: The element expands.

### Scenario 3: User can collapse an event to hide details.
Given: User is viewing an expanded element;
When: User clicks on element to minimize it;
Then: The element is minimized.


## Specify number of events
### User Story
As a user,I should be able to specify a number of events so that I do get overwhelmed with too many events showing at once.

### Scenario 1: When user hasn’t specified a number, 32 events are shown by default.
Given: User has selected and area to search for events;
When: User searches for events without specifying a number of events to be shown;
Then: A default number of 32 events are shown.

### Scenario 2: User can change the number of events displayed.
Given: User search for events without specifying the number of events to display;
When: User enters a number in the search area for total number of events to display;
Then: The number of events that the user requested to be displayed will show.


## Use the app when offline
### User Story
As a user, I should be able to use the app online so that if I lose internet access, I can still have the event information.

### Scenario 1: Show cached data when there’s no internet connection.
Given: User has no internet;
When: User clicks into cookie settings on device;
Then: Cached data will be shown.

### Scenario 2: Show error when user changes search settings (city, number of events).
Given: User is in the settings;
When: User entered incorrect city or event information;
Then: Error will be displayed on screen.

## Add an app shortcut to the home screen
### User Story
As a user, I should be able to add an app shortcut to the home screen so that finding the app will be easier.

### Scenario 1: User can install the meet app as a shortcut on their device home screen.
Given: The app is not installed on the users device;
When: The user installs the app;
Then: The app shortcut is visible on the home screen.

## Display charts visualizing event details
### User Story
As a user, I should be able to display charts visualizing event details so that I can visualize the information better for the event.

### Scenario 1: Show a chart with the number of upcoming events in each city.
Given: User is at the home screen;
When: User clicks to view all upcoming events;
Then: A chart with the total upcoming events in each city is shown.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
