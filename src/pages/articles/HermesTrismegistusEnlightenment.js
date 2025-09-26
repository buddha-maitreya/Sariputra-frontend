import React from 'react';
import hlmencken from '../../assets/images/hlmencken.jpg';

const HermesTrismegistusEnlightenment = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={hlmencken} 
          alt="Ancient Wisdom" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
            The Enlightenment of Hermes Trismegistus: Master of Wisdom
          </h1>
        </div>
      </div>
      <div className="text-center">
        <p className="text-xs text-gray-500 py-2 italic">
          Image created by Fukina - AI Image Generation
        </p>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 italic">
            "As above, so below; as within, so without." These immortal words from the Emerald Tablet 
            reveal the profound enlightenment of Hermes Trismegistus, whose wisdom bridged the ancient 
            mysteries of Egypt with the philosophical foundations of Western thought.
          </p>

          <p>
            Hermes Trismegistus, the legendary "Thrice-Great Hermes," represents one of history's 
            most enigmatic wisdom figures. Whether understood as a historical sage, a composite 
            tradition, or an archetypal embodiment of divine knowledge, his teachings have profoundly 
            influenced Western esoteric philosophy for over two millennia.
          </p>

          <p>
            The Hermetic tradition attributes to this master a revolutionary understanding of reality's 
            fundamental interconnectedness. His enlightenment centered on the principle of correspondence—
            the recognition that universal laws operate consistently across all levels of existence, 
            from the cosmic to the psychological. This insight preceded and influenced later philosophical 
            developments in both Eastern and Western traditions.
          </p>

          <p>
            Central to Hermes' teaching was the doctrine of divine gnosis—direct, experiential knowledge 
            of the Divine Mind. Unlike purely intellectual philosophy, Hermetic wisdom emphasized 
            transformation through understanding. The enlightened sage was not merely one who possessed 
            knowledge but one whose very being reflected divine consciousness. This integration of 
            knowledge and being became a cornerstone of Western mystical philosophy.
          </p>

          <p>
            The Hermetic corpus reveals a sophisticated understanding of consciousness that anticipates 
            modern psychology. Hermes taught that the human mind, properly purified and aligned, could 
            transcend material limitations and participate directly in divine wisdom. This process 
            required both rational understanding and spiritual discipline—a synthesis that influenced 
            later philosophical traditions from Neoplatonism to Renaissance humanism.
          </p>

          <p>
            Perhaps most significantly, Hermes' enlightenment recognized the fundamental unity underlying 
            apparent multiplicity. His famous axiom "The All is Mind" suggested that consciousness itself 
            is the ground of being—a insight that would later find expression in various forms throughout 
            Western idealist philosophy. This recognition placed human consciousness at the center of 
            cosmic understanding while maintaining reverence for transcendent mystery.
          </p>

          <p>
            The enduring influence of Hermetic philosophy testifies to the depth of this ancient 
            enlightenment. From Islamic scholars who preserved these texts through the Dark Ages to 
            Renaissance magi who rediscovered them, from German idealists to contemporary consciousness 
            researchers, the wisdom of Hermes continues to illuminate the perennial questions of human 
            existence and cosmic purpose.
          </p>
        </div>
      </article>
    </div>
  );
};

export default HermesTrismegistusEnlightenment;