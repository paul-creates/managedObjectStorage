import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ObjectList from "./components/ObjectList";
import ObjectDetail from "./components/ObjectDetail";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});

// Hello World Component
const HelloWorld = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>Welcome to the Managed Object Storage application.</p>
    </div>
  );
};

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
          <nav
            style={{
              marginBottom: "20px",
              padding: "10px",
              backgroundColor: "#f5f5f5",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                gap: "20px",
              }}
            >
              <li>
                <Link to="/" style={{ textDecoration: "none", color: "#333" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/objects"
                  style={{ textDecoration: "none", color: "#333" }}
                >
                  Objects
                </Link>
              </li>
            </ul>
          </nav>

          <main>
            <Routes>
              <Route path="/" element={<HelloWorld />} />
              <Route path="/objects" element={<ObjectList />} />
              <Route path="/objects/:id" element={<ObjectDetail />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
