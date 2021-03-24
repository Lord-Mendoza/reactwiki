To use this component: 
-copy GridComponent.css & .js to your src folder
-If you are using rowDetails, include chevron-down-solid.png and chevron-right-solid.png to your project, and on GridComponent.css file revise the path of these images.

-You need to include the following on your package.json
"dependencies": {
	�@devexpress/dx-react-core� : �latest�,
	�@devexpress/dx-react-grid� : �latest�,
	�@devexpress/dx-react-grid-bootstrap4� : �latest�,
	�bootstrap�: �latest�,
	�react-icons�: �latest�,	
}

-On your index.js file include:
import 'bootstrap/dist/css/bootstrap.min.css'

-Import the GridComponent for use:
import GridComponent from "./GridComponent"