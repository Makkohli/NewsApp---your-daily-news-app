# NewsApp---your-daily-news-app

NewsApp is a React.js application that fetches daily news using the NewsAPI. It provides a convenient way to browse top headlines across various categories such as business, entertainment, health, science, sports, technology, and more. 
https://drive.google.com/drive/folders/1NH6N3mAhO7qG65Q5Jc26CjtbiiMDbRic?usp=drive_link

## Features

- **Dynamic Content**: Fetches real-time news articles from the NewsAPI.
- **Category Navigation**: Navigate news articles by different categories.
- **Infinite Scrolling**: Continuously loads more news articles as you scroll down.
- **Responsive Design**: Ensures a seamless experience across devices.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/NewsApp.git
   cd NewsApp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your NewsAPI key:
   - Get your NewsAPI key from [NewsAPI.org](https://newsapi.org/).
   - Create a `.env` file in the root directory.
   - Add your API key to `.env`:
     ```env
     REACT_APP_NEWS_API_KEY=your_newsapi_key_here
     ```

4. Start the application:
   ```bash
   npm start
   ```

5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Usage

- Select a category from the navigation bar to view news articles for that category.
- Scroll down to load more news articles automatically.

## Built With

- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [NewsAPI](https://newsapi.org/) - Provides access to news articles from around the web.
- [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component) - Infinite scrolling for React.

## Credits

- News data provided by [NewsAPI.org](https://newsapi.org/).
- Loading spinner from [Loading.io](https://loading.io/).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
