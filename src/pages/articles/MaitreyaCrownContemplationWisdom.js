import React from 'react';
import { Link } from 'react-router-dom';
import articleImage from '../../assets/images/sleepingmantis.jpg';

const MaitreyaCrownContemplationWisdom = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link to="/articles" className="text-primary-600 hover:text-primary-700">
              ← Back to Articles
            </Link>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img 
                src={articleImage} 
                alt="Sleeping Mantis - Representing deep contemplation and wisdom" 
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Maitreya and the Crown of Contemplation and Wisdom
                </h1>
                <div className="flex items-center text-gray-600 mb-6">
                  <span className="text-2xl mr-3">👑</span>
                  <span>Masters & Mystics</span>
                  <span className="mx-3">•</span>
                  <span>8 min read</span>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  The last two excellences crown the bodhisattva's path like twin jewels—contemplation as 
                  the deep stillness that sustains action, and wisdom as the clear seeing that guides compassion.
                </p>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <article className="bg-white rounded-lg shadow-sm p-8 prose prose-lg max-w-none">
            
            <p className="lead text-xl text-gray-700 mb-8">
              The last two excellences crown the bodhisattva's path like twin jewels. <strong>Contemplation</strong> 
              is the deep stillness that sustains action, and <strong>wisdom</strong> is the clear seeing that 
              guides compassion. In their union, the path becomes complete — not as an achievement to be grasped, 
              but as a living presence that flows through every thought, word, and deed.
            </p>

            <h2>The Excellence of Contemplation</h2>
            
            <p>
              Contemplation in the bodhisattva is not an escape from the world but a deepening into its true nature. 
              It has six aspects that reveal its fullness: its essence, its cause, its result, its activity, its 
              endowment, and its function.
            </p>

            <h3>The Nature and Cause of Contemplation</h3>
            <p>
              Contemplation in its essence is the mind's natural state of unity — gathered, alert, and undisturbed 
              by the endless fluctuations of thought and feeling. Its cause lies in the moral life: in living 
              without remorse, the heart naturally settles into peace. Without the agitation of guilt or the 
              restlessness of craving, the mind finds its center like water settling in a clear pool.
            </p>

            <div className="bg-primary-50 p-6 rounded-lg my-6">
              <p className="text-gray-700 italic mb-0">
                The bodhisattva's contemplation is not withdrawal but presence — so complete an attention 
                to the moment that all distractions fall away, leaving only luminous awareness.
              </p>
            </div>

            <h3>The Results of Contemplation</h3>
            <p>
              The fruits of contemplation are immediate and lasting. In this life, it brings forth the supernatural 
              powers — the ability to know the thoughts of others, to recall past lives, to perceive the heavenly 
              realms. But beyond these remarkable attainments lies something greater: the unshakeable joy that 
              arises from inner stillness, and the fearlessness born of seeing through the illusion of separateness.
            </p>

            <p>
              In future lives, contemplation flowers into rebirth in realms of light and bliss. Yet for the 
              bodhisattva, even these celestial rewards are not the goal. They are skillful means — conditions 
              that support the deeper work of liberation for all beings.
            </p>

            <h3>The Activity and Function of Contemplation</h3>
            <p>
              Contemplation serves both the bodhisattva and the world. For the practitioner, it completes the 
              accumulation of wisdom, transforming scattered knowledge into direct insight. For others, it 
              becomes a refuge — the bodhisattva's peaceful presence calms the turbulent hearts of those who 
              approach, and his words carry the authority of inner stillness.
            </p>

            <div className="bg-secondary-50 p-6 rounded-lg my-6">
              <h4 className="text-lg font-semibold mb-3">The Three Functions of Contemplation</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Personal Liberation:</strong> Freedom from the hindrances of desire, ill-will, 
                sloth, restlessness, and doubt</li>
                <li><strong>Supernatural Knowledge:</strong> The development of psychic powers that serve 
                the welfare of beings</li>
                <li><strong>Wisdom's Foundation:</strong> The stable base from which insight into reality can arise</li>
              </ul>
            </div>

            <h2>The Excellence of Wisdom</h2>
            
            <p>
              Wisdom is the crown jewel of the path, the excellence that transforms all others from ordinary 
              virtues into transcendent powers. Like contemplation, it unfolds in six dimensions, each revealing 
              its inexhaustible depth.
            </p>

            <h3>The Nature and Cause of Wisdom</h3>
            <p>
              Wisdom in its essence is clear seeing — not merely intellectual understanding, but the direct 
              perception of how things truly are. It sees the conventional world in all its detail and diversity, 
              yet simultaneously perceives the ultimate nature that underlies all appearances: the emptiness 
              of inherent existence, the interdependence of all phenomena, the luminous awareness that is mind's 
              true nature.
            </p>

            <p>
              Its cause is manifold: study that sharpens the intellect, reflection that deepens understanding, 
              and meditation that transforms knowledge into realization. But most crucial is the union with 
              compassion — for wisdom without love becomes cold philosophy, while love without wisdom becomes 
              mere sentiment.
            </p>

            <h3>The Results of Wisdom</h3>
            <p>
              The immediate result of wisdom is the cutting of doubt. The wise bodhisattva no longer wavers 
              about the nature of reality, the validity of the path, or the possibility of awakening. This 
              certainty is not rigid dogma but flowing confidence — like a skilled navigator who reads the 
              stars with perfect assurance yet remains alert to changing conditions.
            </p>

            <blockquote className="border-l-4 border-primary-200 pl-6 italic text-gray-700 my-8">
              <p className="text-lg">
                The ultimate result of wisdom is Buddhahood itself — the complete awakening that sees all 
                beings as they truly are: already perfect, already free, already displaying the Buddha-nature 
                that is their deepest identity.
              </p>
            </blockquote>

            <h3>The Activity and Function of Wisdom</h3>
            <p>
              Wisdom's activity is twofold: it completes the accumulation of merit by seeing the perfect purity 
              of every action performed with bodhicitta, and it fulfills the accumulation of wisdom by realizing 
              the ultimate nature of mind and phenomena. These twin accumulations are like the two wings of a 
              bird — both necessary for the flight to full enlightenment.
            </p>

            <p>
              Wisdom's function is liberation — not just personal freedom, but the capacity to liberate others. 
              The wise bodhisattva becomes a perfect teacher, offering exactly the medicine each being needs, 
              skillfully adapting the timeless truths to the language and temperament of each student.
            </p>

            <h2>The Union of Contemplation and Wisdom</h2>
            
            <div className="bg-green-50 p-6 rounded-lg my-8">
              <p className="text-gray-700 mb-4">
                Contemplation and wisdom are not separate excellences but complementary aspects of a single 
                realization:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Contemplation</strong> provides the stability for wisdom to arise</li>
                <li><strong>Wisdom</strong> gives contemplation its transformative power</li>
                <li>Together, they create the <em>calm-abiding</em> and <em>clear-seeing</em> that define 
                the enlightened mind</li>
              </ul>
            </div>

            <h2>Maitreya: The Living Crown</h2>
            
            <p>
              In Maitreya, contemplation and wisdom achieve their perfect expression. His contemplation is so 
              profound that he dwells in the joy of the fourth dhyana yet remains fully present to the needs 
              of beings. His wisdom is so complete that he perceives the ultimate and conventional truths 
              simultaneously, without the slightest contradiction or confusion.
            </p>

            <p>
              Maitreya's contemplation is not solitary bliss but compassionate presence. His wisdom is not 
              abstract knowledge but loving skillfulness. In him, we see the crown of the bodhisattva path — 
              the perfect integration of stillness and insight, of peace and understanding, of inner realization 
              and outer service.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <h3 className="text-lg font-semibold mb-3">The Three Aspects of Maitreya's Realization</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Historical:</strong> His past accumulation of merit and wisdom across countless lives</li>
                <li><strong>Present:</strong> His current residence in Tushita, teaching and preparing for Buddhahood</li>
                <li><strong>Future:</strong> His destined awakening as the next Buddha, bringing the Dharma to 
                a world ready for renewal</li>
              </ul>
            </div>

            <h2>The Path Forward</h2>
            
            <p>
              For those who would follow the bodhisattva way, contemplation and wisdom are not distant goals 
              but present possibilities. Every moment of mindfulness plants the seed of contemplation. Every 
              flash of insight into impermanence, interdependence, or the nature of mind nurtures the growth 
              of wisdom.
            </p>

            <p>
              The crown of contemplation and wisdom is not reserved for the few but offered to all. In quiet 
              moments of reflection, in sudden understanding that pierces through confusion, in the peace that 
              settles over a mind aligned with truth — here, the crown begins to form.
            </p>

            <div className="bg-purple-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contemplative Practice</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• How can you cultivate the stability needed for deeper insight to arise?</li>
                <li>• What is the difference between intellectual knowledge and direct realization in your experience?</li>
                <li>• How might contemplation become service rather than escape from the world?</li>
                <li>• In what ways can wisdom and compassion be unified in your daily life?</li>
              </ul>
            </div>

          </article>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Masters & Mystics</span>
            <span className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm">Contemplation</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Wisdom</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Maitreya</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Meditation</span>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between">
            <Link
              to="/articles/bodhisattva-freedom-attachments"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              ← Previous Article
            </Link>
            <Link
              to="/articles/maitreya-perfections-generosity-morality-tolerance-effort"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Next Article →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaitreyaCrownContemplationWisdom;