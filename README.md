[![Dependency Status](https://david-dm.org/dnode/dbcrypt.svg)](https://david-dm.org/dnode/dbcrypt)
[![devDependency Status](https://david-dm.org/dnode/dbcrypt/dev-status.svg)](https://david-dm.org/dnode/dbcrypt#info=devDependencies)

# Example
```javascript
const dbcrypt = require('dbcrypt');

const passwordHash = await dbcrypt.hash('password');
if (await bcrypt.compare('passwordHash', passwordHash)) {

}
```
