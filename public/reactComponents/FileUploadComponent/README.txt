To use this component: 
-copy FileUploadComponent.js to your src folder

-You need to include the following on your package.json
"dependencies": {
	“semantic-ui-css” : “latest”,
	“semantic-ui-react”: “latest”,
	“react-dropzone”: “latest”,
}

-Then on your index.js file include:
import 'semantic-ui-css/semantic.min.css';

-Add the upload.png file to the public folder. Note: you can put your own image on there, as long as its named "upload.png".

-Lastly, import the FileUploadComponent for use:
import FileUploadComponent from "./FileUploadComponent";
