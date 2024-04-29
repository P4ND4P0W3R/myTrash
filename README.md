# myTrash

myTrash is a waste management solution designed to streamline the reporting of overloaded trash bins in public gardens, contributing to cleaner and more efficient waste collection in Paris and Bordeaux.

## About the project

> [!NOTE]
> This project  falls within the scope of the **Interdisciplinary Project** for the third year curriculum at [EFREI](https://www.efrei.fr/), which is a French CS engineering school.

### ℹ️ Project description

myTrash aims to design a solution for reporting overloaded trash bins in public gardens in Paris and Bordeaux. The goal is to address the issue of overflowing trash bins by providing a mechanism for individuals to easily signal when a bin is full. This will allow the city to better manage waste collection and ensure that public spaces remain clean and safe for everyone. This will also allow the trash company to make fewer unnecessary trips to empty bins that are not full, reducing costs and environmental impact.

### 👥 Team members

- [P4ND4P0W3R](https://github.com/P4ND4P0W3R) - Paul HU
- [Cyrilnkl](https://github.com/Cyrilnkl) - Cyril NAKHLA
- [alinahas1311](https://github.com/alinahas1311) - Ali NAHAS
- [Eyfeline](https://github.com/Eyfeline) - Eyfeline TALA
- [flouis78](https://github.com/flouis78) - Louis FABRE
- [nkrief4](https://github.com/nkrief4) - Nathan KRIEF
- [Thomas94800](https://github.com/Thomas94800) - Thomas CALVO

## Getting started

### ⚙️ Prerequisites

Make sure you have the following installed before proceeding:

- [Node.js](https://nodejs.org/en) (v18 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### 🚦 Run the project

Follow these steps to run the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/P4ND4P0W3R/myTrash.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd myTrash
   ```

3. **Install dependencies and run the server:**

   - Navigate to the `server` directory, install its dependencies and run the server using the following commands:

   ```bash
   # In the /root directory
   cd server
   npm install   # or yarn install
   npm run dev   # or yarn dev
   ```

   This should install the server's dependencies and start your Express server on the port `3000` and accessible on [http://localhost:3000](http://localhost:3000).

4. **Install dependencies and run the client:**

   - Navigate to the `client` directory, install its dependencies and run the client using the following command:

   ```bash
   # In the /root directory
   cd /client
   npm install   # or yarn install
   npm run dev   # or yarn dev
   ```

   This should install the client's dependencies and start your Vite development server for the React app on the port `5173` and accessible on [http://localhost:5173](http://localhost:5173).
