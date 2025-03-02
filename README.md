# Crypto Price Tracker Backend

## About the Project

This is the backend component of the **Crypto Price Tracker** project, created by **Faathirazukhruf**. The backend is built using **Express.js** and fetches real-time cryptocurrency price data from the **CoinGecko API**. It serves as the data provider for the frontend application.

Key Features:
- Fetch real-time cryptocurrency prices (Bitcoin, Ethereum, Ripple) from CoinGecko API.
- Provide a RESTful API endpoint for the frontend to retrieve price data.
- Basic error handling and response formatting.

## Technologies Used

- **Backend**:
  - [Express.js](https://expressjs.com/) - Web framework for Node.js.
  - [Axios](https://axios-http.com/) - HTTP client for making API requests.
  - [CORS](https://www.npmjs.com/package/cors) - Middleware for enabling Cross-Origin Resource Sharing.
  - [dotenv](https://www.npmjs.com/package/dotenv) - For managing environment variables.

- **API**:
  - [CoinGecko API](https://www.coingecko.com/en/api) - For fetching cryptocurrency price data.

## How to Run the Project

### Prerequisites
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Faathirazukhruf/crypto-tracker-backend.git
   cd crypto-tracker-backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   - Create a `.env` file in the root directory and add the following:
     ```env
     PORT=5000
     ```
   - Replace `5000` with your desired port number.

4. **Run the Backend Server**
   ```bash
   npm start
   ```

5. **Test the API**
   - The backend will be running at `http://localhost:5000`.
   - You can test the API endpoint by visiting:
     ```
     http://localhost:5000/api/crypto-prices
     ```

## API Endpoints

### Get Cryptocurrency Prices
- **Endpoint**: `GET /api/crypto-prices`
- **Description**: Fetches real-time prices for Bitcoin, Ethereum, and Ripple.
- **Response**:
  ```json
  {
    "bitcoin": { "usd": 50000 },
    "ethereum": { "usd": 4000 },
    "ripple": { "usd": 1.5 }
  }
  ```

## Folder Structure

```
crypto-tracker-backend/
├── node_modules/            # Folder for installed dependencies
├── .env                     # File for environment variables
├── index.js                 # Main backend server file
├── package.json             # File for dependencies and scripts
└── package-lock.json        # Lock file for dependencies
```

## Contributing

This is a personal project created by **Faathirazukhruf**. If you'd like to contribute or provide feedback, please open an **issue** or **pull request** in this repository.

## License

This project is licensed under the [MIT License](LICENSE).

---

Made by **Faathirazukhruf**.


