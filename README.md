# SharkAPi
# Shark Names and Habitats API

This API returns a list of shark names and their habitats. The data is stored in a JSON format and can be accessed through a HTTP GET request. 

## Usage

To access the data, send a HTTP GET request to the following endpoint:

```
https://example.com/api/sharks
```

The API will return a JSON object contaning something like this:

```
{
  "sharks": [
    {
      "name": "Great white shark",
      "habitat": "Coastal and offshore waters worldwide"
    },
    {
      "name": "Tiger shark",
      "habitat": "Coastal waters worldwide"
    },
    {
      "name": "Bull shark",
      "habitat": "Coastal and freshwater rivers worldwide"
    },
    ...
  ]
}
```

## Response Format

The response is in a JSON format with a single field, "sharks", which contains an array of objects representing each shark and its habitat. Each object has two fields: "name" and "habitat".

## Example

To access the data using JavaScript, you can use the following code:

```
fetch('https://example.com/api/sharks')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
```

This will log the shark data to the console.
