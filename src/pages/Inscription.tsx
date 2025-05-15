import React, { useState } from 'react';
import { Check } from 'lucide-react';

const Inscription: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    adresse: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };
  
  if (isSubmitted) {
    return (
      <div className="animate-fade-in max-w-md mx-auto mystical-card text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-6">
          <Check className="h-8 w-8 text-green-400" />
        </div>
        <h2 className="font-cinzel text-2xl text-white mb-4">Inscription Réussie</h2>
        <p className="text-gray-300 mb-6">
          Nous vous souhaitons la bienvenue dans le cercle de Molli Spirit. Vous recevrez bientôt un message avec vos informations d'accès.
        </p>
        <p className="text-purple-300 italic">
          "Que la lumière mystique guide vos pas sur le chemin de l'illumination."
        </p>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <h1 className="section-title text-center">Devenir Membre de Molli Spirit</h1>
      
      <div className="max-w-2xl mx-auto">
        <div className="mystical-card mb-8">
          <h2 className="font-cinzel text-xl text-white mb-4">Rejoignez Notre Cercle Mystique</h2>
          <p className="text-gray-300 mb-2">
            Entrez dans un monde où la magie et la spiritualité se rencontrent. En devenant membre de Molli Spirit, vous accédez à :
          </p>
          <ul className="text-gray-300 mb-4 space-y-2">
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✦</span>
              <span>Des rituels et pratiques ésotériques exclusifs</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✦</span>
              <span>Des consultations personnalisées avec nos médiums</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✦</span>
              <span>Un accès à notre bibliothèque de grimoires et textes anciens</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">✦</span>
              <span>Des événements mystiques réservés aux membres</span>
            </li>
          </ul>
        </div>
        
        <form onSubmit={handleSubmit} className="mystical-card">
          <div className="mb-6">
            <label htmlFor="nom" className="block text-gray-200 mb-2 font-cinzel">
              Nom Complet
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              required
              className="mystical-input w-full"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Votre nom complet"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-200 mb-2 font-cinzel">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mystical-input w-full"
              value={formData.email}
              onChange={handleChange}
              placeholder="votre.email@exemple.com"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="telephone" className="block text-gray-200 mb-2 font-cinzel">
              Numéro de Téléphone
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              required
              className="mystical-input w-full"
              value={formData.telephone}
              onChange={handleChange}
              placeholder="Votre numéro de téléphone"
            />
          </div>
          
          <div className="mb-8">
            <label htmlFor="adresse" className="block text-gray-200 mb-2 font-cinzel">
              Adresse
            </label>
            <textarea
              id="adresse"
              name="adresse"
              required
              rows={3}
              className="mystical-input w-full"
              value={formData.adresse}
              onChange={handleChange}
              placeholder="Votre adresse complète"
            />
          </div>
          
          <div className="text-center">
            <button type="submit" className="mystical-button px-8 py-3">
              Soumettre ma Candidature
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inscription;