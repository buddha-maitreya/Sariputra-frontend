import React from 'react';
import { Link } from 'react-router-dom';
import articleImage from '../../assets/images/artofbliss.jpg';

const ExcellencesBodhisattva = () => {
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
                alt="Art of Bliss - Representing the excellences of the bodhisattva" 
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  The Excellences of the Bodhisattva
                </h1>
                <div className="flex items-center text-gray-600 mb-6">
                  <span className="text-2xl mr-3">🤲</span>
                  <span>Bodhisattva Path</span>
                  <span className="mx-3">•</span>
                  <span>7 min read</span>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  The path of the bodhisattva is marked not by ordinary virtue, but by excellences that resound 
                  through the three enlightenments, each transformed beyond measure when suffused with compassion 
                  and joined with intuitive wisdom.
                </p>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <article className="bg-white rounded-lg shadow-sm p-8 prose prose-lg max-w-none">
            
            <p className="lead text-xl text-gray-700 mb-8">
              The path of the bodhisattva is marked not by ordinary virtue, but by excellences that resound 
              through the three enlightenments. These excellences are <strong>generosity, morality, tolerance, 
              effort, contemplation, and wisdom</strong> — each transformed beyond measure when suffused with 
              compassion and joined with intuitive wisdom. They are inexhaustible because they do not seek 
              reward, do not collapse into selfish aims, and do not vanish even in the stillness of nirvana.
            </p>

            <h2>The Six Excellences</h2>
            
            <h3>The Excellence of Generosity</h3>
            <p>
              The excellence of generosity is shown in the bodhisattva's willingness to surrender everything, 
              even life itself, without expectation of return. It is magnificence without calculation. To meet 
              a petitioner is not a burden but a joy; the donor is more delighted to give than the recipient 
              is to receive.
            </p>

            <div className="bg-primary-50 p-6 rounded-lg my-6">
              <p className="text-gray-700 italic mb-0">
                Such is the extravagance of compassion — the one who loses all gains the greater wealth of freedom, 
                while the one who gives his body, his treasure, and his time feels richer than one who hoards them.
              </p>
            </div>

            <h3>The Excellence of Morality</h3>
            <p>
              The excellence of morality lies not in fearful restraint nor in the hope of heaven, but in the 
              vast embrace of practices that protect and uplift all beings. The bodhisattva does not cling 
              even to the heavens when they appear, but moves through them unbound. Morality in this sense 
              is not a cage but a river of protection, flowing outward to shield others from harm and inward 
              to purify every act of body, speech, and mind.
            </p>

            <h3>The Excellence of Tolerance</h3>
            <p>
              The excellence of tolerance is unexcelled because the bodhisattva sees injury as occasion for 
              patience and suffering as material for compassion. For such a one, there is nothing to "endure" 
              — pain is transmuted into the very path, a help rather than a hindrance. The blows of others 
              are not counted as debts but as gifts sharpening endurance and dissolving the illusion of self.
            </p>

            <h3>The Excellence of Effort</h3>
            <p>
              The excellence of effort is armor-like, tireless, and fearless. It does not falter before 
              addictions, wealth, weariness, or even the pride of accomplishment. For the bodhisattva, effort 
              is joy: a great, unshakeable striving to extinguish the flames of craving in all beings. Effort 
              of this kind is never content with a small victory, but presses on until the liberation of every last soul.
            </p>

            <h3>The Excellence of Contemplation</h3>
            <p>
              The excellence of contemplation lies in its depth and in its generosity. While mundane persons 
              taste only fleeting bliss and solitary sages may rest in nirvana, the bodhisattva enters 
              concentration to harvest its bliss yet refuses to abandon the world. He sustains himself on 
              profound absorption, but remains present even in lowly conditions out of compassion for those 
              still lost in the cycle. His meditation is not escape but service.
            </p>

            <h3>The Excellence of Wisdom</h3>
            <p>
              The excellence of wisdom shines like the sun. It knows all things in their conventional diversity 
              and in their ultimate suchness, yet clings to none. Not even nirvana tempts the bodhisattva's 
              mind, for wisdom joined to compassion sees that to forsake beings would itself be delusion. This 
              wisdom is without rival, dispelling ignorance as effortlessly as light dissolves darkness.
            </p>

            <h2>The Four Marks of Excellence</h2>
            <div className="bg-secondary-50 p-6 rounded-lg my-8">
              <p className="text-gray-700 mb-4">
                Summed together, the excellences have four marks:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Magnificence</strong> — Each is great in stature</li>
                <li><strong>Freedom from exploitation</strong> — Never self-serving</li>
                <li><strong>Greatness of aim</strong> — Directed toward the awakening of all</li>
                <li><strong>Inexhaustibility</strong> — Drawing upon the infinite</li>
              </ul>
            </div>

            <h2>The Living Example</h2>
            <blockquote className="border-l-4 border-primary-200 pl-6 italic text-gray-700 my-8">
              <p className="text-lg">
                Thus Maitreya embodies the excellences: giving as though inexhaustible, keeping morality 
                unstained by fear, enduring with joy, striving without fatigue, meditating without withdrawal, 
                and knowing without attachment. In him, the excellences are not ideals but living forces, 
                shining as a model for all who would walk the bodhisattva way.
              </p>
            </blockquote>

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contemplation Points</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Which excellence calls to you most strongly in your current life situation?</li>
                <li>• How can you transform ordinary virtue into excellence through compassion and wisdom?</li>
                <li>• What would it mean to practice these excellences without seeking reward?</li>
                <li>• How might your meditation become service rather than escape?</li>
              </ul>
            </div>

          </article>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Bodhisattva Path</span>
            <span className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm">Six Excellences</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Maitreya</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Wisdom</span>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between">
            <Link
              to="/articles/social-practices-bodhisattva"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              ← Previous Article
            </Link>
            <Link
              to="/articles/bodhisattva-freedom-attachments"
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

export default ExcellencesBodhisattva;