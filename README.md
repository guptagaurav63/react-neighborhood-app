# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Neighborhood Library Service (gRPC + Python + Postgres)

## Overview
This repo contains:
- A Python gRPC server using SQLAlchemy and PostgreSQL.
- A Node.js Express API Gateway exposing simple REST endpoints that forward to gRPC.
- A minimal React frontend that talks to the Gateway.

## Prerequisites
- Docker & docker-compose
- Python 3.9+ (for local dev) and pip
- Node.js 18+ and npm
- `protoc` is not required if you use `grpc_tools.protoc` to generate python code (we show commands below).

## Quickstart (Docker)
1. Build and run postgres + server:

docker-compose up --build
This starts:

Postgres on port 5432

Python gRPC server on 50051

Generate Python gRPC code (if you modify protos):

cd server
python -m pip install -r requirements.txt
python -m grpc_tools.protoc -I../protos --python_out=./generated --grpc_python_out=./generated ../protos/library.proto
# then run server:
python server.py


Node Gateway
cd gateway
npm install
# set env GRPC_SERVER if needed, default is localhost:50051
node index.js


Gateway runs on port 3000 by default.

Frontend

Create React app and paste App.js above (or use CRA):

cd my-react-app
npm install
npm run dev


Set REACT_APP_API_BASE if gateway runs elsewhere.

Files of interest

protos/library.proto — service contract

server/models.py, server/db.py, server/server.py — server implementation

gateway/index.js — REST → gRPC gateway

frontend/src/App.js — minimal UI