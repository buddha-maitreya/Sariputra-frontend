import React from 'react';
import { Link } from 'react-router-dom';
import beam1 from '../../assets/images/beam1.jpg';

const FiveFoundationsRealization = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <img
          src={beam1}
          alt="The Five Foundations of Realization"
          className="w-full h-64 object-cover rounded-lg shadow-lg mb-2"
        />
        <p className="text-xs text-gray-500 text-center mb-8 italic">
          Image created by Fukina - AI Image Generation
        </p>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          The Five Foundations of Realization
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Understanding the five essential pillars that support authentic spiritual awakening
        </p>
      </div>

      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        <p className="text-xl mb-8 text-gray-600 italic">
          Realization is not a sudden lightning strike. It is a weaving of five strands—conditions, a conscientious heart, aspiration, liberative skill, and mastery—each strengthening the others until the whole becomes unbreakable.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-800">The Foundation of Conditions</h2>
        <p className="mb-10 leading-relaxed">
          Conditions are the soil from which realization grows. Some are planted long before this moment—in the deep seed of spiritual potential, in the commitments made across time, in the careful shaping of a body and mind able to bear the path. Others are nourished in the present, as discernment refines the rough stone of intention into the clear jewel of wisdom.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-800">The Heart of Conscientiousness</h2>
        <p className="mb-10 leading-relaxed">
          Conscientiousness is the inner guardian that refuses to let the treasures of the path be forgotten. It is faith that trusts the truth even before proof appears. It is gratitude for the virtues already grown, joy at the goodness found in others, and delight in the excellence yet to come. With such a heart, no act of kindness goes unnoticed, no noble quality is taken for granted. This quality of inner vigilance is explored further in our discussion of <Link to="/articles/conscience-of-brave" className="text-blue-600 hover:text-blue-800 underline">the conscience of the brave</Link>.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-800">The Wind of Aspiration</h2>
        <p className="mb-10 leading-relaxed">
          Aspiration is the wind that keeps the seeker moving. It can be unwavering, refusing to rest while suffering exists. It can be expansive, embracing the whole of existence without exhaustion. It can be joyous, taking more happiness in giving than in receiving. It can be helpful, recognizing that those served are the very reason awakening is possible. It can be pure, asking nothing in return. And it can be noble, rejoicing in the growth of others as if it were one's own.
        </p>

        <p className="mb-10 leading-relaxed">
          This boundless aspiration finds expression in many forms, from <Link to="/articles/six-bridges-beyond-shore" className="text-blue-600 hover:text-blue-800 underline">the six transformative practices</Link> to <Link to="/articles/mindfulness-modern-life" className="text-blue-600 hover:text-blue-800 underline">mindful engagement with daily life</Link>.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-800">The Art of Liberative Skill</h2>
        <p className="mb-10 leading-relaxed">
          Liberative skill is the art of action without the weight of self. The giver, the gift, and the receiver are seen as waves on the same ocean, rising and falling without separation. In this clarity, generosity and all the other virtues become effortless, free from pride or expectation.
        </p>

        <p className="mb-10 leading-relaxed">
          This wisdom of selfless action resonates with teachings found in diverse traditions, from <Link to="/articles/lao-tzu-wu-wei" className="text-blue-600 hover:text-blue-800 underline">Taoist wu wei</Link> to <Link to="/articles/unshakable-tireless-wise" className="text-blue-600 hover:text-blue-800 underline">the refined qualities of advanced seekers</Link>.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-800">The Flowering of Mastery</h2>
        <p className="mb-10 leading-relaxed">
          Mastery is the flowering of realization. It appears as a being aligned with truth, conduct that meets each person exactly where they are, and guidance that cannot be resisted because it speaks directly to the heart. Such mastery is not domination—it is the natural authority of one who has become the path itself.
        </p>

        <p className="text-lg mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-500 shadow-sm leading-relaxed">
          When these five foundations are alive, realization ceases to be an abstract goal. It becomes the living pulse of each step, each word, each breath—a way of being that draws the world forward into its own awakening.
        </p>
      </div>
    </div>
  );
};

export default FiveFoundationsRealization;