NODE JS
-------

1. Open source server environement
2. Run Js outside browser also user js in server
3. Node.js uses Asynchrnous Programming 
4. Modules in Nodde.js :js Libraries
	- Built 


EXPRSS js Node JS
-----------------
-----------------

1. create a folder for server 
2. create Package.json file: "npm init -y"
3. Update scripts in package.json files as 
	 "scripts": {
    		"start": "node index.js"
 	        },
4. install external 3 packages for build server
    -express,cors(cross origin resource shairing -used to share resource b/w 2 applications in internet),dotenv
	-npm i express cors dotenv
5. create .env file to add environment varibale
6. create .gitignore file to add files tobe ignored
	-node-modeles .env
7. Create index.js file: define server 
	-import dotenv,cors,express
	-create express server
	-Use cors in express server
	-set up port where we have to run server
	-Run the server to listen client request

	// Loads .env files contents into contents into process.env by default
	require("dotenv").config()

	const express=require("express")
	const core=require("cors")

	// Creates an Express application.express()
	const gLSServer=express()


	// Use cors in express server
	gLSServer.use(core())

	//set up port where we have to run server
	const PORT=3000|| process.env.PORT

	gLSServer.listen((PORT,()=>{
    		console.log(`Project Google Login SingUp server start at PRset up port where we have to run server PORT ${PORT}`);
	}))
8. to Run server app: node index.js / nodemon index.js
	
