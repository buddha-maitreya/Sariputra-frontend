import React from 'react';
import universaltrain7 from '../../assets/images/universaltrain7.jpg';

const HinduDharmaVedanta = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={universaltrain7} 
          alt="Vedantic Wisdom" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
            Hindu Dharma and Vedanta: The Science of Self-Realization
          </h1>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 italic">
            "Tat tvam asi"—"Thou art That." This mahavakya (great saying) from the Upanishads 
            points to Hinduism's ultimate realization: the individual soul (Atman) and universal 
            consciousness (Brahman) are one indivisible reality. This understanding forms the 
            foundation of humanity's oldest continuous spiritual tradition.
          </p>

          <p>
            Hindu dharma encompasses not a single religion but a vast family of spiritual 
            paths united by certain core insights: the law of karma, the reality of reincarnation, 
            the diversity of spiritual temperaments, and the ultimate goal of moksha—liberation 
            from the cycle of birth and death through the realization of one's true nature 
            as pure consciousness.
          </p>

          <p>
            The genius of Hindu spirituality lies in its recognition that different individuals 
            require different approaches to the same ultimate truth. The tradition offers four 
            main yogas or paths: karma yoga (the path of selfless action), bhakti yoga (the 
            path of devotional love), raja yoga (the path of meditation and mental discipline), 
            and jnana yoga (the path of knowledge and self-inquiry). Each validates a different 
            human temperament while leading to the same destination.
          </p>

          <p>
            Vedanta, literally meaning "end of the Vedas," represents the philosophical culmination 
            of Hindu thought. Its central teaching is that Brahman—pure, undifferentiated 
            consciousness—is the only reality, and that the apparently separate world and 
            individual selves are maya (illusion) or lila (divine play) of this one consciousness. 
            This doesn't deny the practical reality of the world but places it in proper perspective 
            as appearance within absolute being-consciousness-bliss (sat-chit-ananda).
          </p>

          <p>
            The practice of self-inquiry (atma vichara), developed by sages like Ramana Maharshi, 
            represents Vedanta's most direct approach to realization. By persistently asking 
            "Who am I?" and rejecting identification with body, mind, and personality, the 
            seeker discovers their true nature as the eternal witness-consciousness that remains 
            unchanged through all experience. This isn't philosophical speculation but practical 
            investigation leading to direct recognition.
          </p>

          <p>
            Hindu dharma's concept of spiritual evolution through multiple lifetimes offers 
            a long-term perspective on human development rarely found in other traditions. 
            The soul (jiva) progresses through countless births, gradually purifying its 
            karma and developing spiritual understanding until it realizes its fundamental 
            identity with Brahman. This understanding promotes both patience with one's current 
            limitations and confidence in ultimate spiritual destiny.
          </p>

          <p>
            The tradition's reverence for the guru-disciple relationship recognizes that 
            self-realization, while ultimately an inner discovery, typically requires guidance 
            from one who has already made this journey. The guru serves not as an object of 
            worship but as a transparent conduit for the teaching, embodying the truth that 
            the disciple seeks to realize. This relationship accelerates spiritual development 
            while protecting against the ego's subtle deceptions.
          </p>

          <p>
            Contemporary Vedanta continues to offer profound insights for modern seekers. Its 
            non-dualistic philosophy provides a framework for understanding consciousness that 
            complements rather than conflicts with scientific investigation. Its practical 
            approaches to meditation, ethical living, and self-inquiry offer tested methods 
            for spiritual development. Most importantly, its recognition that all beings are 
            essentially divine provides the foundation for a truly inclusive and compassionate 
            approach to human relationship and environmental stewardship.
          </p>
        </div>
      </article>
    </div>
  );
};

export default HinduDharmaVedanta;