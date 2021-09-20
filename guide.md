guide.md
Material UI : https://www.youtube.com/watch?v=m-2_gb_3L7Q

### Problems

https://dev.to/ruppysuppy/how-pros-get-rid-of-relative-imports-in-js-ts-2i3f?fbclid=IwAR2lIi3Hzj-qr65lFrLRhW-b8t0rIZR7JhAeQP0DaJhkqxbyDKMIyDOJQgw

The following changes are being made to your tsconfig.json file: - compilerOptions.paths must not be set (aliased imports are not supported)

{
"extends": "./tsconfig.base.json"
}
