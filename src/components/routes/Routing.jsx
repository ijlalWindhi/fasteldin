import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../../pages/login";
import Karyawan from "../../pages/karyawan";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" exact element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard/karyawan" element={<Karyawan />} />
        </Routes>
    );
}
