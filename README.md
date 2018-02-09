# Spye
Detect when a DOM element is created or removed.

<a href="https://travis-ci.org/fabioricali/spye" target="_blank"><img src="https://travis-ci.org/fabioricali/spye.svg?branch=master" title="Build Status"/></a>
<a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" title="License: MIT"/></a>

## Installation

### Node.js
```
npm install spye --save
```

### Browser

#### Local
```html
<script src="node_modules/spye/dist/spye.min.js"></script>
```

#### CDN unpkg
```html
<script src="https://unpkg.com/spye/dist/spye.min.js"></script>
```

## Example
```javascript
const Spye = require('spye');

new Spye('#element')
    .onCreate((element)=> console.log('created', element))
    .onRemove(()=> console.log('removed'))
```

## API

<a name="Spye"></a>

## Spye
**Kind**: global class  

* [Spye](#Spye)
    * [new Spye(query, [opts])](#new_Spye_new)
    * [.watch()](#Spye+watch) ⇒ [<code>Spye</code>](#Spye)
    * [.unwatch()](#Spye+unwatch) ⇒ [<code>Spye</code>](#Spye)
    * [.onCreate(callback)](#Spye+onCreate) ⇒ [<code>Spye</code>](#Spye)
    * [.onRemove(callback)](#Spye+onRemove) ⇒ [<code>Spye</code>](#Spye)

<a name="new_Spye_new"></a>

### new Spye(query, [opts])
Create instance

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>query</td><td><code>Object</code></td><td></td><td><p>element that you want watch</p>
</td>
    </tr><tr>
    <td>[opts]</td><td><code>Object</code></td><td></td><td><p>configuration object</p>
</td>
    </tr><tr>
    <td>[opts.autoWatch]</td><td><code>boolean</code></td><td><code>true</code></td><td><p>auto watch</p>
</td>
    </tr><tr>
    <td>[opts.checkMs]</td><td><code>number</code></td><td><code>50</code></td><td><p>interval in milliseconds for every check</p>
</td>
    </tr><tr>
    <td>[opts.unwatchAfterCreate]</td><td><code>boolean</code></td><td><code>false</code></td><td><p>stop check after detect element creation</p>
</td>
    </tr><tr>
    <td>[opts.unwatchAfterRemove]</td><td><code>boolean</code></td><td><code>false</code></td><td><p>stop check after detect element remove</p>
</td>
    </tr>  </tbody>
</table>

<a name="Spye+watch"></a>

### spye.watch() ⇒ [<code>Spye</code>](#Spye)
Start watching

**Kind**: instance method of [<code>Spye</code>](#Spye)  
<a name="Spye+unwatch"></a>

### spye.unwatch() ⇒ [<code>Spye</code>](#Spye)
Stop watching

**Kind**: instance method of [<code>Spye</code>](#Spye)  
<a name="Spye+onCreate"></a>

### spye.onCreate(callback) ⇒ [<code>Spye</code>](#Spye)
Fired when element is created

**Kind**: instance method of [<code>Spye</code>](#Spye)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>callback</td>
    </tr>  </tbody>
</table>

<a name="Spye+onRemove"></a>

### spye.onRemove(callback) ⇒ [<code>Spye</code>](#Spye)
Fired when element is removed

**Kind**: instance method of [<code>Spye</code>](#Spye)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>callback</td>
    </tr>  </tbody>
</table>


## Changelog
You can view the changelog <a target="_blank" href="https://github.com/fabioricali/spye/blob/master/CHANGELOG.md">here</a>

## License
Spye is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Author
<a target="_blank" href="http://rica.li">Fabio Ricali</a>