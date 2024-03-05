# Image Processing Project

## API

### /api/images

> to get the images by name with optional sizes as parameters

Example:

```
/api/images?filename=fjord&width=600&height=300
```

- filename is required.
- width and height are optional:
  - both are unavailable: response the original images in images/full folder.
  - one is unavailable: value will be equal to available one.
  - both are available: response the resized images in images/thumb folder.

Errors

- `missing filename`: filename is required.
- `invalid filename`: resource is not found.
- `invalid width`: width is not number or negative
- `invalid height`: height is not number or negative

## Resources

- original images are in images/full folder
- resized images will be generated to images/thumb folder

## Script

- Start with nodemon: npm run start
- Build to dist folder: npm run build
- Test with jasmine: npm run test
- Lint with eslint: npm run lint
- Format with prettier: npm run prettier
