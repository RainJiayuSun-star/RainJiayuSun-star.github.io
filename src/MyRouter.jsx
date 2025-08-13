import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CSProjectsPage from "./pages/CSProjectsPage";
import PhotographyProjectsPage from "./pages/PhotographyProjectsPage";
import MyNavbar from "./components/MyNavbar";
import NotFoundPage from "./pages/NotFoundPage";

export default function MyRouter() {
    return (
        <BrowserRouter>
            <MyNavbar /> {/* navigation persists across all pages*/}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<CSProjectsPage />} />
                <Route path="photography" element={<PhotographyProjectsPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}