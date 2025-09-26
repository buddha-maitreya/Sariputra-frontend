import React from 'react';
import wonderland1 from '../../assets/images/wonderland1.jpg';

const ModernPhilosophyKeyFigures = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={wonderland1} 
          alt="Philosophical Wonderland" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
            Modern Philosophy: Key Figures and Their Revolutionary Contributions
          </h1>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 italic">
            "The owl of Minerva spreads its wings only with the falling of the dusk." Hegel's 
            observation about philosophy's tendency to understand periods only after they pass 
            reminds us that we are still processing the revolutionary insights of modern philosophy's 
            towering figures.
          </p>

          <h2>The German Idealist Revolution</h2>
          <p>
            <strong>Georg Wilhelm Friedrich Hegel</strong> (1770-1831) revolutionized philosophy 
            by proposing that reality itself is rational and developmental. His dialectical method—
            thesis, antithesis, synthesis—suggested that contradiction drives progress in thought, 
            history, and being itself. Hegel's insight that consciousness and reality co-evolve 
            through historical processes profoundly influenced subsequent philosophy, politics, 
            and social theory.
          </p>

          <p>
            <strong>Arthur Schopenhauer</strong> (1788-1860) challenged Enlightenment optimism 
            by arguing that reality is fundamentally will—a blind, irrational force that creates 
            suffering. His synthesis of Kantian philosophy with Eastern wisdom traditions offered 
            aesthetic contemplation and ethical compassion as escapes from will's tyranny. Schopenhauer's 
            pessimistic realism influenced artists, psychologists, and existentialist philosophers.
          </p>

          <h2>The Existentialist Awakening</h2>
          <p>
            <strong>Søren Kierkegaard</strong> (1813-1855) pioneered existentialist thinking by 
            emphasizing subjective experience over objective system-building. His analysis of 
            anxiety, despair, and the "leap of faith" required for authentic existence shifted 
            philosophy from abstract speculation to concrete human concerns. Kierkegaard's insight 
            that "existence precedes essence" became foundational for 20th-century existentialism.
          </p>

          <p>
            <strong>Friedrich Nietzsche</strong> (1844-1900) declared the "death of God" and 
            challenged all traditional values, calling for a "revaluation of all values." His 
            concepts of eternal recurrence, the will to power, and the Übermensch questioned 
            foundational assumptions about morality, truth, and human nature. Nietzsche's radical 
            individualism and critique of conventional morality continues to influence contemporary 
            philosophy, literature, and psychology.
          </p>

          <h2>Analytic Philosophy's Precision</h2>
          <p>
            <strong>Gottlob Frege</strong> (1848-1925) revolutionized logic and laid foundations 
            for analytic philosophy through his work on mathematical logic and philosophy of language. 
            His distinction between sense and reference and his logical analysis of language influenced 
            the entire analytic tradition.
          </p>

          <p>
            <strong>Ludwig Wittgenstein</strong> (1889-1951) transformed philosophy twice—first 
            with his <em>Tractus Logico-Philosophicus</em>, which claimed to solve all philosophical 
            problems by clarifying language, then with his later work showing that language gains 
            meaning through use in particular contexts or "language games." His insight that 
            philosophical problems often arise from misunderstanding language continues to influence 
            contemporary philosophy.
          </p>

          <h2>Phenomenology and Continental Philosophy</h2>
          <p>
            <strong>Edmund Husserl</strong> (1859-1938) founded phenomenology, the systematic study 
            of consciousness as experienced from the first-person perspective. His method of 
            phenomenological reduction—bracketing assumptions about the external world to study 
            pure consciousness—opened new pathways for understanding experience, knowledge, and 
            reality.
          </p>

          <p>
            <strong>Martin Heidegger</strong> (1889-1976) shifted philosophy from questions about 
            knowledge to questions about Being itself. His analysis of <em>Dasein</em> (being-there) 
            and his critique of Western philosophy's forgetfulness of Being influenced not only 
            philosophy but also psychology, literary criticism, and theology. Despite controversial 
            personal associations, his philosophical insights remain profoundly influential.
          </p>

          <h2>The Continuing Revolution</h2>
          <p>
            These philosophical giants dismantled traditional assumptions about reality, knowledge, 
            and human nature while opening unprecedented avenues for understanding. Their collective 
            impact created the intellectual conditions for contemporary developments in cognitive 
            science, psychology, political theory, and ethics.
          </p>

          <p>
            Modern philosophy's key insight may be that there are no final answers—only deeper 
            questions and more sophisticated ways of thinking about perennial human concerns. 
            Each major figure contributed unique perspectives that continue to enrich our understanding 
            of what it means to be conscious, rational, and ethical beings in a complex world.
          </p>
        </div>
      </article>
    </div>
  );
};

export default ModernPhilosophyKeyFigures;