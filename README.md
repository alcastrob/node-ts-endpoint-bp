# node-ts-endpoint-bp

Boilerplate files for a NodeJS project that implements an endpoint using TypeScript. Includes test classes (using Jazmine), linter, dockerfile, and hexagonal structure.

## How to use it

- Fork the project
- Execute `npm install`
- Run the project with `npm run dev`
- Execute the test with `npm run test`

The endpoint description is stored in index.ts. Feel free to add and transform this one based on your own necessities. The tests are stored in the /tests directory.

## Dockerize

The Dockerfile included will create a container based in node:alpine and deploy the code included in the /dist directory. To build the container execute

`docker build -t imageName .`

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

Version 1.0.0 Initial version

## Credits

Lead Developer - Angel Castro (alcastro)

## License

The MIT License (MIT)

Copyright (c) 2015 Chris Kibble

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
