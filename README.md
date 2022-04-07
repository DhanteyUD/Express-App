# Express API Template

Clone this repository to your local machine to use Express...

---

## Containerizing Express with Docker


1. On vs code, hold **command + shift + p** to show command bar

2. Search for Docker on pop-up tool bar and select: 
``` 
 Docker: Add Docker Files to Workspace
```
3. Select **Node.js** Application Platform 

4. Choose **Package.json** file

5. Choose default port or input alternative:
```
 3000
```
6. Select **No** on Include optional Docker Compose files?

7. **Dockerfile** and **.dockerignore** files would be created (Edit as see fit)

8. On terminal, enter below to build:
``` 
 docker build -t accountName/fileName .
```
9. On terminal, enter below to run image as container:
``` 
 docker run -p 4000:3000 accountName/fileName>
```
10. To rename image:
```  
 docker image tag #imageId accountName/newFileName:latest
```

## Deploying Express with Heroku


```
1. cd <dir>

2. git init

3. git add .

4. git commit -m "commit message"

5. curl https://cli-assets.heroku.com/install.sh | sh (Enter device password if present)

6. heroku login

7. heroku create

8. git push heroku master/main

9. heroku apps:rename newname (To rename app)

```

