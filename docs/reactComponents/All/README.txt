To use all of the available components:
-copy *.js and *.css files to your src folder

-You need to include the following on your package.json
"dependencies": {
	"@devexpress/dx-react-core": "latest",
    	"@devexpress/dx-react-grid": "latest",
    	"@devexpress/dx-react-grid-bootstrap4": "latest",
    	"bootstrap": "latest",
    	"react-dropzone": "latest",
    	"react-icons": "latest",
    	"semantic-ui-css": "latest",
    	"semantic-ui-react": "latest"
}

-Then on your index.js file include:
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';

-Add the *.png files to the public folder. Note: if you want to use your own image for any of them, just name them respectively to the png file you're replacing.

-Lastly, import any of the components for use. For example:
import FileUploadComponent from "./FileUploadComponent";
import FormFieldsComponent from './FormFieldsComponent'