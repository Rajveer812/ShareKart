

# 📈 ShareKart

**ShareKart** is a full-stack stock trading dashboard application built using React, Node.js, and MongoDB.
The project is fully Dockerized and deployed on AWS EC2 using Docker Compose with images hosted on Docker Hub.

It demonstrates real-world production architecture, containerization, and cloud deployment practices.

---

## 🚀 Live Deployment

Frontend:

```
http://<EC2_PUBLIC_IP>:3001
```

Dashboard:

```
http://<EC2_PUBLIC_IP>:3000
```

Backend API:

```
http://<EC2_PUBLIC_IP>:3002
```

---

# 🧠 Project Highlights

✅ Full-Stack Architecture
✅ Authentication with JWT
✅ Buy / Sell Order System
✅ Holdings / Watchlist / Positions
✅ MongoDB Atlas (Cloud Database)
✅ Dockerized Multi-Service Setup
✅ Docker Hub Image Registry
✅ AWS EC2 Deployment
✅ Production-Ready Structure

---

# 🏗 Architecture Overview

```
Browser
   ↓
EC2 Public IP
   ↓
Frontend (React - Port 3001)
Dashboard (React - Port 3000)
   ↓
Backend (Node + Express - Port 3002)
   ↓
MongoDB Atlas (Cloud)
```

---

# 🧰 Tech Stack

| Layer         | Technology        |
| ------------- | ----------------- |
| Frontend      | React             |
| Dashboard     | React             |
| Backend       | Node.js + Express |
| Database      | MongoDB Atlas     |
| Auth          | JWT               |
| Containers    | Docker            |
| Orchestration | Docker Compose    |
| Cloud         | AWS EC2           |
| Registry      | Docker Hub        |

---

# 📂 Project Structure

```
ShareKart/
│
├── backend/
│   ├── routes/
│   ├── Middlewares/
│   ├── model/
│   ├── index.js
│   ├── Dockerfile
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│
├── dashboard/
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│
├── docker-compose.yml
├── .gitignore
└── README.md
```

---

# 🔐 Environment Variables

Create `.env` inside `backend/`:

```
PORT=3002
MONGO_URL=your_mongodb_atlas_connection_string
TOKEN_KEY=your_secret_key
```

⚠ Never commit `.env` to GitHub.

---

# 🧪 Local Development Setup

## 1️⃣ Clone Repository

```
git clone https://github.com/Rajveer812/ShareKart.git
cd ShareKart
```

---

## 2️⃣ Run Backend

```
cd backend
npm install
node index.js
```

Backend runs on:

```
http://localhost:3002
```

---

## 3️⃣ Run Frontend

```
cd frontend
npm install
npm start
```

Runs on:

```
http://localhost:3001
```

---

## 4️⃣ Run Dashboard

```
cd dashboard
npm install
npm start
```

Runs on:

```
http://localhost:3000
```

---

# 🐳 Docker Setup (Production Style)

## Build Images

```
docker build -t rajveer812/sharekart-backend:latest ./backend
docker build -t rajveer812/sharekart-frontend:latest ./frontend
docker build -t rajveer812/sharekart-dashboard:latest ./dashboard
```

## Push Images

```
docker push rajveer812/sharekart-backend:latest
docker push rajveer812/sharekart-frontend:latest
docker push rajveer812/sharekart-dashboard:latest
```

---

# ☁ AWS EC2 Deployment

## 1️⃣ Launch EC2

* Ubuntu 24.04 LTS
* t2.micro
* Security group allows:

  * SSH (22)
  * HTTP (80)
  * TCP 3000
  * TCP 3001
  * TCP 3002

---

## 2️⃣ Install Docker on EC2

```
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin -y
sudo usermod -aG docker ubuntu
```

Logout and SSH again.

---

## 3️⃣ Create docker-compose.yml on EC2

```
services:

  backend:
    image: rajveer812/sharekart-backend:latest
    ports:
      - "3002:3002"
    env_file:
      - .env
    restart: always

  frontend:
    image: rajveer812/sharekart-frontend:latest
    ports:
      - "3001:80"
    depends_on:
      - backend
    restart: always

  dashboard:
    image: rajveer812/sharekart-dashboard:latest
    ports:
      - "3000:80"
    depends_on:
      - backend
    restart: always
```

---

## 4️⃣ Deploy

```
docker compose pull
docker compose up -d
```

Application is now live.

---

# 🛡 Security Considerations

* MongoDB Atlas uses authentication
* JWT-based authentication
* Environment variables not committed
* Docker images separated by service
* Production container deployment

---

# 📌 Useful Docker Commands

View running containers:

```
docker ps
```

View logs:

```
docker logs <container_name>
```

Restart services:

```
docker compose restart
```

Stop everything:

```
docker compose down
```

---

# 🔮 Future Improvements

* Reverse proxy (Nginx single-port setup)
* Domain + HTTPS (Let’s Encrypt)
* CI/CD with GitHub Actions
* Load balancing
* Redis caching
* Role-based authorization

---

# 🏆 What This Project Demonstrates

✔ Full-stack development
✔ REST API design
✔ JWT authentication
✔ Cloud database integration
✔ Docker containerization
✔ Multi-service orchestration
✔ Production deployment on AWS

---

# 👨‍💻 Author

Rajveer Jain
GitHub: [https://github.com/Rajveer812](https://github.com/Rajveer812)

---

If you'd like, I can also create:

* 🔥 A cleaner “portfolio-ready” README version
* 📘 API documentation file
* 🚀 CI/CD setup guide
* 🔐 Production Nginx reverse proxy configuration

Just tell me.
