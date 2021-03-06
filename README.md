star-rating
===========

Usage
-----


Browser Support
---------------

Requirements
------------

Development
-----------

API
===

Attributes
----------

| Attribute Name | Required   | Type    | Example                                               | Comments                                                                                |
| -------------- | ---------- | ------- | ------------------------------------------------------| ----------------------------------------------------------------------------------------------- |
| maxvalue       |   **No**   | integer | 5                                                     | maxvalue is the total number of stars you wish to display.                              |
| src            |   **No**   | string  | "/images/my-star.png, /images/my-star-selected.png"   | This attribute is a string consisting of two urls that are comma separated in a single string value. These two image paths get added as 'background-image' url's in the css    |
| size           |   **No**   | string  | 36px                                                  | size defines the height & width values in css units for each individual star            |
| colors     |   **No**  | string | "#ebebeb,#ffff00"                                                     | A string consisting of two color values that are comma separated. The first is the unselected star color, and the second is the selected star color.                             |
| transition     |   **No**  | string | "0.2s"                                                     | A string indicating the duration of the transition between the two star colors (Only works with colors, not with images)                             |
| value (RO)     |   **N/A**  | integer | 3                                                     | a read-only attribute that exposes the current rating value                             |


Example
=======
### <star-rating> Demos

##### Changing the image src attribute
[![changing the image src attribute](https://raw.githubusercontent.com/Nevraeka/star-rating/master/img/changing-the-image-source.png)](http://codepen.io/Nevraeka/pen/qZpryV/)

````html

<star-rating maxvalue="5" hover="true"></star-rating>

````

Contributing
============

To contribute to this project all you will need is npm installed and a love of web components. Please submit any suggestions or changes via a pull request.
