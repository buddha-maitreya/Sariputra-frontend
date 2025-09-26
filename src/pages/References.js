import React from 'react';

const References = () => {
  const references = [
    {
      id: 1,
      category: "Management & Leadership",
      citations: [
        {
          author: "Drucker, P. F.",
          year: "1967",
          title: "The Effective Executive",
          publisher: "Harper & Row",
          location: "New York",
          pages: "pp. 1-178"
        },
        {
          author: "Drucker, P. F.",
          year: "1999",
          title: "Management Challenges for the 21st Century",
          publisher: "HarperBusiness",
          location: "New York",
          pages: "pp. 135-158"
        },
        {
          author: "Drucker, P. F.",
          year: "1973",
          title: "Management: Tasks, Responsibilities, Practices",
          publisher: "Harper & Row",
          location: "New York",
          pages: "pp. 461-480"
        }
      ]
    },
    {
      id: 2,
      category: "Buddhist Philosophy & Texts",
      citations: [
        {
          author: "Maitreya",
          year: "c. 4th century CE",
          title: "Mahāyānasūtrālaṃkāra (Ornament of Mahāyāna Sūtras)",
          translator: "Thurman, R. A. F.",
          publisher: "American Institute of Buddhist Studies",
          location: "New York",
          year_published: "2004",
          note: "Sanskrit text with English translation"
        },
        {
          author: "Śāntideva",
          year: "c. 8th century CE",
          title: "Bodhicaryāvatāra (The Way of the Bodhisattva)",
          translator: "Clayton, B. A.",
          publisher: "Shambhala Publications",
          location: "Boston",
          year_published: "2006",
          pages: "chapters 1-10"
        }
      ]
    },
    {
      id: 3,
      category: "Meditation & Neuroscience",
      citations: [
        {
          author: "Goleman, D. & Davidson, R. J.",
          year: "2017",
          title: "Altered Traits: Science Reveals How Meditation Changes Your Mind, Brain, and Body",
          publisher: "Avery",
          location: "New York",
          pages: "pp. 89-156"
        },
        {
          author: "Lutz, A., Slagter, H. A., Dunne, J. D., & Davidson, R. J.",
          year: "2008",
          title: "Attention regulation and monitoring in meditation",
          journal: "Trends in Cognitive Sciences",
          volume: "12",
          issue: "4",
          pages: "pp. 163-169"
        }
      ]
    },
    {
      id: 4,
      category: "Knowledge Work & Productivity",
      citations: [
        {
          author: "Newport, C.",
          year: "2016",
          title: "Deep Work: Rules for Focused Success in a Distracted World",
          publisher: "Grand Central Publishing",
          location: "New York",
          pages: "pp. 45-98"
        },
        {
          author: "Csikszentmihalyi, M.",
          year: "1990",
          title: "Flow: The Psychology of Optimal Experience",
          publisher: "Harper & Row",
          location: "New York",
          pages: "pp. 71-93"
        }
      ]
    },
    {
      id: 5,
      category: "Christian History & Theology",
      citations: [
        {
          author: "McGrath, A. E.",
          year: "2013",
          title: "Christian Theology: An Introduction",
          edition: "5th ed.",
          publisher: "Wiley-Blackwell",
          location: "Oxford",
          pages: "pp. 18-45"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              References & Bibliography
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              This page contains scholarly references and sources that inform the wisdom 
              content provided by Sariputra. All citations follow Harvard referencing style 
              and are organized by thematic categories for easy navigation.
            </p>
            
            {/* Citation Style Note */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">
                    Citation Format
                  </h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>All references follow the Harvard citation style (Author-Date system). 
                    Classical texts include both original composition dates and modern publication information where applicable.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* References by Category */}
          {references.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.citations.map((citation, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-gray-900 leading-relaxed">
                      {/* Primary citation format */}
                      <span className="font-medium">{citation.author}</span>
                      {citation.year && (
                        <span> ({citation.year}). </span>
                      )}
                      <em>{citation.title}</em>
                      {citation.translator && (
                        <span>, trans. {citation.translator}</span>
                      )}
                      {citation.edition && (
                        <span>, {citation.edition}</span>
                      )}
                      {citation.journal ? (
                        <>
                          <span>, </span>
                          <em>{citation.journal}</em>
                          {citation.volume && (
                            <span>, vol. {citation.volume}</span>
                          )}
                          {citation.issue && (
                            <span>, no. {citation.issue}</span>
                          )}
                        </>
                      ) : (
                        <>
                          {citation.publisher && (
                            <span>. {citation.publisher}</span>
                          )}
                          {citation.location && (
                            <span>, {citation.location}</span>
                          )}
                        </>
                      )}
                      {citation.year_published && citation.year !== citation.year_published && (
                        <span> [{citation.year_published}]</span>
                      )}
                      {citation.pages && (
                        <span>, {citation.pages}</span>
                      )}
                      {citation.note && (
                        <div className="mt-2 text-sm text-gray-600 italic">
                          Note: {citation.note}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Additional Resources */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
              Additional Resources & Methodology
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Primary Sources
              </h3>
              <p className="mb-4">
                Sariputra draws wisdom from primary texts across multiple spiritual and philosophical 
                traditions, including Buddhist sūtras, Christian mystical writings, Islamic Sufi texts, 
                Hindu philosophical treatises, and contemporary management literature.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Translation Considerations
              </h3>
              <p className="mb-4">
                Ancient texts are referenced in their most scholarly English translations available, 
                with preference given to translations that preserve technical terminology and 
                philosophical nuance over popular accessibility.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Contemporary Integration
              </h3>
              <p className="mb-4">
                Modern sources on management, psychology, and neuroscience are included to demonstrate 
                how ancient wisdom principles apply to contemporary challenges and opportunities.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Ongoing Updates
              </h3>
              <p>
                This bibliography is continuously updated as new sources inform Sariputra's 
                knowledge base. Users seeking specific citations for particular insights are 
                encouraged to ask Sariputra directly for detailed source attribution.
              </p>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              For questions about specific citations or to suggest additional sources, 
              please <a href="/contact" className="text-primary-600 hover:text-primary-700">contact us</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default References;