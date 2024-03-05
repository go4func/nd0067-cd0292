# Image Processing Project

## API

### /api/images

> to get the images by name with optional sizes as parameters
> Example

```
/api/images?filename=fjord&width=600&height=300
```

## Resources

- original images are in images/full folder
- resized images will be generated to images/thumb folder

## Script

- Start with nodemon: npm run start
- Build to dist folder: npm run build
- Test with jasmine: npm run test
- Lint with eslint: npm run lint
- Format with prettier: npm run prettier
