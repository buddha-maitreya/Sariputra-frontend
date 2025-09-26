import React from 'react';
import baseballwoman from '../../assets/images/baseballwoman.jpg';

const SacredFeminineWisdom = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={baseballwoman} 
          alt="Sacred Feminine Wisdom" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
            Reclaiming the Sacred Feminine: Wisdom for Healing and Wholeness
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
            "The future depends on the recovery of the sacred feminine." This insight, 
            echoing across traditions from indigenous wisdom keepers to contemporary 
            mystics, points to humanity's urgent need to rebalance masculine and feminine 
            principles within ourselves and our world.
          </p>

          <p>
            The sacred feminine represents not gender but a universal principle of being—
            the receptive, intuitive, nurturing, and cyclical aspects of existence that 
            complement the linear, analytical, and goal-oriented masculine principle. 
            Both men and women contain these energies, and spiritual wholeness requires 
            their integration rather than the dominance of one over the other.
          </p>

          <p>
            Throughout history, patriarchal cultures have systematically devalued feminine 
            wisdom—intuition dismissed as irrational, emotional intelligence marginalized 
            in favor of analytical thinking, and collaborative approaches subordinated to 
            competitive hierarchies. This imbalance has created not only social injustice 
            but a profound spiritual crisis, separating us from earth-centered wisdom, 
            cyclical understanding, and the deep knowing that emerges from receptive 
            awareness.
          </p>

          <p>
            The sacred feminine teaches us to honor the wisdom of our bodies—the intelligence 
            of instinct, the guidance of feeling, and the deep knowing that arises from 
            embodied experience. Where masculine consciousness seeks to transcend the 
            material world, feminine wisdom finds the sacred within it, recognizing earth, 
            body, and matter itself as expressions of divine consciousness rather than 
            obstacles to overcome.
          </p>

          <p>
            Central to feminine spirituality is the understanding of life as cyclical 
            rather than linear. Just as nature moves through seasons of birth, growth, 
            death, and renewal, human consciousness develops through similar rhythms. 
            The feminine principle honors these natural cycles, finding wisdom in times 
            of apparent dormancy and recognizing that periods of receptivity and rest 
            are as spiritually valuable as active achievement.
          </p>

          <p>
            The sacred feminine also emphasizes relational consciousness—understanding 
            that we exist within webs of connection rather than as isolated individuals. 
            This perspective naturally gives rise to ethics of care, environmental 
            awareness, and concern for future generations. Feminine wisdom asks not 
            "What can I achieve?" but "How can we thrive together?" and "What legacy 
            are we creating for those who follow?"
          </p>

          <p>
            In contemplative practice, the feminine principle manifests as receptive 
            awareness—the capacity to be present without agenda, to listen deeply, and 
            to allow truth to emerge rather than forcing insights through intellectual 
            effort. This receptivity is not passive but actively attentive, creating 
            space for wisdom to arise from the depths of being rather than the surface 
            of thinking.
          </p>

          <p>
            Reclaiming the sacred feminine doesn't mean rejecting masculine qualities 
            but integrating both principles in dynamic balance. The awakened masculine 
            provides clear direction and purposeful action, while the sacred feminine 
            offers intuitive wisdom and compassionate response. Together, they create 
            the wholeness our world desperately needs—a spirituality that is both 
            transcendent and embodied, both visionary and practical, both individual 
            and collective in its concern for all life.
          </p>
        </div>
      </article>
    </div>
  );
};

export default SacredFeminineWisdom;