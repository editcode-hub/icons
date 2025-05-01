# editcode-hub/icons

A perfectly rounded icon library made for designers, developers, and pretty much everyone. Explore all of our icons at [editcode.dev](http://editcode.dev/hub/icons "editcode.dev").

![editcode icons](https://iili.io/3h3D9cX.png)

## Get Started

### 1. Installation

Install with npm:

```
npm install --save @editcode-hub/icons
```

### 2. Usage

Import the icons you need into your React project and declare them in your render method:

```
import { FolderAdd, FolderCheckLight, FolderDel } from '@editcode-hub/icons';

const MyComp = () => {
  return (
    <div>
      <FolderAdd />
      <FolderCheckLight />
      <FolderDel />
    </div>
  );
};
export default MyComp;
```

Icons can be configured with inline props:

```
<FolderAdd color="yellow" size={32} />
```

| Prop    |               Description                |        Default |
| ------- | :--------------------------------------: | -------------: |
| `color` |            Set the icon color            | `currentColor` |
| `size`  | Set the width and height of the svg icon |           `24` |

## Author

Evgeny Fomin ([evgenyfomin.com](https://evgenyfomin.com))

## License

[MIT License](https://github.com/editcode-hub/icons/blob/main/LICENSE), Copyright © 2025-present editcode-hub.
