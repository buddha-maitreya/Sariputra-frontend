import React from 'react';
import { Link } from 'react-router-dom';
import articlesHeaderImage from '../assets/images/oceanofbecoming.jpg';

const Articles = () => {
  const articleCategories = [
    {
      title: 'Masters & Mystics',
      description: 'Explore the lives, teachings, and wisdom of spiritual masters throughout history',
      icon: '🧘',
      articles: [
        { 
          title: 'Maitreya and the Crown of Contemplation and Wisdom', 
          slug: 'maitreya-crown-contemplation-wisdom', 
          preview: 'The last two excellences crown the bodhisattva\'s path like twin jewels—contemplation as the deep stillness that sustains action, and wisdom as the clear seeing that guides compassion...',
          readTime: '8 min'
        },
        { 
          title: 'Rumi: The Path of Ecstatic Love and Divine Union', 
          slug: 'rumi-path-love', 
          preview: 'Let yourself be silently drawn by the strange pull of what you really love. Rumi\'s revolutionary approach demonstrates that ecstatic love can serve as the most direct path to divine union...',
          readTime: '10 min'
        },
        { 
          title: 'Lao Tzu and the Art of Wu Wei: Effortless Action and Natural Harmony', 
          slug: 'lao-tzu-wu-wei', 
          preview: 'The sage does not attempt anything very big, and thus achieves greatness. Discover the profound wisdom of wu wei—accomplishing everything by forcing nothing...',
          readTime: '9 min'
        }
      ]
    },
    {
      title: 'Philosophy',
      description: 'Deep philosophical insights on existence, consciousness, and the nature of reality',
      icon: '🤔',
      articles: [
        { 
          title: 'Maitreya and the Perfections of Generosity, Morality, Tolerance, and Effort', 
          slug: 'maitreya-perfections-generosity-morality-tolerance-effort', 
          preview: 'The Bodhisattva\'s path is not merely a string of virtues but a living architecture of realization, where each excellence unfolds in six precise dimensions...',
          readTime: '9 min'
        },
        { 
          title: 'The Enlightenment of Hermes Trismegistus: Master of Wisdom', 
          slug: 'hermes-trismegistus-enlightenment', 
          preview: 'As above, so below. The legendary Thrice-Great Hermes bridged ancient Egyptian mysteries with Western philosophy, teaching the fundamental interconnectedness of all reality...',
          readTime: '8 min'
        },
        { 
          title: 'The Renaissance, Reformation, and the Birth of Western Enlightenment', 
          slug: 'renaissance-protestant-enlightenment', 
          preview: 'How the rediscovery of ancient wisdom and Protestant challenge to authority ignited the intellectual fires that would illuminate the modern world...',
          readTime: '10 min'
        },
        { 
          title: 'Modern Philosophy: Key Figures and Their Revolutionary Contributions', 
          slug: 'modern-philosophy-key-figures', 
          preview: 'From Hegel\'s dialectical method to Wittgenstein\'s language games, explore how modern philosophy\'s giants dismantled traditional assumptions about reality and human nature...',
          readTime: '12 min'
        }
      ]
    },
    {
      title: 'Spirituality',
      description: 'Meditation, yoga, mindfulness, and practices for inner transformation',
      icon: '🕉️',
      articles: [
        { 
          title: 'The Ocean of Becoming: How Lack of Stillness Creates Spiritual Chaos', 
          slug: 'spirituality-stillness-modern-chaos', 
          preview: 'In our hyperconnected age, we have forgotten the ancient art of being still. Most wander aimlessly in the ocean of becoming, mistaking movement for progress, noise for wisdom...',
          readTime: '12 min'
        },
        { 
          title: 'The Sacred Art of Mindfulness in Modern Life', 
          slug: 'mindfulness-modern-life', 
          preview: 'Wherever you are, be there totally. Discover how mindfulness transforms ordinary experience into sacred awareness and daily life into spiritual practice...',
          readTime: '9 min'
        },
        { 
          title: 'Reclaiming the Sacred Feminine: Wisdom for Healing and Wholeness', 
          slug: 'sacred-feminine-wisdom', 
          preview: 'The future depends on the recovery of the sacred feminine. Explore the universal principles of receptive wisdom, cyclical understanding, and embodied spirituality...',
          readTime: '10 min'
        },
        { 
          title: 'The Five Foundations of Realization', 
          slug: 'five-foundations-realization', 
          preview: 'Realization is not a sudden lightning strike but a weaving of five strands—conditions, conscientiousness, aspiration, liberative skill, and mastery—each strengthening the others until the whole becomes unbreakable...',
          readTime: '11 min'
        },
        { 
          title: 'The Six Bridges Beyond the Shore', 
          slug: 'six-bridges-beyond-shore', 
          preview: 'There are six bridges a determined seeker must cross to leave behind the narrowness of self and step into the vast work of serving all. Each bridge strengthens the others in the journey toward awakening...',
          readTime: '12 min'
        },
        { 
          title: 'Unshakable, Tireless, and Wise: The Inner Refinement of the Advanced Seeker', 
          slug: 'unshakable-tireless-wise', 
          preview: 'The advanced seeker does not tremble before adversity. Discover the three essential qualities that distinguish those who walk the path of universal service with unwavering commitment...',
          readTime: '10 min'
        },
        { 
          title: 'The Collapse of Conscience and the Fall from Grace', 
          slug: 'collapse-conscience-fall-grace', 
          preview: 'When spiritual seekers abandon their sacred commitments, the consequences ripple across both seen and unseen realms. Understanding the vital role of conscience in spiritual progress...',
          readTime: '9 min'
        },
        { 
          title: 'The Conscience of the Brave: A Portrait of the Seeker\'s Inner Refinement', 
          slug: 'conscience-of-brave', 
          preview: 'Within the noble path of universal service, conscience becomes the hidden compass—sharper than a sword, softer than a lotus, guiding authentic spiritual transformation...',
          readTime: '8 min'
        }
      ]
    },
    {
      title: 'Bodhisattva Path',
      description: 'The way of compassionate service and awakened living',
      icon: '🤲',
      articles: [
        { 
          title: 'The Social Practices of the Bodhisattva', 
          slug: 'social-practices-bodhisattva', 
          preview: 'Four fundamental practices that transform social interaction into spiritual cultivation: gift-giving, kind speech, beneficial conduct, and working together...',
          readTime: '5 min'
        },
        { 
          title: 'The Excellences of the Bodhisattva', 
          slug: 'excellences-bodhisattva', 
          preview: 'The path of the bodhisattva is marked by six excellences that resound through the three enlightenments—generosity, morality, tolerance, effort, contemplation, and wisdom...',
          readTime: '7 min'
        },
        { 
          title: 'The Bodhisattva\'s Freedom from Attachments', 
          slug: 'bodhisattva-freedom-attachments', 
          preview: 'The bodhisattva does not practice non-attachment by fleeing the world, but by moving through it with the weightlessness of wisdom—present to all, grasping nothing...',
          readTime: '6 min'
        }
      ]
    },
    {
      title: 'Religion',
      description: 'Comparative religion and the universal heart of all faiths',
      icon: '🙏',
      articles: [
        { 
          title: 'The Council of Nicaea: Seventeen Centuries of Christian Dominance', 
          slug: 'council-nicaea-christian-dominance', 
          preview: 'In 325 CE, a gathering of bishops forever changed the spiritual landscape of the West, creating the foundation for seventeen centuries of religious and political dominance...',
          readTime: '15 min'
        },
        { 
          title: 'The Inner Dimension of Islam: Sufism and the Path of the Heart', 
          slug: 'mystical-islam-sufism', 
          preview: 'Knock, and He\'ll open the door. Vanish, and He\'ll make you shine like the sun. Discover Islam\'s mystical heart that seeks direct experience of divine love...',
          readTime: '11 min'
        },
        { 
          title: 'Hindu Dharma and Vedanta: The Science of Self-Realization', 
          slug: 'hindu-dharma-vedanta', 
          preview: 'Tat tvam asi—Thou art That. Explore humanity\'s oldest continuous spiritual tradition and its ultimate realization that individual and universal consciousness are one...',
          readTime: '13 min'
        }
      ]
    },
    {
      title: 'Management',
      description: 'Wisdom-based leadership and conscious business practices',
      icon: '💼',
      articles: [
        { 
          title: 'The Mindful Executive: Drucker\'s Timeless Principles in the Age of Distraction', 
          slug: 'effective-executive-mindful-leadership', 
          preview: 'Peter Drucker understood that effectiveness is about working on the right things with the right attention. In our age of distraction, this requires contemplative practice...',
          readTime: '14 min'
        },
        { 
          title: 'The Meditative Mind: Revolutionizing Knowledge Work Through Contemplative Practice', 
          slug: 'meditation-knowledge-worker-productivity', 
          preview: 'Today\'s knowledge workers face unprecedented cognitive load. Meditation offers a radical alternative to fragmented consciousness—making work itself a form of applied mindfulness...',
          readTime: '13 min'
        },
        { 
          title: 'Beyond Efficiency: Drucker\'s Vision Meets Contemplative Leadership', 
          slug: 'drucker-management-contemplative-leadership', 
          preview: 'Drucker began a revolution by recognizing knowledge work required new approaches. Contemplative management completes his revolution by transforming consciousness itself...',
          readTime: '16 min'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 relative">
            <div className="relative rounded-lg overflow-hidden mb-8">
              <img 
                src={articlesHeaderImage} 
                alt="Ocean of Becoming - Representing the vast wisdom of articles" 
                className="w-full h-64 object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">
                    Articles & Insights
                  </h1>
                  <p className="text-xl max-w-2xl drop-shadow-md">
                    Explore timeless wisdom through carefully curated articles
                  </p>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Distilled insights from masters, mystics, and wisdom keepers across all traditions and ages.
            </p>
          </div>

          {/* Article Categories */}
          <div className="grid lg:grid-cols-2 gap-8">
            {articleCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-8">
                <div className="flex items-start mb-4">
                  <span className="text-4xl mr-4">{category.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {category.title}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Articles in this category */}
                {category.articles.length > 0 ? (
                  <div className="space-y-4">
                    {category.articles.map((article, articleIndex) => (
                      <div key={articleIndex} className="border-l-4 border-primary-200 pl-4">
                        <Link 
                          to={`/articles/${article.slug}`}
                          className="block hover:bg-gray-50 p-3 rounded transition-colors"
                        >
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-semibold text-gray-900 hover:text-primary-600 flex-1">
                              {article.title}
                            </h3>
                            {article.readTime && (
                              <span className="text-xs text-gray-500 ml-3">
                                {article.readTime}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            {article.preview}
                          </p>
                          <span className="text-sm text-primary-600 font-medium">
                            Read more →
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 bg-gray-50 rounded-lg">
                    <p className="text-gray-500">Articles coming soon...</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Seeking Deeper Wisdom?
            </h2>
            <p className="text-gray-600 mb-6">
              Beyond these articles, you can ask Sariputra direct questions and receive 
              personalized wisdom guidance drawn from all traditions.
            </p>
            <Link
              to="/ask"
              className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Ask a Question
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;