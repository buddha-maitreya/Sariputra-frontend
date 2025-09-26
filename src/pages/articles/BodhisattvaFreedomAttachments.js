import React from 'react';
import { Link } from 'react-router-dom';
import articleImage from '../../assets/images/ripples1.jpg';

const BodhisattvaFreedomAttachments = () => {
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
                alt="Ripples - Representing the freedom from attachments" 
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  The Bodhisattva's Freedom from Attachments
                </h1>
                <div className="flex items-center text-gray-600 mb-6">
                  <span className="text-2xl mr-3">🕊️</span>
                  <span>Bodhisattva Path</span>
                  <span className="mx-3">•</span>
                  <span>6 min read</span>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  The bodhisattva does not practice non-attachment by fleeing the world, but by moving through 
                  it with the weightlessness of wisdom—present to all, grasping nothing.
                </p>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <article className="bg-white rounded-lg shadow-sm p-8 prose prose-lg max-w-none">
            
            <p className="lead text-xl text-gray-700 mb-8">
              The bodhisattva does not practice non-attachment by fleeing the world, but by moving through 
              it with the weightlessness of wisdom. He is present to all, grasping nothing. Attachments, 
              which bind others to the cycles of satisfaction and frustration, slip from him like water 
              from a lotus leaf.
            </p>

            <h2>The Nature of Non-Attachment</h2>
            
            <p>
              Non-attachment is not indifference. It is not the numbness of one who has given up caring, 
              nor the cold withdrawal of one who fears engagement. Rather, it is the serene alertness of 
              one who sees clearly: that all formations are impermanent, that clinging brings suffering, 
              and that liberation lies not in having but in being.
            </p>

            <div className="bg-primary-50 p-6 rounded-lg my-6">
              <p className="text-gray-700 italic mb-0">
                The bodhisattva loves without possessing, enjoys without clinging, and grieves without 
                being submerged by sorrow. His heart is vast as the sky — touched by all weather but 
                never diminished by storms.
              </p>
            </div>

            <h2>Freedom from the Five Attachments</h2>

            <h3>Freedom from Attachment to Sensual Pleasures</h3>
            <p>
              The bodhisattva does not despise pleasure, but neither does he chase it. He knows that 
              every sensation arises and passes away like waves on water. If sweetness comes, he tastes 
              it fully; if it departs, he does not pursue it. His contentment does not depend upon 
              favorable conditions but springs from an inner wellspring that never runs dry.
            </p>

            <h3>Freedom from Attachment to Views and Opinions</h3>
            <p>
              Even his own convictions are held lightly. The bodhisattva does not mistake the finger 
              pointing at the moon for the moon itself, nor confuse concepts about reality with reality 
              itself. He may speak with certainty about the path, but inwardly he clings to no position. 
              This makes him infinitely flexible — able to meet each being in the language that being 
              can understand.
            </p>

            <div className="bg-secondary-50 p-6 rounded-lg my-6">
              <h4 className="text-lg font-semibold mb-3">The Middle Way of Views</h4>
              <p className="text-gray-700 mb-0">
                Like a skilled physician who prescribes different medicines for different ailments, 
                the bodhisattva offers different teachings to different temperaments, never attached 
                to any single formulation as ultimate.
              </p>
            </div>

            <h3>Freedom from Attachment to Rituals and Practices</h3>
            <p>
              Though the bodhisattva may engage in many practices — meditation, study, service — he 
              does not confuse means with ends. He knows that even the most sublime spiritual exercise 
              is like a raft: useful for crossing the river, but not something to carry upon one's 
              shoulders once the far shore is reached.
            </p>

            <h3>Freedom from Attachment to Self</h3>
            <p>
              Most profound of all is the bodhisattva's freedom from the notion of a separate, permanent 
              self that must be protected, aggrandized, or satisfied. He acts for the welfare of beings 
              without the thought "I am helping," gives without the notion "I am generous," and teaches 
              without the pride "I am wise." This absence of self-grasping is the source of his inexhaustible 
              energy and boundless compassion.
            </p>

            <h3>Freedom from Attachment to Nirvana</h3>
            <p>
              Paradoxically, the bodhisattva does not even cling to the goal of liberation itself. He 
              does not practice in order to escape samsara, but to serve beings within it. If clinging 
              to samsara is bondage, clinging to nirvana is equally a fetter. The bodhisattva walks 
              between both extremes, free in his very freedom.
            </p>

            <h2>The Fruits of Non-Attachment</h2>
            
            <div className="bg-green-50 p-6 rounded-lg my-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Seven Fruits of Freedom</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Fearlessness</strong> — Nothing can be lost that was never grasped</li>
                <li><strong>Spontaneity</strong> — Responses arise naturally from wisdom, not habit</li>
                <li><strong>Joy</strong> — The lightness of being unburdened by expectations</li>
                <li><strong>Compassion</strong> — Energy flows freely to where it is needed</li>
                <li><strong>Clarity</strong> — The mind reflects reality without distortion</li>
                <li><strong>Skillfulness</strong> — Actions are precise, neither excessive nor deficient</li>
                <li><strong>Peace</strong> — The deep rest of one who strives without straining</li>
              </ul>
            </div>

            <h2>The Practice of Letting Go</h2>
            
            <p>
              Non-attachment is not achieved through force but through understanding. The bodhisattva 
              does not wrench his desires away like pulling weeds, but watches them with patient attention 
              until their nature becomes clear. Like mist dissolving in sunlight, attachments fade naturally 
              when seen with the light of awareness.
            </p>

            <blockquote className="border-l-4 border-primary-200 pl-6 italic text-gray-700 my-8">
              <p className="text-lg">
                "What is held is not the world, but the idea of holding. What is released is not life, 
                but the tension of grasping. In this release, life flows more freely than ever before."
              </p>
            </blockquote>

            <h2>Maitreya as the Perfect Example</h2>
            
            <p>
              In Maitreya, we see the perfection of non-attachment. He dwells in the Tushita heaven 
              yet is not bound by its pleasures. He teaches countless beings yet holds no pride in his 
              accomplishments. He awaits his future Buddha-hood yet is fully present in each moment. 
              His very presence demonstrates that true freedom lies not in having nothing, but in 
              grasping nothing — remaining open, available, and responsive to the endless call of compassion.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reflection Questions</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• What are you most attached to, and how does this attachment affect your peace of mind?</li>
                <li>• How can you distinguish between healthy engagement and unhealthy clinging?</li>
                <li>• In what ways might letting go actually increase your capacity to love and serve?</li>
                <li>• How can you practice non-attachment without becoming indifferent or withdrawn?</li>
              </ul>
            </div>

          </article>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Bodhisattva Path</span>
            <span className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm">Non-Attachment</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Freedom</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Maitreya</span>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between">
            <Link
              to="/articles/excellences-bodhisattva"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              ← Previous Article
            </Link>
            <Link
              to="/articles/maitreya-crown-contemplation-wisdom"
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

export default BodhisattvaFreedomAttachments;