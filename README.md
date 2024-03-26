# Web Development Project 5 - NBA Database

Submitted by: Lou Salvant

This web app: provides users with data into NBA teams and players. The app features summary cards displaying information such as top teams, individual player statistics, and team performance. Users can search for specific players using a search bar and filter them by team and position. Additionally, there's a navigation bar with buttons for dashboard, search, and about sections, allowing for easy navigation throughout the app.

Time spent: **10** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The list displays a list of data fetched using an API call**
- [x] **Data uses the useEffect React hook and async/await syntax**
- [x] **The app dashboard includes at least three summary statistics about the data such as**
  - [x] Team stats, Player stats, and Top Teams
- [x] **A search bar allows the user to search for an item in the fetched data**
- [x] **Multiple different filters (2+) allow the user to filter items in the database by specified categories**

The following **optional** features are implemented:

- [x] Multiple filters can be applied simultaneously
- [ ] Filters use different input types such as a text input, a selection, or a slider
- [ ] The user can enter specific bounds for filter values

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHNxNzM4MmdxbWt1NW15Y2gydXBhYXRvZndvdWlrZGd1aW42cHFyNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UOEBOjW71GLBMjymFH/giphy.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

## Notes

This has been the most difficult project thus far. First, I had to change to different APIs multiple times. The original APIs I used did not work the way I wanted to so I decided to move on to a different API twice. I also ended up paying for the API I used because the 10 requests per minute for the basic plan was frustrating to say the least and really bottlenecked my troubleshooting. Using API-NBA made my code complicated because some attributes I needed were in different endpoints so I ended up having to use multiple endpoints for each component.

## License

    Copyright [2024] [Lou Salvant]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.