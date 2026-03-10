import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Pharmacies } from "./pages/Pharmacies";
import { Search } from "./pages/Search";
import { Customers } from "./pages/Customers";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";
import { Navigate } from "react-router-dom";

function RoleRedirect() {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <Navigate to={user.redirectPath} replace />;
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <BrowserRouter>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/pharmacies" element={<Pharmacies />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/customers" element={<Customers />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/dashboard" element={<RoleRedirect />} />
                  <Route path="/customer/dashboard" element={<Dashboard />} />
                  <Route
                    path="/pharmacy-owner/dashboard"
                    element={<Dashboard />}
                  />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
