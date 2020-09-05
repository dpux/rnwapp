Project created by adding RN web to an existing React project.

index.native.js is required to be on root level because Native Android/iOS builds are setup with index.js at that level.
index.web.js cannot be moved outside because CRA builds look for index.js within /src folder

CRA build system also cannot compile code outside src, (Native apps work fine) so the solution is to either
add symlinks to outer code OR 
add outer code as a private module in package.json OR
move all code inside src

"comps": "file:./comps"
yarn
import { CustomView } from 'comps/CustomView'

adding outer code in package.json works as far as imports go but cant compile JSX out of the box. Additional work is required to compile JSX for CRA apps. 