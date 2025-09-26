import React from 'react';
import FukinA from '../../assets/images/FukinA.jpg';

const RenaissanceProtestantEnlightenment = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={FukinA} 
          alt="Renaissance Enlightenment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
            The Renaissance, Reformation, and the Birth of Western Enlightenment
          </h1>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 italic">
            "Dare to know!" Kant's famous motto of the Enlightenment echoed a revolution that began 
            centuries earlier, when the Renaissance rediscovered ancient wisdom and the Protestant 
            Reformation shattered medieval certainties, together igniting the intellectual fires 
            that would illuminate the modern world.
          </p>

          <h2>The Renaissance Awakening</h2>
          <p>
            The Renaissance (roughly 1350-1650) represented humanity's reawakening to its own 
            intellectual potential. The recovery of classical texts—Plato's dialogues, Hermetic 
            treatises, and Aristotelian works—exposed European minds to sophisticated philosophical 
            systems that had been largely forgotten during the medieval period. This rediscovery 
            challenged the intellectual monopoly of scholastic theology and opened new pathways 
            for human understanding.
          </p>

          <p>
            Renaissance humanists like Pico della Mirandola proclaimed the dignity of human nature 
            and humanity's capacity for self-transformation. This philosophical shift from viewing 
            humans as fallen creatures to recognizing them as beings capable of approaching divine 
            wisdom laid crucial groundwork for Enlightenment confidence in human reason and progress.
          </p>

          <h2>The Protestant Catalyst</h2>
          <p>
            While the Protestant Reformation (beginning 1517) was primarily religious, its intellectual 
            consequences were profound. Luther's principle of sola scriptura—scripture alone—inadvertently 
            established the precedent of individual interpretation against institutional authority. 
            This radical notion that individuals could access truth directly, without ecclesiastical 
            mediation, planted seeds that would flower into Enlightenment emphasis on reason and 
            individual judgment.
          </p>

          <p>
            The fragmentation of Christian unity also revealed that competing authorities could claim 
            divine sanction with equal fervor. This recognition gradually led thinkers to seek 
            alternative sources of certainty—ultimately turning to reason, empirical observation, 
            and natural law as foundations for knowledge and social organization.
          </p>

          <h2>The Philosophical Bridge</h2>
          <p>
            The transition from Renaissance humanism through Protestant individualism to Enlightenment 
            rationalism was neither smooth nor inevitable, but key figures built intellectual bridges. 
            <strong>René Descartes</strong> (1596-1650) established methodical doubt as a philosophical 
            tool, seeking certainty through reason alone. <strong>Francis Bacon</strong> (1561-1626) 
            promoted empirical investigation as the path to knowledge. <strong>Thomas Hobbes</strong> 
            (1588-1679) applied rational analysis to political organization, arguing for social 
            contracts based on reason rather than divine right.
          </p>

          <p>
            <strong>John Locke</strong> (1632-1704) synthesized these developments, arguing that 
            human understanding derives from sensory experience and that legitimate government 
            requires consent of the governed. His empiricism and political philosophy directly 
            influenced Enlightenment thinkers across Europe and America.
          </p>

          <h2>The Enlightenment Synthesis</h2>
          <p>
            The 18th-century Enlightenment represented the mature flowering of seeds planted during 
            the Renaissance and Reformation. <strong>Voltaire</strong> championed religious tolerance 
            and rational critique of superstition. <strong>David Hume</strong> pushed empiricism to 
            its logical limits, questioning the foundations of knowledge itself. <strong>Immanuel Kant</strong> 
            attempted to synthesize rationalist and empiricist traditions while establishing ethics 
            on purely rational grounds.
          </p>

          <p>
            The French Encyclopédistes, led by <strong>Diderot</strong> and <strong>d'Alembert</strong>, 
            systematized human knowledge and promoted the notion that reason and education could 
            perfect human society. This optimistic rationalism became the driving force behind 
            democratic revolutions and scientific progress.
          </p>

          <p>
            Thus, the Protestant challenge to authority, combined with Renaissance confidence in 
            human potential, created the intellectual conditions necessary for the Enlightenment's 
            bold assertion that reason could illuminate all domains of human experience and create 
            a more just and rational world.
          </p>
        </div>
      </article>
    </div>
  );
};

export default RenaissanceProtestantEnlightenment;