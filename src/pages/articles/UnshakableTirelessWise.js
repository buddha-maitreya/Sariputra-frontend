import React from 'react';
import { Link } from 'react-router-dom';
import universaltrain1 from '../../assets/images/universaltrain1.jpg';

const UnshakableTirelessWise = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <img
          src={universaltrain1}
          alt="Unshakable, Tireless, and Wise: The Inner Refinement of the Advanced Seeker"
          className="w-full h-64 object-cover rounded-lg shadow-lg mb-2"
        />
        <p className="text-xs text-gray-500 text-center mb-8 italic">
          Image created by Fukina - AI Image Generation
        </p>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Unshakable, Tireless, and Wise: The Inner Refinement of the Advanced Seeker
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          The three qualities that distinguish those who walk the path of universal service
        </p>
      </div>

      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        <p className="text-xl mb-12 text-gray-600 italic leading-relaxed font-light">
          The advanced seeker does not tremble before adversity. She is not shaken by the whisperings of false friends, the agony of worldly pain, or even the terrifying depth of the most profound truths.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-800">Unshakable Presence</h2>
        <p className="mb-10 leading-relaxed">
          Just as Mount Sumeru stands firm before the fluttering of butterflies, the winds of wings, or the roaring sea, her courage is unwavering. This firmness is not born of indifference—it is the fruit of spiritual clarity, a mind no longer disturbed by discouragement, distraction, or delusion.
        </p>

        <p className="mb-10 leading-relaxed">
          At the core of this strength lies a peerless power: indefatigability. The dedicated seeker's energy does not wane. She thirsts endlessly for liberating knowledge, labors tirelessly for the welfare of others, and endures the sorrows of the world with unfathomable tolerance. Why? Because her roots are deep in conscience, and her limbs are lifted by courage. This unwavering dedication connects with <Link to="/articles/inner-guru-wisdom" className="text-blue-600 hover:text-blue-800 underline">the cultivation of inner guidance</Link>.
        </p>

        <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-8 rounded-lg mb-10 border-l-4 border-purple-500">
          <p className="text-lg font-medium text-gray-800 leading-relaxed">
            "True stability comes not from avoiding challenges, but from developing a center so strong that external storms cannot shake our essential peace."
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-800">Tireless Energy</h2>
        <p className="mb-10 leading-relaxed">
          She feels inner shame at the thought of spiritual fatigue. Even the first signs of weariness spark a holy fire within her to reawaken her vow. Thus, her zeal for awakening becomes a ceaseless wind propelling her through countless seasons of practice.
        </p>

        <p className="mb-10 leading-relaxed">
          This relentless momentum is not aimless striving. It is directed by precise and noble intelligence. The great seekers possess a vast mastery of the five great sciences: the science of mind, of logic, of language, of healing, and of the arts. This comprehensive approach to learning resonates with <Link to="/articles/soul-purpose" className="text-blue-600 hover:text-blue-800 underline">the pursuit of one's highest calling</Link>.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-800">Noble Intelligence</h2>
        <p className="mb-10 leading-relaxed">
          They do not study merely to be learned—they study to serve. The first science allows them to stabilize their minds and teach others to do the same. The second enables them to discern errors and lovingly dismantle false views. The third makes their words eloquent, accessible, and illuminating. The fourth brings healing to body and mind. The fifth allows them to shape the world—through music, craft, ritual, and design—in ways that uplift and awaken.
        </p>

        <p className="mb-10 leading-relaxed">
          This knowledge is inexhaustible because it is rooted not in ego but in the infinite intention of awakening. It is preserved in the storehouse of deep concentration and memory, accessed through the practices of retention. Through this wisdom, they guide the world forward—not only in conduct but in consciousness. This integration of wisdom and action is central to <Link to="/articles/compassion-action" className="text-blue-600 hover:text-blue-800 underline">embodying compassionate service</Link>.
        </p>

        <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-8 rounded-lg mb-10 border-l-4 border-emerald-500">
          <p className="text-lg font-medium text-gray-800 leading-relaxed">
            They plant seeds of evolution wherever they walk, ensuring that the sacred teachings do not wither with time.
          </p>
        </div>

        <p className="mb-10 leading-relaxed">
          The mastery of these sciences creates practitioners who are not only spiritually realized but practically effective. They can meet people where they are—whether in intellectual inquiry, emotional healing, creative expression, or direct contemplative experience. This versatility serves the ultimate goal of awakening all beings, each according to their nature and needs. Such skilled means are explored in <Link to="/articles/mindfulness-modern-life" className="text-blue-600 hover:text-blue-800 underline">applying ancient wisdom to contemporary challenges</Link>.
        </p>

        <div className="bg-gradient-to-r from-amber-100 to-yellow-100 p-8 rounded-lg mb-10 border-l-4 border-amber-500">
          <p className="text-lg font-medium text-gray-800 leading-relaxed">
            To walk the path of the advanced seeker, then, is to live as an unshakable mountain, an unfailing flame, and a vast sea of knowing. This is the nobility of those who refuse to stop until all beings are free.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnshakableTirelessWise;