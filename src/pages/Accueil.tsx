import React from 'react';
import { Link } from 'react-router-dom';
import { MoonIcon, Sparkles, BookOpen, Compass, Flame } from 'lucide-react';

const Accueil: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-xl mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-purple-900/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')] bg-cover bg-center"></div>
        
        <div className="relative z-20 py-16 px-4 text-center">
          <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Accueil Mystique
          </h1>
          <p className="text-purple-100 max-w-2xl mx-auto text-lg md:text-xl mb-8">
            Explorez les mystères de l'univers et découvrez les secrets anciens avec Molli Spirit
          </p>
          <Link to="/inscription" className="mystical-button text-lg">
            Rejoignez-nous
          </Link>
        </div>
      </section>

      {/* Main Sections */}
      <section className="mb-12">
        <h2 className="section-title">Nos Domaines Mystiques</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="mystical-card transform transition-transform hover:scale-105">
            <BookOpen className="h-10 w-10 text-purple-400 mb-3" />
            <h3 className="font-cinzel text-xl text-white mb-2">Grimoire Numérique</h3>
            <p className="text-gray-300 mb-4">Consultez notre collection de connaissances ésotériques.</p>
            <Link to="/grimoire" className="text-purple-300 hover:text-purple-200 font-cinzel text-sm">
              Explorer &rarr;
            </Link>
          </div>
          
          <div className="mystical-card transform transition-transform hover:scale-105">
            <Sparkles className="h-10 w-10 text-yellow-400 mb-3" />
            <h3 className="font-cinzel text-xl text-white mb-2">Oracles et Divinations</h3>
            <p className="text-gray-300 mb-4">Découvrez votre avenir à travers nos arts divinatoires.</p>
            <Link to="/oracles" className="text-purple-300 hover:text-purple-200 font-cinzel text-sm">
              Consulter &rarr;
            </Link>
          </div>
          
          <div className="mystical-card transform transition-transform hover:scale-105">
            <Flame className="h-10 w-10 text-orange-400 mb-3" />
            <h3 className="font-cinzel text-xl text-white mb-2">Rituels et Invocations</h3>
            <p className="text-gray-300 mb-4">Apprenez des rituels puissants pour transformer votre vie.</p>
            <Link to="/rituels" className="text-purple-300 hover:text-purple-200 font-cinzel text-sm">
              Pratiquer &rarr;
            </Link>
          </div>
          
          <div className="mystical-card transform transition-transform hover:scale-105">
            <Compass className="h-10 w-10 text-blue-400 mb-3" />
            <h3 className="font-cinzel text-xl text-white mb-2">Symboles Sacrés</h3>
            <p className="text-gray-300 mb-4">Comprenez le langage caché des symboles mystiques.</p>
            <Link to="/symboles" className="text-purple-300 hover:text-purple-200 font-cinzel text-sm">
              Décoder &rarr;
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="mystical-card text-center py-10">
        <h2 className="font-cinzel text-2xl text-white mb-4">Rejoignez le Cercle des Initiés</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6">
          Devenez membre de Molli Spirit et accédez à des connaissances exclusives, des rituels privés et une communauté d'âmes éveillées.
        </p>
        <Link to="/inscription" className="mystical-button">
          Commencer Votre Voyage Spirituel
        </Link>
      </section>
    </div>
  );
};

export default Accueil;