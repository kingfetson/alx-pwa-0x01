# ALX Project: Reading API Documentation

This project involves reading and understanding the MoviesDatabase API to learn how to interact with it effectively and build TypeScript interfaces for request and response objects.

## API Overview

The **MoviesDatabase API** provides access to a wide range of movie and TV show data including titles, genres, images, and descriptions. It supports search functionalities, detailed info on specific titles, and filtering by type (movie or series). It is ideal for developers building entertainment or recommendation platforms.

## Version

- **API Version:** 1.0.0 (as listed on RapidAPI)

## Available Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/titles/search/title` | `GET` | Search for a movie or series by title name. |
| `/titles/{id}` | `GET` | Get detailed information for a specific title using its IMDb ID. |
| `/titles/x/upcoming` | `GET` | List upcoming movies. |
| `/titles/x/top-rated` | `GET` | Get a list of top-rated titles. |
| `/titles/x/popular` | `GET` | Get a list of currently popular titles. |

## Request and Response Format

### Example Request

``http
GET /titles/search/title?title=Inception HTTP/1.1
Host: moviesdatabase.p.rapidapi.com
X-RapidAPI-Key: YOUR_API_KEY
X-RapidAPI-Host: moviesdatabase.p.rapidapi.com
Example Response
{
  "results": [
    {
      "id": "tt1375666",
      "titleText": { "text": "Inception" },
      "releaseYear": { "year": 2010 },
      "primaryImage": {
        "url": "https://example.com/image.jpg"
      }
    }
  ]
}

### Authentication
To access the API:

API Key is required.

Add the following headers to each request:

X-RapidAPI-Key: YOUR_API_KEY

X-RapidAPI-Host: moviesdatabase.p.rapidapi.com

You can obtain the API key by subscribing via RapidAPI.

### Error Handling
Status Code	Meaning	Suggested Action
400	Bad Request	Check query parameters.
401	Unauthorized	Verify API key is correct.
403	Forbidden	Ensure your account has access.
429	Too Many Requests	Reduce request frequency or upgrade your plan.
500	Internal Server Error	Try again later or report to API provider.

##### Usage Limits and Best Practices
##### Rate Limit: 500 requests/month on free plan.

#### Best Practices:

Use caching for frequent queries.

Implement retry logic for 5xx errors.

Validate all inputs before sending API requests.

Monitor usage and upgrade if needed.
