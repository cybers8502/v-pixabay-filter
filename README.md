# Vue Test Task	

###Project Specification

> We have to implement an application with the usage of any custom styles and components using sass/scss.
>
> For AJAX queries we should use axios
>
> All queries must be sent over the axios
>
> Our application must be based on vue2 +vuex

###Tasks Description:
1. Register at https://pixabay.com/api/docs/ and get your own API key
2. Using this API key get an implement a list of images: `https://pixabay.com/api/?key={ YOUR_KEY }&q=cats&image_type=all&per_page=100`
3. Output should be done as a grid of cards 4 items in a row
4. Card must contain an image, tags, number of likes and comments
5. When click on the image user has to be redirected to the page with all information about this card
6. JSON with images list and one image must be stored in the vuex state
7. Implement sort of the grid by count of likes and comments
8. Implement filtering by tags using input and onKeyUp event
9. Implement filtering delay of 300ms

## Project setup
```
npm install
```

## Environment
**Variable** | **Description**
------------- | -------------
**`VUE_APP_PIXABAY`**  | Get own API key at https://pixabay.com/api/docs/

### Lints
```
npm run lint
```

### Compiles for development
```
npm run serve
```

### Compiles for production
```
npm run build
```

### Developed by
>Max Tkhorenko
>
>max.tkh.ua@gmail.com
>
>https://github.com/cybers8502
