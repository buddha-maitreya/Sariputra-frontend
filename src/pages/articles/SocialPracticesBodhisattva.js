import React from 'react';
import { Link } from 'react-router-dom';
import articleImage from '../../assets/images/universaltrain1.jpg';

const SocialPracticesBodhisattva = () => {
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
                alt="Universal Train - Representing the journey of social practices" 
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  The Social Practices of the Bodhisattva
                </h1>
                <div className="flex items-center text-gray-600 mb-6">
                  <span className="text-2xl mr-3">🤲</span>
                  <span>Bodhisattva Path</span>
                  <span className="mx-3">•</span>
                  <span>6 min read</span>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  The bodhisattva does not walk a solitary path. His awakening is not sealed in meditation alone, 
                  but expressed in the gentle art of human conduct through the four social practices that draw beings 
                  into the orbit of wisdom.
                </p>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <article className="bg-white rounded-lg shadow-sm p-8 prose prose-lg max-w-none">
            
            <p className="lead text-xl text-gray-700 mb-8">
              The bodhisattva does not walk a solitary path. His awakening is not sealed in meditation alone, 
              but expressed in the gentle art of human conduct. These are called the four social practices: 
              <strong>generosity, pleasant speech, the accomplishment of aims, and consistency of behavior</strong>. 
              Together, they form the skillful means by which the bodhisattva draws beings into the orbit of the Dharma.
            </p>

            <h2>The Four Social Practices</h2>
            
            <h3>1. Generosity</h3>
            <p>
              Generosity is already known — the opening of the hand, the surrender of possessions, the gift of 
              fearlessness, and the giving of teaching. But the other three deepen this art of gathering.
            </p>

            <h3>2. Pleasant Speech</h3>
            <p>
              Pleasant speech is not flattery, but words spoken like clear water: refreshing, truthful, 
              consoling, and uplifting. Such speech unlocks the hearts of the confused and makes the Dharma 
              understandable to the unlearned.
            </p>

            <h3>3. The Accomplishment of Aims</h3>
            <p>
              The accomplishment of aims is the compassionate willingness to help beings achieve what they 
              seek — to bind their hopes to virtue and impel them toward freedom.
            </p>

            <h3>4. Consistency of Behavior</h3>
            <p>
              And consistency of behavior is the sealing mark: the bodhisattva practices what he teaches, 
              lives what he proclaims, and becomes himself the evidence of the Dharma's reality.
            </p>

            <div className="bg-primary-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">The Art of Guidance</h3>
              <p className="text-gray-700 mb-0">
                Thus, these four practices are arts of guidance. Generosity makes beings receptive, softening their hardness. 
                Pleasant words inspire devotion, washing away doubt. Helping others in their aims makes them practitioners, 
                turning intention into action. And consistency of conduct purifies them through the mirror of example, 
                for when one sees another live the Dharma, faith becomes unshakable.
              </p>
            </div>

            <h2>The Two-Fold Teaching</h2>
            <p>
              The Lord taught that these four can be grouped into two: <strong>bringing beings together by means 
              of worldly goods, and bringing them together by means of the teaching</strong>. The first attracts 
              the body, the second liberates the mind.
            </p>

            <p>
              Yet the teaching itself has three facets: the objective, which pleasant speech conveys; the practical, 
              which fulfilling aims enacts; and the purificative, which consistent behavior embodies. Thus, the 
              four condense into two, and the two expand into three — all flowing together as the one art of 
              compassionate relationship.
            </p>

            <h2>Grades of Social Practice</h2>
            <p>
              Social practice itself has grades: <strong>inferior, mediocre, and superior</strong>. Among the immature, 
              it may be clumsy or ineffective, even "generally useless." Among those ripening on the bodhisattva 
              stages, it is "generally useful," bearing fruit in most encounters. But among the great bodhisattvas, 
              from the eighth stage onward, it becomes "totally successful": every meeting with them becomes 
              transformative, every word and gesture a catalyst of awakening.
            </p>

            <blockquote className="border-l-4 border-primary-200 pl-6 italic text-gray-700 my-8">
              <p className="mb-4">
                "For this reason, the Buddhas call the social practices the 'art of happiness.' They are the 
                gathering power by which retinues are drawn, not in servitude but in fellowship, not in 
                compulsion but in joy."
              </p>
            </blockquote>

            <p>
              All beings, past, present, and future, are gathered by this art, for it is nothing less than 
              the path of their evolutionary progress.
            </p>

            <h2>The Unattached Heart</h2>
            <p>
              The bodhisattva who rests in these practices does not cling even to wealth, nor to the serenity 
              of restraint, nor to the pride of effort. He goes beyond the very categories of existence, objects, 
              and causes — not abandoning the world, but embracing beings as companions.
            </p>

            <p className="text-lg font-medium text-gray-800 mt-8">
              His mind is unattached, his heart unshaken, his speech healing, and his example radiant. 
              Thus he gathers the world without force, as the sun gathers life to itself simply by shining.
            </p>

            <div className="bg-secondary-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contemplation Points</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• How can you practice pleasant speech in your daily interactions?</li>
                <li>• What does it mean to help others accomplish their aims while leading them toward virtue?</li>
                <li>• How does consistency between your words and actions serve as a teaching?</li>
                <li>• In what ways can you gather others "without force, as the sun gathers life to itself simply by shining"?</li>
              </ul>
            </div>

          </article>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Bodhisattva Path</span>
            <span className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm">Social Practice</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Compassion</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Wisdom</span>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between">
            <Link
              to="/articles"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              ← All Articles
            </Link>
            <Link
              to="/ask"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Ask Sariputra →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPracticesBodhisattva;