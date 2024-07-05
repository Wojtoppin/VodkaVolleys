## Vodka Volleys - Scraper Project

This project aims to scrape data for the Vodka Volleys soccer team from the official "Liga Ursus" website ([http://ligaursus.futbolowo.pl/?mobiledetection=0](http://ligaursus.futbolowo.pl/?mobiledetection=0)) and present it in a user-friendly format on the Vodka Volleys website.


[Video](https://youtu.be/Fk-OZ0l4mvo)

### Technologies Used

* **Data Source:** [https://ligaursus.futbolowo.pl/menu,11,66,klasyfikacja-strzelcow-wiosna-2024.html](https://ligaursus.futbolowo.pl/menu,11,66,klasyfikacja-strzelcow-wiosna-2024.html) (Top Scorers classification - Spring 2024)
* **API:** [https://vodka-volleys-api.onrender.com/scrape/Scorers](https://vodka-volleys-api.onrender.com/scrape/Scorers) (Custom API to fetch and process scraped data)
* **Frontend Framework:** React.js (Used to build the user interface for displaying top scorers on the Vodka Volleys website)

### Project Functionality

1. **Data Scraping:**
    * A custom API is deployed using a service like Render ([https://render.com/](https://render.com/)) to handle the scraping process.
    * This API fetches data from the "Liga Ursus" website using web scraping techniques. (Specific libraries or tools used for scraping can be mentioned here if applicable).
2. **Data Processing:**
    * The scraped data is then processed by the API to extract relevant information about the top scorers, such as player names, number of goals, etc.
3. **Data Consumption:**
    * The Vodka Volleys website utilizes the provided API endpoint ([https://vodka-volleys-api.onrender.com/scrape/Scorers](https://vodka-volleys-api.onrender.com/scrape/Scorers)) to fetch the processed top scorers data.
4. **Data Display:**
    * React components are used to render the top scorers data in a visually appealing and informative manner on the Vodka Volleys website. This might involve tables, charts, or other UI elements for easy navigation and analysis.

### Benefits

* **Automated Data Acquisition:** The project eliminates the need for manual data entry, ensuring updated and accurate information on the Vodka Volleys website.
* **Improved User Experience:** Fans can easily access and explore the top scorers' data, fostering team spirit and engagement.
* **Scalability:** The project can be easily extended to scrape data from other relevant sources, such as upcoming matches or league standings.

### Next Steps

* Implement data visualization using React libraries like Chart.js or D3.js to showcase top scorers' performance graphically.
* Integrate the scraper and data display functionality seamlessly into the Vodka Volleys website for a smooth user experience.
* Consider adding functionalities like player profiles or historical data comparisons for a more comprehensive overview.
