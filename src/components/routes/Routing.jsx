import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../../pages/login";
import Karyawan from "../../pages/karyawan";
import HCKaryawan from "../../pages/hc/karyawan";
import HCDivisiLuar from "../../pages/hc/divisi-luar";
import CustomerCare from "../../pages/customer care";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" exact element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard/karyawan" element={<Karyawan />} />
            <Route
                path="/dashboard/hc/pengajuan-karyawan"
                element={<HCKaryawan />}
            />
            <Route
                path="/dashboard/hc/pengajuan-divisi-luar"
                element={<HCDivisiLuar />}
            />
            <Route path="/dashboard/customercare" element={<CustomerCare />} />
        </Routes>
    );
}
