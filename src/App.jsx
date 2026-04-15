import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import PCAMoistureRetainer from './pages/PCAMoistureRetainer'
import PeppermintCombo from './pages/PeppermintCombo'
import VitaminPowerLeaveIn from './pages/VitaminPowerLeaveIn'
import ScalpandSkin from './pages/ScalpandSkin'
import ProteinBoostSeal from './pages/ProteinBoostSeal'
import LandingIndex from './pages/LandingIndex'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingIndex />} />
        <Route path="/pca-moisture-retainer" element={<PCAMoistureRetainer />} />
        <Route path="/peppermint-combo" element={<PeppermintCombo />} />
        <Route path="/vitamin-power-leave-in" element={<VitaminPowerLeaveIn />} />
        <Route path="/scalp-and-skin" element={<ScalpandSkin />} />
        <Route path="/protein-boost-seal" element={<ProteinBoostSeal />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

