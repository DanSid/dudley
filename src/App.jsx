import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import PCAMoistureRetainer from './pages/PCAMoistureRetainer'
import PeppermintCombo from './pages/PeppermintCombo'
import VitaminPowerLeaveIn from './pages/VitaminPowerLeaveIn'
import PeppermintShampoo from './pages/PeppermintShampoo'
import PeppermintConditioner from './pages/PeppermintConditioner'
import LandingIndex from './pages/LandingIndex'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingIndex />} />
        <Route path="/pca-moisture-retainer" element={<PCAMoistureRetainer />} />
        <Route path="/peppermint-combo" element={<PeppermintCombo />} />
        <Route path="/vitamin-power-leave-in" element={<VitaminPowerLeaveIn />} />
        <Route path="/peppermint-shampoo" element={<PeppermintShampoo />} />
        <Route path="/peppermint-conditioner" element={<PeppermintConditioner />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
