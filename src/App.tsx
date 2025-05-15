import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MoonIcon } from 'lucide-react';

// Pages
import Accueil from './pages/Accueil';
import Grimoire from './pages/Grimoire';
import Oracles from './pages/Oracles';
import Rituels from './pages/Rituels';
import Symboles from './pages/Symboles';
import Inscription from './pages/Inscription';

// Secondary Pages
import Tarot from './pages/secondaires/Tarot';
import Runes from './pages/secondaires/Runes';
import Voyance from './pages/secondaires/Voyance';
import Reves from './pages/secondaires/Reves';
import Sortileges from './pages/secondaires/Sortileges';

// Components
import Layout from './components/Layout';
import Welcome from './components/Welcome';

function App() {
  const [showWelcome, setShowWelcome] = React.useState(true);
  
  if (showWelcome) {
    return <Welcome onEnter={() => setShowWelcome(false)} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="grimoire" element={<Grimoire />} />
          <Route path="oracles" element={<Oracles />} />
          <Route path="rituels" element={<Rituels />} />
          <Route path="symboles" element={<Symboles />} />
          <Route path="inscription" element={<Inscription />} />
          
          {/* Secondary routes */}
          <Route path="tarot" element={<Tarot />} />
          <Route path="runes" element={<Runes />} />
          <Route path="voyance" element={<Voyance />} />
          <Route path="reves" element={<Reves />} />
          <Route path="sortileges" element={<Sortileges />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;