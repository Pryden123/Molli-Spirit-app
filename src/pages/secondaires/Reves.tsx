import React from 'react';

function Reves() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Interprétation des Rêves</h1>
      <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8">
        <p className="text-lg mb-6">
          Explorez le monde mystérieux de vos rêves et découvrez leur signification profonde.
        </p>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-3">Journal des Rêves</h2>
          <p className="text-gray-700">
            Commencez votre voyage dans l'interprétation des rêves en notant vos expériences nocturnes
            et en découvrant les messages cachés qu'ils contiennent.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Reves;