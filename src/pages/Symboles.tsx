import React from 'react';
import { Compass } from 'lucide-react';

const Symboles: React.FC = () => {
  const symboles = [
    {
      nom: "Pentagramme",
      signification: "Représente les cinq éléments (Terre, Air, Feu, Eau, Esprit) et la protection.",
      origine: "Utilisé depuis l'Antiquité dans diverses traditions mystiques."
    },
    {
      nom: "Ankh",
      signification: "Symbole de vie éternelle et de connexion entre le terrestre et le divin.",
      origine: "Égypte ancienne"
    },
    {
      nom: "Œil d'Horus",
      signification: "Protection, santé, clairvoyance et pouvoir royal.",
      origine: "Égypte ancienne"
    },
    {
      nom: "Triquetra",
      signification: "Trinité, interconnexion des trois mondes ou des trois aspects du divin.",
      origine: "Celtique, nordique et chrétienne"
    },
    {
      nom: "Ouroboros",
      signification: "Cycle éternel de la vie, la mort et la renaissance.",
      origine: "Égypte ancienne et alchimie médiévale"
    },
    {
      nom: "Croix Solaire",
      signification: "Équilibre des forces cosmiques et cycles saisonniers.",
      origine: "Peuples pré-chrétiens d'Europe"
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="flex items-center mb-8">
        <Compass className="h-8 w-8 text-blue-400 mr-3" />
        <h1 className="section-title mb-0">Symboles Sacrés</h1>
      </div>
      
      <div className="mystical-card mb-8">
        <h2 className="font-cinzel text-xl text-white mb-4">Le Langage Secret de l'Univers</h2>
        <p className="text-gray-300">
          Les symboles sont des condensés de signification qui transcendent le langage ordinaire. Ils parlent directement à notre inconscient et aux forces subtiles qui nous entourent. À travers l'histoire, les symboles sacrés ont été utilisés comme outils de pouvoir, de protection et de transformation. Chaque symbole est une clé qui ouvre une porte vers une réalité plus profonde.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {symboles.map((symbole, index) => (
          <div key={index} className="mystical-card">
            <h3 className="font-cinzel text-lg text-white mb-2">{symbole.nom}</h3>
            <p className="text-gray-300 mb-3">{symbole.signification}</p>
            <p className="text-sm text-purple-400">Origine: {symbole.origine}</p>
          </div>
        ))}
      </div>
      
      <div className="mystical-card p-8">
        <h2 className="font-cinzel text-2xl text-white mb-6 text-center">Utiliser les Symboles dans Votre Pratique</h2>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-4">
            Les symboles sacrés peuvent être intégrés dans votre pratique spirituelle de diverses manières. Voici quelques suggestions :
          </p>
          
          <ul className="text-gray-300 space-y-4 ml-6 list-disc">
            <li>
              <strong className="font-cinzel text-white">Méditation</strong> - Contemplez un symbole pendant votre méditation pour absorber ses qualités et ses enseignements.
            </li>
            
            <li>
              <strong className="font-cinzel text-white">Rituels</strong> - Incorporez des symboles appropriés dans vos rituels pour amplifier leurs effets et canaliser des énergies spécifiques.
            </li>
            
            <li>
              <strong className="font-cinzel text-white">Talismans</strong> - Créez ou portez des talismans gravés avec des symboles protecteurs ou manifestant une intention particulière.
            </li>
            
            <li>
              <strong className="font-cinzel text-white">Art Sacré</strong> - Dessinez ou peignez des symboles comme pratique méditative et pour imprégner votre espace de leurs énergies.
            </li>
            
            <li>
              <strong className="font-cinzel text-white">Visualisation</strong> - Pendant vos pratiques énergétiques, visualisez des symboles de guérison ou de protection autour de vous ou des autres.
            </li>
          </ul>
          
          <p className="text-gray-300 mt-6">
            Rappelez-vous que les symboles prennent leur pouvoir de l'intention et de l'énergie que vous y mettez. Prenez le temps de vous connecter profondément avec chaque symbole que vous utilisez dans votre pratique.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Symboles;